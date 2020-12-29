export type TRouteLink = {
  name?: string;
  path?: string;
  query?: Dictionary<string | (string | null)[]>;
  params?: Dictionary<string | (string | null)[]>;
} | string;


export type TLang = 'es' | 'en';


/**
 * 
 */
export interface ILinkIconLabel {
  icon?: string;
  label?: string;
  to?: TRouteLink;
}

interface IDictionary<T> {
  [Key: string]: T;
}

export interface ICity {
  id: number;
  code: string;
  name: string;
}

export interface ICountry {
  code: string;
  name: string;
}

export interface IShopImage {
  id: number;
  tags?: string[];
  paths: {
    xs?: string;
    sm?: string;
    md?: string;
    lg?: string;
    xl?: string;
  };
}

/**
 * -----------------------------------------
 * Vuetify
 * -----------------------------------------
 */

/**
 * 
 */
export interface IVSelectItem {
  text?: string;
  value?: string;
}

export type TStatusColor = 'error' | 'info' | 'warning' | 'success' | 'primary' | 'secondary';


/**
 * -----------------------------------------
 * All
 * -----------------------------------------
 */

export interface IEventTarget extends globalThis.EventTarget {
  files: FileList;
}

export type TImage = File | string | File[] | string[];

/**
 * -----------------------------------------
 * Colors
 * -----------------------------------------
 */

export interface IColor {
  value: string;
  label: string;
  shape?: TShape;
  border?: boolean;
}

export interface ITransletable {
  es?: string;
  en?: string;
}