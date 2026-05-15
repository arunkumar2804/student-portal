import React from 'react';
import { View, Text } from 'react-native';
import { MotiView } from 'moti';
import { TrendingUp } from 'lucide-react-native';

export default function AttendanceCard({ percentage }: { percentage: number }) {
  return (
    <MotiView 
      from={{ opacity: 0, scale: 0.95, translateY: 10 }}
      animate={{ opacity: 1, scale: 1, translateY: 0 }}
      transition={{ type: 'spring', damping: 12 }}
      className="bg-dark-card border border-dark-border rounded-[32px] p-6 mx-6 flex-row items-center shadow-lg shadow-black/20"
    >
      <View className="relative w-20 h-20 items-center justify-center">
        {/* Simple progress circle representation */}
        <View className="w-20 h-20 rounded-full border-[6px] border-dark-bg" />
        <MotiView 
          from={{ opacity: 0, rotate: '0deg' }}
          animate={{ opacity: 1, rotate: '45deg' }}
          transition={{ type: 'spring', delay: 400 }}
          className="absolute w-20 h-20 rounded-full border-[6px] border-primary" 
          style={{ borderRightColor: 'transparent', borderBottomColor: 'transparent' }}
        />
        <Text className="absolute text-white font-bold text-xl">{percentage}%</Text>
      </View>
      
      <View className="flex-1 ml-6">
        <View className="flex-row items-center">
          <Text className="text-white text-xl font-bold">Attendance</Text>
          <View className="ml-2 bg-success/20 px-2 py-1 rounded-full">
            <TrendingUp size={12} color="#10B981" />
          </View>
        </View>
        <Text className="text-dark-textSecondary mt-1 leading-5">You're safely above the 75% threshold. Nice work!</Text>
        
        <View className="flex-row mt-4 space-x-6">
          <View>
            <Text className="text-white font-bold text-base">21</Text>
            <Text className="text-dark-textSecondary text-xs font-medium uppercase tracking-tighter">Present</Text>
          </View>
          <View className="mx-4">
            <Text className="text-white font-bold text-base">4</Text>
            <Text className="text-dark-textSecondary text-xs font-medium uppercase tracking-tighter">Absent</Text>
          </View>
        </View>
      </View>
    </MotiView>
  );
}
