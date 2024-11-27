
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import Dashboard from './screens/Dashboard';
import Login from './screens/Login';
import PasswordRecovery from './screens/PasswordRecovery';
import Registration from './screens/Registration';

const Stack = createStackNavigator();

export default function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Login">
                <Stack.Screen name="Login" component={Login} />
                <Stack.Screen name="Dashboard" component={Dashboard} />
                <Stack.Screen name="PasswordRecovery" component={PasswordRecovery} />
                <Stack.Screen name="Registration" component={Registration} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}
