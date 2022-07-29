import { useEffect, useState } from "react";
import { AiOutlineUser } from "react-icons/ai";
import { useDispatch } from "react-redux";
import { deleteAnAppoinment } from "../../redux/appoinments/appoinmentAction";
import styled from "styled-components";
import toast from "react-hot-toast";

const Name = styled.div`
  width: 120px;
  height: 120px;
  margin: auto;
  margin-bottom: 1rem;
  border-radius: 10px;
  position: relative;
  overflow: hidden;
  border: 1px solid #dadce0;
`;

const UserIcon = styled.div`
  position: absolute;
  bottom: -1.5rem;
  left: 50%;
  transform: translateX(-50%);
  font-size: 6rem;
  color: #dadce0;
`;

const Blocks = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  border-top: 1px solid #dadce0;
  &:nth-child(3) {
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
  h6 {
    display: block;
    width: 100%;
    margin: 0;
    font-size: 15px;
    border-radius: 0;
    text-transform: uppercase;
    font-weight: lighter;
  }
  h4 {
    font-size: 2rem;
    color: #526af2;
    text-transform: capitalize;
  }
`;

const monthNames = [ "Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec", ];


function DayDetailBody({ info, controlClose }) {
  const [date, setDate] = useState();
  const [time, setTime] = useState();
  const dispatch = useDispatch();

  // DELETE APPOINMENT
  const deleteAppoinment = () => {
    dispatch(deleteAnAppoinment(info));
    controlClose(true);
    toast.success("Appoinment deleted successfully.")
  };

  // SETUP DATE STRING TO SHOW IN UI
  useEffect(() => {
    const d = new Date(info.date);
    const t = new Date(info.time);

    const dd = String(d.getDate()).padStart(2, "0");
    const mm = monthNames[d.getMonth()];
    const yy = d.getFullYear();
    setDate(`${dd} ${mm} ${yy}`);

    let hh = String(t.getHours()).padStart(2, "0");
    let mi = String(t.getMinutes()).padStart(2, "0");

    if (parseInt(hh) / 12 != 0) {
      hh = parseInt(hh) % 12;
      hh = String(hh).padStart(2, "0");
      setTime(`${hh}:${mi} PM`);
    } else {
      setTime(`${hh}:${mi} AM`);
    }
  }, []);

  return (
    <div>
      {/* Name */}
      <div className="mb-4">
        <Name>
          <UserIcon>
            <AiOutlineUser />
          </UserIcon>
        </Name>
        <h3 className="text-center fw-normal">{info.name}</h3>
      </div>

      {/* Gender, Age, Date, Time */}
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

      <button
        style={{ width: "100%", padding: "15px", margin: "20px 0" }}
        type="submit"
        onClick={deleteAppoinment}
      >
        Delete this appoinment
      </button>
    </div>
  );
}

export default DayDetailBody;
