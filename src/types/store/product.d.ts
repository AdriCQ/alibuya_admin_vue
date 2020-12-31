export type TProductStatus = "waiting" | "ready" | "canceled";

export interface IProduct {
  id: number;
  title: string;
  brand?: string;
  tax?: number;
  description?: string;
  price: number;
  images?: IShopImage[];
  image?: IShopImage;
  weight?: number;
  options?: IProductOptions;
  tags?: TCategory[] | string[];
  rating?: number;
  suggested?: boolean;
  available_cant?: number;
  type?: string;
  status: TProductStatus;
}

/**
 * Iproduct category
 */
export interface IProductCategory {
  id?: number;
  title: {
    en?: string;
    es?: string;
  };
  tag: string;
  rating?: number;
  types?: IProductType[];
}

/**
 * Iproduct type
 */
export interface IProductType {
  id?: number;
  title: {
    en?: string;
    es?: string;
  };
  tag: string;
  rating?: number;
}