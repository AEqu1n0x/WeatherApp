import { useState } from "react";
import { Box, InputBase, Button, styled, TextField } from "@mui/material";
import { getWeather } from "./services/api";

const Container = styled(Box)({
  background: "#455A6F",
  padding: 10,
});

const Input = styled(TextField)({
  color: "#FFF",
  marginRight: 20,
  fontSize: 18,
  marginBottom: 5,
});

const GetButton = styled(Button)({
  background: "#e67e22",
  height: "48px",
});

const Form = ({ setResult }) => {
  const [data, setData] = useState({ city: "", country: "" });

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const getWeatherInfo = async () => {
    let result = await getWeather(data.city, data.country);
    setResult(result);
  };

  return (
    <Container>
      <Input
        onChange={(e) => {
          handleChange(e);
        }}
        name="city"
        id="standard-basic"
        label="Город"
        variant="standard"
        color="warning"
      />
      <Input
        onChange={(e) => {
          handleChange(e);
        }}
        name="country"
        id="standard-basic"
        label="Страна"
        variant="standard"
        color="warning"
      />
      <GetButton onClick={() => getWeatherInfo()} variant="contained" disabled={!data.city}>
        {" "}
        Узнать погоду
      </GetButton>
    </Container>
  );
};

export default Form;
