import React from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import COLORS from './consts/colors'

import Home from './pages/Home'
import Activities from './pages/Activities'
import Plus from './pages/Plus'
import Credits from './pages/Credits'
import Menu from './pages/Menu'
import ButtonAdd from "./components/ButtonAdd"

import Welcome from "./pages/Welcome";
import SignUp from "./pages/SignUp";
import SignIn from "./pages/SignIn";
import ForgotPassword from "./pages/ForgotPassword";

import FeatherIcon from 'react-native-vector-icons/Feather';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

export default function Routes(){
    return(
        <Stack.Navigator>

                <Stack.Screen
                name="Welcome"
                component={Welcome}
                options={{ headerShown: false}} 
                />

                <Stack.Screen
                name="Registrar"
                component={SignUp}
                options={{ headerShown: false}}
                />

                <Stack.Screen
                name="Logar"
                component={SignIn}
                options={{ headerShown: false}}
                />

                <Stack.Screen
                name="Recriar senha"
                component={ForgotPassword}
                options={{ headerShown: false}}
                />

                <Stack.Screen
                name="Home"
                component={Home}
                options={{ headerShown: false}}
                />

            </Stack.Navigator>
    );
}
    function TabNavigator(){
        return(
            <Tab.Navigator
            screenOptions={{
                tabBarShowLabel: false,
                tabBarActiveTintColor: COLORS.primary,
                tabBarStyle:{
                    borderTopWidth: 0,
                    position: 'absolute'
                }
            }}
        >
            <Tab.Screen 
            name="Inicio" 
            component={Home}
            options={{
                headerShown: false,
                tabBarIcon: ({ color, size, focused }) => {
                    if(focused){
                        return <FeatherIcon name="home" size={size} color={color}/>
                    }
                        return <FeatherIcon name="home" size={size} color={color}/>
                }
            }} 
            />
            <Tab.Screen 
            name="Resumo" 
            component={Activities}
            options={{
                tabBarIcon: ({ color, size, focused }) => {
                    if(focused){
                        return <FeatherIcon name="pie-chart" size={size} color={color}/>
                    }
                        return <FeatherIcon name="pie-chart" size={size} color={color}/>
                }
            }}  
            />
            <Tab.Screen 
            name="Add" 
            component={Plus}
            options={{
                headerShown: false,
                tabBarIcon: ({ focused, size, color }) => ( <ButtonAdd size={size} color={color} focused={focused} />
                )
            }}   
            />
            <Tab.Screen 
            name="Credits" 
            component={Credits}
            options={{
                headerShown: false,
                tabBarIcon: ({ color, size, focused }) => {
                    if(focused){
                        return <FeatherIcon name="code" size={size} color={color}/>
                    }
                        return <FeatherIcon name="code" size={size} color={color}/>
                }
            }}   
            />
            <Tab.Screen 
            name="Configurações" 
            component={Menu}
            options={{
                headerTintColor: COLORS.primary,
                tabBarIcon: ({ color, size, focused }) => {
                    if(focused){
                        return <FeatherIcon name="menu" size={size} color={color}/>
                    }
                        return <FeatherIcon name="menu" size={size} color={color}/>
                }
            }}  
            />
        </Tab.Navigator>
    )
}