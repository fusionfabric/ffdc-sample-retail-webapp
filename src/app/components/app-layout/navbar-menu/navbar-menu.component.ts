import {
  Component,
  OnInit,
  Input,
  OnChanges,
  SimpleChanges,
  ViewEncapsulation,
  ChangeDetectionStrategy,
  ChangeDetectorRef
} from '@angular/core';
import { NavigationNode } from '../navigation-node';
import { Router } from '@angular/router';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';

@Component({
  selector: 'ffdc-navbar-menu',
  templateUrl: './navbar-menu.component.html',
  styleUrls: ['./navbar-menu.component.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    class: 'navbar-menu'
  }
})
export class NavbarMenuComponent implements OnInit, OnChanges {
  @Input() navigationNodes: NavigationNode[] | undefined;
  @Input() displayMode: 'breadcrumb' | 'default' = 'breadcrumb';

  /*
   * Only applicable in default mode, this value specifies selected item index in navigationNodes array.
   * In breadcrumb mode, selectedIndex always is the lasted item in navigationNodes array.
   */
  @Input() selectedIndex = -1;

  lastNagivationNodeChildren: NavigationNode[] | undefined;
  canGoBack = false;
  activeNode: NavigationNode | undefined;
  handsetLayout = false;

  private lastActivatedUrl: string | undefined;

  constructor(private router: Router, private breakpointObserver: BreakpointObserver, private cd: ChangeDetectorRef) {
    breakpointObserver.observe([Breakpoints.Handset]).subscribe(result => {
      if (result.matches && this.handsetLayout === false) {
        this.handsetLayout = true;
        this.cd.markForCheck();
      } else if (this.handsetLayout === true) {
        this.handsetLayout = false;
        this.cd.markForCheck();
      }
    });
  }

  ngOnInit() {}

  ngOnChanges(changes: SimpleChanges) {
    this.updateState();
  }

  goBack() {
    if (this.lastActivatedUrl) {
      const previousUrl = this.lastActivatedUrl;
      this.lastActivatedUrl = undefined;
      this.router.navigateByUrl(previousUrl);
    } else {
      const parentNode = this.getParentActiveNode();
      if (parentNode && parentNode.url) {
        // TODO: Should find the nearest node which has url value.
        this.router.navigateByUrl(parentNode.url);
      }
    }
  }

  getParentActiveNode(): NavigationNode | undefined {
    if (this.navigationNodes && this.navigationNodes.length > 1) {
      return this.navigationNodes[this.navigationNodes.length - 2];
    }
    return undefined;
  }

  private updateState() {
    if (this.displayMode === 'breadcrumb') {
      this.activeNode =
        this.navigationNodes && this.navigationNodes.length > 0 ? this.navigationNodes[this.navigationNodes.length - 1] : undefined;
      this.canGoBack = this.activeNode ? !!this.activeNode.canGoBack : false;
      this.lastActivatedUrl = this.activeNode ? this.activeNode.url : this.lastActivatedUrl;
      const parentActiveNode = this.getParentActiveNode();
      this.lastNagivationNodeChildren =
        parentActiveNode && parentActiveNode.showOtherChildren ? parentActiveNode.children : undefined;
    }
  }
}
