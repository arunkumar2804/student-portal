import React from 'react';
import { View, Text } from 'react-native';
import { TrendingUp } from 'lucide-react-native';

export default function AttendanceCard({ percentage }: { percentage: number }) {
  return (
    <View 
      className="bg-dark-card border border-dark-border rounded-3xl p-6 mx-6 flex-row items-center"
    >
      <View className="relative w-20 h-20 items-center justify-center">
        {/* Simple progress circle representation */}
        <View className="w-20 h-20 rounded-full border-4 border-dark-border" />
        <View 
          className="absolute w-20 h-20 rounded-full border-4 border-primary" 
          style={{ borderRightColor: 'transparent', borderBottomColor: 'transparent', transform: [{ rotate: '45deg' }] }}
        />
        <Text className="absolute text-white font-bold text-lg">{percentage}%</Text>
      </View>
      
      <View className="flex-1 ml-6">
        <View className="flex-row items-center">
          <Text className="text-white text-lg font-bold">Attendance</Text>
          <View className="ml-2 bg-success/20 px-2 py-1 rounded-full">
            <TrendingUp size={12} color="#10B981" />
          </View>
        </View>
        <Text className="text-dark-textSecondary mt-1">You're above the 75% threshold. Keep it up!</Text>
        <View className="flex-row mt-3 space-x-4">
          <View>
            <Text className="text-white font-bold">12</Text>
            <Text className="text-dark-textSecondary text-xs">Present</Text>
          </View>
          <View className="mx-4">
            <Text className="text-white font-bold">2</Text>
            <Text className="text-dark-textSecondary text-xs">Absent</Text>
          </View>
        </View>
      </View>
    </View>
  );
}
