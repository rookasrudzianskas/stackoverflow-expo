import {FlatList, StyleSheet, Text, View} from "react-native";
import QuestionListItem from "../src/components/QuestionListItem";
import questionsData from '../data/questions.json'
import {useLayoutEffect, useState} from "react";
import {useNavigation} from "expo-router";
import QuestionHeader from "../src/components/QuestionHeader";

export default function Page() {
  const [searchTerm, setSearchTerm] = useState('');

  const navigation = useNavigation();

  // useLayoutEffect(() => {
  //   navigation.setOptions({
  //     headerSearchBarOptions: {
  //       onChangeText: (event) => setSearchTerm(event.nativeEvent.text),
  //       onBlur: search,
  //     },
  //   });
  // }, [navigation, searchTerm, setSearchTerm]);

  return (
    <View className="flex flex-1 bg-white">
      <View className="mx-4">
        <FlatList
          data={questionsData.items}
          showsVerticalScrollIndicator={false}
          renderItem={({ item }) => <QuestionListItem question={item} />}
        />
      </View>
    </View>
  );
}
