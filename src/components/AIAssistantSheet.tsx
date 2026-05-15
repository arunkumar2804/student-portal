import React from 'react';
import { View, Text, Modal, TouchableOpacity, TextInput, KeyboardAvoidingView, Platform, ScrollView } from 'react-native';
import { MotiView, AnimatePresence } from 'moti';
import { X, Send, Sparkles } from 'lucide-react-native';

interface AIAssistantSheetProps {
  isVisible: boolean;
  onClose: () => void;
}

export default function AIAssistantSheet({ isVisible, onClose }: AIAssistantSheetProps) {
  return (
    <Modal visible={isVisible} transparent animationType="fade">
      <View className="flex-1 justify-end">
        <TouchableOpacity 
          activeOpacity={1} 
          onPress={onClose} 
          className="absolute inset-0 bg-black/60"
        />
        
        <AnimatePresence>
          {isVisible && (
            <MotiView
              from={{ translateY: 400 }}
              animate={{ translateY: 0 }}
              exit={{ translateY: 400 }}
              transition={{ type: 'spring', damping: 20, stiffness: 150 }}
              className="bg-dark-bgSecondary rounded-t-[40px] border-t border-dark-border"
              style={{ height: '70%' }}
            >
              <View className="p-6 flex-1">
                {/* Drag Handle */}
                <View className="w-12 h-1.5 bg-dark-border rounded-full self-center mb-6" />

                {/* Header */}
                <View className="flex-row justify-between items-center mb-8">
                  <View className="flex-row items-center">
                    <View className="bg-primary p-2 rounded-xl mr-3">
                      <Sparkles size={20} color="white" />
                    </View>
                    <Text className="text-white text-xl font-bold">AI Campus Guide</Text>
                  </View>
                  <TouchableOpacity onPress={onClose} className="bg-dark-card p-2 rounded-full">
                    <X size={20} color="#94A3B8" />
                  </TouchableOpacity>
                </View>

                {/* Chat History Area (Mock) */}
                <ScrollView className="flex-1 space-y-6">
                  <View className="bg-dark-card rounded-3xl p-4 self-start max-w-[80%] border border-dark-border">
                    <Text className="text-white">Hello Arun! How can I help you today? I can check your attendance, upcoming classes, or help with assignments.</Text>
                  </View>
                  
                  <View className="bg-primary rounded-3xl p-4 self-end max-w-[80%] mt-4">
                    <Text className="text-white">What's my attendance in ML?</Text>
                  </View>

                  <View className="bg-dark-card rounded-3xl p-4 self-start max-w-[80%] border border-dark-border mt-4">
                    <Text className="text-white">Your attendance in Machine Learning is 84%. You've attended 21 out of 25 lectures.</Text>
                  </View>
                </ScrollView>

                {/* Input Area */}
                <KeyboardAvoidingView 
                  behavior={Platform.OS === 'ios' ? 'padding' : undefined}
                  keyboardVerticalOffset={Platform.OS === 'ios' ? 100 : 0}
                >
                  <View className="flex-row items-center bg-dark-card border border-dark-border rounded-3xl p-2 mt-4">
                    <TextInput 
                      placeholder="Ask me anything..." 
                      placeholderTextColor="#64748B"
                      className="flex-1 px-4 text-white"
                    />
                    <TouchableOpacity className="bg-primary p-3 rounded-2xl ml-2">
                      <Send size={20} color="white" />
                    </TouchableOpacity>
                  </View>
                </KeyboardAvoidingView>
              </View>
            </MotiView>
          )}
        </AnimatePresence>
      </View>
    </Modal>
  );
}
