import React, { useState } from 'react';
import { ScrollView, View, Text, TouchableOpacity, SafeAreaView, Platform } from 'react-native';
import { MotiView } from 'moti';
import { Bell, Search, Calendar as CalendarIcon, Sparkles } from 'lucide-react-native';
import AttendanceCard from '../../components/AttendanceCard';
import SectionHeader from '../../components/SectionHeader';
import ClassCard from '../../components/ClassCard';
import AIAssistantSheet from '../../components/AIAssistantSheet';

export default function StudentHome() {
  const [isAISheetVisible, setIsAISheetVisible] = useState(false);
  return (
    <SafeAreaView className="flex-1 bg-dark-bg">
      <ScrollView 
        className="flex-1" 
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 120 }}
      >
        {/* Header */}
        <View className="px-6 pt-4 flex-row justify-between items-center">
          <View>
            <View className="flex-row items-center">
              <Text className="text-dark-textSecondary text-lg">Hey, </Text>
              <Text className="text-white text-lg font-bold">Arun 👋</Text>
            </View>
            <Text className="text-dark-textSecondary text-sm">Computer Science • Semester 6</Text>
          </View>
          <View className="flex-row space-x-3">
            <TouchableOpacity className="bg-dark-card p-3 rounded-2xl border border-dark-border">
              <Search size={22} color="#F8FAFC" />
            </TouchableOpacity>
            <TouchableOpacity className="bg-dark-card p-3 rounded-2xl border border-dark-border relative mx-3">
              <Bell size={22} color="#F8FAFC" />
              <View className="absolute top-3 right-3 w-2.5 h-2.5 bg-accent-danger rounded-full border-2 border-dark-card" />
            </TouchableOpacity>
          </View>
        </View>

        {/* AI Assistant Quick Access */}
        <TouchableOpacity 
          onPress={() => setIsAISheetVisible(true)}
          className="mx-6 mt-8 bg-primary/10 border border-primary/20 rounded-3xl p-5 flex-row items-center"
        >
          <View className="bg-primary p-3 rounded-2xl">
            <Sparkles size={24} color="white" />
          </View>
          <View className="ml-4 flex-1">
            <Text className="text-white font-bold text-lg">AI Assistant</Text>
            <Text className="text-dark-textSecondary text-sm">Ask me about your schedule or tasks</Text>
          </View>
        </TouchableOpacity>

        {/* Attendance Section */}
        <SectionHeader title="Your Progress" actionLabel="Analytics" />
        <AttendanceCard percentage={84} />

        {/* Schedule Section */}
        <SectionHeader title="Today's Classes" actionLabel="View Timetable" />
        <ClassCard 
          title="Advanced Algorithms" 
          time="09:00 - 10:30" 
          room="Lab 302" 
          faculty="Dr. Sarah Johnson"
          color="#8B5CF6"
        />
        <ClassCard 
          title="Machine Learning" 
          time="11:00 - 12:30" 
          room="Hall A" 
          faculty="Prof. Alan Turing"
          color="#06B6D4"
        />
        <ClassCard 
          title="Cloud Computing" 
          time="14:00 - 15:30" 
          room="Room 405" 
          faculty="Dr. Michael Smith"
          color="#F59E0B"
        />

        {/* Upcoming Assignments */}
        <SectionHeader title="Pending Tasks" actionLabel="All Hub" />
        <View className="px-6 mb-4">
          <ScrollView horizontal showsHorizontalScrollIndicator={false} className="space-x-4">
            <View className="bg-dark-card border border-dark-border rounded-3xl p-5 w-64 mr-4">
              <View className="bg-accent-danger/20 self-start px-3 py-1 rounded-full mb-3">
                <Text className="text-accent-danger text-xs font-bold uppercase">Critical</Text>
              </View>
              <Text className="text-white font-bold text-lg">ML Project Proposal</Text>
              <Text className="text-dark-textSecondary mt-1 text-sm">Due in 2 days • Prof. Alan Turing</Text>
              <View className="mt-4 flex-row justify-between items-center">
                <View className="h-2 flex-1 bg-dark-bg rounded-full mr-4">
                  <View className="h-full w-2/3 bg-accent-danger rounded-full" />
                </View>
                <Text className="text-dark-textSecondary text-xs">60%</Text>
              </View>
            </View>

            <View className="bg-dark-card border border-dark-border rounded-3xl p-5 w-64 mr-4">
              <View className="bg-primary/20 self-start px-3 py-1 rounded-full mb-3">
                <Text className="text-primary text-xs font-bold uppercase">Homework</Text>
              </View>
              <Text className="text-white font-bold text-lg">Algorithm Analysis</Text>
              <Text className="text-dark-textSecondary mt-1 text-sm">Due in 5 days • Dr. Sarah Johnson</Text>
              <View className="mt-4 flex-row justify-between items-center">
                <View className="h-2 flex-1 bg-dark-bg rounded-full mr-4">
                  <View className="h-full w-1/4 bg-primary rounded-full" />
                </View>
                <Text className="text-dark-textSecondary text-xs">25%</Text>
              </View>
            </View>
          </ScrollView>
        </View>

      </ScrollView>

      <AIAssistantSheet 
        isVisible={isAISheetVisible} 
        onClose={() => setIsAISheetVisible(false)} 
      />
    </SafeAreaView>
  );
}
