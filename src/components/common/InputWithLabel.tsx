import * as React from "react";
import TextField from "@mui/material/TextField";

import {
  FormControl,
  FormHelperText,
} from "@mui/material";
import styled from "styled-components";
import { colorPalette as palette } from "../../styles/colorPalette";

// 두개가 함께 있을땐 상단 (그 사이) 에 여백을 준다
const Wrapper = styled.div`
  & + & {
    margin-top: 0.1rem;
  }
`;

interface inputInfo {
  name: string;
  placeholder: string;
  type?: string;
  value?: string | number | readonly string[] | undefined;
  disabled?: boolean; // 수정 가능 여부
  multiline?: boolean; // 두 줄 이상 여부(default : falses)
  rows?: number; // 기본 보여지는 줄 수(height)
  textBool?: boolean; // helper 여부
  helperText?: string;
  size?: "medium" | "small";
  onChange?: React.ChangeEventHandler<HTMLInputElement> | undefined;
}

const InputStyle = styled(TextField)(({ theme }) => ({
  backgroundColor: palette.gray,
}));

// rest 쪽에는 onChange, type, name, value, placeholder 등의 input 에서 사용 하는 값들을 넣어줄수 있다.
const InputWithLabel = ({
  placeholder,
  textBool,
  helperText,
  rows,
  size,
  ...rest
}: inputInfo) => (
  <Wrapper>
    <FormControl sx={{ width: "100%", height: "100%" }}>
      <InputStyle
        size={size? size: "small"}
        placeholder={placeholder}
        {...rest}
        rows={rows}
      />
    </FormControl>
    {textBool && 
      (helperText ? (
        <FormHelperText disabled variant="filled">
          {helperText}
        </FormHelperText>
      ) : (
        <p style={{ margin: `21px` }}/>
      ))
    }
  </Wrapper>
);

export default InputWithLabel;
