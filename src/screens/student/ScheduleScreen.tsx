import React, { useState } from 'react';
import { View, Text, SafeAreaView, ScrollView, TouchableOpacity } from 'react-native';
import { ChevronLeft, ChevronRight, MapPin, Clock } from 'lucide-react-native';
import ClassCard from '../../components/ClassCard';

const DAYS = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

export default function ScheduleScreen() {
  const [selectedDay, setSelectedDay] = useState('Mon');

  return (
    <SafeAreaView className="flex-1 bg-dark-bg">
      {/* Header */}
      <View className="px-6 pt-4 flex-row justify-between items-center">
        <View>
          <Text className="text-dark-textSecondary text-sm">Weekly</Text>
          <Text className="text-white text-2xl font-bold">Timetable</Text>
        </View>
        <View className="flex-row items-center space-x-4">
          <TouchableOpacity className="bg-dark-card p-2 rounded-xl border border-dark-border">
            <ChevronLeft size={20} color="#F8FAFC" />
          </TouchableOpacity>
          <Text className="text-white font-medium mx-4">Week 12</Text>
          <TouchableOpacity className="bg-dark-card p-2 rounded-xl border border-dark-border">
            <ChevronRight size={20} color="#F8FAFC" />
          </TouchableOpacity>
        </View>
      </View>

      {/* Day Selector */}
      <View className="mt-8">
        <ScrollView horizontal showsHorizontalScrollIndicator={false} className="px-6 space-x-3">
          {DAYS.map((day) => (
            <TouchableOpacity 
              key={day}
              onPress={() => setSelectedDay(day)}
              className={`px-6 py-4 rounded-3xl items-center justify-center mr-3 ${selectedDay === day ? 'bg-primary' : 'bg-dark-card border border-dark-border'}`}
            >
              <Text className={`font-bold ${selectedDay === day ? 'text-white' : 'text-dark-textSecondary'}`}>{day}</Text>
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>

      {/* Timeline view */}
      <ScrollView className="flex-1 mt-8" showsVerticalScrollIndicator={false} contentContainerStyle={{ paddingBottom: 120 }}>
        <View className="px-6">
          <View className="flex-row">
            {/* Time labels column */}
            <View className="w-16 pt-2">
              <Text className="text-dark-textSecondary text-xs mb-20">09:00</Text>
              <Text className="text-dark-textSecondary text-xs mb-20">11:00</Text>
              <Text className="text-dark-textSecondary text-xs mb-20">14:00</Text>
              <Text className="text-dark-textSecondary text-xs">16:00</Text>
            </View>

            {/* Cards column */}
            <View className="flex-1">
              <ClassCard 
                title="Advanced Algorithms" 
                time="09:00 - 10:30" 
                room="Lab 302" 
                faculty="Dr. Sarah Johnson"
                color="#8B5CF6"
              />
              <View className="h-4" />
              <ClassCard 
                title="Machine Learning" 
                time="11:00 - 12:30" 
                room="Hall A" 
                faculty="Prof. Alan Turing"
                color="#06B6D4"
              />
              <View className="h-4" />
              <View className="bg-primary/5 border border-primary/20 border-dashed rounded-3xl p-5 mb-4 items-center justify-center">
                <Text className="text-primary/60 font-medium">Break Time • 12:30 - 14:00</Text>
              </View>
              <View className="h-4" />
              <ClassCard 
                title="Cloud Computing" 
                time="14:00 - 15:30" 
                room="Room 405" 
                faculty="Dr. Michael Smith"
                color="#F59E0B"
              />
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
