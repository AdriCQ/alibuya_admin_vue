/**
 * Ibreadcrumb item
 */
export interface IBreadcrumbItem {
  disabled?: boolean;
  exact?: boolean;
  href?: string;
  link?: boolean;
  text: string | number;
  to?: string | object;
}