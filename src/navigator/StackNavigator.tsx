import { createStackNavigator } from '@react-navigation/stack';
import { PantallaInicioSesionScreen } from '../screens/PantallaInicioSesionScreen';
import { PantallaRegistroScreen } from '../screens/PantallaRegistroScreen';
import { useState } from 'react';
import { PantallaHomeScreen } from '../screens/HomeScreen/PantallaHomeScreen';


export interface User{
  id: number;
  name: string;
  lastName: string;
  email: string;
  password: string;
  confirmPassword: string;
}

const Stack = createStackNavigator();

export const StackNavigator = () => {
      //datos de prueba
      const users = [
          {id: 1,
          name: 'Gabriela',
          lastName: 'Correa',
          email: 'kathy.paucar47@gmail.com',
          password: '123456',
          confirmPassword: '123456'},

          {id: 2,
          name: 'Ricardo',
          lastName: 'Garcia',
          email: 'ry@gmail.com',
          password: '789012',
          confirmPassword: '789012'}
      ]

      //hook useState permite getsionar el estado de la lsita de usuarios
      const [listUsers, setListUsers] = useState<User[]>(users);

      //funcion para agregar usuarios al arreglo listUsers
      const handleAddUser = (user: User): void => {
        setListUsers([...listUsers, user]);
      }
  return (
    <Stack.Navigator>
      <Stack.Screen name="PantallaInicioSesion" 
      options={{headerShown: false}} 
      children={()=> <PantallaInicioSesionScreen users={listUsers}/>} />
      <Stack.Screen name="PantallaRegistro"  
      options={{headerShown: false}} 
      children={()=> <PantallaRegistroScreen users={listUsers} handleAddUser={handleAddUser}/>} />
      <Stack.Screen name="PantallaHome" 
      options={{headerShown: false}} 
      component={PantallaHomeScreen} />
    </Stack.Navigator>
  );
}