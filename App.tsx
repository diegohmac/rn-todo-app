import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import { theme } from './src/styles/theme';
import { useFonts } from 'expo-font';
import Header from './src/components/Header';
import TodoList from './src/components/TodoList';

export default function App() {
  const [loaded] = useFonts({
    Inter: require('./assets/fonts/Inter-Regular.ttf'),
    'Inter-Bold': require('./assets/fonts/Inter-Bold.ttf'),
  });

  if (!loaded) {
    return null;
  }

  return (
    <View style={styles.container}>
      <StatusBar translucent backgroundColor={theme.colors.gray700} style='light' />
      <Header />
      <TodoList />
    </View>
  ); 
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.colors.gray700,
    flex: 1,
  },
});
