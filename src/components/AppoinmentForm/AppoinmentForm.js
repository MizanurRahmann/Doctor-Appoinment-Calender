import ModalWrapper from "../ModallWrapper/ModalWrapper";
import Appoinment from "./Appoinment";


function AppoinmentForm({ setOpenModal }) {
  return (
    <ModalWrapper 
      head={`Make an appoinment`}
      setOpenModal={setOpenModal}
    >
      <Appoinment />
    </ModalWrapper>
  );
}

export default AppoinmentForm;
