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

import { Icon } from "@rneui/themed";

import _COLORS from '@constants/colors';
import { useSelector } from 'react-redux';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { navigationRef } from '../../RootNavigation';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

//Scenes
import CenaSplash from '@scenes/CenaSplash';
import CenaLogin from '@scenes/CenaLogin';
import CenaCadastro from '@scenes/CenaCadastro';
import CenaEsqueciSenha from '@scenes/CenaEsqueciSenha';

import CenaInicio from '@scenes/CenaInicio';
import CenaPerfil from '@scenes/CenaPerfil';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

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

    <NavigationContainer ref={navigationRef}>
    {
		!is_logged && (
		<Stack.Navigator 
			screenOptions={{
				headerShown: false
			}}
		>
            <>
              <Stack.Screen 
                name="LoginScreen" 
                component={CenaLogin} 
              />
              <Stack.Screen 
                name="CadastroScreen" 
                component={CenaCadastro} 
              />
              <Stack.Screen 
                name="EsqueciSenha" 
                component={CenaEsqueciSenha} 
              />
            </>
      	</Stack.Navigator>
        )
    }
    {
        is_logged && (
			<Tab.Navigator
				screenOptions={({ route }) => ({
					headerShown: false,
					tabBarIcon: ({ focused, color, size }) => {
						let iconName;
						let type = 'antdesign';
			
						if (route.name === 'Início') {
							iconName = focused
								? 'home'
								: 'home';
						} else if (route.name === 'Perfil') {
							iconName = focused
								? 'user'
								: 'user';
						}
						
						return <Icon
							name={iconName}
							type={type}
							size={size}
							color={color}
						/>;
					},
					tabBarActiveTintColor: _COLORS.primary,
					tabBarInactiveTintColor: _COLORS.terciary,
					}
				)}
			>
				<Tab.Screen name="Início" component={CenaInicio} />
				<Tab.Screen name="Perfil" component={CenaPerfil} />
			</Tab.Navigator>
        )
    }
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
