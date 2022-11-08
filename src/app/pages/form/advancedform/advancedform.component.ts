import { Component, OnInit, ViewChild, EventEmitter, Output, Input } from '@angular/core';
import { FlatpickrOptions } from 'ng2-flatpickr';
import { NgbDate, NgbCalendar, NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-advancedform',
  templateUrl: './advancedform.component.html',
  styleUrls: ['./advancedform.component.scss']
})

/**
 * Form advanced form
 */
export class AdvancedformComponent implements OnInit {
  // bread crumb items
  breadCrumbItems: Array<{}>;
  constructor(private calendar: NgbCalendar) { }


  inlinedate = 'Thu Dec 16 2021 00:00:00 GMT+0530';

  datePickerOption: FlatpickrOptions = {
    dateFormat: "Y-m-dTH:i"
  }

  humanFriendlyOption: FlatpickrOptions = {
    altInput: true,
    convertModelValue: true,
  }
  date1 = new Date(new Date().setDate(new Date().getDate() + 2));
  date2 = new Date(new Date().setDate(new Date().getDate() + 4));
  disabledOption: FlatpickrOptions = {
    disable: [this.date1, this.date2]
  }

  multipleOption: FlatpickrOptions = {
    mode: 'multiple',
  }

  modeOption: FlatpickrOptions = {
    mode: 'range',
  }

  timepickerOption: FlatpickrOptions = {
    enableTime: true,
    noCalendar: true,
    dateFormat: 'H:i'
  }

  inlineOption: FlatpickrOptions = {
    inline: true,
    wrap: false,
    onChange: function (e) {
      console.log(e);
      this.inlinedate = e;
    }

  }

  // Component colorpicker
  componentcolor: string;
  rgbcolor: string;
  color: string;
  presetcolor: string;
  inlinecolor: string;

  hoveredDate: NgbDate;
  fromNGDate: NgbDate;
  toNGDate: NgbDate;

  hidden: boolean;
  selected: any;

  model: NgbDateStruct;
  date: { year: number, month: number };
  // Select2 Dropdown
  selectValue: string[];

  @Input() fromDate: Date;
  @Input() toDate: Date;
  @Output() dateRangeSelected: EventEmitter<{}> = new EventEmitter();

  @ViewChild('dp', { static: true }) datePicker: any;

  ngOnInit() {
    this.breadCrumbItems = [{ label: 'Forms' }, { label: 'Advanced', active: true }];
    // Component color value of color picker
    this.componentcolor = '#3bafda';
    this.presetcolor = '#2889e9';
    this.rgbcolor = 'rgba(0, 194, 255, 0.78)';
    this.inlinecolor = '#400e12';
    this.color = '#8FFF00';

    // Select dropdown value
    // tslint:disable-next-line: max-line-length
    this.selectValue = ['Alaska', 'Hawaii', 'California', 'Nevada', 'Oregon', 'Washington', 'Arizona', 'Colorado', 'Idaho', 'Montana', 'Nebraska', 'New Mexico', 'North Dakota', 'Utah', 'Wyoming', 'Alabama', 'Arkansas', 'Illinois', 'Iowa'];

    this.selected = '';
    this.hidden = true;
  }

  /**
   * on date selected
   * @param date date object
   */
  onDateSelection(date: NgbDate) {
    if (!this.fromDate && !this.toDate) {
      this.fromNGDate = date;
      this.fromDate = new Date(date.year, date.month - 1, date.day);
      this.selected = '';
    } else if (this.fromDate && !this.toDate && date.after(this.fromNGDate)) {
      this.toNGDate = date;
      this.toDate = new Date(date.year, date.month - 1, date.day);
      this.hidden = true;
      this.selected = this.fromDate.toLocaleDateString() + '-' + this.toDate.toLocaleDateString();

      this.dateRangeSelected.emit({ fromDate: this.fromDate, toDate: this.toDate });

      this.fromDate = null;
      this.toDate = null;
      this.fromNGDate = null;
      this.toNGDate = null;

    } else {
      this.fromNGDate = date;
      this.fromDate = new Date(date.year, date.month - 1, date.day);
      this.selected = '';
    }
  }
  /**
   * Is hovered over date
   * @param date date obj
   */
  isHovered(date: NgbDate) {
    return this.fromNGDate && !this.toNGDate && this.hoveredDate && date.after(this.fromNGDate) && date.before(this.hoveredDate);
  }

  /**
   * @param date date obj
   */
  isInside(date: NgbDate) {
    return date.after(this.fromNGDate) && date.before(this.toNGDate);
  }

  /**
   * @param date date obj
   */
  isRange(date: NgbDate) {
    return date.equals(this.fromNGDate) || date.equals(this.toNGDate) || this.isInside(date) || this.isHovered(date);
  }

  /**
   * Select the today
   */
  selectToday() {
    this.model = this.calendar.getToday();
  }
}
