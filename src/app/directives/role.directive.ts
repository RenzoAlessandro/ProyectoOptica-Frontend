import { Directive, Input, OnChanges, OnInit, TemplateRef, ViewContainerRef } from '@angular/core';
import { UsuarioService } from '../services/usuario.service';


@Directive({
  selector: '[appRole]'
})
export class RoleDirective implements OnInit {
  
  private role : string;
  private permissions: string;
  constructor(
    private templateRef: TemplateRef<any>,
    private viewContainer: ViewContainerRef,
    private userService: UsuarioService
  ) { }
  ngOnInit(): void {
    this.role = this.userService.getRole();
    this.updateView();
  }

  @Input() set appRole(val: string) {
    this.viewContainer.createEmbeddedView(this.templateRef);
    this.permissions = val;
    this.updateView();
  }

  private updateView(): void {
    this.viewContainer.clear();
    
    if(this.checkPermissions()) {
      this.viewContainer.createEmbeddedView(this.templateRef)
    }

  }
  private checkPermissions(): boolean {
    let hasPermission = false;
    if (this.role == this.permissions) {
      console.log("si tienes permiso")
      hasPermission = true;
    }
    return hasPermission;
  }
}
