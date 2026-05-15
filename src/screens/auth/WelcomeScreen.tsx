import React from 'react';
import { View, Text, TouchableOpacity, ImageBackground, Dimensions } from 'react-native';
import { MotiView, MotiText } from 'moti';
import { LinearGradient } from 'expo-linear-gradient';
import { ArrowRight } from 'lucide-react-native';
import { triggerHaptic } from '../../utils/haptics';

const { width, height } = Dimensions.get('window');

export default function WelcomeScreen({ navigation }: any) {
  const handleStart = () => {
    triggerHaptic('medium');
    navigation.navigate('Login');
  };

  return (
    <View className="flex-1 bg-dark-bg">
      <ImageBackground 
        source={{ uri: 'https://images.unsplash.com/photo-1523050853064-dbad350e4875?q=80&w=2070' }}
        className="flex-1"
        style={{ width, height }}
      >
        <LinearGradient
          colors={['transparent', 'rgba(15, 23, 42, 0.8)', '#0F172A']}
          className="flex-1 justify-end px-8 pb-16"
        >
          <MotiView
            from={{ opacity: 0, translateY: 40 }}
            animate={{ opacity: 1, translateY: 0 }}
            transition={{ type: 'spring', damping: 15, stiffness: 100 }}
          >
            <MotiText 
              className="text-white text-6xl font-bold leading-tight"
              from={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ type: 'spring', delay: 300 }}
            >
              The Future of Campus Life
            </MotiText>
            
            <MotiView
              from={{ opacity: 0, translateX: -10 }}
              animate={{ opacity: 1, translateX: 0 }}
              transition={{ delay: 600 }}
            >
              <Text className="text-dark-textSecondary text-xl mt-6 font-medium">
                Experience your college journey like never before. Connected, organized, and immersive.
              </Text>
            </MotiView>

            <MotiView
              from={{ opacity: 0, translateY: 20 }}
              animate={{ opacity: 1, translateY: 0 }}
              transition={{ type: 'spring', delay: 800 }}
            >
              <TouchableOpacity 
                onPress={handleStart}
                activeOpacity={0.8}
                className="bg-primary px-10 py-5 rounded-[24px] mt-12 flex-row items-center justify-center self-start shadow-2xl shadow-primary/40"
              >
                <Text className="text-white font-bold text-xl mr-3">Get Started</Text>
                <ArrowRight size={24} color="white" />
              </TouchableOpacity>
            </MotiView>
          </MotiView>
        </LinearGradient>
      </ImageBackground>
    </View>
  );
}
