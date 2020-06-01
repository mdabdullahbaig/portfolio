import React from "react";
import { ScaleLoader } from "react-spinners";
import { css } from "@emotion/core";

const SpinnerCss = css`
  display: flex;
  justify-content: center;
  margin: 25% auto;
`;

function Spinner() {
  return (
    <ScaleLoader loading={true} size={150} color={"white"} css={SpinnerCss} />
  );
}

export default Spinner;
