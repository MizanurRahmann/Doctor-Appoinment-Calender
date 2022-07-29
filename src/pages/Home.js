import dayjs from "dayjs";
import { useEffect, useState } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { getAppoinmentData } from "../redux/appoinments/appoinmentAction";
import { getMonth } from "../utils/dateGenerator";

// components
import CalenderBody from "../components/CalenderBody.js/CalenderBody";
import CalenderHeader from "../components/CalenderHeader/CalenderHeader";
import AppoinmentForm from "../components/AppoinmentForm/AppoinmentForm";


function Home() {
  const [currenMonth, setCurrentMonth] = useState([]);
  const [date, setDate] = useState({month: (dayjs().month() + 1), year: dayjs().year()});
  const [openModal, setOpenModal] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const dispatch = useDispatch()
  const { year, month } = useParams();
  
  /* If it is root route then go to the calender page according to todays date
  otherwise just change the local date state according to param */
  useEffect(() => {
    if(location.pathname === "/") {
      navigate(`/year/${date.year}/month/${date.month}`);
    } else if(year !== date.year || month !== date.month) {
      setDate({month: month, year: year});
    }
  }, [location.pathname]);
  
  /* Change date matrix accordinf to date state */
  useEffect(() => {
    const m = date ? date.month : dayjs().month() + 1;
    const y = date ? date.year : dayjs().year();
    
    const dateMatrix = getMonth(m, y);
    setCurrentMonth(dateMatrix);
  }, [date]);

  /* Get previous appoinments data that is saved into local storage */
  useEffect(() => {
    let list = JSON.parse(localStorage.getItem("appoinments"));
    if(list) {
      dispatch(getAppoinmentData(list));
    }
  }, []);

  
  return (
    <div>
      <CalenderHeader date={date} setDate={setDate} setOpenModal={setOpenModal} />
      <CalenderBody currenMonth={currenMonth} />

      { openModal && <AppoinmentForm setOpenModal={setOpenModal} /> }
    </div>
  );
}

export default Home;
