# OnBoarding Screen
https://rationalappdev.com/complete-guide-to-mobile-app-onboarding-with-react-native/

1. Buat sebuah folder screen Onboarding dengan 3 file standar yaitu index.js, component.js, dan styles.js.
2. Buat indexing routes untuk screen tersebut pada *./app/routers/StackNavigator.js* dan *./app/routers/index.js* jika belum ada dengan   `stack` tersendiri.
3. Ganti navigate routing dari **SplashScreen** dari **Home** ke **OnBoarding**.
4. Buat element Swipper sebagai ViewPager pada OnBoarding dengan mengikuti cara berikut ini.
5. Buat folder Swipper pada *./app/components/elements/* dengan file standar yaitu index.js, component.js, dan styles.js.
**Component.js**
```javascript
/* eslint-disable no-console */
/* eslint-disable no-plusplus */
/* eslint-disable no-unused-expressions */
/* eslint-disable prefer-destructuring */
/* eslint-disable react/sort-comp */
import React, { Component } from 'react';
import { Platform, ScrollView, View } from 'react-native';
import PropTypes from 'prop-types';

import METRICS from '../../../constants/metrics';
import styles from './styles';
import Button from '../Button';

const width = METRICS.screenWidth;
const height = METRICS.screenHeight;

export default class Swiper extends Component {
  static defaultProps = {
    horizontal: true,
    pagingEnabled: true,
    showsHorizontalScrollIndicator: false,
    showsVerticalScrollIndicator: false,
    bounces: false,
    scrollsToTop: false,
    removeClippedSubviews: true,
    automaticallyAdjustContentInsets: false,
    index: 0
  };

  state = this.initState(this.props);

  initState(props) {
    const total = props.children ? props.children.length || 1 : 0;
    const index = total > 1 ? Math.min(props.index, total - 1) : 0;
    const offset = width * index;

    const state = {
      total,
      index,
      offset,
      width,
      height
    };
    this.internals = {
      isScrolling: false,
      offset
    };

    return state;
  }

  onScrollBegin = () => {
    this.internals.isScrolling = true;
  };

  onScrollEnd = e => {
    this.internals.isScrolling = false;

    this.updateIndex(
      e.nativeEvent.contentOffset ? e.nativeEvent.contentOffset.x : e.nativeEvent.position * this.state.width
    );
  };

  onScrollEndDrag = e => {
    const {
      contentOffset: { x: newOffset }
    } = e.nativeEvent;
    const { children } = this.props;
    const { index } = this.state;
    const { offset } = this.internals;

    if (offset === newOffset && (index === 0 || index === children.length - 1)) {
      this.internals.isScrolling = false;
    }
  };

  updateIndex = offset => {
    const state = this.state;
    const diff = offset - this.internals.offset;
    const step = state.width;
    let index = state.index;

    if (!diff) {
      return;
    }

    index = parseInt(index + Math.round(diff / step), 10);

    this.internals.offset = offset;
    this.setState({
      index
    });
  };

  swipe = () => {
    if (this.internals.isScrolling || this.state.total < 2) {
      return;
    }

    const state = this.state;
    const diff = this.state.index + 1;
    const x = diff * state.width;
    const y = 0;

    this.scrollView && this.scrollView.scrollTo({ x, y, animated: true });
    this.internals.isScrolling = true;

    if (Platform.OS === 'android') {
      setImmediate(() => {
        this.onScrollEnd({
          nativeEvent: {
            position: diff
          }
        });
      });
    }
  };

  renderScrollView = pages => (
    <ScrollView
      ref={component => {
        this.scrollView = component;
      }}
      {...this.props}
      contentContainerStyle={[styles.wrapper, this.props.style]}
      onScrollBeginDrag={this.onScrollBegin}
      onMomentumScrollEnd={this.onScrollEnd}
      onScrollEndDrag={this.onScrollEndDrag}
    >
      {pages.map((page, i) => (
        <View style={[styles.fullScreen, styles.slide]} key={i}>
          {page}
        </View>
      ))}
    </ScrollView>
  );

  renderPagination = () => {
    if (this.state.total <= 1) {
      return null;
    }

    const ActiveDot = <View style={[styles.dot, styles.activeDot]} />;
    const Dot = <View style={styles.dot} />;

    const dots = [];

    for (let key = 0; key < this.state.total; key++) {
      dots.push(
        key === this.state.index
          ? // Active dot
            React.cloneElement(ActiveDot, { key })
          : // Other dots
            React.cloneElement(Dot, { key })
      );
    }

    return (
      <View pointerEvents="none" style={[styles.pagination, styles.fullScreen]}>
        {dots}
      </View>
    );
  };

