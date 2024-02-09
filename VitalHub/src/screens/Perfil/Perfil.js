import { View } from "react-native"
import { Container, ContainerPerfil2, ContainerPerfl, LayoutVerify } from "../../components/Container/Style"
import { Header } from "../../components/Header/Style"
import { Label, Subtitle } from "../../components/Text/Style"
import { LabelPerfil, Title } from "../../components/Title/Style"
import { InputPerfil } from "../../components/input/Style"
import { ButtonTitle } from "../../components/ButtonTitle/Style"
import { Button } from "../../components/Button/Styled"


export const Perfil = () => {
    return(
    <ContainerPerfl contentContainerStyle={{flexGrow:1, alignItems:'center'}}>
    <Header
    source={require('../../assets/IMGperfil.png')}
    />

    <Title>Richard Kosta</Title>

    <Subtitle>richard.kosta@gmail.com</Subtitle>

    <LabelPerfil>Data de Nascimento</LabelPerfil>
        <InputPerfil placeholder="AA/DD/AAAA"/>

        <LabelPerfil>CPF</LabelPerfil>
        <InputPerfil placeholder="063.***.***-**"/>

        <LabelPerfil>Data de Nascimento</LabelPerfil>
        <InputPerfil placeholder="AA/DD/AAAA"/>

        <LabelPerfil>Endereço</LabelPerfil>
        <InputPerfil placeholder="Rua Vicenso Silva, 987"/>


        <ContainerPerfil2>

            <View style={{flexGrow: 1}}>
        <LabelPerfil>Cep</LabelPerfil>
        <InputPerfil placeholder="09210-020"/>
        </View>

        <View style={{flexGrow: 1}}>
        <LabelPerfil>Cidade</LabelPerfil>
        <InputPerfil placeholder="Santo Andre"/>
        </View>

        </ContainerPerfil2>

        
            <Button>
                <ButtonTitle>
                    Salvar
                </ButtonTitle>
            </Button>

            <Button>
                <ButtonTitle>
                    Editar
                </ButtonTitle>
            </Button>
        
    </ContainerPerfl>
    )
}