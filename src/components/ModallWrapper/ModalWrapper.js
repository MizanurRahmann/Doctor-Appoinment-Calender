import React, { useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  justify-content: flex-end;
  background: rgba(0, 0, 0, 0.5);
  overflow: hidden;
`;

const Modal = styled.div`
  width: 35%;
  padding: 3rem 2rem;
  height: 100vh;
  background: #fff;
  animation: ${(props) => (props.close ? "rightToLeftt" : "leftToRight")};
  animation-duration: 0.5s;

  @keyframes leftToRight {
    from { margin-right: -35%; }
    to { margin-right: 0; }
  }
  @keyframes rightToLeftt {
    from { margin-right: 0; }
    to { margin-right: -35%; }
  }
`;

const ModalHeading = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  h4{
    display: inline-block;
    font-size: 1.7rem;
    line-height: 1.7rem;
  }
`;

function ModalWrapper({ head, setOpenModal, children }) {
  const [close, setClose] = useState(false);

  // Control closing option
  const controlClose = () => {
    setClose(true);
    setTimeout(() => { setOpenModal(false); }, 500);
  };

  // Clone the children and pass controlClose functin as parameter through children
  const ClonedChildren = React.cloneElement(children, {controlClose});

  return (
    <Container>
      <Modal close={close}>
        {/* Heading */}
        <ModalHeading >
          <h4>{head}</h4>
          <button onClick={controlClose}>
            <AiOutlineClose />
          </button>
        </ModalHeading>

        {/* Body */}
        <div className="mt-5">{ClonedChildren}</div>
      </Modal>
    </Container>
  );
}

export default ModalWrapper;
