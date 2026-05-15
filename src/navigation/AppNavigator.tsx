import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useAuthStore } from '../store/useAuthStore';

// Screens (to be created)
import WelcomeScreen from '../screens/auth/WelcomeScreen';
import LoginScreen from '../screens/auth/LoginScreen';
import StudentTabs from './StudentTabs';
import FacultyDashboard from '../screens/faculty/FacultyDashboard';
import AdminDashboard from '../screens/admin/AdminDashboard';

const Stack = createNativeStackNavigator();

export default function AppNavigator() {
  const { user, role } = useAuthStore();

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        {user === null ? (
          <>
            <Stack.Screen name="Welcome" component={WelcomeScreen} />
            <Stack.Screen name="Login" component={LoginScreen} />
          </>
        ) : (
          <>
            {role === 'student' && (
              <Stack.Screen name="StudentMain" component={StudentTabs} />
            )}
            {role === 'faculty' && (
              <Stack.Screen name="FacultyMain" component={FacultyDashboard} />
            )}
            {role === 'admin' && (
              <Stack.Screen name="AdminMain" component={AdminDashboard} />
            )}
          </>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
}
