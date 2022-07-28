import React, { useEffect } from "react";
import styled from "styled-components";

const Box = styled.div`
  width: 14.1%;
  height: 16vh;
  border-top: 1px solid #dadce0;
  border-left: 1px solid #dadce0;
  padding: 10px;
  transition: 0.3s;
  cursor: pointer;
  &:hover {
    background: #f7f7f7;
  }
  &:nth-child(7n+7){
    border-right: 1px solid #dadce0;
  }
  &:nth-last-child(-n+7){
    border-bottom: 1px solid #dadce0;
  }
  p{
    width: 40px;
    height: 40px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: auto;
  }
`;

function CalenderBody({ currenMonth }) {
  return (
    <div className="p-5 d-flex flex-wrap">
      {currenMonth &&
        currenMonth.map((row) => (
          <React.Fragment key={Math.random()}>
            {row.map((col) => (
              <Box key={Math.random()}>
                <p>{col.$D}</p>
              </Box>
            ))}
          </React.Fragment>
        ))}
    </div>
  );
}

export default CalenderBody;
