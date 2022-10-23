import * as React from "react";
import FormControlLabel from "@mui/material/FormControlLabel";
import Switch from "@mui/material/Switch";
import { styled } from "@mui/material/styles";
import palette from "../../styles/colorPalette";

const SwitchCustom = styled(Switch)(({ theme }) => ({
  padding: 8,
  "& .MuiSwitch-track": {
    borderRadius: 22 / 2,
    "&:before, &:after": {
      content: '""',
      position: "absolute",
      top: "50%",
      transform: "translateY(-50%)",
      width: 16,
      height: 16,
    },
  },
  "& .MuiSwitch-thumb": {
    boxShadow: "none",
    width: 16,
    height: 16,
    margin: 2,
  },
  "& .MuiSwitch-switchBase.Mui-checked": {
    color: palette.purple_1,
  },
  "& .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track": {
    backgroundColor: "#000a8f",
  },
}));

interface Props {
  label: string;
  name: string;
  checked: boolean;
  disabled?: boolean;
  onChange: ((event: React.ChangeEvent<HTMLInputElement>, checked: boolean) => void) | undefined;
}

const SwitchButton = ({ label, ...rest }: Props) => {
  return <FormControlLabel control={<SwitchCustom {...rest}/>} label={label} />;
};

export default SwitchButton;