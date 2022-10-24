import React from "react";
import "./App.css";
import Button from "./components/common/ButtonStyled";
import CheckIcon from "@mui/icons-material/Check";
import { Text } from "./components/common/Text";
import Input from "./components/common/InputWithLabel";
import UseSwitchButton from "./components/common/BSwitchButton";
import SwitchButton from "./components/common/SwitchButton";
import { FormControl, FormGroup } from "@mui/material";

function App() {
  const [state, setState] = React.useState({
    logo: false,
    profile: false,
    category: false,
  });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setState({
      ...state,
      [event.target.name]: event.target.checked,
    });
  };

  return (
    <div className="App">
      <Text children={"Hello"} color="red" />

      <Button
        label="Button"
        color="blue"
        icon={<CheckIcon />}
        onClick={() => console.log("클릭함")}
      />
      <Button />

      <Input name="Input" placeholder="Input테스트" />
      <Input />

      <FormControl component="fieldset" variant="standard">
        <FormGroup>
          <UseSwitchButton
            label="블로그 로고"
            onClick={() => {
              setState({ ...state, logo: !state.logo });
            }}
          />
          <UseSwitchButton label="프로필" />
          <UseSwitchButton label="카테고리" />
        </FormGroup>
      </FormControl>

      <FormControl component="fieldset" variant="standard">
        <FormGroup>
          <SwitchButton
            label="블로그 로고"
            checked={state.logo}
            onChange={handleChange}
            name="logo"
          />
          <SwitchButton
            label="프로필"
            checked={state.profile}
            onChange={handleChange}
            name="profile"
          />
          <SwitchButton
            label="카테고리"
            checked={state.category}
            onChange={handleChange}
            name="category"
          />
        </FormGroup>
      </FormControl>
    </div>
  );
}

export default App;
