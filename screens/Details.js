import React from 'react';
import { Text, View, SafeAreaView, FlatList, Image, StatusBar } from 'react-native';

import { CircleButton, RectButton, SubInfo, FocusedStatusBar, DetailsBid, DetailsDesc } from '../components';
import { assets, COLORS, FONTS, SHADOWS, SIZES } from '../constants';

const DetailsHeader = ({data, navigation}) => (
      <View style={{width: "100%", height: 380,}}>
          <Image 
              source={data.image}     
              resizeMode="cover"     
              style={{width: "100%", height: "100%"}}
          />
          <CircleButton 
              imgUrl={assets.left} 
              handlePress={() => navigation.goBack()}
              left={15}
              top={StatusBar.currentHeight + 5}
          />
          <CircleButton 
              imgUrl={assets.heart} 
              right={15}
              top={StatusBar.currentHeight + 5}
          />
      </View>
)

const Details = ({route, navigation}) => {

  const { data } = route.params;

 
 
  return (
    <SafeAreaView style={{flex: 1}}>
      <FocusedStatusBar
          barStyle="dark-content"
          backgroundColor="transparent"
          transLucent={true}
      />
      <View style={{
        width: "100%",
        position: 'absolute',
        paddingVertical: SIZES.font,
        justifyContent: 'center',
        alignItems: 'center',
        bottom: 0,
        backgroundColor: "rgba(256, 256, 256, 0.5)",
        zIndex: 1,
      }}>
        <RectButton minWidth={180} fontSize={SIZES.large} {...SHADOWS.dark} />
      </View>

      <FlatList 
          data={data.bids}
          renderItem={({item}) => <DetailsBid bid={item} />}
          keyExtractor={(item) => item.id}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{paddingBottom: SIZES.large * 3}}
          ListHeaderComponent={() => (
            <React.Fragment>
              <DetailsHeader data={data} navigation={navigation} />
              <SubInfo />
              <View style={{padding: SIZES.font}}>
                <DetailsDesc data={data} />

                {data.bids.length > 0 && (
                  <Text style={{
                    fontSize: SIZES.font,
                    fontFamily: FONTS.semiBold,
                    color: COLORS.primary,
                  }}
                  >
                    Current Bids
                  </Text>
                )}
              </View>
            </React.Fragment>
          )}
      />
    </SafeAreaView>
  )
}

export default Details

