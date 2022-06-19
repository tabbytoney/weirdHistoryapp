import { Text, View, ScrollView, Button } from 'react-native';
import { Avatar, Card, ListItem, Header, Icon } from 'react-native-elements';
import { useState } from 'react';
import { PEOPLE } from '../shared/people';
import { STORIES } from '../shared/stories';
import HeaderCom from '../features/Header';

const FeaturedItem = ({ item }) => {
  if (item) {
    return (
      <Card containerStyle={{ padding: 0 }}>
        <Card.Image source={item.image}>
          <View style={{ justifyContent: 'center', flex: 1 }}>
            <Text
              style={{
                color: '#fff',
                textAlign: 'center',
                fontSize: 20,
                paddingLeft: 30,
                paddingRight: 30,
                textShadowColor: 'black',
                textShadowOffset: { width: 1, height: 1 },
                textShadowRadius: 20,
              }}
            >
              {item.name}
            </Text>
          </View>
        </Card.Image>
        <Text style={{ margin: 20 }}>{item.previewText}</Text>
      </Card>
    );
  }
  return <View />;
};

const HomeScreen = ({ navigation }) => {
  const [stories, setStories] = useState(STORIES);
  const [people, setPeople] = useState(PEOPLE);

  const featStory = stories.find((item) => item.featured);
  const featPeople = people.find((item) => item.featured);

  return (
    <ScrollView>
      <FeaturedItem item={featStory} />
      <FeaturedItem item={featPeople} />
    </ScrollView>
  );
};

export default HomeScreen;
