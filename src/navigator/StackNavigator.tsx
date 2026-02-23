import { createStackNavigator } from '@react-navigation/stack';
import { PantallaInicioSesionScreen } from '../screens/PantallaInicioSesionScreen';
import { PantallaRegistroScreen } from '../screens/PantallaRegistroScreen';

export type RootStackParams ={
    PantallaInicioSesion: undefined,
    PantallaRegistro: undefined,
}

const Stack = createStackNavigator<RootStackParams>();

export const StackNavigator = () => {
  return (
    <Stack.Navigator
    screenOptions={{
      cardStyle:{
        backgroundColor:'white'
      },
      /* headerShown: false */
      headerStyle:{
        elevation:0
      }
    }}>
      <Stack.Screen name="PantallaInicioSesion" options={{headerShown: false}} component={PantallaInicioSesionScreen} />
      <Stack.Screen name="PantallaRegistro"  options={{headerShown: false}} component={PantallaRegistroScreen} />
    </Stack.Navigator>
  );
}