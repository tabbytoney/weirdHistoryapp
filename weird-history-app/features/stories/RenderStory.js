import { Text, View } from 'react-native';
import { Card, Image } from 'react-native-elements';
import { ScrollView } from 'react-native-gesture-handler';

const RenderStory = ({ story }) => {
  if (story) {
    return (
      <View style={{ flex: 1 }}>
        <ScrollView>
          <View style={{ justifyContent: 'center', flex: 1 }}>
            <Image
              source={story.image}
              style={{
                width: 400,
                height: 200,
                justifyContent: 'center',
                alignItems: 'center',
              }}
            />
            <Text
              style={{
                color: 'black',
                textAlign: 'center',
                fontSize: 20,
                paddingLeft: 30,
                paddingRight: 30,
                paddingTop: 20,
                textShadowColor: 'black',
                textShadowOffset: { width: 1, height: 1 },
                textShadowRadius: 20,
              }}
            >
              {story.name}
            </Text>
          </View>

          <Text style={{ margin: 20, fontSize: 23, textAlign: 'center' }}>
            {story.description}
          </Text>
        </ScrollView>
      </View>
    );
  }
  return <View />;
};
export default RenderStory;
