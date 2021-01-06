import { VuexModule, Module } from 'vuex-class-modules';
import store from '@/store/store';
import { IUserProfile, ILoginParams, IApiResponse, IAuthResponse } from '@/types';
import { UserHelper, AxiosHelper } from '@/helpers';
import { AppStore } from '@/store';
import { Storage } from '@/utils';

const storage = new Storage("userStorage");

/**
 * Module UserModule
 */
@Module({ generateMutationSetters: true })
class UserModule extends VuexModule {
  profile: IUserProfile = UserHelper.instance(true);
  api_token: string | null = null;

  /**
   * Gets whether is logged
   */
  get isLogged() {
    return this.api_token;
  }

  /**
   * Logins user module
   * @param _params ILoginParams
   */
  login(_params: ILoginParams) {
    return new Promise((resolve, reject) => {
      AxiosHelper.callableService(UserHelper.login(_params), (_resp: IApiResponse<IAuthResponse>) => {
        this.profile = _resp.DATA.profile;
        this.api_token = _resp.DATA.api_token;
      }).then(resp => resolve(resp))
        .catch(error => reject(error));
    });
  }


  /**
  * Save on localStorage
  */
  storeOnLocalStorage() {
    storage.store({
      profile: this.profile,
      api_token: this.api_token,
    });
  }

  /**
   * Load from localStorage
   */
  getFromLocalStorage() {
    const store = storage.get();
    if (store) {
      this.profile = store.profile;
      this.api_token = store.api_token;
    }
  }

}

// register module (could be in any file) 
export const UserStore = new UserModule({ store, name: 'User' });