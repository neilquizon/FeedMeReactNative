import React from 'react';
import { StyleSheet, View, Text, Image, TouchableOpacity } from 'react-native';

const PriceResult = ({ result, navigation }) => {
 
    const showDetail = (business) =>{
        navigation.navigate('SearchDetailScreen',business)
    }

    return (
        <View>
            <TouchableOpacity onPress = {()=>{
               showDetail(result)
            }}>
            <Image style={styles.image} source={{ uri: result.image_url }} />
            </TouchableOpacity>
            <Text style={styles.name}>{result.name}</Text>
            <Text style={styles.star}>Avg. {result.rating} stars from {result.review_count} reviews</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    image: {
        width: 200,
        height: 100,
        borderRadius: 4,
        margin: 6
    },
    name: {
        fontWeight: 'bold'
    }
});

export default PriceResult;