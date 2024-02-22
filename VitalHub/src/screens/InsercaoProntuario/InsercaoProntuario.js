import { Header } from "../../components/Header/Style"
import { SubtitleAppointment } from "../../components/AppointmentModal/style"
import { Container, ContainerPerfl } from "../../components/Container/Style"
import { Label } from "../../components/Text/Style"
import { Input, InputInsercao2, InputPerfil, InsercaoInput } from "../../components/input/Style"
import { Button } from "../../components/Button/Styled"
import { ButtonTitle, ButtonTitleDoc } from "../../components/ButtonTitle/Style"
import { LinkCode } from "../../components/Link/Style"
import { LabelPerfil, Title } from "../../components/Title/Style"

export const InsercaoProntuario = () => {
    return(
        <ContainerPerfl contentContainerStyle={{flexGrow:1, alignItems:'center'}}>
        <Header
        source={require('../../assets/IMGperfil.png')}
        />
        
        <Title>Gu Magal</Title>

        <SubtitleAppointment>22 anos    @drgumagal@gmail.com</SubtitleAppointment>


        <LabelPerfil>Descricao da consulta</LabelPerfil>

        <InsercaoInput placeholder="consulta"/>


        <LabelPerfil>Diagnostico do Paciente</LabelPerfil>
        <InputInsercao2 placeholder="Diagnostico"/>


        <LabelPerfil>Prescricao medica</LabelPerfil>
        <InsercaoInput placeholder="Prescricao Medica"/>


        <Button>
            <ButtonTitle>Salvar</ButtonTitle>
        </Button>

        <LinkCode>
            <ButtonTitleDoc>Cancelar</ButtonTitleDoc>
        </LinkCode>


        </ContainerPerfl>
    )
}