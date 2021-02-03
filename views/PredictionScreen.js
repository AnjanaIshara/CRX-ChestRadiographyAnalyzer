import * as React from 'react';
import { Button,View, Text,TouchableOpacity } from 'react-native';
const PredicitonsScreen=({navigation})=>{
    return(
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Welcome to the Predictions srcreen</Text>
     <TouchableOpacity onPress={() => navigation.navigate('Home')}>
         <Text>Go to Home</Text>
     </TouchableOpacity>
     
      
    </View>
    )
}
export default PredicitonsScreen;