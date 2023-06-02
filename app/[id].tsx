//@ts-nocheck
import React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import {useSearchParams} from "expo-router";
import questions from '../data/questions.json';

const QuestionDetailsPage = () => {
  const {id} = useSearchParams();
  const question = questions.items.find((q) => q.question_id == id);
  if(!question) return (<Text>Question not found</Text>);

  return (
    <View>
      <Text>
        byrookas 🚀 {id}
      </Text>
    </View>
  );
};

export default QuestionDetailsPage;
