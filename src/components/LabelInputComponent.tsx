import React, { ReactElement, useState } from "react";
import { TextField, IconButton } from "@material-ui/core";
import styled from "styled-components";
import { CheckCircle } from "@material-ui/icons";

const InputContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  > div{
      width: 100%;
  }
`;

type LabelInputComponentProps = {
  label: string;
  onLabelSubmit: (e: React.MouseEvent, labelVal: string)=> void;
};

const LabelInputComponent: React.FC<LabelInputComponentProps> = function LabelInputComponent(
  props
): ReactElement {
    const [inputVal, setInputVal] = useState<string>(props.label);
    const onValChange = (e: React.ChangeEvent<HTMLInputElement>)=> {
        setInputVal(e.target.value);
    }
  return (
    <InputContainer>
      <TextField value={inputVal} onChange={onValChange} />
      <IconButton onClick={(e)=> props.onLabelSubmit(e, inputVal)}>
        <CheckCircle />
      </IconButton>
    </InputContainer>
  );
};

export default LabelInputComponent;
