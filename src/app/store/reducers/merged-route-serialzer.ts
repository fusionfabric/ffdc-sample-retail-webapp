import { RouterStateSerializer } from '@ngrx/router-store';
import { RouterStateSnapshot } from '@angular/router';
import { MergedRoute } from './merged-route';

export class MergedRouterStateSerializer implements RouterStateSerializer<MergedRoute> {
  serialize(routerState: RouterStateSnapshot): MergedRoute {
    let root = routerState.root;

    while (root.firstChild) {
      root = root.firstChild;
    }
    const {
      url,
      root: { queryParams }
    } = routerState;
    const { params, data } = root;
    return { url, params, queryParams, data, root };
  }
}
