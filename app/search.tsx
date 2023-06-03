//@ts-nocheck
import React, {useLayoutEffect, useState} from 'react';
import {Text, View, StyleSheet} from 'react-native';
import {useNavigation} from "expo-router";

const Search = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const navigation = useNavigation();

  const search = () => {
    console.log('searching')
  }

  useLayoutEffect(() => {
    navigation.setOptions({
      headerSearchBarOptions: {
        onChangeText: (event) => setSearchTerm(event.nativeEvent.text),
        onBlur: search,
      },
    });
  }, [navigation, searchTerm, setSearchTerm]);

  return (
    <View>
      <Text>
        byrookas 🚀
      </Text>
    </View>
  );
};

export default Search;
