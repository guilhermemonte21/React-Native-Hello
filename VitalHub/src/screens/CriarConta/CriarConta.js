import { Button } from "../../components/Button/Styled"
import { ButtonTitle } from "../../components/ButtonTitle/Style"
import { Container } from "../../components/Container/Style"
import { LinkCode } from "../../components/Link/Style"
import { Logo } from "../../components/Logo/Style"
import { Subtitle } from "../../components/Text/Style"
import { Title } from "../../components/Title/Style"
import { Input } from "../../components/input/Style"

export const CriarConta = () => {
    return(
        <Container>
            <Logo
                source={require('../../assets/VitalHub3.png')}
            />

            <Title>Criar Conta</Title>

            <Subtitle>Insira seu endereço de e-mail e senha para realizar seu cadastro.</Subtitle>

            <Input style={{ fontFamily: 'MontserratAlternates_600SemiBold' }}
            placeholder="Usuário ou E-mail"
            placeholderTextColor="#34898F"
            />

        <Input style={{ fontFamily: 'MontserratAlternates_600SemiBold' }}
            placeholder="Senha"
            placeholderTextColor="#34898F"
            />

            <Input style={{ fontFamily: 'MontserratAlternates_600SemiBold' }}
            placeholder="Confirmar Senha"
            placeholderTextColor="#34898F"
            />

        <Button>
            <ButtonTitle>CADASTRAR</ButtonTitle>
        </Button>

        <LinkCode>Cancelar</LinkCode>
        </Container>
    )
}