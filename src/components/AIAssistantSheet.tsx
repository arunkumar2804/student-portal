import React from 'react';
import { View, Text, Modal, TouchableOpacity, TextInput, KeyboardAvoidingView, Platform, ScrollView } from 'react-native';
import { MotiView, AnimatePresence } from 'moti';
import { X, Send, Sparkles } from 'lucide-react-native';
import { triggerHaptic } from '../utils/haptics';

interface AIAssistantSheetProps {
  isVisible: boolean;
  onClose: () => void;
}

export default function AIAssistantSheet({ isVisible, onClose }: AIAssistantSheetProps) {
  const handleClose = () => {
    triggerHaptic('light');
    onClose();
  };

  return (
    <Modal visible={isVisible} transparent animationType="fade">
      <View className="flex-1 justify-end">
        <TouchableOpacity 
          activeOpacity={1} 
          onPress={handleClose} 
          className="absolute inset-0 bg-black/60"
        />
        
        <AnimatePresence>
          {isVisible && (
            <MotiView
              from={{ translateY: 600 }}
              animate={{ translateY: 0 }}
              exit={{ translateY: 600 }}
              transition={{ type: 'spring', damping: 20, stiffness: 120 }}
              className="bg-dark-bgSecondary rounded-t-[48px] border-t border-dark-border shadow-2xl"
              style={{ height: '75%' }}
            >
              <View className="p-8 flex-1">
                {/* Drag Handle */}
                <View className="w-16 h-1.5 bg-dark-border rounded-full self-center mb-8" />

                {/* Header */}
                <View className="flex-row justify-between items-center mb-10">
                  <View className="flex-row items-center">
                    <MotiView 
                      from={{ rotate: '0deg' }}
                      animate={{ rotate: '360deg' }}
                      transition={{ type: 'timing', duration: 2000, loop: true }}
                      className="bg-primary p-3 rounded-2xl mr-4"
                    >
                      <Sparkles size={24} color="white" />
                    </MotiView>
                    <View>
                      <Text className="text-white text-2xl font-bold">AI Assistant</Text>
                      <Text className="text-dark-textSecondary text-sm font-medium">Always online • Smart Guide</Text>
                    </View>
                  </View>
                  <TouchableOpacity onPress={handleClose} className="bg-dark-card p-3 rounded-full border border-dark-border">
                    <X size={20} color="#94A3B8" />
                  </TouchableOpacity>
                </View>

                {/* Chat History Area (Mock) */}
                <ScrollView 
                  className="flex-1" 
                  showsVerticalScrollIndicator={false}
                  contentContainerStyle={{ paddingBottom: 20 }}
                >
                  <MotiView 
                    from={{ opacity: 0, translateX: -20 }}
                    animate={{ opacity: 1, translateX: 0 }}
                    transition={{ delay: 200 }}
                    className="bg-dark-card rounded-3xl rounded-tl-none p-5 self-start max-w-[85%] border border-dark-border"
                  >
                    <Text className="text-white text-base leading-6">Hello Arun! How can I help you today? I have access to your semester 6 schedule and attendance records.</Text>
                  </MotiView>
                  
                  <MotiView 
                    from={{ opacity: 0, translateX: 20 }}
                    animate={{ opacity: 1, translateX: 0 }}
                    transition={{ delay: 400 }}
                    className="bg-primary rounded-3xl rounded-tr-none p-5 self-end max-w-[85%] mt-6 shadow-lg shadow-primary/20"
                  >
                    <Text className="text-white text-base leading-6 font-medium">What's my attendance in ML?</Text>
                  </MotiView>

                  <MotiView 
                    from={{ opacity: 0, translateX: -20 }}
                    animate={{ opacity: 1, translateX: 0 }}
                    transition={{ delay: 600 }}
                    className="bg-dark-card rounded-3xl rounded-tl-none p-5 self-start max-w-[85%] border border-dark-border mt-6"
                  >
                    <Text className="text-white text-base leading-6">Your current attendance in **Machine Learning** is **84%**. You've missed 4 classes this semester. Would you like to see the upcoming syllabus?</Text>
                  </MotiView>
                </ScrollView>

                {/* Input Area */}
                <KeyboardAvoidingView 
                  behavior={Platform.OS === 'ios' ? 'padding' : undefined}
                  keyboardVerticalOffset={Platform.OS === 'ios' ? 100 : 0}
                >
                  <View className="flex-row items-center bg-dark-card border border-dark-border rounded-[28px] p-2 mt-6">
                    <TextInput 
                      placeholder="Type a message..." 
                      placeholderTextColor="#64748B"
                      className="flex-1 px-6 py-3 text-white text-base"
                    />
                    <TouchableOpacity 
                      onPress={() => triggerHaptic('success')}
                      className="bg-primary p-4 rounded-full ml-2"
                    >
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
