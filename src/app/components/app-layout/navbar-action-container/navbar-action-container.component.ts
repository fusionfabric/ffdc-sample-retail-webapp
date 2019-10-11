import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  ViewEncapsulation,
  ContentChildren,
  QueryList,
  ChangeDetectorRef,
  AfterContentInit,
  OnDestroy,
  ViewContainerRef
} from '@angular/core';
import { NavbarActionItemComponent } from '../navbar-action-item/navbar-action-item.component';
import { BreakpointObserver, Breakpoints, BreakpointState } from '@angular/cdk/layout';
import { Subject, combineLatest } from 'rxjs';
import { startWith, takeUntil } from 'rxjs/operators';

@Component({
  selector: 'ffdc-navbar-action-container',
  templateUrl: './navbar-action-container.component.html',
  styleUrls: ['./navbar-action-container.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
  host: {
    class: 'navbar-action-container'
  }
})
export class NavbarActionContainerComponent implements OnInit, AfterContentInit, OnDestroy {
  @ContentChildren(NavbarActionItemComponent) items!: QueryList<NavbarActionItemComponent>;

  actionItems?: QueryList<NavbarActionItemComponent>;
  actionMenuItems?: QueryList<NavbarActionItemComponent>;

  handsetLayout = false;

  private destroyed$ = new Subject<void>();

  constructor(private breakpointObserver: BreakpointObserver, private cd: ChangeDetectorRef, private viewContainerRef: ViewContainerRef) {

  }

  ngOnInit() {}

  ngOnDestroy() {
    this.destroyed$.next();
    this.destroyed$.complete();
  }

  ngAfterContentInit() {
    combineLatest(
      this.breakpointObserver.observe([Breakpoints.Handset]),
      this.items.changes
      .pipe(
        startWith(this.items))
    ).pipe(takeUntil(this.destroyed$)).subscribe(([breakPoint, items]) => {
      if (breakPoint.matches) {
        this.actionItems = undefined;
        this.actionMenuItems = items;
      } else {
        this.actionItems = items;
        this.actionMenuItems = undefined;
      }
      this.cd.markForCheck();
    });
  }
}
