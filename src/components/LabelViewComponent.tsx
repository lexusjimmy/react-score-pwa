import React, { ReactElement } from "react";
import styled from "styled-components";
import { IconButton } from "@material-ui/core";
import { Create } from "@material-ui/icons";

type LabelViewComponentProps = {
  label: string;
  onEditClick: React.MouseEventHandler;
};

const ButtonLabelContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  p {
      text-align: center;
      width: 100%;
  }
`;

const LabelViewComponent: React.FC<LabelViewComponentProps> = function LabelViewComponent(
  props
): ReactElement {
  return (
    <ButtonLabelContainer>
      <p>{props.label}</p>
      <IconButton onClick={props.onEditClick}>
        <Create />
      </IconButton>
    </ButtonLabelContainer>
  );
};

export default LabelViewComponent;
