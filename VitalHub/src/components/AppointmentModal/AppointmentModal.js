import { Modal } from "react-native"
import { ModalContent, PatientModal } from "../CancellationModal/style"
import { Title } from "../Title/Style"
import { Subtitle } from "../Text/Style"
import { Button } from "../Button/Styled"
import { ButtonTitle, ButtonTitleGoogle } from "../ButtonTitle/Style"
import { LinkCode } from "../Link/Style"
import { ImgAppointment, SubtitleAppointment } from "./style"
import { InsercaoProntuario } from "../../screens/InsercaoProntuario/InsercaoProntuario"

export const AppointmentModal = ({
    navigation,
    visible,
    setshowModalAppointment,
    ...rest
}) => {
    return(
        <Modal {...rest} visible={visible}  transparent={true} animationType="fade">

            <PatientModal>

            <ModalContent>

                <ImgAppointment source={require('../../assets/DrGu.png')}/>


                <Title>Dr Gu</Title>

                <SubtitleAppointment>22 anos          gu.magal@gmail.com</SubtitleAppointment>


                <Button>
                    <ButtonTitle >
                        Inserir Prontuario
                    </ButtonTitle>
                </Button>

                <LinkCode onPress={() => setshowModalAppointment(false)}>
                    <ButtonTitleGoogle>
                        Cancelar
                    </ButtonTitleGoogle>
                </LinkCode>

            </ModalContent>


            </PatientModal>

        </Modal>
    )
}


// onPress={() => navigation.navigate("InsercaoProntuario")}