import 'react-native-gesture-handler';
import { StyleSheet, Text, View } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import { useFonts } from 'expo-font';

import Home from './screens/Home';
import Details from './screens/Details';


const Stack = createStackNavigator();

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: "transparent"
  }
}

const App = () => {

  const [loaded] = useFonts({
      MontserratBold: require("./assets/fonts/Montserrat-Bold.ttf"),
      MontserratLight: require("./assets/fonts/Montserrat-Light.ttf"),
      MontserratMedium: require("./assets/fonts/Montserrat-Medium.ttf"),
      MontserratRegular: require("./assets/fonts/Montserrat-Regular.ttf"),
      MontserratSemiBold: require("./assets/fonts/Montserrat-SemiBold.ttf"),
  });

  return (
    <NavigationContainer theme={theme}>
      <Stack.Navigator initialRouteName="Home" >
        <Stack.Screen name='Home' component={Home} />
        <Stack.Screen name='Details' component={Details} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
