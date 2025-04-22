import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import TesteScreen from "./pages/TesteScreen";
import ToDoScreen from "./pages/toDoScreen";
import BuscaCep from "./pages/BuscaCep";

const Stack = createNativeStackNavigator();

export default function App(){
  return <NavigationContainer>
    <Stack.Navigator>

      <Stack.Screen name="Home" component={ToDoScreen}/>

      <Stack.Screen name="Teste" component={TesteScreen}/>

      <Stack.Screen name="BuscaCEP" component={BuscaCep}/>

    </Stack.Navigator>
  </NavigationContainer>
}