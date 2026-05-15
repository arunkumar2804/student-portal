import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, KeyboardAvoidingView, Platform } from 'react-native';
import { MotiView } from 'moti';
import { useAuthStore } from '../../store/useAuthStore';
import { Mail, Lock, LogIn } from 'lucide-react-native';
import { triggerHaptic } from '../../utils/haptics';

export default function LoginScreen() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const setUser = useAuthStore((state) => state.setUser);

  const handleLogin = () => {
    triggerHaptic('success');
    // Mock login logic
    setUser({ name: 'Arun Kumar', id: 'STU12345' }, 'student');
  };

  return (
    <KeyboardAvoidingView 
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      className="flex-1 bg-dark-bg px-8 pt-20"
    >
      <MotiView
        from={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ type: 'timing', duration: 800 }}
      >
        <Text className="text-white text-4xl font-bold">Welcome Back</Text>
        <Text className="text-dark-textSecondary text-lg mt-2">Sign in to continue your journey</Text>

        <View className="mt-12 space-y-6">
          <View className="space-y-2">
            <Text className="text-dark-textSecondary text-sm ml-1">Email Address</Text>
            <View className="flex-row items-center bg-dark-card border border-dark-border rounded-2xl px-4 py-4">
              <Mail size={20} color="#94A3B8" />
              <TextInput
                value={email}
                onChangeText={setEmail}
                placeholder="student@college.edu"
                placeholderTextColor="#64748B"
                className="flex-1 ml-3 text-white text-base"
                autoCapitalize="none"
              />
            </View>
          </View>

          <View className="space-y-2 mt-4">
            <Text className="text-dark-textSecondary text-sm ml-1">Password</Text>
            <View className="flex-row items-center bg-dark-card border border-dark-border rounded-2xl px-4 py-4">
              <Lock size={20} color="#94A3B8" />
              <TextInput
                value={password}
                onChangeText={setPassword}
                placeholder="••••••••"
                placeholderTextColor="#64748B"
                secureTextEntry
                className="flex-1 ml-3 text-white text-base"
              />
            </View>
          </View>

          <TouchableOpacity className="self-end mt-2">
            <Text className="text-primary font-medium">Forgot Password?</Text>
          </TouchableOpacity>

          <TouchableOpacity 
            onPress={handleLogin}
            className="bg-primary py-4 rounded-2xl mt-8 flex-row items-center justify-center shadow-lg shadow-primary/20"
          >
            <LogIn size={20} color="white" className="mr-2" />
            <Text className="text-white font-bold text-lg ml-2">Sign In</Text>
          </TouchableOpacity>
        </View>

        <View className="flex-row justify-center mt-12">
          <Text className="text-dark-textSecondary">New student? </Text>
          <TouchableOpacity>
            <Text className="text-secondary font-bold">Contact Admin</Text>
          </TouchableOpacity>
        </View>
      </MotiView>
    </KeyboardAvoidingView>
  );
}
