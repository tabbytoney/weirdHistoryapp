import { Text, View, ScrollView, Button } from 'react-native';
import { Header, Icon } from 'react-native-elements';

export const HeaderCom = ({ navigation }) => {
  return (
    <Header
      leftComponent={
        <Icon name='menu' onPress={() => navigation.openDrawer()} />
      }
      centerComponent={
        <Text
          style={{ color: '#fff', justifyContent: 'center', fontSize: 20 }}
        ></Text>
      }
      rightComponent={
        <Icon
          name='home'
          color='#fff'
          onPress={() => navigation.navigate('Home')}
        />
      }
    />
  );
};

export default HeaderCom;
