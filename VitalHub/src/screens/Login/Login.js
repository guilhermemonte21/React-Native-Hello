import { Container } from "../../components/Container/Style"
import { Image } from "react-native"
import { Title } from "../../components/Title/Style"
import { Logo } from "../../components/Logo/Style"
import { Input } from "../../components/input/Style"
import { LinkBold, LinkMedium } from "../../components/Link/Style"
import { Button, ButtonGoogle } from "../../components/Button/Styled"
import { ButtonTitle, ButtonTitleGoogle } from "../../components/ButtonTitle/Style"
import { ContentAccount, TextAccount } from "./Style"

export const Login = () => {
    return (
        <Container>
            <Logo
                source={require('../../assets/VitalHub3.png')}
            />

            <Title>Entrar ou criar conta</Title>

            <Input style={{ fontFamily: 'MontserratAlternates_600SemiBold' }}
            placeholder="Usuário ou E-mail"
            placeholderTextColor="#34898F"
            />

        <Input style={{ fontFamily: 'MontserratAlternates_600SemiBold' }}
            placeholder="Senha"
            placeholderTextColor="#34898F"
            />

            
           
            <LinkMedium>Esqueceu a senha?</LinkMedium>

            <Button>
                <ButtonTitle>Entrar</ButtonTitle>
            </Button>

            <ButtonGoogle>
                <Image
                source={require('../../assets/GOOGLE.png')}
                />
                <ButtonTitleGoogle>Entrar com Google</ButtonTitleGoogle>
            </ButtonGoogle>
            <ContentAccount>
        <TextAccount>
          Não tem conta? <LinkBold>Crie uma conta agora!</LinkBold>
        </TextAccount>
      </ContentAccount>
        </Container>
    )
}