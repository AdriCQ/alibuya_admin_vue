import { VuexModule, Module } from 'vuex-class-modules';
import store from '@/store/store';
import { AppStore } from '@/store';
import { IApiResponse, IProduct } from '@/types';
import { ProductHelper, AxiosHelper } from '@/helpers';


@Module({ generateMutationSetters: true })
class ProductModule extends VuexModule {
  products: IProduct[] = [];
  product: IProduct = ProductHelper.instance(true);


  /**
   * Get Product by Id
   * @param _productId number
   */
  async getProductById(_productId: number) {
    AxiosHelper.callableService(ProductHelper.getById(_productId), (_resp: IApiResponse<IProduct>) => {
      this.product = _resp.DATA;
      console.log(this.product);
    }).catch(error => {
      AppStore.handleError(error);
    })
  }

}

// register module (could be in any file) 
export const ProductStore = new ProductModule({ store, name: 'Product' });