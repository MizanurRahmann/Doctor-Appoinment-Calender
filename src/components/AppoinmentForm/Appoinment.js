import { Controller, useForm } from "react-hook-form";
import { MuiPickersUtilsProvider, DatePicker, TimePicker, } from "@material-ui/pickers";
import DateFnsUtils from "@date-io/date-fns";
import styled from "styled-components";


const FieldContainer = styled.div`
  width: 100%;
  margin-bottom: 20px;
  display: flex;
  flex-direction: column;
  label {
    font-size: 12px;
    color: #444;
    margin-bottom: 5px;
  }
  input,
  select {
    outline: none;
    padding: 15px 20px;
    border-radius: 5px;
    font-size: 16px;
    border: 1px solid #ccc;
    background: transparent !important;
    position: relative;
    &::after {
      content: "";
      display: none;
      background: red;
      border: none !important;
    }
    &: [type=submit] {
      padding: 10px 20px;
      background: red;
    }
  }
  span {
    color: red;
    font-size: 12px;
    margin-top: 5px;
  }
`;


function Appoinment() {
  const { register, handleSubmit, control, formState: { errors }, } = useForm();
  
  // Form submission logics
  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        {/* ======== Name ======== */}
        <FieldContainer>
          <label>Name</label>
          <input
            type="text"
            name="name"
            {...register("name", { required: true, maxLength: 40 })}
          />
          {errors.name?.type === "required" && (<span>First name is required.</span>)}
          {errors.name?.type === "maxLength" && (<span>First name shouldn't be greater than 40 characters.</span>)}
        </FieldContainer>

        {/* ======== Age ======== */}
        <FieldContainer>
          <label>Age</label>
          <input
            type="number"
            name="age"
            {...register("age", { required: true, min: 5, max: 100 })}
          />
          {errors.age?.type === "required" && <span>Age is required.</span>}
          {errors.age?.type === "min" && (<span>Age should be greater than 5</span>)}
          {errors.age?.type === "max" && (<span>Age should be less than 100</span>)}
        </FieldContainer>

        
        {/* ======== Gender ======== */}
        <FieldContainer>
          <label>Gender</label>
          <select {...register("gender")}>
            <option value="female">Female</option>
            <option value="male">Male</option>
            <option value="other">Other</option>
          </select>
        </FieldContainer>

        <MuiPickersUtilsProvider utils={DateFnsUtils}>
          {/* ======== Date ======== */}
          <FieldContainer>
            <label>Appoinment Date</label>
            <Controller
              name="date"
              control={control}
              defaultValue={null}
              render={({ field, ...props }) => (
                <DatePicker
                  value={field.value}
                  onChange={(date) => {field.onChange(date);}}
                  InputProps={{ disableUnderline: true }}
                />
              )}
            />
          </FieldContainer>

          
          {/* ======== Time ======== */}
          <FieldContainer>
            <label>Appoinment Time</label>
            <Controller
              name="time"
              control={control}
              defaultValue={null}
              render={({ field, ...props }) => (
                <TimePicker
                  value={field.value}
                  onChange={(date) => {field.onChange(date);}}
                  InputProps={{ disableUnderline: true }}
                />
              )}
            />
          </FieldContainer>
        </MuiPickersUtilsProvider>

        
        {/* ======== Submit Button ======== */}
        <button
          style={{ width: "100%", padding: "15px", margin: "10px 0" }}
          type="submit"
        >
          Submit
        </button>
      </form>
    </>
  );
}

export default Appoinment;
