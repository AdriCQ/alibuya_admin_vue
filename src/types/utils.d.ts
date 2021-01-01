import { AxiosResponse } from 'axios';

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

/**
 * -----------------------------------------
 * Vuejs
 * -----------------------------------------
 */

export interface IRoute {
  name: string;
  path?: string;
  params?: IDictionary<string>;
  query?: IDictionary<string>;
}

/**
 * -----------------------------------------
 * Vuetify
 * -----------------------------------------
 */

/**
 * Ivselect item
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
 * Ialert
 */
export interface IAlert {
  text: string;
  type?: 'info' | 'warning' | 'error' | 'success';
  to?: IRoute;
}
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

/**
 * -----------------------------------------
 * Axios
 * -----------------------------------------
 */


/**
 * @interface IApiResponse<T>
 */
interface IApiResponse<T> {
  STATUS: boolean;
  DATA: T;
  ERRORS: never;
}

interface IPaginatedData<T> {
  data: T;
  current_page: number;
  first_page_url: string;
  from: number;
  next_page_url: string;
  path: string;
  per_page: number;
  prev_page_url: string;
  to: number;
}

interface IApiResponsePaginated<T> {
  STATUS: boolean;
  DATA: IPaginatedData<T>;
  ERRORS: never;
}

/**
 * @type ApiResponse<T>
 */
export type ApiResponse<T> = Promise<AxiosResponse<IApiResponse<T>>>;
export type ApiResponsePaginated<T> = Promise<AxiosResponse<IApiResponsePaginated<T>>>;
