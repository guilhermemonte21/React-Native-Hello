import { CardMedico } from "../../components/Card/Style"
import { Container } from "../../components/Container/Style"
import { Title } from "../../components/Title/Style"
import { DoctorCard } from "./Style"

export const SelectMedico = () => {
    return(
        <Container>

            <Title>Selecionar Medico</Title>

            <DoctorCard>
                <DoctorPicture
                source={{ uri: 'https://github.com/Gustavoozz.png' }}
                />
                <InformationContainer>
                <Title style={{ fontSize: 16, marginBottom: 0, width: '70%' }}>Dr. Gustavo</Title>
                <TextClinic style={{ color: '#8C8A97'}}>Cirurgião, Cardiologista</TextClinic>  
                </InformationContainer>
                
             </DoctorCard>

             <DoctorCard>
                <DoctorPicture
                source={{ uri: 'https://github.com/Gustavoozz.png' }}
                />
                <InformationContainer>
                <Title style={{ fontSize: 16, marginBottom: 0, width: '70%' }}>Dr. Gustavo</Title>
                <TextClinic style={{ color: '#8C8A97'}}>Cirurgião, Cardiologista</TextClinic>  
                </InformationContainer>
                
             </DoctorCard>

             <DoctorCard>
                <DoctorPicture
                source={{ uri: 'https://github.com/Gustavoozz.png' }}
                />
                <InformationContainer>
                <Title style={{ fontSize: 16, marginBottom: 0, width: '70%' }}>Dr. Gustavo</Title>
                <TextClinic style={{ color: '#8C8A97'}}>Cirurgião, Cardiologista</TextClinic>  
                </InformationContainer>
                
             </DoctorCard>

             <DoctorCard>
                <DoctorPicture
                source={{ uri: 'https://github.com/Gustavoozz.png' }}
                />
                <InformationContainer>
                <Title style={{ fontSize: 16, marginBottom: 0, width: '70%' }}>Dr. Gustavo</Title>
                <TextClinic style={{ color: '#8C8A97'}}>Cirurgião, Cardiologista</TextClinic>  
                </InformationContainer>
                
             </DoctorCard>
              
             <Button style={{ marginTop: 20 }}>
                <ButtonTitle>Continuar</ButtonTitle>
            </Button>

          <CancelLink style={{ marginBottom: 20 }}>Cancelar</CancelLink>


        </Container>

    )
}