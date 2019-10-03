import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';
import { NavigationNode } from '../navigation-node';
import { Router } from '@angular/router';

@Component({
  selector: 'ffdc-navbar-menu',
  templateUrl: './navbar-menu.component.html',
  styleUrls: ['./navbar-menu.component.scss']
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

  private lastActivatedUrl: string | undefined;

  constructor(private router: Router) {}

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
      this.activeNode =  this.navigationNodes && this.navigationNodes.length > 0 ? this.navigationNodes[length - 1] : undefined;
      this.canGoBack = this.activeNode ? !!this.activeNode.canGoBack : false;
      this.lastActivatedUrl = this.activeNode ? this.activeNode.url : this.lastActivatedUrl;
      const parentActiveNode = this.getParentActiveNode();
      this.lastNagivationNodeChildren = parentActiveNode && parentActiveNode.showOtherChildren ? parentActiveNode.children : undefined
    }
  }
}
