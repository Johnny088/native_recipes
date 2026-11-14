import { StyleSheet, Text, View } from 'react-native';
import { Tabs } from 'expo-router';
import { MaterialCommunityIcons } from '@expo/vector-icons';

const TabsLayout = () => {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: '#e65100',
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: 'Category',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons
              name="food"
              size={size}
              color={String(color)}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="meals"
        options={{
          title: 'Meals',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons
              name="magnify"
              size={size}
              color={String(color)}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="random"
        options={{
          title: 'Random',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons
              name="dice-multiple"
              size={size}
              color={String(color)}
            />
          ),
        }}
      />
    </Tabs>
  );
};

const styles = StyleSheet.create({
  container: {},
});

export default TabsLayout;
