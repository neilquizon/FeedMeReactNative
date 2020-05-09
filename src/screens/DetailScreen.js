import React, { useState, useEffect } from 'react';
import yelp from '../api/yelp';
import { StyleSheet, SafeAreaView, Text, FlatList, Image} from 'react-native';

const DetailScreen = ({route})=>{
    const {id} = route.params;
    const [Detail, setDetail] = useState('');
    const searchAPI = async () => {
        const response = await yelp.get('/'+id, {
          params: {
            locale:'en_US'
          }
        });
        console.log(response.data);
        setDetail(response.data);
    }
    useEffect(() => {
        searchAPI();
      }, [])



    return (
       <SafeAreaView style={StyleSheet.container}>
        <Text style={StyleSheet.alias}> Name : {Detail.alias}</Text>
        <Text> Phone : {Detail.display_phone}</Text>
            <FlatList
            data={Detail.photos}
            keyExtractor={(Detail) => Detail.photos}
            renderItem={({item})=>{
                return <Image source={{uri: item}} style={styles.image}/>
            }}
            />
        </SafeAreaView> 
    );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'stretch',
      justifyContent: 'center',
    },
    image:{
        height: 250,
        margin:10,
    },
    alias:{
        fontWeight:'bold',
        margin:10,
        paddingLeft:10
    }
  });

  export default DetailScreen;