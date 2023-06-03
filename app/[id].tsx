//@ts-nocheck
import React from 'react';
import {Text, View, StyleSheet, FlatList, ActivityIndicator} from 'react-native';
import {useSearchParams} from "expo-router";
import AnswerListItem from "../src/components/AnswerListItem";
import QuestionHeader from "../src/components/QuestionHeader";
import answers from '../data/answers.json';
import {getQuestionQuery} from "../src/graphql/queries";
import {useQuery} from "urql";

const QuestionDetailsPage = () => {
  const {id} = useSearchParams();
  const [result] = useQuery({
    query: getQuestionQuery,
    variables: { id },
  });

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

  const question = result.data.question.items[0];

  if(!question) return (<Text>There is no question</Text>)

  return (
    <View className="mx-4">
      <FlatList
        data={question.answers}
        keyExtractor={(item) => item.answer_id.toString()}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => <AnswerListItem answer={item} />}
        ListHeaderComponent={() => <QuestionHeader question={question} />}
      />
    </View>
  );
};

export default QuestionDetailsPage;
