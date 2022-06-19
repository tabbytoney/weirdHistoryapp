import { FlatList } from 'react-native';
import { Avatar, ListItem } from 'react-native-elements';
import { useState } from 'react';
import { PEOPLE } from '../shared/people';

const WeirdPeopleScreen = ({ navigation }) => {
  const [people, setPeople] = useState(PEOPLE);

  const renderPeopleItem = ({ item: people }) => {
    return (
      <ListItem onPress={() => navigation.navigate('PeopleInfo', { people })}>
        <Avatar source={people.image} rounded />
        <ListItem.Content>
          <ListItem.Title>{people.name}</ListItem.Title>
          <ListItem.Subtitle>{people.previewText}</ListItem.Subtitle>
        </ListItem.Content>
      </ListItem>
    );
  };

  return (
    <FlatList
      data={people}
      renderItem={renderPeopleItem}
      keyExtractor={(item) => item.id.toString()}
    />
  );
};

export default WeirdPeopleScreen;
