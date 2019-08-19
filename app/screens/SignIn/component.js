/* eslint-disable no-shadow */
/* eslint-disable no-undef */
/* eslint-disable no-console */
/* eslint-disable no-alert */
import React from 'react';
import { Text, View, Image, ToastAndroid } from 'react-native';
import PropTypes from 'prop-types';

import MainScreen from '../../components/layouts/MainScreen';
import styles from './styles';
import Input from '../../components/elements/Input';
import I18n from '../../i18n';
import IMAGES from '../../configs/images';
import Button from '../../components/elements/Button';
import { ENDPOINT } from '../../configs';

export default class Component extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: ''
    };
  }

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

  _signUp = () => {
    console.log('SIGN UP');
    // const { navigation } = this.props;
    // navigation.navigate('SignUp');
  };

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

Component.propTypes = {
  navigation: PropTypes.object.isRequired
};
