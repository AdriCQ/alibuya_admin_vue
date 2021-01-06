import { VuexModule, Module } from 'vuex-class-modules';
import store from '@/store/store';
import { TLang } from '@/types';
import { Storage } from '@/utils';
import { IBreadcrumbItem } from '@/types';

const storage = new Storage("appStorage");

@Module({ generateMutationSetters: true })
class AppModule extends VuexModule {
  sidebarLeft = false;
  lang: TLang = "es";
  cookieAcceted = false;
  breadcrumb: IBreadcrumbItem[] = [{
    text: 'Inicio',
    to: { name: 'main.home' }
  }];

  generateBreadcrumb(_breadcrumb: IBreadcrumbItem[]) {
    this.breadcrumb = [{
      text: 'Inicio',
      to: { name: 'main.home' }
    }];
    this.breadcrumb.push(..._breadcrumb);
  }
  /**
  * Save on localStorage
  */
  storeOnLocalStorage() {
    storage.store({
      lang: this.lang,
      cookieAcceted: this.cookieAcceted,
    });
  }

  /**
   * Load from localStorage
   */
  getFromLocalStorage() {
    const store = storage.get();
    if (store) {
      this.lang = store.lang;
      this.cookieAcceted = store.cookieAcceted;
    }
  }

  /**
   * Handles error
   * @param errors 
   */
  handleError(errors: string | string[]) {
    console.log(errors);
  }
}
// register module (could be in any file)
export const AppStore = new AppModule({ store, name: 'App' });