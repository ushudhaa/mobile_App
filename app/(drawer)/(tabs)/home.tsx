import React from "react";
import { View, Text, ScrollView } from "react-native";

const Home = () => {
  const statsCards = [
    { title: "Total Books", value: "10" },
    { title: "Total Users", value: "3" },
    { title: "Available Books", value: "8" },
    { title: "Borrowed Books", value: "2" },
  ];

  return (
    <ScrollView className="flex-1 bg-gray-100 p-4">
      <Text className="text-2xl font-bold mb-4">Dashboard</Text>

      <View className="flex-row flex-wrap justify-between mb-6">
        {statsCards.map((card, index) => (
          <View
            key={index}
            className="w-[48%] bg-white rounded-2xl p-4 mb-4 shadow"
          >
            <Text className="text-xl font-bold text-center">{card.value}</Text>
            <Text className="text-gray-500 text-sm mt-1 text-center">
              {card.title}
            </Text>
          </View>
        ))}
      </View>

      <View className="bg-white rounded-2xl p-4 shadow">
        <Text className="text-lg font-semibold mb-3">Recent Activity</Text>

        <View className="flex-row justify-between py-2 border-b border-gray-200">
          <Text>Sujan Subedi checked in</Text>
          <Text className="text-gray-500 text-xs">9:15 AM</Text>
        </View>
        <View className="flex-row justify-between py-2 border-b border-gray-200">
          <Text>Nuna Limbu submitted borrow request</Text>
          <Text className="text-gray-500 text-xs">8:45 AM</Text>
        </View>
        <View className="flex-row justify-between py-2">
          <Text>Ushudha Limbu checked out</Text>
          <Text className="text-gray-500 text-xs">Yesterday</Text>
        </View>
      </View>
    </ScrollView>
  );
};

export default Home;
