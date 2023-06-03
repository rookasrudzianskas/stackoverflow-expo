import {ActivityIndicator, FlatList, SafeAreaView, StyleSheet, Text, View} from "react-native";
import QuestionListItem from "../src/components/QuestionListItem";
import questionsData from '../data/questions.json'
import {useLayoutEffect, useState} from "react";
import {useNavigation} from "expo-router";
import QuestionHeader from "../src/components/QuestionHeader";
import {useQuery} from "urql";
import {getQuestions, questionQuery} from "../src/graphql/queries";

export default function Page() {
  const [searchTerm, setSearchTerm] = useState('');
  const [result] = useQuery({ query: questionQuery });

  const navigation = useNavigation();

  if (result.fetching) {
    return (
      <View className="h-screen flex items-center justify-center">
        <ActivityIndicator />
      </View>
    );
  }
  if (result.error) {
    return (
      <View className="h-screen flex items-center justify-center">
        <Text>Error: {result.error.message}</Text>
      </View>
    );
  }

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
