import React, { useState } from 'react';
import { View, Text, SafeAreaView, ScrollView, TouchableOpacity } from 'react-native';
import { Search, Filter, Plus, Calendar, CheckCircle2, Clock, AlertCircle } from 'lucide-react-native';

const ASSIGNMENTS = [
  {
    id: '1',
    title: 'ML Project Proposal',
    subject: 'Machine Learning',
    due: 'Tomorrow, 11:59 PM',
    status: 'pending',
    priority: 'high',
    progress: 60
  },
  {
    id: '2',
    title: 'Algorithm Analysis HW',
    subject: 'Advanced Algorithms',
    due: 'May 18, 2026',
    status: 'in-progress',
    priority: 'medium',
    progress: 25
  },
  {
    id: '3',
    title: 'Cloud Architecture Doc',
    subject: 'Cloud Computing',
    due: 'May 22, 2026',
    status: 'not-started',
    priority: 'low',
    progress: 0
  },
  {
    id: '4',
    title: 'Database Normalization',
    subject: 'DBMS',
    due: 'Completed',
    status: 'completed',
    priority: 'medium',
    progress: 100
  }
];

export default function AssignmentHub() {
  const [filter, setFilter] = useState('All');

  return (
    <SafeAreaView className="flex-1 bg-dark-bg">
      {/* Header */}
      <View className="px-6 pt-4 flex-row justify-between items-center">
        <Text className="text-white text-2xl font-bold">Assignment Hub</Text>
        <TouchableOpacity className="bg-primary p-3 rounded-2xl">
          <Plus size={22} color="white" />
        </TouchableOpacity>
      </View>

      {/* Search & Filter */}
      <View className="px-6 mt-6 flex-row space-x-3">
        <View className="flex-1 bg-dark-card border border-dark-border rounded-2xl px-4 py-3 flex-row items-center">
          <Search size={18} color="#94A3B8" />
          <Text className="text-dark-textSecondary ml-3">Search tasks...</Text>
        </View>
        <TouchableOpacity className="bg-dark-card border border-dark-border p-3 rounded-2xl mx-3">
          <Filter size={20} color="#F8FAFC" />
        </TouchableOpacity>
      </View>

      {/* Tabs */}
      <View className="mt-6 px-6">
        <View className="bg-dark-card border border-dark-border rounded-2xl p-1.5 flex-row">
          {['All', 'Pending', 'Completed'].map((tab) => (
            <TouchableOpacity 
              key={tab}
              onPress={() => setFilter(tab)}
              className={`flex-1 py-2.5 rounded-xl items-center ${filter === tab ? 'bg-primary shadow-lg shadow-primary/20' : ''}`}
            >
              <Text className={`font-bold ${filter === tab ? 'text-white' : 'text-dark-textSecondary'}`}>{tab}</Text>
            </TouchableOpacity>
          ))}
        </View>
      </View>

      {/* List */}
      <ScrollView className="flex-1 mt-6" showsVerticalScrollIndicator={false} contentContainerStyle={{ paddingBottom: 120 }}>
        <View className="px-6 space-y-4">
          {ASSIGNMENTS.map((task) => (
            <TouchableOpacity 
              key={task.id} 
              className="bg-dark-card border border-dark-border rounded-3xl p-5 mb-4"
            >
              <View className="flex-row justify-between items-start">
                <View className="flex-1">
                  <Text className="text-dark-textSecondary text-xs font-bold uppercase tracking-wider mb-1">{task.subject}</Text>
                  <Text className="text-white text-lg font-bold">{task.title}</Text>
                </View>
                {task.status === 'completed' ? (
                  <View className="bg-accent-success/20 p-2 rounded-full">
                    <CheckCircle2 size={18} color="#10B981" />
                  </View>
                ) : task.priority === 'high' ? (
                  <View className="bg-accent-danger/20 p-2 rounded-full">
                    <AlertCircle size={18} color="#EF4444" />
                  </View>
                ) : (
                  <View className="bg-dark-bg p-2 rounded-full border border-dark-border">
                    <Clock size={18} color="#94A3B8" />
                  </View>
                )}
              </View>

              <View className="mt-6 flex-row justify-between items-center">
                <View className="flex-row items-center">
                  <Calendar size={14} color="#94A3B8" />
                  <Text className="text-dark-textSecondary text-sm ml-2">{task.due}</Text>
                </View>
                <Text className="text-white font-bold">{task.progress}%</Text>
              </View>

              <View className="h-1.5 w-full bg-dark-bg rounded-full mt-3 overflow-hidden">
                <View 
                  className={`h-full rounded-full ${task.status === 'completed' ? 'bg-accent-success' : task.priority === 'high' ? 'bg-accent-danger' : 'bg-primary'}`} 
                  style={{ width: `${task.progress}%` }} 
                />
              </View>
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
