import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';
// import HomeScreen from './screens/HomeScreen';
import { Provider } from 'react-redux';
import Store from './Store';
import StackNavigator from './StackNavigator';

export default function App() {
  return (
    <>
    <Provider store={Store}>
      <StackNavigator/>
      <StatusBar style="auto" />
    </Provider>
    </>
  );
}

const styles = StyleSheet.create({
  AndroidSafeArea: {
    flex: 1,
    backgroundColor: "white",
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    backgroundColor:"#F0F0F0",
    
  },
});
