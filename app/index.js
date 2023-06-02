import { StyleSheet, Text, View } from "react-native";
import QuestionListItem from "../src/components/QuestionListItem";

export default function Page() {
  return (
    <View className="flex flex-1 bg-white">
      <QuestionListItem />
    </View>
  );
}
