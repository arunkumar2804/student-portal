import React, { useState } from 'react';
import { ScrollView, View, Text, TouchableOpacity, SafeAreaView, Platform, Dimensions } from 'react-native';
import { MotiView } from 'moti';
import { Bell, Search, Calendar as CalendarIcon, Sparkles, MessageCircle } from 'lucide-react-native';
import AttendanceCard from '../../components/AttendanceCard';
import SectionHeader from '../../components/SectionHeader';
import ClassCard from '../../components/ClassCard';
import AIAssistantSheet from '../../components/AIAssistantSheet';
import { triggerHaptic } from '../../utils/haptics';

const { width } = Dimensions.get('window');

export default function StudentHome() {
  const [isAISheetVisible, setIsAISheetVisible] = useState(false);

  const toggleAI = () => {
    triggerHaptic('medium');
    setIsAISheetVisible(true);
  };

  return (
    <SafeAreaView className="flex-1 bg-dark-bg">
      <ScrollView 
        className="flex-1" 
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 150 }}
      >
        {/* Header */}
        <MotiView 
          from={{ opacity: 0, translateY: -20 }}
          animate={{ opacity: 1, translateY: 0 }}
          className="px-6 pt-6 flex-row justify-between items-center"
        >
          <View>
            <View className="flex-row items-center">
              <Text className="text-dark-textSecondary text-xl">Hey, </Text>
              <Text className="text-white text-xl font-bold">Arun 👋</Text>
            </View>
            <Text className="text-dark-textSecondary text-sm font-medium mt-1">Computer Science • Semester 6</Text>
          </View>
          <View className="flex-row items-center">
            <TouchableOpacity 
              onPress={() => triggerHaptic('light')}
              className="bg-dark-card p-3.5 rounded-2xl border border-dark-border"
            >
              <Search size={22} color="#F8FAFC" />
            </TouchableOpacity>
            <TouchableOpacity 
              onPress={() => triggerHaptic('light')}
              className="bg-dark-card p-3.5 rounded-2xl border border-dark-border relative ml-4"
            >
              <Bell size={22} color="#F8FAFC" />
              <View className="absolute top-3.5 right-3.5 w-2.5 h-2.5 bg-accent-danger rounded-full border-2 border-dark-card" />
            </TouchableOpacity>
          </View>
        </MotiView>

        {/* Hero Section - AI Quick Access */}
        <MotiView
          from={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ type: 'spring', delay: 200 }}
        >
          <TouchableOpacity 
            onPress={toggleAI}
            activeOpacity={0.9}
            className="mx-6 mt-10 bg-primary rounded-[32px] p-6 flex-row items-center overflow-hidden shadow-xl shadow-primary/30"
          >
            {/* Abstract Background Decoration */}
            <View className="absolute -top-10 -right-10 w-40 h-40 bg-white/10 rounded-full" />
            <View className="absolute -bottom-10 -left-10 w-32 h-32 bg-white/5 rounded-full" />
            
            <View className="bg-white/20 p-4 rounded-2xl">
              <Sparkles size={28} color="white" />
            </View>
            <View className="ml-5 flex-1">
              <Text className="text-white font-bold text-xl">AI Campus Guide</Text>
              <Text className="text-white/80 text-sm mt-1">Check attendance, tasks, or find classrooms instantly.</Text>
            </View>
          </TouchableOpacity>
        </MotiView>

        {/* Attendance Progress */}
        <SectionHeader title="Academic Pulse" actionLabel="Details" />
        <AttendanceCard percentage={84} />

        {/* Next Class - Large Card */}
        <SectionHeader title="Up Next" actionLabel="Full Schedule" />
        <MotiView
          from={{ opacity: 0, translateX: 20 }}
          animate={{ opacity: 1, translateX: 0 }}
          transition={{ type: 'spring', delay: 400 }}
        >
          <ClassCard 
            title="Advanced Algorithms" 
            time="09:00 - 10:30" 
            room="Lab 302" 
            faculty="Dr. Sarah Johnson"
            color="#8B5CF6"
          />
        </MotiView>

        {/* Task Summary */}
        <SectionHeader title="High Priority Tasks" actionLabel="Open Hub" />
        <View className="px-6">
          <View className="bg-dark-card border border-dark-border rounded-[32px] p-6">
            <View className="flex-row justify-between items-center mb-4">
              <Text className="text-white font-bold text-lg">2 Pending Items</Text>
              <View className="bg-accent-danger/20 px-3 py-1 rounded-full">
                <Text className="text-accent-danger text-xs font-bold">DUE SOON</Text>
              </View>
            </View>
            <View className="space-y-4">
              <View className="flex-row items-center">
                <View className="w-2 h-2 rounded-full bg-accent-danger mr-3" />
                <Text className="text-dark-textSecondary flex-1">Machine Learning Proposal</Text>
                <Text className="text-white font-medium text-xs">Tomorrow</Text>
              </View>
              <View className="flex-row items-center mt-3">
                <View className="w-2 h-2 rounded-full bg-primary mr-3" />
                <Text className="text-dark-textSecondary flex-1">Algorithm Analysis Quiz</Text>
                <Text className="text-white font-medium text-xs">Friday</Text>
              </View>
            </View>
          </View>
        </View>

      </ScrollView>

      {/* Floating AI Button (True Native Feel) */}
      <MotiView
        from={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ type: 'spring', delay: 1000 }}
        className="absolute bottom-32 right-6"
      >
        <TouchableOpacity 
          onPress={toggleAI}
          activeOpacity={0.8}
          className="bg-primary w-16 h-16 rounded-full items-center justify-center shadow-2xl shadow-primary/50 border-4 border-dark-bg"
        >
          <MessageCircle size={28} color="white" />
        </TouchableOpacity>
      </MotiView>

      <AIAssistantSheet 
        isVisible={isAISheetVisible} 
        onClose={() => setIsAISheetVisible(false)} 
      />
    </SafeAreaView>
  );
}
