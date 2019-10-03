export interface NavigationNode {
  url?: string;
  title?: string;
  icon?: string;
  canGoBack?: boolean;
  children?: NavigationNode[];
  showOtherChildren?: boolean;
}
