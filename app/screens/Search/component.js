/* eslint-disable no-console */
/* eslint-disable react/no-unused-state */
import React from 'react';
// import { View } from 'react-native';
import PropTypes from 'prop-types';

import MainScreen from '../../components/layouts/MainScreen';
import HeaderSearch from '../../components/elements/HeaderSearch';
import styles from './styles';
import { IMAGES } from '../../configs';
import I18n from '../../i18n';

export default class Component extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      keyword: '',
      refreshing: false,
      data: []
    };
    this.search = this.search.bind(this);
    this.set = this.set.bind(this);
    this.refresh = this.refresh.bind(this);
    this.clear = this.clear.bind(this);
    // this.more = this.more.bind(this);
  }

  async componentWillMount() {
    await this._getData();
  }

  set(value) {
    this.setState({ keyword: value });
  }

  clear() {
    this.setState(
      {
        page: 1,
        keyword: ''
      },
      () => this._getData()
    );
  }

  refresh() {
    this.setState(
      {
        page: 1,
        refreshing: true
      },
      () => this._getData()
    );
  }

  search() {
    const keyword = this.state.keyword.trim();
    if (keyword.length > 0) {
      this.setState({ page: 1 }, () => this._getData());
    }
  }

  // more = () => {
  //   if (this.state.totalPage !== this.state.page) {
  //     if (this.state.totalPage === 1) {
  //       this._getData();
  //     } else {
  //       this.setState({ page: this.state.page + 1 }, () => {
  //         this._getData();
  //       });
  //     }
  //   }
  // };

  _onBack = () => {
    this.props.navigation.goBack();
  };

  _onPress = () => {};

  render() {
    return (
      <MainScreen style={styles.container}>
        <HeaderSearch
          searchBar={text => this.setState({ keyword: text })}
          left={[
            {
              icon: IMAGES.icoBack,
              onPress: () => this._onBack()
            }
          ]}
          title={I18n.t('header.news')}
          onSubmitEditing={() => this.search()}
          onPressClose={this.clear}
          typeClose={!!this.state.keyword}
          placeholder={I18n.t('placeholder.news')}
        />
      </MainScreen>
    );
  }
}

Component.propTypes = {
  navigation: PropTypes.object.isRequired
};
