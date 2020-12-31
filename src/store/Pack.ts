import { VuexModule, Module } from 'vuex-class-modules';
import store from '@/store/store';
import { IPack } from '@/types';
import { PackHelper } from '@/helpers';


@Module({ generateMutationSetters: true })
class PackModule extends VuexModule {
  packs: IPack[] = [];
}

// register module (could be in any file) 
export const PackStore = new PackModule({ store, name: 'Pack' });