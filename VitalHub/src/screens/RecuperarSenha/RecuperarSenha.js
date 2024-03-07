import { Button } from "../../components/Button/Styled"
import { ButtonTitle } from "../../components/ButtonTitle/Style"
import { Container } from "../../components/Container/Style"
import { ArrowPic, Logo } from "../../components/Logo/Style"
import { Subtitle } from "../../components/Text/Style"
import { Title } from "../../components/Title/Style"
import { Input } from "../../components/input/Style"
import { LayoutPassword } from "./Style"


export const RecuperarSenha = ({ navigation }) => {
    return(
        
        <Container>
            <ArrowPic onPress={() => navigation.replace("Login")}
                source={require('../../assets/arrow.png')}
               />
            <Logo
                source={require('../../assets/VitalHub3.png')}
            />

            <Title>Recuperar Senha</Title>

            <Subtitle>Digite abaixo seu email cadastrado que enviaremos um link para recuperação de senha</Subtitle>

            <Input  style={{ fontFamily: 'MontserratAlternates_600SemiBold' }}
            placeholder="Usuário ou E-mail"
            placeholderTextColor="#34898F"/>

            <Button onPress={() => navigation.replace("VerificarEmail")}>
                <ButtonTitle >Continuar</ButtonTitle>
            </Button>

            




            
            </Container>
        
    )
}