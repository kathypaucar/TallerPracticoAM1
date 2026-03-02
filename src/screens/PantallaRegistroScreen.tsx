import React, { useState } from "react";
import {View, Text, TextInput, TouchableOpacity, Alert} from "react-native";
import { stylesGlobal } from "../theme/appTheme";
import { User } from '../navigator/StackNavigator';
import { CommonActions, useNavigation } from "@react-navigation/native";


  interface FormRegister {
    name: string;
    lastName: string;
    email: string;
    password: string;
    confirmPassword: string;
}

interface Props{
  users: User[];
  handleAddUser: (user: User) => void;
}

export const PantallaRegistroScreen = ({users, handleAddUser}: Props) => {
  const [formRegister, setFormRegister] = useState<FormRegister>({
        name: ' ',
        lastName: ' ',
        email: ' ',
        password: ' ',
        confirmPassword: ' '
    });

    //hoook useNavigation: permite navegar de una pantalla a otra
    const navigation = useNavigation();

    //funcion que captura los datso del formulario
    const handleChangeValue = (name: string, value: string): void => {
        //llamas funcion para actualizar el estado del formulario
        setFormRegister({...formRegister, [name]: value});
    }

    //funcion para ver si el usuario existe
    const verify = () => {
      const existUser = users.filter(user => user.email == formRegister.email)[0];
      return existUser;
    }

    //funcion para generas los nuevos ids de los usuarios
    const getIdUser = () => {
      const getId = users.length + 1;
      return getId;
    }

    //funcion para registrar a los usuarios
    const handleRegister = (): void => {
      if(formRegister.name == ' ' || formRegister.lastName == ' ' || formRegister.email == ' ' || formRegister.password == ' ' || formRegister.confirmPassword == ' '){
        Alert.alert("Error", "El usuario ya se encuentra registrado");
        return;
      }
      //crear objeto user
      const newUSer: User = {
        id: getIdUser(),
        name: formRegister.name,
        lastName: formRegister.lastName,
        email: formRegister.email,
        password: formRegister.password,
        confirmPassword: formRegister.confirmPassword,
      }

      //añadir al arreglo 
      handleAddUser (newUSer);
      Alert.alert ("Bienvenido", "Usuario registrado con exito");

      //redireccionar al login
      navigation.goBack();
    }

    //funcion iniciar sesion
    const handleSignUp = (): void => {
        const {name, lastName, email, password, confirmPassword} = formRegister
              if (!name || !lastName || !email || !password || !confirmPassword) {
              Alert.alert("Error", "Todos los campos son obligatorios");
              return;
            }
        
            Alert.alert("Login correcto", `Bienvenido ${name}`);
                console.log(formRegister);
            }

  return (
    <View style={stylesGlobal.container}>
      <Text style={stylesGlobal.title}>Regístrate Ahora!</Text>
      <Text style={stylesGlobal.subtitle}>Y descubre todo lo que tenémos para tí </Text>

      <TextInput
        placeholder="Nombre"
        keyboardType="default"
        onChangeText={(value)=>handleChangeValue("name", value)}
        style={stylesGlobal.input}
        placeholderTextColor={stylesGlobal.input.color}
      />

      <TextInput
        placeholder="Apellido"
        keyboardType="default"
        onChangeText={(value)=>handleChangeValue("lastName", value)}
        style={stylesGlobal.input}
        placeholderTextColor={stylesGlobal.input.color}
      />

      <TextInput
        placeholder="Correo electrónico"
        onChangeText={(value)=>handleChangeValue("email", value)}
        style={stylesGlobal.input}
        keyboardType="email-address"
        autoCapitalize="none"
        placeholderTextColor={stylesGlobal.input.color}
      />

      <TextInput
        placeholder="Contraseña"
        keyboardType="default"
        onChangeText={(value)=>handleChangeValue("password", value)}
        style={stylesGlobal.input}
        placeholderTextColor={stylesGlobal.input.color}
        secureTextEntry
      />

      <TextInput
        placeholder="Confirmar Contraseña"
        keyboardType="default"
        onChangeText={(value)=>handleChangeValue("confirmPassword", value)}
        style={stylesGlobal.input}
        placeholderTextColor={stylesGlobal.input.color}
        secureTextEntry
      />

      <TouchableOpacity style={stylesGlobal.button} onPress={handleSignUp}>
        <Text style={stylesGlobal.buttonText}>Registrarse</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={()=> 
        navigation.dispatch(CommonActions.navigate({name: 'PantallaInicioSesion'}))}>
        <Text style={stylesGlobal.link}
       >¿Si ya tienes cuenta? Inicia Sesión</Text>
      </TouchableOpacity>
    </View>
  );
};



