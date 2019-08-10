# Initial Project

1. Clone/download codebase dan tempatkan pada folder yang diinginkan.
2. Buka folder tersebut dengan **Visual Studio Code**. *Shift+Right Click > Open Powershell Window here*, jalankan command `code .`
3. Buka terminal dengan memilih menu *Terminal > New Terminal*.
4. Jalankan perintah `npm install`, untuk menginstal dependency dan modul yang dibutuhkan.
5. Buka Emulator Android / Menghubungkan Device Android untuk menjalankan aplikasi yang dibuat.
6. Jalankan perintah `react-native run-android` pada terminal untuk menjalankan aplikasi Anda.

# Your First Screen (SplashScreen)
1. Buka project milikmu.
2. Buat Sebuah Folder pada *./app/screens/* simpan folder tersebut dengan nama **SplashScreen**.
3. Buat 3 buah file *.js* : **component.js, index.js, dan styles.js**.

**component.js**
```javascript
import React from 'react';
import { Text, View } from 'react-native';
import styles from './styles';

export default class Component extends React.Component {
  render() {
    return (
      <View style={styles.mainContainer}>
        <Text>This is Splash Screen</Text>
      </View>
    );
  }
}

```

**index.js**
```javascript
import Component from './component';

export default Component;

```

**styles.js**
```javascript
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
});

export default styles;

```
4. Tambahkan route **SplashScreen** yang kita buat pada *./app/routers/stackNavigator.js*. import screen yang sudah kita buat sebelumnya.
```javascript
import SplashScreen from '../screens/SplashScreen';
```
5. Tambahkan Sebuah `Stack` untuk screen yang kita buat. `Stack` pada navigator digunakan untuk menandakan sebuah journey yang berbeda pada navigasi dalam aplikasi kita.
```javascript
export const SplashScreenStack = StackNavigator(
  {
    SplashScreen: {
      screen: SplashScreen,
      navigationOptions: {
        tabBarVisible: false
      }
    }
  },
  {
    headerMode: 'none',
    navigationOptions: {
      tabBarVisible: false
    }
  }
);
```
6. Tambahkan `Stack` yang sudah kita buat ke dalam *./app/routers/index.js* sehingga dapat dikenali oleh aplikasi. import `stack` yang sudah kita buat sebelumnya.
```javascript
import { OnBoardingStack, SplashScreenStack } from './stackNavigator';
```
7. Tambahkan `route stack` yang kita buat ke dalam `SwitchNavigator` dengan nama **SplashScreen** dan ganti `initialRouteName` ke **SplashScreen** sehingga pertama kali aplikasi terbuka akan menampilkan screen **SplashScreen**
```javascript
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
```
8. Run aplikasi melalui terminal dengan `react-native run-android`

![Sample SplashScreen](https://i.ibb.co/kBgnc6v/Splash-Screen.jpg)
# Custom UI Splashscreen
