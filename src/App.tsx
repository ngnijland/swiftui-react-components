import { View } from "./components/view/View";
import { VStack } from "./components/vstack/VStack";
import { Text } from "./components/text/Text";

import "./App.css";

function App() {
  return (
    <View>
      <VStack alignment="leading">
        <Text>Turtle Rock</Text>
        <Text>Joshua Tree National Park</Text>
      </VStack>
    </View>
  );
}

export default App;
