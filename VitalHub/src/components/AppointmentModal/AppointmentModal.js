import { Modal } from "react-native"
import { ModalContent, PatientModal } from "../CancellationModal/style"

export const AppointmentModal = ({
    visible,
    setshowModalAppointment,
    ...rest
}) => {
    return(
        <Modal {...rest} visible={visible}  transparent={true} animationType="fade">

            <PatientModal>

            <ModalContent>

                


            </ModalContent>


            </PatientModal>

        </Modal>
    )
}