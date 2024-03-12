import { Container, LocalContainer } from '../../components/Container/Style'
import { LinkCode } from '../../components/Link/Style'
import { Subtitle } from '../../components/Text/Style'
import { Title } from '../../components/Title/Style'

export const Localization = ({ navigation }) => {
    return(
        <Container>
            

            <Title style={{ marginTop: 30, marginBottom: 10 }}>Clínica Natureh</Title>

           <Subtitle>São Paulo, SP</Subtitle>

           <LabelUser>Endereço</LabelUser>
            <InputUser style={{ fontFamily: 'MontserratAlternates_500Medium' }}
            placeholder="Rua Vicenso Silva, 987"
            placeholderTextColor="#33303E"/> 

            <LocalContainer>
            <View>
            <Label>Número</Label>
            <InputCity style={{ fontFamily: 'MontserratAlternates_500Medium' }}
            placeholder="578"
            placeholderTextColor="#33303E"/>
            </View>
            
            <View>
            <LabelUser>Bairro</LabelUser>
            <InputCity style={{ fontFamily: 'MontserratAlternates_500Medium' }}
            placeholder="Moema-SP"
            placeholderTextColor="#33303E"/>   
            </View>

            </LocalContainer>

            <LinkCode onPress={() => navigation.replace("PacienteConsultas")} style={{ marginBottom: 0 }}>Voltar</LinkCode>
        </Container>
    )
}