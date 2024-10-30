import './styles.css';

import router from './router';

import { createApp } from 'vue';
import App from './app/App.vue';

import 'vuetify/styles';
import { createVuetify, type ThemeDefinition } from 'vuetify';
import * as components from 'vuetify/components';
import * as directives from 'vuetify/directives';
import {
  provideFluentDesignSystem,
  fluentButton,
  fluentTextField,
} from '@fluentui/web-components';

provideFluentDesignSystem().register(fluentButton(), fluentTextField());
const customTheme: ThemeDefinition = {
  name: 'customTheme',
  dark: false,
  variables: {
    'border-color': '#1e88e5',
    'carousel-control-size': 10,
  },
  colors: {
    primary: '#1e88e5',
    secondary: '#5e35b1',
    info: '#03c9d7',
    success: '#00c853',
    accent: '#FFAB91',
    warning: '#ffc107',
    error: '#f44336',
    lightprimary: '#eef2f6',
    lightsecondary: '#ede7f6',
    lightsuccess: '#b9f6ca',
    lighterror: '#f9d8d8',
    lightwarning: '#fff8e1',
    darkText: '#212121',
    lightText: '#616161',
    darkprimary: '#1565c0',
    darksecondary: '#4527a0',
    borderLight: '#d0d0d0',
    inputBorder: '#787878',
    containerBg: '#eef2f6',
    surface: '#fff',
    'on-surface-variant': '#fff',
    facebook: '#4267b2',
    twitter: '#1da1f2',
    linkedin: '#0e76a8',
    gray100: '#fafafa',
    primary200: '#90caf9',
    secondary200: '#b39ddb',
  },
};

const vuetify = createVuetify({
  components,
  directives,
  theme: {
    defaultTheme: 'customTheme',
    themes: {
      customTheme,
    },
  },
});

// const app = createApp(App).use(vuetify).use(router).mount('#root');
const app = createApp(App).use(router).mount('#root');
