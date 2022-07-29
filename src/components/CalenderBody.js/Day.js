import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import DayDetails from "./DayDetails";


const AppoinmentBox = styled.div`
  width: 100%;
  height: 100px;
  overflow-x: hidden;
  overflow-y: auto;
  &::-webkit-scrollbar-track{
    -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.1);
    background-color: transparent;
    border-radius: 10px;
  }
  &::-webkit-scrollbar {
	  width: 5px;
	  background-color: #F2f2f2;
  }
  &::-webkit-scrollbar-thumb {
	  background-color: gray;
    border-radius: 10px;
  }
`;

const AppoinmentCard = styled.div`
  width: calc(100% - 5px);
  padding: 5px;
  background: #D7F2AE;
  color: #365073;
  font-size: 11px;
  margin-bottom: 5px;
  border-radius: 3px;
  overflow: hidden;
`;
const AppoinmentButton = styled.div`
  padding: 5px;
  background: #dadce0;
  color: #000;
  font-size: 11px;
  margin-bottom: 5px;
  border-radius: 3px;
`;

function Day({ day }) {
  const appoinments = useSelector((state) => state.appoinment.appoinments);
  const [currentAppoinment, setCurrentAppoinment] = useState([]);
  const [openModal, setOpenModal] = useState(false);
  const [selectedAppoinment, setSelectedAppoinment] = useState({});


  const controlModal = (data) => {
    setSelectedAppoinment(data);
    setOpenModal(true);
  }

  
  useEffect(() => {
    // 1. get todays date
    const todaysDay = day.$D;
    const todaysMonth = day.$M;
    const todaysYear = day.$y;

    // 2. Extract todays appoinments from redux store
    let todaysAppoinments = [];
    appoinments.map((appoinment) => {
      const appointmentDate = new Date(appoinment.date);
      const appointmentDay = appointmentDate.getDate();
      const appointmentMonth = appointmentDate.getMonth();
      const appointmentYear = appointmentDate.getFullYear();

      if (
        appointmentDay === todaysDay &&
        appointmentMonth === todaysMonth &&
        appointmentYear === todaysYear
      ) {
        todaysAppoinments.push(appoinment);
      }
    });

    // 3. Sort them according to time
    todaysAppoinments.sort(function (x, y) {
      return x.time - y.time;
    });

    // 4. Store them into a state to show in UI
    setCurrentAppoinment([...todaysAppoinments]);
  }, []);



  return (
    <>
      {/* Date */}
      <p>{day.$D}</p>

      <AppoinmentBox>
        {/* Appoinment list */}
        {currentAppoinment &&
          currentAppoinment.map((ap) => (
            <AppoinmentCard onClick={() => controlModal(ap)}>
              {ap.name}
            </AppoinmentCard>
          ))}
      </AppoinmentBox>

      {openModal && <DayDetails info={selectedAppoinment} setOpenModal={setOpenModal} />}
    </>
  );
}

export default Day;
