import {FlatList, StyleSheet, Text, View} from "react-native";
import QuestionListItem from "../src/components/QuestionListItem";
import questionsData from '../data/questions.json'

export default function Page() {
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
