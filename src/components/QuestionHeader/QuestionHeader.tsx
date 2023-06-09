// @ts-nocheck
import {View, Text, StyleSheet, FlatList} from 'react-native';
import { Entypo } from '@expo/vector-icons';
import React from "react";
import {decode} from "html-entities";
import Markdown from "react-native-markdown-display";

const QuestionHeader = ({ question }) => {
  return (
    <>
      <Text className="text-[#3b4045] text-[20px] mt-4 mb-3 font-[500]" style={{lineHeight: 28,}}>{decode(question.title)}</Text>
      <Text className="flex flex-row items-center text-xs">
        {question.score} votes •{' '}
        {question.is_answered && (
          <Entypo name="check" size={12} color="limegreen" />
        )}
        {question.answer_count} answers • {question.view_count} views
      </Text>
      <View style={styles.separator} />
      <Markdown>{decode(question.body_markdown)}</Markdown>
      <View className="flex flex-row my-3 items-center pr-10" style={{gap: 5,}}>
        <View className="w-[260px] flex flex-row items-center flex-wrap gap-2">
          {question.tags.map((tag) => (
            <Text key={tag} style={styles.tag}>{tag}</Text>
          ))}
        </View>
        <Text className="text-xs text-[#6a737c] mr-24">
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
