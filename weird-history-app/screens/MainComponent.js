import { Platform, View } from 'react-native';
import Constants from 'expo-constants';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import HomeScreen from './HomeScreen';
import StoryInfoScreen from './StoryInfoScreen';
import WeirdStoriesScreen from './WeirdStoriesScreen';

const Drawer = createDrawerNavigator();

const screenOptions = {
  headerStyle: {
    backgroundColor: '#d56a53',
  },
  headerTintColor: '#fff',
};

const HomeNavigator = () => {
  const Stack = createStackNavigator();
  return (
    <Stack.Navigator screenOptions={screenOptions}>
      <Stack.Screen
        name='Home'
        component={HomeScreen}
        options={{ title: 'Home' }}
      />
    </Stack.Navigator>
  );
};

const StoriesNavigator = () => {
  const Stack = createStackNavigator();
  return (
    <Stack.Navigator screenOptions={screenOptions}>
      <Stack.Screen
        name='Stories'
        component={WeirdStoriesScreen}
        options={{ title: 'Home' }}
      />
      <Stack.Screen
        name='StoryInfo'
        component={StoryInfoScreen}
        options={({ route }) => ({
          title: route.params.story.name,
        })}
      />
    </Stack.Navigator>
  );
};

const AboutNavigator = () => {
  const Stack = createStackNavigator();
  return (
    <Stack.Navigator screenOptions={screenOptions}>
      <Stack.Screen name='About' component={AboutScreen} />
    </Stack.Navigator>
  );
};

const ContactNavigator = () => {
  const Stack = createStackNavigator();
  return (
    <Stack.Navigator screenOptions={screenOptions}>
      <Stack.Screen
        name='Contact'
        component={ContactScreen}
        options={{ title: 'Contact Us' }}
      />
    </Stack.Navigator>
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
          options={{ title: 'Story' }}
        />

        <Drawer.Screen name='About' component={AboutNavigator} />

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
