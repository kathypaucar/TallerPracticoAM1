import React, { useState } from "react";
import {View, Text, TextInput, TouchableOpacity, Alert} from "react-native";
import { stylesGlobal } from "../theme/appTheme";
import { StackScreenProps } from "@react-navigation/stack";
import { RootStackParams } from "../navigator/StackNavigator";

type Props = StackScreenProps<RootStackParams, "PantallaRegistro">;

  interface FormRegister {
    name: string;
    lastName: string;
    email: string;
    password: string;
    confirmPassword: string;
}

export const PantallaRegistroScreen = ({navigation}: Props) => {
  const [formRegister, setFormRegister] = useState<FormRegister>({
        name: ' ',
        lastName: ' ',
        email: ' ',
        password: ' ',
        confirmPassword: ' '
    });


    //funcion que captura los datso del formulario
    const handleChangeValue = (name: string, value: string): void => {
        //llamas funcion para actualizar el estado del formulario
        setFormRegister({...formRegister, [name]: value});
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

      <TouchableOpacity onPress={()=> navigation.navigate("PantallaInicioSesion")}>
        <Text style={stylesGlobal.link}
       >¿Si ya tienes cuenta? Inicia Sesión</Text>
      </TouchableOpacity>
    </View>
  );
};



