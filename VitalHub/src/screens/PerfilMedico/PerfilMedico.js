import { View } from "react-native"
import { DoctorHeader } from "../../components/Header/Style"
import { DoctorPic, Sininho } from "../../components/Logo/Style"
import { NomeDoctor, WelcomeDoctor } from "../../components/Text/Style"
import { Container } from "../../components/Container/Style"
import CalendarStrip from "react-native-calendar-strip"

export const PerfilMedico = () => {
    return(
        <Container>
        <DoctorHeader>
            
                
            <DoctorPic  source={require('../../assets/DrGu.png')}/>
            <View style={{flexDirection:"collumn",}}>
            <WelcomeDoctor>Bem-Vindo</WelcomeDoctor>
            <NomeDoctor>Dr Gu</NomeDoctor>
            </View>

            <Sininho  source={require('../../assets/Vector.png')}/>
            
            </DoctorHeader>

            <CalendarStrip
                    calendarAnimation={{type: 'sequence', duration: 30}}
                    
                    style={{height: 150,width:"100%", paddingTop: 20, paddingBottom: 10}}
                    calendarHeaderStyle={{color: 'black',textAlign:"left"}}
                    calendarColor={'translucend'}
                    dateNumberStyle={{color: 'black'}}
                    dateNameStyle={{color: 'black'}}
                    highlightDateNumberStyle={{color: 'white', backgroundColor:'#49B3BA', borderRadius:21, textAlignVertical:"center"}}
                    highlightDateNameStyle={{color: 'white'}}
                    highlightDateContainerStyle={{backgroundColor:'#49B3BA'}}
                    disabledDateNameStyle={{color: 'grey'}}
                    disabledDateNumberStyle={{color: 'grey'}}
                    // datesWhitelist={datesWhitelist}
                    // datesBlacklist={datesBlacklist}
                    scrollable={true}
                    iconLeft={false}
                    iconRight={false}
                    locale={'brazil'}
                    
                />
        
        
        
            </Container>
    )
}