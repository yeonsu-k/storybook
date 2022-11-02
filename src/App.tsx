import React from "react";
import "./App.css";
import CheckIcon from "@mui/icons-material/Check";
import Text from "./components/Text";
import Input from "./components/Input";
import Button from "./components/Button";
import SwitchButton from "./components/SwitchButton";
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
      <h3>Text &nbsp;&nbsp;&nbsp;&nbsp;</h3>
      <Text value={"Hello"} type="text" />
      <hr />

      <h3>Button &nbsp;&nbsp;&nbsp;&nbsp;</h3>
      <Button
        label="Button"
        color="blue"
        icon={<CheckIcon />}
        onClick={() => console.log("클릭함")}
      />
      <Button />
      <hr />
      <h3>Input &nbsp;&nbsp;&nbsp;&nbsp;</h3>
      <Input name="Input" placeholder="Input테스트" />
      <Input />
      <hr />
      <h3>SwitchButton1 &nbsp;&nbsp;&nbsp;&nbsp;</h3>
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
      <hr />
    </div>
  );
}

export default App;
