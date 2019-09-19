/* eslint-disable react/no-unused-state */
/* eslint-disable no-console */
import React from 'react';
import { View, FlatList, Text, Image, RefreshControl } from 'react-native';
import PropTypes from 'prop-types';

import MainScreen from '../../components/layouts/MainScreen';
import HeaderSearch from '../../components/elements/HeaderSearch';
import styles from './styles';
import { IMAGES } from '../../configs';
import I18n from '../../i18n';
import { COLOR_FONT_LINK } from '../../styles';

export default class Component extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      keyword: 'Indonesia',
      refreshing: false,
      data: [],
      page: 1,
      firstLoad: true
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
        keyword: 'Indonesia'
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

  // eslint-disable-next-line consistent-return
  async _getData() {
    const { keyword } = this.state;
    const url = `https://newsapi.org/v2/everything?q=${keyword}&apiKey=93b7e922efbd4c608dfa03f6c08eb160`;
    try {
      // eslint-disable-next-line no-undef
      const response = await fetch(url);
      const responseJson = await response.json();
      this.setState({ data: responseJson.articles });
      // eslint-disable-next-line no-alert
      console.log(responseJson);
      return responseJson.articles;
    } catch (error) {
      console.error(error);
    } finally {
      this.setState({ refreshing: false, firstLoad: false });
    }
  }

  // eslint-disable-next-line no-unused-vars
  _renderNews = ({ item, index }) => (
    <View key={index} style={styles.cardContainer}>
      <View style={styles.imageContainer}>
        <Image source={{ uri: item.urlToImage }} resizedMode="contain" style={styles.image} />
      </View>
      <View style={styles.information}>
        <Text style={styles.title}> {item.title} </Text>
        <Text> {item.description} </Text>
        <Text style={{ color: COLOR_FONT_LINK }}> {item.url} </Text>
      </View>
    </View>
  );

  _renderNoData = () => {
    const { firstLoad } = this.state;
    return (
      <View>
        {firstLoad ? null : (
          <View style={styles.containerFound}>
            <View style={styles.containerImgFound}>
              <Image resizeMode="contain" style={styles.imagesFound} source={IMAGES.noDataSearch} />
            </View>
            <View style={styles.textFound}>
              <Text style={styles.txtTitleFound}>{I18n.t('error.noData')}</Text>
              <Text style={styles.txtDescFound}>{I18n.t('error.noDataDesc')}</Text>
            </View>
          </View>
        )}
      </View>
    );
  };

  _onPress = () => {};

  render() {
    const { data, refreshing } = this.state;
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
        <FlatList
          data={data}
          renderItem={this._renderNews}
          refreshControl={<RefreshControl refreshing={refreshing} onRefresh={this.refresh} />}
          // onEndReachedThreshold={0.1}
          // onEndReached={this.more}
          ListEmptyComponent={this._renderNoData}
          showsVerticalScrollIndicator={false}
          // ItemSeparatorComponent={this.renderSeparator}
        />
      </MainScreen>
    );
  }
}

Component.propTypes = {
  navigation: PropTypes.object.isRequired
};
