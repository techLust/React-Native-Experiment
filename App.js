import React from 'react';
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import IndexScreen from './src/Screens/IndexScreen';
// import { Provider as BlogProvider } from './src/context/BlogContext';
import { Provider } from './src/context/BlogContext';
import ShowBlogScreen from './src/Screens/ShowBlogScreen';
import CreateBlogScreen from './src/Screens/CreateBlogScreen';
import { Button, Text } from 'react-native';
import HeaderLogo from './src/components/HeaderLogo'

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <Provider>
      <MainApp></MainApp>
    </Provider>
  );
}

export const MainApp = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={({ navigation }) => ({
          headerStyle: {
            backgroundColor: 'red',
          },
          headerTintColor: 'green',
          headerTitleStyle: {
            fontWeight: 'itelic',
          },
          headerTitle: 'BLOG APP',
          // headerRight: () => (
          //   <HeaderLogo
          //     name="plus"
          //     iconColor='green'
          //     backgroundColor='white'
          //     onPress={() => navigation.navigate('Cart')}
          //   />
          // ),
          // headerLeft: () => (
          //   <HeaderLogo
          //     name="plus"
          //     iconColor='green'
          //     backgroundColor='white'
          //     onPress={() => navigation.navigate('Cart')}
          //   />
          // ),
        })}
      >
        <Stack.Screen
          name='Blogs'
          component={IndexScreen}
          options={{
            // headerTitle: (props) => <LogoTitle {...props} />,
            // headerTitle: 'BLOG APP',

            // headerRight: () => (
            //   <Button
            //     onPress={() => navigation.navigator('CreatePost')}
            //     title="Post"
            //   // color="green"
            //   />
            // ),
            // headerLeft:() => (<Text>Hellooooo</Text>)

          }}
        />
        <Stack.Screen
          name='ShowBlog'
          component={ShowBlogScreen}
        />
        <Stack.Screen
          name='CreatePost'
          component={CreateBlogScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

