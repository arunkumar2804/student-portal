import React from 'react';
import { View, Text, SafeAreaView, ScrollView, TouchableOpacity } from 'react-native';
import { Plus, Users, BookOpen, Bell, TrendingUp } from 'lucide-react-native';
import SectionHeader from '../../components/SectionHeader';

export default function FacultyDashboard() {
  return (
    <SafeAreaView className="flex-1 bg-dark-bg">
      <ScrollView className="flex-1" showsVerticalScrollIndicator={false}>
        {/* Header */}
        <View className="px-6 pt-4 flex-row justify-between items-center">
          <View>
            <Text className="text-dark-textSecondary text-lg">Welcome back,</Text>
            <Text className="text-white text-2xl font-bold">Dr. Sarah Johnson</Text>
          </View>
          <TouchableOpacity className="bg-dark-card p-3 rounded-2xl border border-dark-border">
            <Bell size={22} color="#F8FAFC" />
          </TouchableOpacity>
        </View>

        {/* Stats Row */}
        <View className="flex-row px-6 mt-8 justify-between">
          <View className="bg-primary/10 border border-primary/20 rounded-3xl p-5 flex-1 mr-2">
            <Text className="text-primary text-2xl font-bold">42</Text>
            <Text className="text-dark-textSecondary text-xs mt-1">Students Today</Text>
          </View>
          <View className="bg-secondary/10 border border-secondary/20 rounded-3xl p-5 flex-1 ml-2">
            <Text className="text-secondary text-2xl font-bold">3</Text>
            <Text className="text-dark-textSecondary text-xs mt-1">Pending Grads</Text>
          </View>
        </View>

        {/* Quick Actions */}
        <SectionHeader title="Quick Actions" />
        <View className="px-6 flex-row flex-wrap justify-between">
          {[
            { icon: Users, label: 'Mark Attendance', color: '#8B5CF6' },
            { icon: BookOpen, label: 'Add Resource', color: '#06B6D4' },
            { icon: Plus, label: 'New Assignment', color: '#F59E0B' },
            { icon: Bell, label: 'Announce', color: '#10B981' }
          ].map((action, i) => (
            <TouchableOpacity 
              key={i}
              className="bg-dark-card border border-dark-border rounded-3xl p-5 w-[47%] mb-4 items-center"
            >
              <View className="p-3 rounded-2xl mb-3" style={{ backgroundColor: `${action.color}20` }}>
                <action.icon size={24} color={action.color} />
              </View>
              <Text className="text-white font-medium text-center">{action.label}</Text>
            </TouchableOpacity>
          ))}
        </View>

        {/* Recent Activity */}
        <SectionHeader title="Recent Submissions" actionLabel="View All" />
        <View className="px-6 space-y-4 pb-20">
          {[
            { name: 'Arun Kumar', task: 'ML Project Proposal', time: '2 mins ago' },
            { name: 'Priya Sharma', task: 'ML Project Proposal', time: '15 mins ago' },
            { name: 'Rahul Verma', task: 'ML Project Proposal', time: '1h ago' }
          ].map((sub, i) => (
            <View key={i} className="bg-dark-card border border-dark-border rounded-2xl p-4 flex-row items-center mb-3">
              <View className="w-10 h-10 rounded-full bg-dark-bg items-center justify-center border border-dark-border">
                <Text className="text-white font-bold">{sub.name[0]}</Text>
              </View>
              <View className="ml-4 flex-1">
                <Text className="text-white font-bold">{sub.name}</Text>
                <Text className="text-dark-textSecondary text-xs">{sub.task}</Text>
              </View>
              <Text className="text-dark-textSecondary text-[10px]">{sub.time}</Text>
            </View>
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
