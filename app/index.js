import { StyleSheet, Text, View } from "react-native";
import QuestionListItem from "../src/components/QuestionListItem";
import questions from '../data/questions.json'

export default function Page() {
  const question = questions.items[0]
  return (
    <View className="flex flex-1 bg-white">
      <View className="mx-5">
        <QuestionListItem />
      </View>
    </View>
  );
}
