import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import _COLORS from '@constants/colors';
import { useSelector } from 'react-redux';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

//Scenes
import CenaSplash from '@scenes/CenaSplash';
import CenaLogin from '@scenes/CenaLogin';
import CenaCadastro from '@scenes/CenaCadastro';
const Stack = createNativeStackNavigator();


const Routes = () => {

  const isDarkMode = useColorScheme() === 'dark';
  const is_loading_app = useSelector(state => state.appReducer.isLoadingApp);
  const is_logged = useSelector(state => state.appReducer.userIsLogged);

  const backgroundStyle = {
    backgroundColor: isDarkMode ? _COLORS.darker : _COLORS.lighter,
  };

  if ( is_loading_app ) {
    return (<CenaSplash />)
  }

  return (

    <NavigationContainer>
      <Stack.Navigator 
        screenOptions={{
          headerShown: false
        }}
      >
        {
          !is_logged && (
            <>
              <Stack.Screen 
                name="LoginScreen" 
                component={CenaLogin} 
              />
              <Stack.Screen 
                name="CadastroScreen" 
                component={CenaCadastro} 
              />
            </>
          )
        }
      </Stack.Navigator>
      {1==2 && <SafeAreaView style={backgroundStyle}>
        <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
        <ScrollView
          contentInsetAdjustmentBehavior="automatic"
          style={backgroundStyle}>
          <Header />
          <View
            style={{
              backgroundColor: isDarkMode ? Colors.black : Colors.white,
            }}>
            <Section title="Step One">
              Edit <Text style={styles.highlight}>App.js</Text> to change this
              screen and then come back to see your edits.
            </Section>
            <Section title="See Your Changes">
              <ReloadInstructions />
            </Section>
            <Section title="Debug">
              <DebugInstructions />
            </Section>
            <Section title="Learn More">
              Read the docs to discover what to do next:
            </Section>
            <LearnMoreLinks />
          </View>
        </ScrollView>
      </SafeAreaView>}
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default Routes;
