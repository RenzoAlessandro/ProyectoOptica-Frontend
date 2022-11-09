import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  // set the currenr year
  year: number = new Date().getFullYear();

  selectValue = [];
  selectedValue = '';
  stateValue = [];


  constructor() { }

  ngOnInit(): void {
    document.body.classList.add('authentication-bg')
    document.body.removeAttribute('data-topbar');

    this.selectValue = ['Afghanistan', 'Albania', 'Algeria', 'American Samoa', 'Andorra', 'Angola',
    'Anguilla', 'Antarctica', 'Argentina', 'Hawaii', 'California', 'Colombia', 'Congo', 'Dominica', 'Denmark', 'Nevada', 'Oregon',
    'Washington', 'Ecuador', 'Idaho', 'Montana', 'Namibia', 'Nauru', 'Nepal', 'Netherlands', 'Nicaragua', 'New Caledonia', 'North Dakota',
    'Tonga', 'Tunisia', 'Thailand', 'Turkey', 'Illinois', 'Tuvalu', 'Uganda', 'Uruguay', 'United Arab Emirates', 'United Kingdom', 'Venezuela', 'Zimbabwe',
    'Uruguay'];

    this.selectedValue = this.selectValue[0];

    this.stateValue = ['Alabama', 'Alaska', 'Arizona', 'Arkansas', 'California', 'Colorado', 'Delaware', 'Florida', 'Georgia', 'Hawaii', 'Montana', 'Nevada', 'New Mexico', 'New York', 'North Dakota', 'Texas', 'Virginia', 'Wisconsin', 'Wyoming']

  }

}
