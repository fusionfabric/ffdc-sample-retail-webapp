import {
  Directive,
  TemplateRef,
  ViewContainerRef,
  Component,
  ChangeDetectionStrategy,
  ViewEncapsulation,
  OnInit,
  ViewChild,
  Input
} from '@angular/core';
import { TemplatePortal } from '@angular/cdk/portal';

@Component({
  selector: 'ffdc-navbar-content',
  templateUrl: 'navbar-content.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None
})
export class NavbarContentComponent implements OnInit {
  @ViewChild(TemplateRef, {static: true}) implicitContent!: TemplateRef<any>;

  @Input() outlined = false;

  private contentPortal: TemplatePortal | null = null;

  get content(): TemplatePortal | null {
    return this.contentPortal;
  }

  constructor(private viewContainerRef: ViewContainerRef) {}

  ngOnInit(): void {
    this.contentPortal = new TemplatePortal(this.implicitContent, this.viewContainerRef);
  }
}
