import { Text, View } from "react-native"
import { Card, DoctorHeader, Horario } from "../../components/Header/Style"
import { DoctorPic, ImageCard, Sininho } from "../../components/Logo/Style"
import { HorarioCard, IdadeCard, Label, NomeDoctor, Subtitle, WelcomeDoctor } from "../../components/Text/Style"
import { Container, LayoutVerify, Padron } from "../../components/Container/Style"
import CalendarStrip from "react-native-calendar-strip"
import { CancelBtn, DoctorButton } from "../../components/Button/Styled"
import { ButtonTitle, ButtonTitleCancel, ButtonTitleDoc } from "../../components/ButtonTitle/Style"
import { useState } from "react"
import { BtnListAppointment } from "../../components/ButtonListAppointment/ButtonListAppointment"
import { AppointmentCard } from "../../components/AppointmentCard/AppointmentCard"
import { ListComponent } from "../../components/ListComponent/ListComponent"
import { CancelationModal } from "../../components/CancellationModal/CancelationModal"
import { AppointmentModal } from "../../components/AppointmentModal/AppointmentModal"

const Consultas = [
  {id:1, nome: "Guilherme", situacao: "pendente"},
  {id:2, nome: "Guilherme", situacao: "realizado"},
  {id:3, nome: "Guilherme", situacao: "cancelado"}
]



export const PerfilMedico = () => {

  //state para o estado da lista(cards)
  const [statusLista,setStatusLista] = useState("pendente")

  //state para a exibicao dos modais
  const [showModalCancel, setshowModalCancel] = useState(false);
  const[showModalAppointment, setshowModalAppointment] = useState(false)
  const [profile, useProfile] = useState("Paciente")

    const localeBrazil = {
        name: 'pt-BR',
        config: {
          months: 'Janeiro_Fevereiro_Março_Abril_Maio_Junho_Julho_Agosto_Setembro_Outubro_Novembro_Dezembro'.split('_'),
          monthsShort: 'Jan_Fev_Mar_Abr_Mai_Jun_Jul_Ago_Set_Out_Nov_Dez'.split('_'),
          weekdays: 'Domingo_Segunda-feira_Terça-feira_Quarta-feira_Quinta-feira_Sexta-feira_Sábado'.split('_'),
          weekdaysShort: 'Dom_Seg_Ter_Qua_Qui_Sex_Sáb'.split('_'),
          weekdaysMin: 'Do_2ª_3ª_4ª_5ª_6ª_Sá'.split('_'),
          longDateFormat: {
            LT: 'HH:mm',
            LTS: 'HH:mm:ss',
            L: 'DD/MM/YYYY',
            LL: 'D [de] MMMM [de] YYYY',
            LLL: 'D [de] MMMM [de] YYYY [às] LT',
            LLLL: 'dddd, D [de] MMMM [de] YYYY [às] LT'
          },
          calendar: {
            sameDay: '[Hoje às] LT',
            nextDay: '[Amanhã às] LT',
            nextWeek: 'dddd [às] LT',
            lastDay: '[Ontem às] LT',
            lastWeek: 'dddd [da última semana às] LT',
            sameElse: 'L'
          },
          relativeTime: {
            future: 'em %s',
            past: 'há %s',
            s: 'segundos',
            m: 'um minuto',
            mm: '%d minutos',
            h: 'uma hora',
            hh: '%d horas',
            d: 'um dia',
            dd: '%d dias',
            M: 'um mês',
            MM: '%d meses',
            y: 'um ano',
            yy: '%d anos'
          },
          ordinalParse: /\d{1,2}º/,
          ordinal: function(number) {
            return number + 'º';
          },
          meridiemParse: /[AP]\/[M]\./,
          isPM: function(input) {
            return input.charAt(0) === 'P';
          },
          meridiem: function(hours, minutes, isLower) {
            return hours <  12 ? 'AM' : 'PM';
          },
          week: {
            dow:  0, // Sunday is the first day of the week.
            doy:  6 // The week that contains Jan  6th is the first week of the year.
          }
        }}

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
                    calendarHeaderStyle={{color: 'black',alignSelf:"flex-start", marginLeft:10, fontSize:20, fontFamily: " MontserratAlternates_600SemiBold" }}
                    calendarColor={'translucend'}
                    dateNumberStyle={{color: 'black', fontSize:16, fontFamily:"Quicksand_600SemiBold"}}
                    dateNameStyle={{color: 'black'}}
                    highlightDateNumberStyle={{color: 'white', backgroundColor:'#49B3BA', borderRadius:21, textAlignVertical:"center"}}
                    highlightDateNameStyle={{color: 'white'}}
                    highlightDateContainerStyle={{backgroundColor:'#49B3BA'}}
                    disabledDateNameStyle={{color: 'grey'}}
                    disabledDateNumberStyle={{color: 'grey'}}
                    
                    scrollable={true}
                    iconLeft={false}
                    iconRight={false}
                    locale={localeBrazil}
                    
                />
        

        <View style={{flexDirection:"row", gap:10}}>
        <BtnListAppointment
        textButton={"Agendadas"}
        clickButton={statusLista === "pendente"}
        onPress={() => setStatusLista("pendente")}
        />

        <BtnListAppointment
        textButton={"Realizadas"}
        clickButton={statusLista === "realizado"}
        onPress={() => setStatusLista("realizado")}
        />

        <BtnListAppointment
        textButton={"Canceladas"}
        clickButton={statusLista === "cancelado"}
        onPress={() => setStatusLista("cancelado")}
        />
  </View>
      
  <ListComponent
            data={Consultas}
            keyExtractor={(item) => item.id}
            renderItem={({item}) =>
            statusLista == item.situacao && (
                <AppointmentCard
                situacao={item.situacao}
                onPressCancel={() => setshowModalCancel(true)}
                
                onPressAppointment={()=> setshowModalAppointment(true)}
                />
            )
            }
            />

           
        
        <CancelationModal
          visible={showModalCancel}
          setshowModalCancel={setshowModalCancel}
        />

        <AppointmentModal 
          visible={showModalAppointment}
          setshowModalAppointment={setshowModalAppointment}
        />
            </Container>
    )
}