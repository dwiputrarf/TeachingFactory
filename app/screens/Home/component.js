import React from 'react';
import { View, Image, TouchableOpacity, ScrollView } from 'react-native';
import PropTypes from 'prop-types';
import Carousel, { Pagination } from 'react-native-snap-carousel';

import MainScreen from '../../components/layouts/MainScreen';
import styles from './styles';
import { ENDPOINT } from '../../configs';
import errors from '../../utils/errors';
import I18n from '../../i18n';
import METRICS from '../../constants/metrics';

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
    // measureNetworkBandwitdh((success, data, error) => {
    //   if (success) {
    //     Alert.alert(data);
    //   } else if (error) {
    //     Alert.alert(data);
    //   }
    // });
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
        </ScrollView>
      </MainScreen>
    );
  }
}

Component.propTypes = {
  listUsers: PropTypes.array
};

Component.defaultProps = {
  listUsers: []
};
