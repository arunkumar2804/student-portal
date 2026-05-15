import React from 'react';
import { View, Text, SafeAreaView, ScrollView, TouchableOpacity, Image } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Settings, LogOut, ChevronRight, QrCode, Award, Shield } from 'lucide-react-native';
import { useAuthStore } from '../../store/useAuthStore';

export default function ProfileScreen() {
  const { user, logout } = useAuthStore();

  return (
    <SafeAreaView className="flex-1 bg-dark-bg">
      <ScrollView className="flex-1" showsVerticalScrollIndicator={false} contentContainerStyle={{ paddingBottom: 120 }}>
        {/* Header */}
        <View className="px-6 pt-4 flex-row justify-between items-center">
          <Text className="text-white text-2xl font-bold">Profile</Text>
          <TouchableOpacity className="bg-dark-card p-3 rounded-2xl border border-dark-border">
            <Settings size={22} color="#F8FAFC" />
          </TouchableOpacity>
        </View>

        {/* Digital ID Card */}
        <View className="px-6 mt-8">
          <LinearGradient
            colors={['#8B5CF6', '#7C3AED']}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 1 }}
            className="rounded-[32px] p-8 shadow-2xl shadow-primary/40 overflow-hidden relative"
          >
            {/* Background pattern circles */}
            <View className="absolute -top-10 -right-10 w-40 h-40 bg-white/10 rounded-full" />
            <View className="absolute -bottom-10 -left-10 w-24 h-24 bg-white/10 rounded-full" />

            <View className="flex-row justify-between items-start">
              <View>
                <Text className="text-white/60 text-xs font-bold uppercase tracking-widest">Student ID Card</Text>
                <Text className="text-white text-2xl font-bold mt-1">Arun Kumar</Text>
                <Text className="text-white/80 mt-1">Computer Science Dept.</Text>
              </View>
              <View className="bg-white/20 p-2 rounded-2xl">
                <QrCode size={40} color="white" />
              </View>
            </View>

            <View className="mt-10 flex-row justify-between items-end">
              <View>
                <Text className="text-white/60 text-[10px] uppercase font-bold">Roll Number</Text>
                <Text className="text-white font-bold text-lg">CS2021045</Text>
              </View>
              <View className="items-end">
                <Text className="text-white/60 text-[10px] uppercase font-bold">Valid Thru</Text>
                <Text className="text-white font-bold text-lg">2021 - 2025</Text>
              </View>
            </View>
          </LinearGradient>
        </View>

        {/* Stats Row */}
        <View className="flex-row px-6 mt-8 justify-between">
          <View className="bg-dark-card border border-dark-border rounded-3xl p-5 flex-1 mr-3 items-center">
            <Text className="text-secondary text-2xl font-bold">3.8</Text>
            <Text className="text-dark-textSecondary text-xs mt-1">Current GPA</Text>
          </View>
          <View className="bg-dark-card border border-dark-border rounded-3xl p-5 flex-1 mx-1.5 items-center">
            <Text className="text-accent-success text-2xl font-bold">92%</Text>
            <Text className="text-dark-textSecondary text-xs mt-1">Attendance</Text>
          </View>
          <View className="bg-dark-card border border-dark-border rounded-3xl p-5 flex-1 ml-3 items-center">
            <Text className="text-accent-highlight text-2xl font-bold">12</Text>
            <Text className="text-dark-textSecondary text-xs mt-1">Badges</Text>
          </View>
        </View>

        {/* Menu Items */}
        <View className="px-6 mt-8 space-y-4">
          <TouchableOpacity className="bg-dark-card border border-dark-border rounded-2xl p-5 flex-row items-center justify-between mb-4">
            <View className="flex-row items-center">
              <View className="bg-primary/20 p-2 rounded-xl mr-4">
                <Award size={20} color="#8B5CF6" />
              </View>
              <Text className="text-white font-medium">Achievements & Certs</Text>
            </View>
            <ChevronRight size={20} color="#94A3B8" />
          </TouchableOpacity>

          <TouchableOpacity className="bg-dark-card border border-dark-border rounded-2xl p-5 flex-row items-center justify-between mb-4">
            <View className="flex-row items-center">
              <View className="bg-secondary/20 p-2 rounded-xl mr-4">
                <Shield size={20} color="#06B6D4" />
              </View>
              <Text className="text-white font-medium">Privacy & Security</Text>
            </View>
            <ChevronRight size={20} color="#94A3B8" />
          </TouchableOpacity>

          <TouchableOpacity 
            onPress={logout}
            className="bg-accent-danger/10 border border-accent-danger/20 rounded-2xl p-5 flex-row items-center justify-between"
          >
            <View className="flex-row items-center">
              <View className="bg-accent-danger/20 p-2 rounded-xl mr-4">
                <LogOut size={20} color="#EF4444" />
              </View>
              <Text className="text-accent-danger font-bold">Sign Out</Text>
            </View>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
