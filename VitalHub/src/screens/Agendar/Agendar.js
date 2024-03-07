import { useState } from "react"
import { Button } from "../../components/Button/Style"
import CalendarComponent from "../../components/CalendarComponent/CalendarComponent"
import { Container } from "../../components/Container/Style"

import { SelectInput } from "../../components/SelectInput/SelectInput"
import { ButtonTitle, LabelUser, Title } from "../../components/Title/Style"

import { SchedulingModal } from "../../components/SchedulingModal/SchedulingModal"
import { LinkCode } from "../../components/Link/Style"

export const DateSelect = () => {

    const [showModalScheduling, setShowModalScheduling] = useState(true)

    return(
    <Container style={{ backgroundColor: '#FAFAFA'}}>
        <Title style={{ marginTop: 30, marginBottom: 30 }}>Selecionar data</Title>


        <CalendarComponent/>

        <LabelUser>Selecione um horário disponível</LabelUser>
        <SelectInput/>

        <Button>
            <ButtonTitle>Confirmar</ButtonTitle>
        </Button>

        <LinkCode>
                <ButtonTitleGoogle>
                    Cancelar
                </ButtonTitleGoogle>
                </LinkCode>

        <SchedulingModal
        visible={showModalScheduling}
        setShowModalScheduling={setShowModalScheduling}
        />
    </Container>
    )
}