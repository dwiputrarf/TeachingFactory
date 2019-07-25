import { SwitchNavigator } from 'react-navigation';
import { OnBoardingStack, SplashScreenStack } from './stackNavigator';
import { Drawer } from './drawerNavigator';

export default SwitchNavigator(
  {
    SplashScreen: SplashScreenStack,
    OnBoarding: OnBoardingStack,
    App: Drawer
  },
  {
    initialRouteName: 'SplashScreen'
  }
);
