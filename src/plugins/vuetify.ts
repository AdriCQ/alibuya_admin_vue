import Vue from 'vue';
import Vuetify from 'vuetify/lib';
import '@mdi/font/css/materialdesignicons.css'

Vue.use(Vuetify);

export default new Vuetify({
  icons: {
    iconfont: 'mdi', // default - only for display purposes
  },
  theme: {
    themes: {
      light: {
        primary: '#ffa726',
        secondary: '#263238',
        accent: '#82B1FF',
        error: '#FF5252',
        info: '#2196F3',
        success: '#4CAF50',
        warning: '#FFC107',
        // Others
        tertiary: '#263238',
        // Primary variants
        primaryAlpha: '#febd69',
        primaryBetha: '#FFEE58',
        // Secondary variants
        secondaryAlpha: '#b0bec5',
        secondaryBetha: '#E0E0E0',
        // Tertiary variants
        tertiaryAlpha: '#263238',
        tertiaryBetha: '#263238',
      }
    },
  },
},
);
