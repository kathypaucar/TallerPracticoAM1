import React, { useState } from "react";
import {View, Text, TextInput, TouchableOpacity, StyleSheet, Alert, Image} from "react-native";
import { stylesGlobal } from "../theme/appTheme";
import { StackScreenProps } from "@react-navigation/stack";
import { CommonActions, useNavigation } from "@react-navigation/native";
import { User } from '../navigator/StackNavigator';

  interface FormLogin {
    email: string;
    password: string;
}

interface Props{
  users: User[];
}

export const PantallaInicioSesionScreen = ({users}: Props) => {
  const [formLogin, setFormLogin] = useState<FormLogin>({
        email: ' ',
        password: ' '
    });

    //hook useNavigation: permite navegar de una pantalla a otr
    const navigation = useNavigation();


    //funcion que captura los datso del formulario
    const handleChangeValue = (name: string, value: string): void => {
        //llamas funcion para actualizar el estado del formulario
        setFormLogin({...formLogin, [name]: value});
    }

    //para verificar si existe el usuario
    const verifyUser =() => {
      console.log(formLogin);
      console.log(users);

      const exisUser = users.find(user => user.email === formLogin.email && user.password === formLogin.password);
      console.log(exisUser);
      return exisUser;
    }

    //funcion iniciar sesion
    const handleSignIn = (): void => {
      const {email, password} = formLogin
       if (!email || !password) {
      Alert.alert("Error", "Todos los campos son obligatorios");
      return;
    }
    //validar la existencia del usuario
    if(!verifyUser()){
      Alert.alert("Error", "Usuario y/o contraseña incorrectos")
      return;
    }
    // si todo esta check se va a la navegacion home
    Alert.alert("Login correcto", `Bienvenido ${email}`);
    navigation.dispatch(CommonActions.navigate({name: 'PantallaHome'}))
        //console.log(formLogin);
    }

  return (
    <View style={stylesGlobal.container}>
      <Text style={stylesGlobal.title}>LIBROS INFINITOS</Text>
      <Image style={stylesGlobal.image}
      source={{uri: 'https://static.vecteezy.com/system/resources/thumbnails/008/513/521/small/stack-of-books-illustration-png.png'}} />
      <View style={stylesGlobal.card}>
        <Text style={stylesGlobal.subtitle}>Iniciar Sesión</Text>

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
        onChangeText={(value)=>handleChangeValue("password", value)}
        style={stylesGlobal.input}
        placeholderTextColor={stylesGlobal.input.color}
        secureTextEntry
      />

      <TouchableOpacity style={stylesGlobal.button} onPress={handleSignIn}>
        <Text style={stylesGlobal.buttonText}>Ingresar</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={()=> navigation.dispatch(CommonActions.navigate({name: 'PantallaRegistro'}))}>
        <Text style={stylesGlobal.link}
       >¿No tienes cuenta? Regístrate</Text>
      </TouchableOpacity>
      </View>
    </View>
  );
};


