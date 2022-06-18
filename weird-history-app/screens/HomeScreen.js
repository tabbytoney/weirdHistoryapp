import { Text, View, ScrollView } from 'react-native';
import { Card } from 'react-native-elements';
import { useState } from 'react';
import { PEOPLE } from '../shared/people';
import { STORIES } from '../shared/stories';

const FeaturedItem = ({ item }) => {
  if (item) {
    return (
      <Card containerStyle={{ padding: 0 }}>
        <Card.Image source={item.image}>
          <View style={{ justifyContent: 'center', flex: 1 }}>
            <Text
              style={{
                color: '#f9b9ab',
                textAlign: 'center',
                fontSize: 20,
              }}
            >
              {item.name}
            </Text>
          </View>
        </Card.Image>
        <Text style={{ margin: 20 }}>{item.description}</Text>
      </Card>
    );
  }
  return <View />;
};

const HomeScreen = () => {
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
