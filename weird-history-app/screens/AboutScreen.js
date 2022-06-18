import { ScrollView } from 'react-native-gesture-handler';
import { Card } from 'react-native-elements';

const Blurb = () => {
  return (
    <Card>
      <Card.Title>About</Card.Title>
      <Card.Divider />
      <Text style={{ margin: 10 }}>About me placeholder.</Text>
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