  renderButton = () => {
    const { onPress } = this.props;
    const lastScreen = this.state.index === this.state.total - 1;
    return (
      <View onPress={onPress} pointerEvents="box-none" style={[styles.buttonWrapper, styles.fullScreen]}>
        {lastScreen ? (
          <Button title="Start Now" onPress={onPress} />
        ) : (
          <Button title="Continue" onPress={() => this.swipe()} />
        )}
      </View>
    );
  };

  render = ({ children } = this.props) => (
    <View style={[styles.container, styles.fullScreen]}>
      {this.renderScrollView(children)}
      {this.renderPagination()}
      {this.renderButton()}
    </View>
  );
}

Component.propTypes = {
  onPress: PropTypes.func
};
```
**Styles.js**
```javascript
import { StyleSheet } from 'react-native';
import METRICS from '../../../constants/metrics';
import { COLOR_WHITE, COLOR_TRANSPARENT, COLOR_GREY } from '../../../styles';

const styles = StyleSheet.create({
  fullScreen: {
    width: METRICS.screenWidth,
    height: METRICS.screenHeight
  },
  container: {
    backgroundColor: COLOR_TRANSPARENT,
    position: 'relative'
  },
  slide: {
    backgroundColor: COLOR_TRANSPARENT
  },
  pagination: {
    position: 'absolute',
    bottom: 110,
    left: 0,
    right: 0,
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'flex-end',
    backgroundColor: COLOR_TRANSPARENT
  },

  dot: {
    backgroundColor: COLOR_GREY,
    width: 8,
    height: 8,
    borderRadius: 4,
    marginLeft: 3,
    marginRight: 3,
    marginTop: 3,
    marginBottom: 3
  },

  activeDot: {
    backgroundColor: COLOR_WHITE
  },

  buttonWrapper: {
    backgroundColor: COLOR_TRANSPARENT,
    flexDirection: 'column',
    position: 'absolute',
    bottom: 0,
    left: 0,
    flex: 1,
    paddingHorizontal: 10,
    paddingVertical: 40,
    justifyContent: 'flex-end',
    alignItems: 'center'
  }
});

export default styles;
```
5. Buat screen OnBoarding pada *./app/screens/OnBoarding/* dengan file standar yaitu index.js, component.js, dan styles.js. (Edit file jika sudah ada).
**Component.js**
```javascript
/* eslint-disable react-native/no-color-literals */
import React from 'react';
import { View, Text } from 'react-native';
import PropTypes from 'prop-types';

import Swiper from '../../components/elements/Swiper';
import styles from './styles';

export default class Component extends React.Component {
  _onPress = () => {
    this.props.navigation.navigate('App');
  };

  render() {
    return (
      <Swiper onPress={this._onPress}>
        <View style={[styles.slide, { backgroundColor: '#C04DEE' }]}>
          <Text style={styles.header}>EAT</Text>
          <Text style={styles.text}>Good nutrition is an important part of leading a healthy lifestyle</Text>
        </View>

        <View style={[styles.slide, { backgroundColor: '#4AAFEE' }]}>
          <Text style={styles.header}>PRAY</Text>
          <Text style={styles.text}>Prayer is one of the most important things a Christian can do</Text>
        </View>

        <View style={[styles.slide, { backgroundColor: '#FC515B' }]}>
          <Text style={styles.header}>LOVE</Text>
          <Text style={styles.text}>Where there is love there is life</Text>
        </View>
      </Swiper>
    );
  }
}

Component.propTypes = {
  navigation: PropTypes.object.isRequired
};
```
**styles.js**
```javascript
import { StyleSheet } from 'react-native';
import { COLOR_WHITE } from '../../styles';

const styles = StyleSheet.create({
  slide: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  header: {
    color: COLOR_WHITE,
    fontFamily: 'Avenir',
    fontSize: 30,
    fontWeight: 'bold',
    marginVertical: 15
  },
  text: {
    color: COLOR_WHITE,
    fontFamily: 'Avenir',
    fontSize: 18,
    marginHorizontal: 40,
    textAlign: 'center'
  }
});

export default styles;
```
![Sample OnBoarding](https://media.giphy.com/media/cMcIxkOn68RFL4pK9k/giphy.gif)

# Customized/Revamp OnBoarding UI

![Customized OnBoarding](https://media.giphy.com/media/VI8erJk8mLtdxRUxoz/giphy.gif)

1. Custom Reusable Component Button
