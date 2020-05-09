import React from 'react';
import { StyleSheet, View, Text, FlatList, ShadowPropTypesIOS } from 'react-native';
import PriceResult from './PriceResult';

const PriceResultList = ({title,results,navigation}) => {
  return (

    <View>
        <Text style={styles.heading}>{title}</Text>
        <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        data={results}
        keyExtractor={(results) => results.id}
        renderItem={({ item }) => {
          return <PriceResult result={ item } navigation={navigation}/>
        }}
      />
    </View>

  );
}

const styles = StyleSheet.create({
heading : {
    fontSize: 16,
    fontWeight: 'bold'
}
});

export default PriceResultList;