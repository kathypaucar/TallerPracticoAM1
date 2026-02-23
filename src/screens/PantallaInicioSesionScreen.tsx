import React, { useState } from "react";
import {View, Text, TextInput, TouchableOpacity, StyleSheet, Alert, Image} from "react-native";
import { stylesGlobal } from "../theme/appTheme";
import { StackScreenProps } from "@react-navigation/stack";
import { RootStackParams } from "../navigator/StackNavigator";

type Props = StackScreenProps<RootStackParams, "PantallaInicioSesion">;

  interface FormLogin {
    email: string;
    password: string;
}

export const PantallaInicioSesionScreen = ({navigation}: Props) => {
  const [formLogin, setFormLogin] = useState<FormLogin>({
        email: ' ',
        password: ' '
    });


    //funcion que captura los datso del formulario
    const handleChangeValue = (name: string, value: string): void => {
        //llamas funcion para actualizar el estado del formulario
        setFormLogin({...formLogin, [name]: value});
    }

    //funcion iniciar sesion
    const handleSignIn = (): void => {
      const {email, password} = formLogin
       if (!email || !password) {
      Alert.alert("Error", "Todos los campos son obligatorios");
      return;
    }

    Alert.alert("Login correcto", `Bienvenido ${email}`);
        console.log(formLogin);
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

      <TouchableOpacity onPress={()=> navigation.navigate("PantallaRegistro")}>
        <Text style={stylesGlobal.link}
       >¿No tienes cuenta? Regístrate</Text>
      </TouchableOpacity>
      </View>
    </View>
  );
};


