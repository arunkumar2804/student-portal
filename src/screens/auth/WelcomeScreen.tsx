import React from 'react';
import { View, Text, TouchableOpacity, ImageBackground, Dimensions } from 'react-native';
import { MotiView, MotiText } from 'moti';
import { LinearGradient } from 'expo-linear-gradient';
import { ArrowRight } from 'lucide-react-native';

const { width, height } = Dimensions.get('window');

export default function WelcomeScreen({ navigation }: any) {
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
            from={{ opacity: 0, translateY: 20 }}
            animate={{ opacity: 1, translateY: 0 }}
            transition={{ type: 'timing', duration: 1000 }}
          >
            <MotiText 
              className="text-white text-5xl font-bold leading-tight"
              from={{ opacity: 0, translateX: -20 }}
              animate={{ opacity: 1, translateX: 0 }}
              transition={{ delay: 200 }}
            >
              The Future of Campus Life
            </MotiText>
            <MotiText 
              className="text-dark-textSecondary text-lg mt-4"
              from={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 500 }}
            >
              Experience your college journey like never before. Connected, organized, and immersive.
            </MotiText>

            <TouchableOpacity 
              onPress={() => navigation.navigate('Login')}
              className="bg-primary px-8 py-4 rounded-2xl mt-10 flex-row items-center justify-center self-start"
            >
              <Text className="text-white font-bold text-lg mr-2">Get Started</Text>
              <ArrowRight size={20} color="white" />
            </TouchableOpacity>
          </MotiView>
        </LinearGradient>
      </ImageBackground>
    </View>
  );
}
