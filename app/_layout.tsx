import {Link, Stack,} from 'expo-router';
import {Provider} from "urql";
import {client} from "../src/graphql/client";
import {AntDesign} from "@expo/vector-icons";

const RootLayout = () => {
  return (
    <Provider value={client}>
      <Stack>
        <Stack.Screen name="index" options={{
          title: 'StackOverflow',
          headerRight: () => (
            <Link href={`/search`}>
              <AntDesign name="search1" size={20} color="dimgray" />
            </Link>
          )
        }} />
      </Stack>
    </Provider>
  );
};

export default RootLayout;
