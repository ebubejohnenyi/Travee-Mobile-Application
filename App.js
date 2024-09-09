import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Homepage from './pages/Homepage';
import SearchTour from './pages/SearchTour';
import Tour from './pages/Tour';
import Map from './pages/Map';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { SafeAreaProvider } from 'react-native-safe-area-context';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <View style={styles.container}>
      <NavigationContainer style={styles.container}>
        <SafeAreaProvider>
          <Stack.Navigator initialRouteName="Homepage">
            <Stack.Screen name="Homepage" component={Homepage} options={{headerShown: false}}/>
            <Stack.Screen name='SearchTour' component={SearchTour} options={{headerShown: false}}/>
            <Stack.Screen name='Tour' component={Tour} options={{headerShown: false}} />
            <Stack.Screen name='Map' component={Map} options={{headerShown: false}} />
          </Stack.Navigator>
        </SafeAreaProvider>
      </NavigationContainer>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000'
  },
});