/* eslint-disable no-console */
/* eslint-disable no-shadow */
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
      username: '',
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
    const { username, password } = this.state;
    return (
      <MainScreen style={styles.mainContainer}>
        <View style={styles.logoContainer}>
          <Image source={IMAGES.appLogo} resizeMode="contain" style={styles.logo} />
        </View>
        <Text style={styles.appTitle}>{I18n.t('appName')}</Text>
        <Input
          placeholder={I18n.t('username')}
          editable
          value={username}
          onChangeText={username => this.setState({ username })}
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
