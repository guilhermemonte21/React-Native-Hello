import { Image } from "react-native"
import { ButtonTitle, TitleUser } from "../Title/Style"
import { Age, CancelButton, CancelTitle, CardContainer, Hour, HourButton, InfoConsulta, InfoPaciente, PatientContainer, PatientPhoto, TitlePatient, Type } from "./style"
import { Clock } from "../Logo/Style"
import { AntDesign } from "@expo/vector-icons"

export const AppointmentCard = ({ imagePatient, 
    patientName, 
    patientAge, 
    appointmentHour, 
    appointmentType,
    situacao = "pendente",
    onPressCancel,
    onPressAppointment
    }) => {
    return(
        <CardContainer>
            <PatientContainer>
                <PatientPhoto source={require('../../assets/Gsampaiowz.png')}/>

                <InfoConsulta>  
                    <TitlePatient>biel Sampaio</TitlePatient>

                   <InfoPaciente>       
                        <Age>18 anos</Age>
                        <Type>Cardiologist</Type>
                    </InfoPaciente>

                   <HourButton situacao={situacao}>
                   <AntDesign
                name="clockcircle"
                size={14}
                color={situacao == "pendente" ? "#49B3BA" : "#8C8A97"}
              />
                        <Hour situacao={situacao}>17:00</Hour>
                    </HourButton>
                </InfoConsulta>

                {
                    situacao == "cancelado" ? (
                        <>
                        </>
                    ) : situacao == "pendente" ? (
                    <CancelButton onPress={onPressCancel}>
                        <CancelTitle situacao={situacao}>Cancelar</CancelTitle>
                    </CancelButton>   
                    ) : (
                    <CancelButton onPress={onPressAppointment}>
                        <CancelTitle situacao={situacao}>Ver prontuário</CancelTitle>
                    </CancelButton>    
                    )
                }

            </PatientContainer>

        </CardContainer>
    )
}