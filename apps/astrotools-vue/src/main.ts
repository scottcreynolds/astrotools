import './styles.css';

import router from './router';

import { createApp } from 'vue';
import App from './app/App.vue';
// Vuetify
import 'vuetify/styles';
import { createVuetify } from 'vuetify';
import * as components from 'vuetify/components';
import * as directives from 'vuetify/directives';

const customTheme: ThemeDefinition = {
  name: 'customTheme',
  dark: false,
  variables: {
    'border-color': '#1e88e5',
    'carousel-control-size': 10,
    'focus-opacity': 0.5,
  },
  colors: {
    primary: '#4ceb34',
    secondary: '#5e35b1',
    tertiary: '#c2f',
    info: '#03c9d7',
    success: '#00c853',
    accent: '#FFAB91',
    warning: '#ffc107',
    error: '#f44336',
    lightprimary: '#4ceb34',
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

const app = createApp(App);
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

app.use(router);
app.use(vuetify);
app.mount('#root');
