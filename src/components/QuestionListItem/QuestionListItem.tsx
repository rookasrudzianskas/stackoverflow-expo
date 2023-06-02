// @ts-nocheck
import { View, Text, StyleSheet } from 'react-native';
import { Entypo } from '@expo/vector-icons';
import {Link} from "expo-router";
import {decode} from "html-entities";

const QuestionListItem = ({ question}) => {
  return (
    <Link href={`/${question.question_id}`}>
      <View style={styles.container}>
        <Text className="flex items-center text-xs">
          {question.score} votes •{' '}
          {question.is_answered && (
            <Entypo name="check" size={12} color="limegreen" />
          )}
          {question.answer_count} answers • {question.view_count} views
        </Text>
        <Text className="text-[16px] text-[#0063bf] my-2">{decode(question.title)}</Text>
        <Text style={{lineHeight: 15}} className="text-xs text-gray-500" numberOfLines={2}>
          {decode(question.body_markdown)}
        </Text>
        <View className="flex flex-row my-3 items-center" style={{flexWrap: 'wrap', gap: 5,}}>
          {question.tags.map((tag) => (
            <Text key={tag} style={styles.tag}>{tag}</Text>
          ))}
          <Text className="text-xs text-[#6a737c]" style={{marginLeft: 'auto',}}>
            asked {new Date(question.creation_date * 1000).toDateString()}
          </Text>
        </View>
      </View>
    </Link>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
    borderBottomWidth: 0.5,
    borderColor: 'lightgray',
  },
  tag: {
    backgroundColor: '#e1ecf4',
    color: '#39739d',
    padding: 5,
    fontSize: 12,
    borderRadius: 3,
    overflow: 'hidden',
  },
});

export default QuestionListItem;
