import React from 'react';
import { View, Text, SafeAreaView, ScrollView, TouchableOpacity, Dimensions } from 'react-native';
import { LayoutDashboard, Users, UserCog, Megaphone, BarChart3, Settings, Search } from 'lucide-react-native';

const { width } = Dimensions.get('window');

export default function AdminDashboard() {
  return (
    <SafeAreaView className="flex-1 bg-dark-bg">
      <View className="flex-row flex-1">
        {/* Sidebar (Desktop/Tablet Feel) */}
        <View className="w-20 bg-dark-card border-r border-dark-border items-center pt-10 space-y-8">
          <View className="bg-primary p-3 rounded-2xl mb-10">
            <LayoutDashboard size={24} color="white" />
          </View>
          <Users size={24} color="#94A3B8" />
          <UserCog size={24} color="#94A3B8" />
          <Megaphone size={24} color="#94A3B8" />
          <BarChart3 size={24} color="#94A3B8" />
          <View className="flex-1" />
          <Settings size={24} color="#94A3B8" className="mb-10" />
        </View>

        {/* Main Content */}
        <ScrollView className="flex-1 p-8" showsVerticalScrollIndicator={false}>
          <View className="flex-row justify-between items-center">
            <View>
              <Text className="text-dark-textSecondary text-sm uppercase font-bold tracking-widest">Admin Console</Text>
              <Text className="text-white text-3xl font-bold mt-1">System Overview</Text>
            </View>
            <View className="bg-dark-card border border-dark-border rounded-2xl px-4 py-3 flex-row items-center w-64">
              <Search size={18} color="#94A3B8" />
              <Text className="text-dark-textSecondary ml-3">Search analytics...</Text>
            </View>
          </View>

          {/* Key Metrics */}
          <View className="flex-row mt-10 space-x-6">
            {[
              { label: 'Active Students', value: '1,284', trend: '+12%', color: '#8B5CF6' },
              { label: 'Faculty Members', value: '86', trend: '+2%', color: '#06B6D4' },
              { label: 'Avg. Attendance', value: '78%', trend: '-3%', color: '#F59E0B' }
            ].map((metric, i) => (
              <View key={i} className="bg-dark-card border border-dark-border rounded-3xl p-6 flex-1">
                <Text className="text-dark-textSecondary text-sm font-medium">{metric.label}</Text>
                <View className="flex-row items-end mt-2">
                  <Text className="text-white text-3xl font-bold">{metric.value}</Text>
                  <Text className={`text-xs ml-2 mb-1 font-bold ${metric.trend.startsWith('+') ? 'text-accent-success' : 'text-accent-danger'}`}>{metric.trend}</Text>
                </View>
                <View className="h-1 w-full bg-dark-bg rounded-full mt-4">
                  <View className="h-full rounded-full" style={{ width: '70%', backgroundColor: metric.color }} />
                </View>
              </View>
            ))}
          </View>

          {/* Large Chart Placeholder */}
          <View className="mt-8 bg-dark-card border border-dark-border rounded-[32px] p-8 h-80 justify-center items-center">
            <BarChart3 size={48} color="#334155" />
            <Text className="text-dark-textSecondary mt-4 font-medium text-lg">Enrollment Trends (2025-2026)</Text>
            <Text className="text-dark-textSecondary/40 text-sm mt-1">Real-time data visualization module</Text>
          </View>

          {/* Recent Alerts */}
          <View className="mt-8 mb-20">
            <Text className="text-white text-xl font-bold mb-4">Critical Alerts</Text>
            <View className="bg-accent-danger/5 border border-accent-danger/20 rounded-2xl p-4 flex-row items-center">
              <View className="bg-accent-danger/20 p-2 rounded-xl mr-4">
                <Users size={20} color="#EF4444" />
              </View>
              <Text className="text-white flex-1 font-medium">Low attendance detected in Department of Architecture (avg. 62%)</Text>
              <TouchableOpacity className="bg-accent-danger px-4 py-2 rounded-xl">
                <Text className="text-white font-bold text-xs">Analyze</Text>
              </TouchableOpacity>
            </View>
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
}
