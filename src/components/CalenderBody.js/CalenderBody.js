import React, { useEffect } from "react";
import styled from "styled-components";

function CalenderBody({ currenMonth }) {
  const Box = styled.div`
    width: 14.1%;
    height: 16vh;
    border: 1px solid #ccc;
    padding: 20px;
    transition: 0.3s;
    cursor: pointer;
    &:hover{
      background: #f7f7f7;
    }
  `;


  return (
    <div className="p-5 d-flex flex-wrap">
      {currenMonth &&
        currenMonth.map((row) => (
          <>
            {row.map((col) => (
              <Box key={Math.random()}>
                <p>{col.$D}</p>
              </Box>
            ))}
          </>
        ))}
    </div>
  );
}

export default CalenderBody;
