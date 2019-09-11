/* eslint-disable default-case */
/* eslint-disable no-unused-expressions */
/* eslint-disable no-console */
/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-key */
import React from 'react';
import { View, Image, TouchableOpacity, ScrollView, Text, FlatList } from 'react-native';
import PropTypes from 'prop-types';
import Carousel, { Pagination } from 'react-native-snap-carousel';

import MainScreen from '../../components/layouts/MainScreen';
import styles from './styles';
import { ENDPOINT, IMAGES } from '../../configs';
import errors from '../../utils/errors';
import I18n from '../../i18n';
import METRICS from '../../constants/metrics';
import { ARRAYS } from '../../constants';

const android = ARRAYS.ANDROID;

const menu = [
  {
    id: 1,
    name: 'Button',
    icon: IMAGES.appLogo
  },
  {
    id: 2,
    name: 'Input',
    icon: IMAGES.appLogo
  },
  {
    id: 3,
    name: 'Modal',
    icon: IMAGES.appLogo
  },
  {
    id: 4,
    name: 'List',
    icon: IMAGES.appLogo
  },
  {
    id: 5,
    name: 'Picker',
    icon: IMAGES.appLogo
  },
  {
    id: 6,
    name: 'Switch',
    icon: IMAGES.appLogo
  }
];

export default class Component extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: false,
      imageActiveSlide: 0
    };
  }

  async componentDidMount() {
    const { actions } = this.props;
    await actions.fetchGetListUser('1');
  }

  _loadData = async () => {
    try {
      await this.setState({ isLoading: true });
      // eslint-disable-next-line no-unused-vars
      const result = await ENDPOINT.getListUser('1');
    } catch (error) {
      errors.createError(I18n.t('error.timeOutConnection'));
    } finally {
      this.setState({ isLoading: false });
    }
  };

  _renderAutoSlider = ({ item }) => (
    <View style={styles.slide}>
      <TouchableOpacity activeOpacity={1} style={styles.slideInnerContainer}>
        <Image style={styles.image} source={{ uri: item.avatar }} resizeMode="cover" />
      </TouchableOpacity>
    </View>
  );

  _keyExtractor = (item, index) => item.id;

  _onPressItem = id => {
    console.log(id);
  };

  _renderMenu = ({ item }) => (
    <TouchableOpacity onPress={() => this._screen(item.id)} style={styles.cardMenu}>
      <View style={styles.logoContainer}>
        <Image source={item.icon} resizeMode="cover" style={styles.logo} />
      </View>
      <Text>{item.name}</Text>
    </TouchableOpacity>
  );

  _screen = id => {
    let screen = '';
    switch (id) {
      case 1:
        screen = 'Button';
        break;
      case 2:
        screen = 'Input';
        break;
      case 3:
        screen = 'Modal';
        break;
      case 4:
        screen = 'List';
        break;
      case 5:
        screen = 'Picker';
        break;
      case 6:
        screen = 'Switch';
        break;
    }
    this.props.navigation.navigate(screen);
  };

  render() {
    const { listUsers } = this.props;
    const { imageActiveSlide } = this.state;
    return (
      <MainScreen isLoading={this.state.isLoading} style={styles.mainContainer}>
        <ScrollView>
          <Carousel
            data={listUsers}
            renderItem={this._renderAutoSlider}
            sliderWidth={METRICS.screenWidth}
            itemWidth={METRICS.screenWidth}
            onSnapToItem={i => this.setState({ imageActiveSlide: i })}
            autoplay
            loop
          />
          <Pagination
            dotsLength={listUsers.length}
            activeDotIndex={imageActiveSlide}
            dotStyle={styles.dotStyle}
            inactiveDotStyle={styles.activeDot}
            inactiveDotScale={1}
          />
          <FlatList
            keyExtractor={this._keyExtractor}
            renderItem={this._renderMenu}
            data={menu}
            numColumns={3}
          />
          <View style={styles.titleContainer}>
            <Text style={styles.title}>List Product</Text>
            <Text onPress={() => console.log('see More Pressed')} style={styles.seeMore}>
              See More
            </Text>
          </View>
          <ScrollView showsHorizontalScrollIndicator={false} horizontal>
            {android.map(item => (
              <TouchableOpacity style={styles.cardProduct}>
                <View style={styles.logoContainer}>
                  <Image source={item.icon} resizeMode="cover" style={styles.logo} />
                </View>
                <Text ellipsizeMode="tail" numberOfLines={1}>
                  {item.name}
                </Text>
                <Text ellipsizeMode="tail" numberOfLines={1}>
                  {item.api}
                </Text>
              </TouchableOpacity>
            ))}
          </ScrollView>
          <View style={{ height: METRICS.doubleBaseMargin }} />
        </ScrollView>
      </MainScreen>
    );
  }
}

Component.propTypes = {
  listUsers: PropTypes.array,
  navigation: PropTypes.object.isRequired
};

Component.defaultProps = {
  listUsers: []
};
