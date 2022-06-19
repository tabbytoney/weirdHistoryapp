import { Platform, View } from 'react-native';
import Constants from 'expo-constants';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import HomeScreen from './HomeScreen';
import StoryInfoScreen from './StoryInfoScreen';
import WeirdStoriesScreen from './WeirdStoriesScreen';
import { Header, Text, Icon } from 'react-native-elements';

const Drawer = createDrawerNavigator();

const screenOptions = {
  headerStyle: {
    backgroundColor: '#f8a492',
  },
  headerTintColor: '#fff',
};

const HomeNavigator = ({ navigation }) => {
  const Stack = createStackNavigator();
  return (
    <>
      <Header
        backgroundColor='#d56a53'
        leftComponent={
          <Icon name='menu' onPress={() => navigation.openDrawer()} />
        }
        centerComponent={
          <Text style={{ color: '#fff', justifyContent: 'center' }}>Home</Text>
        }
      />
      <Stack.Navigator screenOptions={screenOptions}>
        <Stack.Screen
          name='Home'
          component={HomeScreen}
          options={{ title: 'Home' }}
        />
      </Stack.Navigator>
    </>
  );
};

const StoriesNavigator = ({ navigation }) => {
  const Stack = createStackNavigator();
  return (
    <>
      <Header
        backgroundColor='#d56a53'
        leftComponent={
          <Icon name='menu' onPress={() => navigation.openDrawer()} />
        }
        centerComponent={
          <Text
            style={{ color: '#fff', justifyContent: 'center', fontSize: 20 }}
          >
            Weird Stories
          </Text>
        }
      />
      <Stack.Navigator screenOptions={screenOptions}>
        <Stack.Screen
          name='Stories'
          component={WeirdStoriesScreen}
          options={{ title: 'Weird Stories' }}
        />
        <Stack.Screen
          name='StoryInfo'
          component={StoryInfoScreen}
          options={({ route }) => ({
            title: route.params.story.name,
          })}
        />
      </Stack.Navigator>
    </>
  );
};

const AboutNavigator = ({ navigation }) => {
  const Stack = createStackNavigator();
  return (
    <>
      <Header
        backgroundColor='#d56a53'
        leftComponent={
          <Icon name='menu' onPress={() => navigation.openDrawer()} />
        }
        centerComponent={
          <Text
            style={{ color: '#fff', justifyContent: 'center', fontSize: 20 }}
          >
            About
          </Text>
        }
      />
      <Stack.Navigator screenOptions={screenOptions}>
        <Stack.Screen name='About' component={AboutScreen} />
      </Stack.Navigator>
    </>
  );
};

const ContactNavigator = ({ navigation }) => {
  const Stack = createStackNavigator();
  return (
    <>
      <Header
        backgroundColor='#d56a53'
        leftComponent={
          <Icon name='menu' onPress={() => navigation.openDrawer()} />
        }
        centerComponent={
          <Text
            style={{ color: '#fff', justifyContent: 'center', fontSize: 20 }}
          >
            Contact Us
          </Text>
        }
      />
      <Stack.Navigator screenOptions={screenOptions}>
        <Stack.Screen
          name='Contact'
          component={ContactScreen}
          options={{ title: 'Contact Us' }}
        />
      </Stack.Navigator>
    </>
  );
};

const Main = () => {
  return (
    <View
      style={{
        flex: 1,
        paddingTop: Platform.OS === 'ios' ? 0 : Constants.statusBarHeight,
      }}
    >
      <Drawer.Navigator
        drawerContentOptions={{
          activeTintColor: 'pink',
          activeBackgroundColor: 'grey',
          inactiveTintColor: 'black',
          inactiveBackgroundColor: 'white',
          labelStyle: {
            fontSize: 20,
            marginLeft: 10,
          },
        }}
        initialRouteName='Home'
        drawerStyle={{ backgroundColor: '#fff' }}
      >
        <Drawer.Screen
          name='Home'
          component={HomeNavigator}
          options={{ title: 'Home' }}
        />
        <Drawer.Screen
          name='Stories'
          component={StoriesNavigator}
          options={{ title: 'Weird Stories' }}
        />

        <Drawer.Screen
          name='About'
          component={AboutNavigator}
          options={{ title: 'About Us' }}
        />

        <Drawer.Screen
          name='Contact'
          component={ContactNavigator}
          options={{ title: 'Contact Us' }}
        />
      </Drawer.Navigator>
    </View>
  );
};

export default Main;
