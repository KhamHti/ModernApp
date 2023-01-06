import { View, Text, Image } from 'react-native';
import React from 'react';

import { EthPrice } from './SubInfo';
import { SIZES, COLORS, FONTS } from '../constants';

const DetailsBid = ({bid}) => {
  return (
    <View style={{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: "100%",
        paddingHorizontal: SIZES.base * 2,
        marginVertical: SIZES.base,
    }}>
      <Image 
        source={bid.image}
        resizeMode="contain"
        style={{width: 45, height: 45}}
      />
      <View>
        <Text style={{
            fontSize: SIZES.small,
            fontFamily: FONTS.semiBold,
            color: COLORS.primary,
        }}>
            Bid placed by {bid.name}
        </Text>
        <Text style={{
            fontSize: SIZES.small - 2,
            fontFamily: FONTS.regular,
            color: COLORS.secondary,
        }}>
            {bid.date}
        </Text>
      </View>
      <EthPrice price={ bid.price } />
    </View>
  )
}

export default DetailsBid