import { useNavigate } from "react-router-dom";

function CalenderHeader({ date, setDate }) {
  const navigate = useNavigate();
  
  // Change date and navigate to another route
  const changeRoute = (newDate) => {
    setDate(newDate);
    navigate(`/year/${newDate.year}/month/${newDate.month}`);
  }

  return (
    <div className="py-3 px-5 d-flex align-items-cente justify-content-between border-bottom">
      <div className="d-flex align-items-cente justify-content-between">
        <h3>Appoinment</h3>
        <form className="d-flex align-items-cente justify-content-between ms-4">
          {/* Drodown - year */}
          <select 
            className="form-select" 
            value={date.year}
            onChange={(e) => changeRoute({month: date.month, year: e.target.value})}
          >
            <option value={2019}>2019</option>
            <option value={2020}>2020</option>
            <option value={2021}>2021</option>
            <option value={2022}>2022</option>
          </select>

          {/* Drodown - month */}
          <select 
            className="form-select ms-2"
            value={date.month}
            onChange={(e) => changeRoute({month: e.target.value, year: date.year})}
          >
            <option value={1}>January</option>
            <option value={2}>February</option>
            <option value={3}>March</option>
            <option value={4}>April</option>
            <option value={5}>May</option>
            <option value={6}>June</option>
            <option value={7}>July</option>
            <option value={8}>August</option>
            <option value={9}>September</option>
            <option value={10}>October</option>
            <option value={11}>November</option>
            <option value={12}>December</option>
          </select>
        </form>
      </div>

      <button>Make an appoinment</button>
    </div>
  );
}

export default CalenderHeader;
