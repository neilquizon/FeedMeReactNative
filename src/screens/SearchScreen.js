import React, { useState, useEffect } from 'react';
import { StyleSheet, View, ScrollView, Text } from 'react-native';
import SearchBar from '../components/SearchBar';
import yelp from '../api/yelp';
import PriceResultList from '../components/PriceResultList';

const SearchScreen = ({navigation}) => {
  const [term, setTerm] = useState('')
  const [businesses, setBusinesses] = useState([]);

  const searchAPI = async () => {
    const response = await yelp.get('/search', {
      params: {
        limit: 30,
        term: term,
        location: 'vancouver'
      }
    });
//console.log(response.data.businesses)
    setBusinesses(response.data.businesses);
  }
  useEffect(() => {
    searchAPI();
  }, [])

  const filterByPrice = (price) => {
    return businesses.filter( business => {
        return business.price === price
    });
}

  return (
    <View style={{flex: 1}}>
      <SearchBar
        term={term}
        onTermChange={(newTerm) => setTerm(newTerm)}
        onTermSubmit={() => searchAPI()} />
        <ScrollView>
      <PriceResultList title='Budget Eats' results={filterByPrice('$')} navigation={navigation}/>
      <PriceResultList title='Average'results={filterByPrice('$$')} navigation={navigation}/>
      <PriceResultList title="Gettin' Pricey"results={filterByPrice('$$$')} navigation={navigation}/>
      <PriceResultList title='Once in a Blue Moon'results={filterByPrice('$$$$')} navigation={navigation}/>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({});

export default SearchScreen;