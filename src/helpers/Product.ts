import { IProduct, ApiResponse } from '@/types';
import Axios from 'axios';

/**
 * Product helper
 */
export class ProductHelper {
  private static baseUrl = '/shop/product';

  private static _product: IProduct = {
    id: 0,
    price: 0,
    status: 'waiting',
    title: '',
  }

  /**
   * Instances product helper
   * @param _full boolean
   * @returns IProduct
   */
  static instance(_full = false) {
    if (_full) {
      this._product.available_cant = 0;
      this._product.brand = '';
      this._product.description = '';
      this._product.image = '';
      this._product.images = [];
      this._product.options = {};
      this._product.rating = 0;
      this._product.suggested = false;
      this._product.tags = [];
      this._product.tax = 0;
      this._product.type = '';
      this._product.weight = 0;
    }
    return this._product;
  }


  /**
   * Get product by id
   */
  static getById(_id: number): ApiResponse<IProduct> {
    return Axios.get(this.baseUrl + '/by-id', {
      params: {
        "product_id": _id
      }
    })
  }
}