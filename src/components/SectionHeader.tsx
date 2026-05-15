import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

interface SectionHeaderProps {
  title: string;
  actionLabel?: string;
  onActionPress?: () => void;
}

export default function SectionHeader({ title, actionLabel, onActionPress }: SectionHeaderProps) {
  return (
    <View className="flex-row justify-between items-end mb-4 px-6 mt-8">
      <Text className="text-white text-xl font-bold">{title}</Text>
      {actionLabel && (
        <TouchableOpacity onPress={onActionPress}>
          <Text className="text-secondary font-medium">{actionLabel}</Text>
        </TouchableOpacity>
      )}
    </View>
  );
}
