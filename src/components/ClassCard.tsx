import React from 'react';
import { View, Text } from 'react-native';
import { Clock, MapPin } from 'lucide-react-native';

interface ClassCardProps {
  title: string;
  time: string;
  room: string;
  faculty: string;
  color: string;
}

export default function ClassCard({ title, time, room, faculty, color }: ClassCardProps) {
  return (
    <View className="bg-dark-card border border-dark-border rounded-3xl p-5 mb-4 mx-6 flex-row">
      <View className="w-1.5 h-full rounded-full" style={{ backgroundColor: color }} />
      <View className="flex-1 ml-4">
        <View className="flex-row justify-between items-start">
          <Text className="text-white text-lg font-bold flex-1">{title}</Text>
          <View className="bg-dark-bg px-3 py-1 rounded-full border border-dark-border">
            <Text className="text-dark-textSecondary text-xs font-medium">{time}</Text>
          </View>
        </View>
        
        <View className="flex-row items-center mt-3">
          <View className="flex-row items-center mr-4">
            <MapPin size={14} color="#94A3B8" />
            <Text className="text-dark-textSecondary text-sm ml-1">{room}</Text>
          </View>
          <View className="flex-row items-center">
            <View className="w-5 h-5 rounded-full bg-primary/20 items-center justify-center">
              <Text className="text-primary text-[10px] font-bold">{faculty[0]}</Text>
            </View>
            <Text className="text-dark-textSecondary text-sm ml-1">{faculty}</Text>
          </View>
        </View>
      </View>
    </View>
  );
}
