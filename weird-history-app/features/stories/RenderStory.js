import { Text, View } from 'react-native';
import { Card } from 'react-native-elements';

const RenderStory = ({ story }) => {
  if (story) {
    return (
      <Card containerStyle={{ padding: 0 }}>
        <Card.Image source={story.image}>
          <View style={{ justifyContent: 'center', flex: 1 }}>
            <Text style={{ color: 'white', textAlign: 'center', fontSize: 20 }}>
              {story.name}
            </Text>
          </View>
        </Card.Image>
        <Text style={{ margin: 20 }}>{story.description}</Text>
      </Card>
    );
  }
  return <View />;
};
export default RenderStory;
