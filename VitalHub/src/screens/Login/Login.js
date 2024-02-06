import { Container } from "../../components/Container/Style"
import { Logo } from "../../components/Logo/Style"
import { Title } from "../../components/Title/Style"

export const Login = () => {
    return (
        <Container>
            <Logo
                src={require('../../assets/VitalHub2.png')}
            />

            <Title>Entrar ou criar conta</Title>
            {/*
            <Input/>

            <Input/>

            <LinkMedium>Esqueceu a senha?</LinkMedium>

            <Button>
                <ButtonTitle>Entrar</ButtonTitle>
            </Button>

            <ButtonGoogle>
                <ButtonTitleGoogle>Entrar com Google</ButtonTitleGoogle>
            </ButtonGoogle>

            <ContentAccount>
                <TextAcount>Não tem conta? Crie uma agora</TextAcount>
            </ContentAccount> */}
        </Container>
    )
}