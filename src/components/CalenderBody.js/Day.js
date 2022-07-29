import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import DayDetails from "./DayDetails";

const AppoinmentCard = styled.div`
  padding: 5px;
  background: #377d71;
  color: #fff;
  font-size: 11px;
  margin-bottom: 5px;
  border-radius: 3px;
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

      <>
        {/* Appoinment list */}
        {currentAppoinment &&
          currentAppoinment.slice(0, 2).map((ap) => (
            <AppoinmentCard onClick={() => controlModal(ap)}>
              {ap.name}
            </AppoinmentCard>
          ))}

        {/* See more button */}
        {currentAppoinment && currentAppoinment.length > 2 && (
          <AppoinmentButton>+ See More</AppoinmentButton>
        )}
      </>

      {openModal && <DayDetails info={selectedAppoinment} setOpenModal={setOpenModal} />}
    </>
  );
}

export default Day;
