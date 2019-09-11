import { SwitchNavigator } from 'react-navigation';
import { OnBoardingStack, SplashScreenStack, UserAuthStack, HomeStack } from './stackNavigator';
import { Drawer } from './drawerNavigator';

export default SwitchNavigator(
  {
    SplashScreen: SplashScreenStack,
    OnBoarding: OnBoardingStack,
    App: Drawer,
    UserAuth: UserAuthStack,
    Home: HomeStack
  },
  {
    initialRouteName: 'Home'
  }
);
