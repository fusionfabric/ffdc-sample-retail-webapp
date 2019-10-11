import {
  Component,
  OnInit,
  ViewEncapsulation,
  ChangeDetectionStrategy,
  Input,
  ViewChild,
  ElementRef,
  AfterViewInit,
  TemplateRef,
  ViewContainerRef
} from '@angular/core';
import { Template } from '@angular/compiler/src/render3/r3_ast';
import { TemplatePortal } from '@angular/cdk/portal';

@Component({
  selector: 'ffdc-navbar-action-item',
  templateUrl: './navbar-action-item.component.html',
  styleUrls: ['./navbar-action-item.component.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NavbarActionItemComponent implements OnInit, AfterViewInit {
  @Input() icon!: string;
  @Input() title!: string;

  @ViewChild('menuItem', { static: true }) menuItemTemplate!: TemplateRef<any>;
  @ViewChild('actionItem', { static: true }) actionItemTemplate!: TemplateRef<any>;



  hasContent = false;

  constructor() {}

  ngOnInit() {}

  ngAfterViewInit() {
  }
}
