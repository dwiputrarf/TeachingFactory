/* eslint-disable react/jsx-key */
/* eslint-disable react-native/no-raw-text */
/* eslint-disable react-native/no-color-literals */
import React from 'react';
import { View, Image, Text, FlatList } from 'react-native';
import MainScreen from '../../components/layouts/MainScreen';
import styles from './styles';
import metrics from '../../constants/metrics';
import { COLOR_BASE_PRIMARY_DARK, COLOR_WHITE, COLOR_BLACK, COLOR_GREY } from '../../styles';
import { IMAGES } from '../../configs';
import { scale } from '../../utils/scaling';

const history = [
  {
    id: 1,
    total: 250000,
    time: '15.30',
    date: '25 MAR 2019',
    data: [
      { menu: 'Bakwan', count: 10, price: 50000 },
      { menu: 'Mendoan', count: 15, price: 75000 },
      { menu: 'Gado-gado', count: 13, price: 40000 }
    ]
  },
  {
    id: 2,
    time: '17.00',
    date: '30 MAR 2019',
    total: 500000,
    data: [
      { menu: 'Bakwan', count: 10, price: 50000 },
      { menu: 'Mendoan', count: 15, price: 75000 },
      { menu: 'Gado-gado', count: 13, price: 40000 },
      { menu: 'Bakwan', count: 10, price: 50000 },
      { menu: 'Mendoan', count: 15, price: 75000 },
      { menu: 'Gado-gado', count: 13, price: 40000 }
    ]
  }
];

// const data = [
//   { menu: 'Bakwan', count: 10, price: 50000 },
//   { menu: 'Mendoan', count: 15, price: 75000 },
//   { menu: 'Gado-gado', count: 13, price: 40000 }
// ];

export default class Component extends React.Component {
  _onPress = () => {};

  _renderItems = ({ item }) => (
    <View
      style={{
        justifyContent: 'center',
        width: metrics.screenWidth - 2 * metrics.doubleBaseMargin,
        marginHorizontal: metrics.doubleBaseMargin,
        backgroundColor: COLOR_WHITE,
        borderRadius: 5,
        shadowColor: COLOR_BLACK,
        shadowOffset: { width: 1, height: 1 },
        shadowRadius: 5,
        elevation: 4,
        padding: metrics.halfMargin
      }}
    >
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'center',
          width: metrics.screenWidth - 2.5 * metrics.doubleBaseMargin,
          height: metrics.doubleSection,
          backgroundColor: '#87CAFE',
          paddingHorizontal: metrics.doubleBaseMargin,
          borderRadius: 5
        }}
      >
        <Text style={{ flex: 1, color: COLOR_WHITE }}> {item.date} </Text>
        <Text style={{ color: COLOR_WHITE }}> {item.time} </Text>
      </View>
      <View
        style={{
          flexDirection: 'row',
          marginHorizontal: metrics.baseMargin,
          height: metrics.doubleBaseMargin,
          marginVertical: metrics.baseMargin
        }}
      >
        <Text> Makanan / Minuman </Text>
        <Text style={{ marginLeft: metrics.section }}> Jumlah </Text>
        <Text style={{ marginLeft: metrics.section }}> Harga </Text>
      </View>
      {item.data.map((obj, index) => (
        <View
          style={{
            flexDirection: 'row',
            marginHorizontal: metrics.baseMargin,
            height: metrics.doubleBaseMargin
          }}
        >
          <Text style={{ width: scale(115) }}>
            {index + 1}.{obj.menu}
          </Text>
          <Text style={{ marginLeft: metrics.section, width: scale(45) }}> {obj.count} </Text>
          <Text style={{ marginLeft: metrics.section }}> {obj.price},00 </Text>
        </View>
      ))}
      <View
        style={{
          borderBottomColor: COLOR_GREY,
          borderBottomWidth: 1,
          marginHorizontal: metrics.doubleBaseMargin,
          marginVertical: metrics.baseMargin
        }}
      />
    </View>
  );

  _renderSeparator = () => <View style={{ height: metrics.doubleBaseMargin }} />;

  render() {
    return (
      <MainScreen style={styles.container}>
        <View
          style={{
            marginBottom: metrics.doubleBaseMargin,
            width: metrics.screenWidth,
            backgroundColor: COLOR_BASE_PRIMARY_DARK,
            height: scale(50)
          }}
        >
          <Image source={IMAGES.icoBack} />
        </View>
        <FlatList
          data={history}
          renderItem={this._renderItems}
          ItemSeparatorComponent={this._renderSeparator}
        />
        <View style={{ height: metrics.doubleBaseMargin }} />
      </MainScreen>
    );
  }
}
