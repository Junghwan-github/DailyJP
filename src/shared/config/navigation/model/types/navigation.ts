export enum AppNavigation {
  WELCOME = 'Welcome',
  LOGIN = 'Login',
};

export type NavigationStackLists<F = any> = {
  [AppNavigation.WELCOME] : undefined;
  [AppNavigation.LOGIN] : undefined;
};

export type RootStackParamList = NavigationStackLists;