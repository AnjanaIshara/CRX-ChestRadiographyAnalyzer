import 'react-native-gesture-handler';
import * as React from 'react';
import { View, Text,Button,Image,TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import TypeWriter from 'react-native-typewriter';
import DetailsScreen from './views/DetailsScreen';
import PredictionScreen from './views/PredictionScreen';
function SplashScreen({navigation}) {
  setTimeout(()=>{
    navigation.navigate('Home');
  },4000);
  return (
    <View style={{ flex: 1, alignItems: 'center',backgroundColor:'#001845', justifyContent: 'center' }}>
      <Image
                style={{width: 200,
                    height: 200}}
                source={require('./assets/animation.gif')} />
      
      <Text style={{color:'#A0A0A0',fontSize:40}}>CRX</Text>
      <TypeWriter style={{color:'#FFF',fontSize:20}} typing={1}>Chest Radiography analyzer</TypeWriter>
    </View>
  );
}

function HomeScreen({navigation}) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Screen</Text>
      <Button
        title="Go to Details"
        onPress={() => navigation.navigate('Details')}
      />
      <TouchableOpacity onPress={() => navigation.navigate('Prediction')}>
         <Text>Get Predicitons</Text>
     </TouchableOpacity>
    </View>
  );
}


const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
      <Stack.Screen name="Splash" component={SplashScreen} options= {{ headerShown: false }} />
        <Stack.Screen name="Home" component={HomeScreen} options= {{ headerShown: false }} />
        <Stack.Screen name="Details" component={DetailsScreen} options= {{ headerShown: false }} />
        <Stack.Screen name="Prediction" component={PredictionScreen} options= {{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;