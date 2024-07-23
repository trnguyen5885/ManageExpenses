import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { GlobalStyles } from './constants/GlobalStyles';
import Welcome from './screens/Welcome'
import Register from './screens/Register';
import Login from './screens/Login';
import RecentExpenses from './screens/RecentExpenses';
import AllExpenses from './screens/AllExpenses';
import ManageExpenses from './screens/ManageExpenses';
import AntDesign from '@expo/vector-icons/AntDesign';
import ExpensesContextProvider from './store/expenses-context';


const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

function OverviewScreensExpenses() {
  return <Tab.Navigator screenOptions={{
    headerShown: false,
    tabBarStyle: {backgroundColor: GlobalStyles.colors.backgroundColor},
    tabBarActiveTintColor: GlobalStyles.colors.primaryColor,
  }} >
    <Tab.Screen name='RecentExpenses' component={RecentExpenses} options={{
      tabBarLabel: 'Recent',
      tabBarLabelStyle: {fontSize: 14},
      tabBarIcon: ({color, size}) => <AntDesign name='hourglass' color={color} size={size} />

    }} />
    <Tab.Screen name='AllExpenses' component={AllExpenses} options={{
      tabBarLabel: 'All',
      tabBarLabelStyle: {fontSize: 14},
      tabBarIcon: ({color, size}) => <AntDesign name='calendar' color={color} size={size} />
    }} />
  </Tab.Navigator>
}



export default function App() {
  return (
    <>
      <StatusBar style="auto" />
      <ExpensesContextProvider>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{
          headerShown: false,
        }}>
          <Stack.Screen name='Welcome' component={Welcome}/> 
          <Stack.Screen name='Register' component={Register} />
          <Stack.Screen name='Login' component={Login} />
          <Stack.Screen name='OverviewScreensExpenses' component={OverviewScreensExpenses} />
          <Stack.Screen name='ManageExpenses' component={ManageExpenses} options={{
            presentation: 'modal'
          }} />
        </Stack.Navigator>
      </NavigationContainer>
      </ExpensesContextProvider>
    </>
    
  );
}

const styles = StyleSheet.create({});
