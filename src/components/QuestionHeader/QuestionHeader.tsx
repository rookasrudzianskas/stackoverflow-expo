// @ts-nocheck
import {View, Text, StyleSheet, FlatList} from 'react-native';
import { Entypo } from '@expo/vector-icons';
import React from "react";

const QuestionHeader = ({ question }) => {
  return (
    <>
      <Text className="text-[#3b4045] text-[20px] mt-4 mb-3 font-[500]" style={{lineHeight: 28,}}>{question.title}</Text>
      <Text className="flex flex-row items-center text-xs">
        {question.score} votes •{' '}
        {question.is_answered && (
          <Entypo name="check" size={12} color="limegreen" />
        )}
        {question.answer_count} answers • {question.view_count} views
      </Text>
      <View style={styles.separator} />
      <Text className="text-[#232629]" style={{lineHeight: 18}}>{question.body_markdown}</Text>
      <View className="flex flex-row my-3 items-center" style={{flexWrap: 'wrap', gap: 5,}}>
        {question.tags.map((tag) => (
          <Text key={tag} style={styles.tag}>{tag}</Text>
        ))}
        <Text className="text-xs text-[#6a737c]" style={{marginLeft: 'auto',}}>
          asked {new Date(question.creation_date * 1000).toDateString()}
        </Text>
      </View>

      <Text style={{ fontSize: 16, marginVertical: 15 }}>
        {question.answer_count} Answers
      </Text>
    </>
  );
};

const styles = StyleSheet.create({
  tag: {
    backgroundColor: '#e1ecf4',
    color: '#39739d',
    padding: 5,
    fontSize: 12,
    borderRadius: 3,
    overflow: 'hidden',
  },
  separator: {
    borderTopWidth: StyleSheet.hairlineWidth,
    borderColor: 'lightgray',
    marginVertical: 10,
  },
});
export default QuestionHeader;
