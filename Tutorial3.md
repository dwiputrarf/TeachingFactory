# UserAuth Screen

# create UI SignIn

![Sample SignIn](https://i.ibb.co/4gHHcRj/SignIn.png)

1. Buat Screen **SignIn** pada *./app/screens/*, seperti biasanya terdapat 3 file standard. *(hint : Custom Button dan Input jika diperlukan pada ./app/componenet/input*
```javascript
import React from 'react';
import { Text, View, Image } from 'react-native';

import MainScreen from '../../components/layouts/MainScreen';
import styles from './styles';
import Input from '../../components/elements/Input';
import I18n from '../../i18n';
import IMAGES from '../../configs/images';
import Button from '../../components/elements/Button';

export default class Component extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: ''
    };
  }

  _signIn() {
    console.log('SIGN IN');
  }

  _signUp() {
    console.log('SIGN UP');
  }

  render() {
    const { email, password } = this.state;
    return (
      <MainScreen style={styles.mainContainer}>
        <View style={styles.logoContainer}>
          <Image source={IMAGES.appLogo} resizeMode="contain" style={styles.logo} />
        </View>
        <Text style={styles.appTitle}>{I18n.t('appName')}</Text>
        <Input
          placeholder={I18n.t('email')}
          editable
          value={email}
          onChangeText={email => this.setState({ email })}
        />
        <Input
          placeholder={I18n.t('password')}
          editable
          value={password}
          onChangeText={password => this.setState({ password })}
        />
        <Text style={styles.forgetPass}>{I18n.t('forgetPass')}</Text>
        <Button type="raised-ripple" title={I18n.t('login')} onPress={this._signIn} />
        <View style={styles.margin} />
        <Button
          customText={styles.outlinedText}
          customContainer={styles.outlined}
          title={I18n.t('signUp')}
          onPress={this._signUp}
        />
      </MainScreen>
    );
  }
}
```
**styles.js**
```javascript
import { StyleSheet } from 'react-native';
import { COLOR_WHITE, COLOR_BLACK, COLOR_BASE_PRIMARY_MAIN } from '../../styles';
import { scale } from '../../utils/scaling';
import METRICS from '../../constants/metrics';

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: COLOR_WHITE
  },
  logoContainer: { width: scale(100), height: scale(100) },
  logo: { flex: 1, width: undefined, height: undefined, marginBottom: METRICS.baseMargin },
  appTitle: { fontSize: 18, color: COLOR_BLACK, marginBottom: METRICS.doubleSection },
  forgetPass: {
    alignSelf: 'flex-end',
    marginRight: METRICS.doubleBaseMargin,
    marginBottom: METRICS.doubleSection
  },
  margin: { marginBottom: METRICS.baseMargin },
  outlined: { backgroundColor: COLOR_WHITE, borderColor: COLOR_BASE_PRIMARY_MAIN, borderWidth: 2 },
  outlinedText: { color: COLOR_BASE_PRIMARY_MAIN }
});

export default styles;
```
2. Buat **Stack** pada *./routers/stackNavigator.js* dan masukan index routing pada *./routers/index.js*.
**stackNavigator.js**
``` javascript
...
export const UserAuthStack = StackNavigator(
  {
    SignIn: {
      screen: SignIn,
      navigationOptions: {
        tabBarVisible: false
      }
    }
  },
  { headerMode: 'none', navigationOptions: { tabBarVisible: false } }
);
...
```
**index.js**
```javascript
...
import { OnBoardingStack, SplashScreenStack, UserAuthStack } from './stackNavigator';
...
export default SwitchNavigator(
  {
    SplashScreen: SplashScreenStack,
    OnBoarding: OnBoardingStack,
    App: Drawer,
    UserAuth: UserAuthStack
  },
  {
    initialRouteName: 'SplashScreen'
  }
);
...
```
3. Ganti `initialRouteName` dengan `UserAuth` sehingga screen pertama yang muncul saat running adalah **SignIn**. `initialRouteName: 'UserAuth'`.
4. Ganti navigation pada **OnBoarding** dari **app** ke **UserAuth** `this.props.navigation.navigate('UserAuth');`.

# Basic Understanding of Reusable Component
https://medium.com/@vinod8812/building-reusable-component-in-react-native-54241314bef3

**Reuseable Component -** adalah sebuah komponen yang dapat digunakan dimanapun dalam sebuah project dan dapat dimodifikasi dengan menggunakan props nya. 

Reusable component memiliki lifecycle hampir sama seperti screen pada umumnya yang bisa di lihat pada https://reactjs.org/docs/react-component.html

```javascript
// import section
import React from 'react';
import { TouchableOpacity, TouchableNativeFeedback, Text, View, Platform } from 'react-native';
import PropTypes from 'prop-types';
import styles from './styles';

  export default class Component extends React.Component {
    render() {
    let { title } = this.props;
      return (
        <View style={[styles.containerStyle, customContainer]}>
          <Text style={[styles.textStyle, customText]}>{title}</Text>
        </View>
      );
    }
  }
  
  // mendefinisikan tipe data dari props 
  Component.propTypes = {
    title: PropTypes.string.isRequired,
    customContainer: PropTypes.object,
    customText: PropTypes.object
  };
  
  // mendefinisikan default value dari props jika tidak diisi pada parent
  Component.defaultProps = {
    customContainer: {},
    customText: {},
    title: 'Default Title'
  };
``` 

# Fetching API Login
Open API untuk latihan : https://reqres.in/

*Mobile Smartphone memiliki keterbatasan resource sehingga semua data yang akan diolah atau ditampilkan pada aplikasi sebaiknya dilakukan di bagian server dan backend. Hal ini akan meningkatkan efektifitas dan kinerja dari aplikasi itu sendiri*

1. Ganti **baseUrl API** jika dibutuhkan yang berada di *./app/configs/networking.js*, pastikan sudah mengarah ke url https://reqres.in/api. skip ke langkah 2 jika sudah sesuai. 
2. Buatlah method untuk memanggil api pada file *./app/configs/services.js* sebagai `ENDPOINT`

**services.js**
```javaScript
import { get, post } from './networking';

// end point
export const endpoint = {
  getListUser: async page => get(`/users?page=${page}`),
  getUserById: async id => get(`/users/${id}`),
  login: async params => post('/login', params),
  signUp: async params => post('/register', params)
};

export default { endpoint };
```
Perhatikan perbedaan method **post** dan **get** serta cara penulisan `endpoint` dengan **body params** dan **query**.
3. Cara memanggil API sangat sederhana, dilakukan pada component dengan membuat sebuah fungsi sebagai berikut.
**component.js**
```javascript
  _signIn = async () => {
    const { email, password } = this.state;
    const params = { email, password };
    try {
      const result = await ENDPOINT.login(params);
      const myJSON = JSON.stringify(params);
      alert(myJSON);
      console.log({ result });
      if (result.token.length > 0) {
        this.props.navigation.navigate('Home');
      } else {
        ToastAndroid.show('Failed to login', ToastAndroid.SHORT);
      }
    } catch (error) {
      ToastAndroid.show('error.networkError', ToastAndroid.SHORT);
    }
  };
  ```
Perhatikan bahwa setiap pemanggilan API menggunakan fungsi **async** dan **await** untuk menunggu response api.

# SignUp

![Sample SignUp](https://i.ibb.co/vvLB5sG/SignUp.png)

