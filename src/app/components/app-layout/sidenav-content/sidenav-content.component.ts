import {
  Directive,
  Component,
  ViewEncapsulation,
  ChangeDetectionStrategy,
  ViewChild,
  TemplateRef,
  ViewContainerRef,
  OnInit
} from '@angular/core';
import { TemplatePortal } from '@angular/cdk/portal';

@Component({
  selector: 'ffdc-sidenav-content',
  templateUrl: 'sidenav-content.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None
})
export class SidenavContentComponent implements OnInit {
  @ViewChild(TemplateRef, { static: true }) implicitContent!: TemplateRef<any>;

  private contentPortal: TemplatePortal | null = null;

  get content(): TemplatePortal | null {
    return this.contentPortal;
  }

  constructor(private viewContainerRef: ViewContainerRef) {}

  ngOnInit(): void {
    this.contentPortal = new TemplatePortal(this.implicitContent, this.viewContainerRef);
  }
}
