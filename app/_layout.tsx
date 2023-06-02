import { Stack, } from 'expo-router';
import {Provider} from "urql";
import {client} from "../src/graphql/client";

const RootLayout = () => {
  return (
    <Provider value={client}>
      <Stack>
        <Stack.Screen name="index" options={{ title: 'StackOverflow' }} />
      </Stack>
    </Provider>
  );
};

export default RootLayout;
