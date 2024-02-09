import { Button } from "../../components/Button/Styled"
import { ButtonTitle } from "../../components/ButtonTitle/Style"
import { Container, LayoutVerify } from "../../components/Container/Style"
import { LinkBold, LinkCode } from "../../components/Link/Style"
import { Logo } from "../../components/Logo/Style"
import { Subtitle } from "../../components/Text/Style"
import { Title } from "../../components/Title/Style"
import { InputVerify } from "../../components/input/Style"

import { ContainerVerify } from "./Style"

    export const VerificarEmail = () => {
        return(
            <ContainerVerify>
                <Logo
                    source={require('../../assets/VitalHub3.png')}
                />

                <Title>Verifique seu e-mail</Title>

                <Subtitle>Digite o código de 4 dígitos enviado para <LinkBold>username@email.com</LinkBold></Subtitle>

            <LayoutVerify>
                <InputVerify
                placeholder="0"
                placeholderTextColor="#34898F"     
                />
                <InputVerify
                placeholder="0"
                placeholderTextColor="#34898F"     
                />
                <InputVerify
                placeholder="0"
                placeholderTextColor="#34898F"     
                />
                <InputVerify
                placeholder="0"
                placeholderTextColor="#34898F"     
                />
                </LayoutVerify>

                <Button >
                    <ButtonTitle>Continuar</ButtonTitle>
                </Button>
                
                <LinkCode>Reenviar Código</LinkCode>




            </ContainerVerify>
        )
    }