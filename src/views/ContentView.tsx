import { View } from "../components/view/View";
import { VStack } from "../components/vstack/VStack";
import { HStack } from "../components/hstack/HStack";
import { Spacer } from "../components/spacer/Spacer";
import { Text } from "../components/text/Text";

export function ContentView() {
  return (
    <View>
      <VStack alignment="leading" padding>
        <Text font="largeTitle">Turtle Rock</Text>
        <HStack alignment="top">
          <Text>Joshua Tree National Park</Text>
          <Spacer />
          <Text>California</Text>
        </HStack>
        <Text font="title2">About Turtle Rock</Text>
        <Text>
          Suscipit inceptos est felis purus aenean aliquet adipiscing diam
          venenatis, augue nibh duis neque aliquam tellus condimentum sagittis
          vivamus, cras ante etiam sit conubia elit tempus accumsan libero,
          mattis per erat habitasse cubilia ligula penatibus curae. Sagittis
          lorem augue arcu blandit libero molestie non ullamcorper, finibus
          imperdiet iaculis ad quam per luctus neque, ligula curae mauris
          parturient diam auctor eleifend laoreet ridiculus, hendrerit
          adipiscing sociosqu pretium nec velit aliquam. Inceptos egestas
          maecenas imperdiet eget id donec nisl curae congue, massa tortor
          vivamus ridiculus integer porta ultrices venenatis aliquet, curabitur
          et posuere blandit magnis dictum auctor lacinia, eleifend dolor in
          ornare vulputate ipsum morbi felis. Faucibus cursus malesuada orci
          ultrices diam nisl taciti torquent, tempor eros suspendisse euismod
          condimentum dis velit mi tristique, a quis etiam dignissim dictum
          porttitor lobortis ad fermentum, sapien consectetur dui dolor purus
          elit pharetra. Interdum mattis sapien ac orci vestibulum vulputate
          laoreet proin hac, maecenas mollis ridiculus morbi praesent cubilia
          vitae ligula vel, sem semper volutpat curae mauris justo nisl luctus,
          non eros primis ultrices nascetur erat varius integer.
        </Text>
      </VStack>
    </View>
  );
}
