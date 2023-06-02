//@ts-nocheck
import React from 'react';
import {Text, View, StyleSheet, FlatList} from 'react-native';
import {useSearchParams} from "expo-router";
import questions from '../data/questions.json';
import AnswerListItem from "../src/components/AnswerListItem";
import QuestionHeader from "../src/components/QuestionHeader";
import answers from '../data/answers.json';

const QuestionDetailsPage = () => {
  const {id} = useSearchParams();
  const question = questions.items.find((q) => q.question_id == id);
  if(!question) return (<Text>Question not found</Text>);

  return (
    <View className="mx-4">
      <FlatList
        data={answers.items}
        keyExtractor={(item) => item.answer_id.toString()}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => <AnswerListItem answer={item} />}
        ListHeaderComponent={() => <QuestionHeader question={question} />}
      />
    </View>
  );
};

export default QuestionDetailsPage;
