import React from 'react';
import { View, Text, SafeAreaView, ScrollView, TouchableOpacity, Image, Dimensions } from 'react-native';
import { Heart, MessageCircle, Share2, MoreHorizontal, Bookmark } from 'lucide-react-native';

const { width } = Dimensions.get('window');

const FEED_DATA = [
  {
    id: '1',
    author: 'Robotics Club',
    avatar: 'https://ui-avatars.com/api/?name=RC&background=8B5CF6&color=fff',
    image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=2070',
    content: 'Our latest robot is finally taking shape! Join us this Friday in the lab for a live demo of the neural-network navigation system. 🤖✨',
    likes: 124,
    comments: 18,
    time: '2h ago',
    tag: 'Innovation'
  },
  {
    id: '2',
    author: 'Student Council',
    avatar: 'https://ui-avatars.com/api/?name=SC&background=06B6D4&color=fff',
    image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80&w=2070',
    content: 'Ready for the Tech-Fest? Early bird registrations are now open. Don\'t miss out on the biggest event of the semester! 🚀',
    likes: 456,
    comments: 42,
    time: '5h ago',
    tag: 'Event'
  }
];

export default function CampusFeed() {
  return (
    <SafeAreaView className="flex-1 bg-dark-bg">
      <View className="px-6 pt-4 pb-2 border-b border-dark-border flex-row justify-between items-center">
        <Text className="text-white text-2xl font-bold">Campus Life</Text>
        <TouchableOpacity className="bg-primary/20 px-4 py-2 rounded-full">
          <Text className="text-primary font-bold text-sm">Post</Text>
        </TouchableOpacity>
      </View>

      <ScrollView className="flex-1" showsVerticalScrollIndicator={false} contentContainerStyle={{ paddingBottom: 120 }}>
        {FEED_DATA.map((post) => (
          <View key={post.id} className="mt-6 border-b border-dark-border pb-6">
            {/* Post Header */}
            <View className="px-6 flex-row justify-between items-center">
              <View className="flex-row items-center">
                <Image source={{ uri: post.avatar }} className="w-10 h-10 rounded-full" />
                <View className="ml-3">
                  <Text className="text-white font-bold">{post.author}</Text>
                  <Text className="text-dark-textSecondary text-xs">{post.time}</Text>
                </View>
              </View>
              <TouchableOpacity>
                <MoreHorizontal size={20} color="#94A3B8" />
              </TouchableOpacity>
            </View>

            {/* Post Content */}
            <View className="px-6 mt-4">
              <Text className="text-dark-textSecondary text-sm mb-4 leading-5">{post.content}</Text>
            </View>

            {/* Post Image */}
            <Image 
              source={{ uri: post.image }} 
              className="w-full h-72" 
              style={{ width: width }}
              resizeMode="cover"
            />

            {/* Post Footer Actions */}
            <View className="px-6 mt-4 flex-row justify-between items-center">
              <View className="flex-row space-x-6">
                <TouchableOpacity className="flex-row items-center">
                  <Heart size={22} color="#94A3B8" />
                  <Text className="text-dark-textSecondary ml-2">{post.likes}</Text>
                </TouchableOpacity>
                <TouchableOpacity className="flex-row items-center mx-6">
                  <MessageCircle size={22} color="#94A3B8" />
                  <Text className="text-dark-textSecondary ml-2">{post.comments}</Text>
                </TouchableOpacity>
                <TouchableOpacity>
                  <Share2 size={22} color="#94A3B8" />
                </TouchableOpacity>
              </View>
              <TouchableOpacity>
                <Bookmark size={22} color="#94A3B8" />
              </TouchableOpacity>
            </View>
          </View>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
}
