import { Button } from "../../components/Button/Styled"
import { ButtonTitle } from "../../components/ButtonTitle/Style"
import { Container } from "../../components/Container/Style"
import { Logo } from "../../components/Logo/Style"
import { Subtitle } from "../../components/Text/Style"
import { Title } from "../../components/Title/Style"
import { Input } from "../../components/input/Style"

export const RedefinirSenha = () => {
    return(
        <Container>
            <Logo
                source={require('../../assets/VitalHub3.png')}
            />

            <Title>Redefinir senha</Title>

            <Subtitle>Insira e confirme a sua nova senha</Subtitle>
            
            
            <Input  style={{ fontFamily: 'MontserratAlternates_600SemiBold' }}
            placeholder="Nova Senha"
            placeholderTextColor="#34898F"/>

            <Input  style={{ fontFamily: 'MontserratAlternates_600SemiBold' }}
            placeholder="Confirmar Nova Senha"
            placeholderTextColor="#34898F"/>
            

            <Button>
                <ButtonTitle>Confirmar Nova Senha</ButtonTitle>
            </Button>


        </Container>
    )
}