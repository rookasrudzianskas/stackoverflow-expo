//@ts-nocheck
import React, {useLayoutEffect, useState} from 'react';
import {Text, View, StyleSheet, ActivityIndicator, FlatList} from 'react-native';
import {useNavigation} from "expo-router";
import {useQuery} from "urql";
import {searchQuery} from "../src/graphql/queries";
import QuestionListItem from "../src/components/QuestionListItem";

const Search = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const navigation = useNavigation();
  const [result, fetch] = useQuery({
    query: searchQuery,
    pause: true,
    variables: {term: searchTerm}
  })

  const search = () => {
    fetch()
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

  if(result.fetching) return (
    <View className="h-screen flex items-center justify-center">
      <ActivityIndicator />
    </View>
  )

  if(result.error) return (
    <View className="h-screen flex items-center justify-center">
      <Text>Error: {result.error.message}</Text>
    </View>
  )

  if(!result.data) return (
    <View className="h-screen flex items-center justify-center">
      <Text>There is no question</Text>
    </View>
  )

  return (
    <View className="h-screen flex bg-white pt-28">
      <FlatList
        data={result.data.search.items}
        showsVerticalScrollIndicator={false}
        renderItem={({item}) => <QuestionListItem question={item} />}
      />
    </View>
  );
};

export default Search;
