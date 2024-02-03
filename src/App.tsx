import { View } from "./components/view/View";
import { VStack } from "./components/vstack/VStack";
import { HStack } from "./components/hstack/HStack";
import { Spacer } from "./components/spacer/Spacer";
import { Text } from "./components/text/Text";

import "./App.css";

function App() {
  return (
    <View>
      <VStack alignment="leading" padding>
        <Text>Turtle Rock</Text>
        <HStack alignment="top">
          <Text>Joshua Tree National Park</Text>
          <Spacer />
          <Text>California</Text>
        </HStack>
      </VStack>
    </View>
  );
}

export default App;
