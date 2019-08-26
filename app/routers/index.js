import { SwitchNavigator } from 'react-navigation';
import { OnBoardingStack, SplashScreenStack, UserAuthStack } from './stackNavigator';
import { Drawer } from './drawerNavigator';

export default SwitchNavigator(
  {
    SplashScreen: SplashScreenStack,
    OnBoarding: OnBoardingStack,
    App: Drawer,
    UserAuth: UserAuthStack
  },
  {
    initialRouteName: 'App'
  }
);
