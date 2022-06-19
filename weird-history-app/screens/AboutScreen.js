import { ScrollView } from 'react-native-gesture-handler';
import { Card, Text, Avatar, Image } from 'react-native-elements';

const Blurb = () => {
  return (
    <Card>
      <Card.Title>Dr. Tabby</Card.Title>
      <Card.Divider />
      <Avatar
        size='xlarge'
        containerStyle={{
          marginTop: 10,
          marginBottom: 10,
          alignSelf: 'center',
        }}
        source={require('../assets/images/profile.jpg')}
      />
      <Text style={{ margin: 10, textAlign: 'left' }}>
        Dr. Tabby graduated from Oklahoma State University with a Doctorate of
        Philosophy in History. My areas of focus are political, legal, and
        diplomatic relations between the United States and American Indian
        tribes. I also studied general American and women's history. I worked as
        an educator and editor within a museum, as well as taught university.
        Today I work as a software engineer.
      </Text>
    </Card>
  );
};

const AboutScreen = () => {
  return (
    <ScrollView>
      <Blurb />
    </ScrollView>
  );
};

export default AboutScreen;
