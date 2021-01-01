import { IPack } from '@/types';

/**
 * Pack helper
 */
export class PackHelper {
  private static _pack: IPack = {
    id: 0,
    status: 'requested',
    products: [],
  };

  /**
   * Instances pack helper
   * @param _full boolean
   * @returns IPack
   */
  static instance(_full = false) {
    if (_full) {
      this._pack.delivery_method = '';
      this._pack.destinataries = [];
    }
    return this._pack
  }
}