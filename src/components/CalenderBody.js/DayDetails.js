import { useEffect, useState } from "react";
import ModalWrapper from "../ModallWrapper/ModalWrapper";
import styled from "styled-components";

const Name = styled.div`
  width: 120px;
  height: 120px;
  margin: auto;
  margin-bottom: 1rem;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
`;

const Blocks = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  border-top: 1px solid #dadce0;
  &:last-child {
    border-bottom: 1px solid #dadce0;
  }
`;

const Block50 = styled.div`
  width: 50%;
  min-height: 10vh;
  border-left: 1px solid #dadce0;
  padding: 2rem;
  &:last-child {
    border-right: 1px solid #dadce0;
  }
  h6{
    display: block;
    width: 100%;
    margin: 0;
    font-size: 15px;
    border-radius: 0;
    text-transform: uppercase;
    font-weight: lighter;
  }
  h4{
    font-size: 2rem;
    color: #526AF2;
    text-transform: capitalize;
  }
`;

const monthNames =["Jan","Feb","Mar","Apr", "May","Jun","Jul","Aug", "Sep", "Oct","Nov","Dec"];

function DayDetails({ info, setOpenModal }) {
  const [date, setDate] = useState();
  const [time, setTime] = useState();

  // SETUP DATE STRING TO SHOW IN UI
  useEffect(() => {
    const d = new Date(info.date);
    const t = new Date(info.time);

    const dd = String(d.getDate()).padStart(2, '0');
    const mm = monthNames[d.getMonth()];
    const yy = d.getFullYear();
    setDate(`${dd} ${mm} ${yy}`);
    
    let hh = String(t.getHours()).padStart(2, '0');
    let mi = String(t.getMinutes()).padStart(2, '0');

    if(parseInt(hh) / 12 != 0) {
      hh = parseInt(hh) % 12;
      hh = String(hh).padStart(2, '0');
      setTime(`${hh}:${mi} PM`);
    } else {
      setTime(`${hh}:${mi} AM`);
    }
  }, [])


  return (
    <ModalWrapper
      head={``}
      setOpenModal={setOpenModal}
    >
      <div>
        {/* Name */}
        <div className="mb-4">
          <Name></Name>
          <h3 className="text-center fw-normal">{info.name}</h3>
        </div>

        {/* Gender & Age */}
        <Blocks>
          <Block50>
            <h6>Clients Age</h6>
            <h4>{info.age}</h4>
          </Block50>
          <Block50>
            <h6>Clients Gender</h6>
            <h4>{info.gender}</h4>
          </Block50>
        </Blocks>
        <Blocks>
          <Block50>
            <h6>Appoinment Date</h6>
            <h4>{date}</h4>
          </Block50>
          <Block50>
            <h6>Appoinment Time</h6>
            <h4>{time}</h4>
          </Block50>
        </Blocks>
      </div>
    </ModalWrapper>
  );
}

export default DayDetails;
