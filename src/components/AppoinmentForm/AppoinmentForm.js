import styled from "styled-components";
import { AiOutlineClose } from "react-icons/ai";
import Appoinment from "./Appoinment";

const Container = styled.div`
  width: 100%;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  justify-content: flex-end;
  background: rgba(0, 0, 0, 0.3);
`;

const FormBox = styled.div`
  width: 35%;
  padding: 3rem 2rem;
  height: 100vh;
  background: #fff;
`;

function AppoinmentForm({ setOpenModal }) {
  return (
    <Container>
      <FormBox>
        <div className="d-flex align-items-cente justify-content-between">
          <h4>Make an appoinment</h4>
          <button onClick={() => setOpenModal(false)}>
            <AiOutlineClose />
          </button>
        </div>

        <div className="mt-5">
          <Appoinment />
        </div>
      </FormBox>
    </Container>
  );
}

export default AppoinmentForm;
