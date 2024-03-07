import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
// import { PerfilPaciente } from '.. / PerfilPaciente/PerfilPaciente'

import { Perfil } from '../Perfil/Perfil'
import { PerfilMedico } from '../PerfilMedico/PerfilMedico'
import { ContentIcon, TextIcon } from './Style';

import { FontAwesome, FontAwesome5 } from '@expo/vector-icons';

const BottomTab = createBottomTabNavigator();

export const Main = () => {
    return (
        <BottomTab.Navigator
            initialRouteName="PerfilMedico"

            screenOptions={({ route }) => ({
                tabBarStyle: { backgroundColor: "#FFFFFF", height: 80, paddingTop: 10 },
                tabBarActiveBackgroundColor: "transparent",
                tabBarShowLabel: false,
                headerShown: false,


                tabBarIcon: ({ focused }) => {
                    if (route.name === "PerfilMedico") {
                        return (
                            <ContentIcon
                            tabBarActiveBackgroundColor={ focused ? "#ECF2FF" : "transparent"}
                            >
                                <FontAwesome name="calendar" size={18} color='#4E4B59' />
                                { focused && <TextIcon>Agenda</TextIcon>}
                            </ContentIcon>
                        )
                    }
                    else {

                    }
                }
            })}
        >
            <BottomTab.Screen
                name="PerfilMedico"
                component={PerfilMedico}
            />

            <BottomTab.Screen
                name="Perfil"
                component={Perfil}
            />


        </BottomTab.Navigator>

    )
}