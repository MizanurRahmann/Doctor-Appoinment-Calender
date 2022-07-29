import ModalWrapper from "../ModallWrapper/ModalWrapper";
import DayDetailBody from "./DayDetailBody";


function DayDetails({ info, setOpenModal }) {
  return (
    <ModalWrapper head={``} setOpenModal={setOpenModal}>
      <DayDetailBody info={info} />
    </ModalWrapper>
  );
}

export default DayDetails;
