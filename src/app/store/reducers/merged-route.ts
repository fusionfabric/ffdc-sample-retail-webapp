import {Data, Params, ActivatedRouteSnapshot} from '@angular/router';
import {RouterReducerState} from '@ngrx/router-store';

export interface MergedRoute {
  url: string;
  queryParams: Params;
  params: Params;
  data: Data;
  root: ActivatedRouteSnapshot;
}
export type MergedRouteReducerState = RouterReducerState<MergedRoute>;
