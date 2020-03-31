import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import LandingPage from './components/LandingPage';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './components/Home';
import { Provider } from 'react-redux';
import store from './redux/store';
import PokemonList from './components/PokemonList';

const Stack = createStackNavigator();

const App =()=> {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Landing_page">
          <Stack.Screen name="Landing_page" options={{headerShown:false}} component={LandingPage}/>
          <Stack.Screen name="Home" options={{headerShown:false}} component={ Home }  />
          <Stack.Screen name="PokemonList" component={ PokemonList }/>
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}

export default App;
