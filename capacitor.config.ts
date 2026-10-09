import type { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.juliocorrea.portfolio',
  appName: 'Julio Correa',
  webDir: 'dist',
  plugins: {
    SplashScreen: {
      launchShowDuration: 1000,
      backgroundColor: '#0a0a0c',
      showSpinner: false,
    },
  },
};

export default config;
