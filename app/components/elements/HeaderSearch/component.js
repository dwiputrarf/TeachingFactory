/* eslint-disable react/no-multi-comp */
/* eslint-disable react/jsx-key */
/* eslint-disable react/require-default-props */
/* eslint-disable react/no-unused-prop-types */
import React from 'react';
import { Animated, TextInput, View, Text, TouchableOpacity, Platform, SafeAreaView } from 'react-native';
import PropTypes from 'prop-types';
import styles from './styles';
import { COLOR_GREY, COLOR_BASE_PRIMARY_MAIN } from '../../../styles/index';
import METRICS from '../../../constants/metrics';
import { IMAGES } from '../../../configs';

export default class Component extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchText: this.props.searchBar || null,
      searchBar: new Animated.Value(0)
    };
  }

  _openSearch = value => {
    if (value) {
      Animated.timing(this.state.searchBar, {
        toValue: 10,
        duration: 500
      }).start();
      this.textinput.focus();
    } else {
      Animated.timing(this.state.searchBar, {
        toValue: 0,
        duration: 500
      }).start();
      this.textinput.blur();
      this.setState({ searchText: null });
    }
  };
  _onClose() {
    this.props.onPressClose();
  }

  _onClosePress() {
    this._openSearch(false);
    this._onClose();
  }

  render() {
    const { color } = this.props;
    const { props } = this;
    const colors = color || COLOR_BASE_PRIMARY_MAIN;
    const opacity1 = this.state.searchBar.interpolate({
      inputRange: [0, 1],
      outputRange: [1, 0]
    });
    const opacity2 = this.state.searchBar.interpolate({
      inputRange: [0, 3],
      outputRange: [0, 1]
    });
    const searchInput = this.state.searchBar.interpolate({
      inputRange: [0, 10],
      outputRange: [METRICS.screenWidth, 0]
    });
    return (
      <View>
        <View
          style={{
            height: Platform.OS === 'android' ? METRICS.statusBar.height : 0,
            backgroundColor: colors
          }}
        />
        <SafeAreaView style={{ backgroundColor: colors }}>
          <View style={[styles.container, props.style && props.style, { backgroundColor: colors }]}>
            {props.left &&
              props.left.map((item, i) => (
                <View style={styles.leftRightContainer}>
                  <ToolbarIcon key={i} {...item} />
                </View>
              ))}
            <Animated.View
              style={[
                styles.viewTitle,
                !props.left && { left: METRICS.doubleBaseMargin },
                !props.right && { marginRight: METRICS.baseMargin * 0.7 }
              ]}
            >
              <Animated.View style={{ justifyContent: 'flex-end', opacity: opacity1 }}>
                {props.subtitle && <Text style={styles.subtitleStyle}>{props.subtitle}</Text>}
                {props.title !== '' && (
                  <Text style={styles.titleStyle}>{props.title ? props.title : null}</Text>
                )}
              </Animated.View>
              {this.props.searchBar && (
                <Animated.View style={styles.searchBar}>
                  <ToolbarIcon
                    opacity={opacity1}
                    // style={styles.containerIcon}
                    icon={IMAGES.icoSearch}
                    onPress={() => this._openSearch(true)}
                  />
                  <Animated.View style={[styles.search_input, { left: searchInput }]}>
                    <TextInput
                      ref={ref => {
                        this.textinput = ref;
                      }}
                      onChangeText={searchText =>
                        this.setState({ searchText }, () => this.props.searchBar(this.state.searchText))
                      }
                      autoCorrect={false}
                      autoFocus={false}
                      style={[styles.input_search]}
                      value={this.state.searchText}
                      placeholder={this.props.placeholder || 'Search..'}
                      returnKeyType={this.props.returnKeyType}
                      onSubmitEditing={this.props.onSubmitEditing}
                      underlineColorAndroid="transparent"
                    />
                    {this.props.typeClose && (
                      <Animated.View style={styles.containerClose}>
                        <ToolbarIcon
                          opacity={opacity2}
                          // style={styles.iconClose}
                          icon={IMAGES.icoCloseGrey}
                          onPress={() => this._onClosePress()}
                          tint={COLOR_GREY}
                          styleIconClose={styles.iconClose}
                        />
                      </Animated.View>
                    )}
                  </Animated.View>
                </Animated.View>
              )}
            </Animated.View>

            {props.right &&
              props.right.map((item, i) => (
                <View style={styles.leftRightContainer}>
                  <ToolbarIcon key={i} {...item} />
                </View>
              ))}
          </View>
        </SafeAreaView>
      </View>
    );
  }
}

class ToolbarIcon extends Component {
  render() {
    const { props } = this;
    return (
      <Animated.View>
        <TouchableOpacity onPress={props.onPress}>
          <Animated.View style={[styles.containerIcon, { opacity: props.opacity }]}>
            <Animated.Image
              style={[styles.icon, { tintColor: props.tint || 'white' }, props.styleIconClose]}
              resizeMode="contain"
              source={props.icon || ''}
              tintColor={props.tint || 'white'}
            />
          </Animated.View>
        </TouchableOpacity>
      </Animated.View>
    );
  }
}

ToolbarIcon.propTypes = {
  icon: PropTypes.object.isRequired,
  onPress: PropTypes.func.isRequired,
  tint: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  style: PropTypes.object.isRequired,
  typeClose: PropTypes.bool
};

Component.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
  color: PropTypes.string,
  searchBar: PropTypes.string,
  placeholder: PropTypes.string,
  typeClose: false,
  left: PropTypes.string,
  onPressClose: PropTypes.func
  // styleIcon: PropTypes.string
};
