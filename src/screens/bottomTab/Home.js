import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import React, { useEffect, useState } from 'react';
import {
  responsiveFontSize,
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';
import { useNavigation } from '@react-navigation/native';
import Carousel from '../components/Carousel';
import { useSelector, useDispatch } from 'react-redux';
import { fetchCoinData } from '../../redux/market/coinSlice';
import { COLORS } from '../../constants/theme';
import Icon from 'react-native-vector-icons/Ionicons';
import axios from 'axios';
const Home = () => {
  const navigation = useNavigation();


  return (
    <View style={{ flex: 1 }}>
      <View style={styles.topContiner}>
        <Text style={styles.topContainerText}>ComexPulse</Text>
        <TouchableOpacity>
          <Icon name="notifications" size={25} color="#fff" />
          <View
            style={{
              width: responsiveWidth(3),
              height: responsiveWidth(3),
              backgroundColor: 'red',
              borderRadius: responsiveWidth(1.5),
              position: 'absolute',
              right: responsiveWidth(0),
              top: responsiveHeight(0),
            }}></View>
        </TouchableOpacity>
      </View>

      {/* Top Container*/}
      <View
        style={{
          flex: 1 / 1,
          backgroundColor: '#fff',
        }}>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
          <View style={{ margin: responsiveWidth(2), flexDirection: 'row' }}>
            <Text
              style={[
                styles.topContainerText,
                {
                  color: '#000',
                  fontWeight: '500',
                  marginLeft: responsiveWidth(5),
                },
              ]}>
              Commodities News
            </Text>
          </View>
          <TouchableOpacity
            style={{ margin: responsiveWidth(3) }}
            onPress={() => navigation.openDrawer()} // Open the drawer on press
          >
            <Image
              source={require('../../../assets/images/menu.png')}
              style={{ width: responsiveWidth(6), height: responsiveHeight(3) }}
            />
          </TouchableOpacity>
        </View>

      </View>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  topContiner: {
    flex: 1 / 10,
    backgroundColor: '#3949ab',
    borderWidth: responsiveWidth(0.1),
    borderBottomRightRadius: responsiveWidth(15),
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'center',
    flexDirection: 'row',
  },
  topContainerText: {
    fontSize: responsiveFontSize(2.5),
    fontWeight: '700',
    color: 'white',
    alignSelf: 'center',
    paddingLeft: responsiveWidth(16),
  },
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 6,
    backgroundColor: '#3949ab',
    width: responsiveWidth(30),
    height: responsiveHeight(10.5),
    borderRadius: 5,
    marginBottom: 10,
    marginTop: 6,
  },
  sideLine: {
    width: responsiveWidth(0.7),
    height: responsiveWidth(10),
    position: 'absolute',
    left: 0,
    borderRadius: 10,
  },
  searchEluation: {
    borderBottomWidth: 0.1,
    shadowColor: '#b3b3b3',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 2,
  },
  searchCommodityBox: {
    borderBottomWidth: 0.1,
    shadowColor: COLORS.textColor,
    shadowOffset: {
      width: 2,
      height: 5,
    },
    shadowOpacity: 0.5,
    shadowRadius: 4.84,
    elevation: 5,
  },
});
