import { Button } from "../Button/Styled"
import { ButtonTitle } from "../ButtonTitle/style"
import { Container } from "../Container/Style"
import { LinkCode } from "../Link/Style"
import { IdadeCard, Label, Subtitle } from "../Text/Style"
import { Title } from "../Title/Style"

export const AgendarModal = () => {
    return(
    <Container>

        <Title>
            Agendar Consultas
        </Title>

        <Subtitle>Consulte os dados selecionados para a sua consulta</Subtitle>

        <Label>Data da Consulta</Label>
        <IdadeCard>1 de Novembro de 2024</IdadeCard>

        <Label>Medico(a) da Consulta</Label>
        <IdadeCard>Dra Alessandra</IdadeCard>
        <IdadeCard>Demartologa, Esteticista</IdadeCard>

        <Label>Local Da Consulta</Label>
        <IdadeCard>Santo Andre - SP</IdadeCard>

        <Label>Tipo da Consulta</Label>
        <IdadeCard>Rotina</IdadeCard>

        <Button>
            <ButtonTitle>Confirmar</ButtonTitle>
        </Button>

        <LinkCode>Cancelar</LinkCode>

    </Container>
    )
}