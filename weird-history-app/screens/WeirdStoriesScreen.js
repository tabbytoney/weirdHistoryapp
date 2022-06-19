import { FlatList } from 'react-native';
import { Avatar, ListItem } from 'react-native-elements';
import { useState } from 'react';
import { STORIES } from '../shared/stories';

const WeirdStoriesScreen = ({ navigation }) => {
  const [stories, setStories] = useState(STORIES);

  const renderStoryItem = ({ item: story }) => {
    return (
      <ListItem onPress={() => navigation.navigate('StoryInfo', { story })}>
        <Avatar source={story.image} rounded />
        <ListItem.Content>
          <ListItem.Title>{story.name}</ListItem.Title>
          <ListItem.Subtitle>{story.previewText}</ListItem.Subtitle>
        </ListItem.Content>
      </ListItem>
    );
  };

  return (
    <FlatList
      data={stories}
      renderItem={renderStoryItem}
      keyExtractor={(item) => item.id.toString()}
    />
  );
};

export default WeirdStoriesScreen;
