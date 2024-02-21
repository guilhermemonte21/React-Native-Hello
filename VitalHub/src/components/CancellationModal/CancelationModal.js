import { Modal } from "react-native"
import { Title } from "../Title/Style"
import { Button } from "../Button/Styled"
import { ButtonTitle, ButtonTitleGoogle } from "../ButtonTitle/Style"
import { LinkCode, LinkMedium } from "../Link/Style"
import { ModalContent, ModalText, PatientModal } from "./style"

export const CancelationModal = ({
    visible,
    setshowModalCancel,
    ...rest
}) =>{
    return(
        <Modal {...rest} visible={visible} transparent={true} animationType="fade">
            {/* container */}
        <PatientModal>
            {/* content */}
            <ModalContent>

                {/* titulo */}
                <Title>Cancelar Consulta</Title>

                {/* descricao */}
                <ModalText>
                Ao cancelar essa consulta, abrirá uma possível disponibilidade no seu horário, deseja mesmo cancelar essa consulta?
                </ModalText>


                {/* botao */}
                <Button>
                    <ButtonTitle>
                        Confirmar
                    </ButtonTitle>
                </Button>

                {/* botao de cancelar */}
                <LinkCode onPress={() => setshowModalCancel(false)}>
                <ButtonTitleGoogle>
                    Cancelar
                </ButtonTitleGoogle>
                </LinkCode>


            </ModalContent>

        </PatientModal>    

        </Modal>
    )
}