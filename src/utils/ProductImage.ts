import { IShopImage } from '@/types';
import { SERVER_URL } from '@/utils';
/**
 * Product image
 */
export class ProductImage {
  private _images: IShopImage;
  private _default = '/img/logos/logo_300x225.png';
  private _local = false;

  constructor(images?: IShopImage, local = false) {
    this._local = local;
    if (images) {
      this._images = images;
    }
    else {
      this._images = {
        id: 0,
        paths: {},
        tags: []
      }
    }
  }

  get tags() {
    if (this._images.tags) {
      return this._images.tags;
    }
  }

  get sm() {
    if (this._images.paths?.sm) {
      return this._local ? this._images.paths.sm : SERVER_URL + this._images.paths.sm
    }
    else {
      return this._default;
    }
  }

  get xs() {
    if (this._images.paths?.xs) {
      return this._local ? this._images.paths.xs : SERVER_URL + this._images.paths.xs
    }
    else {
      return this._default;
    }
  }

  get md() {
    if (this._images.paths?.md) {
      return this._local ? this._images.paths.md : SERVER_URL + this._images.paths.md
    }
    else {
      return this._default;
    }
  }

  get lg() {
    if (this._images.paths?.lg) {
      return this._local ? this._images.paths.lg : SERVER_URL + this._images.paths.lg
    }
    else {
      return this._default;
    }
  }

  get xl() {
    if (this._images.paths?.xl) {
      return this._local ? this._images.paths.xl : SERVER_URL + this._images.paths.xl
    }
    else {
      return this._default;
    }
  }
}