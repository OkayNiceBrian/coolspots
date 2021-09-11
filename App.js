// import { StatusBar } from 'expo-status-bar';
import './global';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import WelcomeScreen from './app/screens/WelcomeScreen';
import SplashScreen from './app/screens/SplashScreen';
import HomeTab from './app/screens/HomeTab';
import firebase from 'firebase/app';
import "firebase/auth";

const firebaseConfig = {
  apiKey: 'api-key',
  authDomain: 'project-id.firebaseapp.com',
  databaseURL: 'https://project-id.firebaseio.com',
  projectId: 'project-id',
  storageBucket: 'project-id.appspot.com',
  messagingSenderId: 'sender-id',
  appId: 'app-id',
  measurementId: 'G-measurement-id',
}

firebase.initializeApp(firebaseConfig);

const Stack = createNativeStackNavigator();

export default function App() {
  console.log("App Executing");
  const [isLoading, setLoading] = useState(true);
  const [user, setUser] = useState();

  function onAuthStateChanged(user) {
    setUser(user);
    if (isLoading) {
      setLoading(false);
    } 
  }

  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber;
  }, []);

  return (
    <NavigationContainer>
        <Stack.Navigator>
          {state.isLoading ? (
              <Stack.Screen 
                name="Splash"
                component={SplashScreen}
                options={{ animationEnabled: false }}
              />
          ) : user === null ? (
              <Stack.Screen 
                name="Welcome"
                component={WelcomeScreen}
                options={{ headerShown: false, animationEnabled: false }}
              />
          ) : (
            <Stack.Screen 
                name="Home"
                component={HomeTab}
                options={{ headerShown: false, animationEnabled: false }} // Change to false for production
              />
          )}
        </Stack.Navigator>
    </NavigationContainer>
  );
}
