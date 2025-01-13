import { Box, Typography, styled } from "@mui/material";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import SettingsBrightnessIcon from "@mui/icons-material/SettingsBrightness";
import WbTwilightIcon from "@mui/icons-material/WbTwilight";
import DeviceThermostatIcon from "@mui/icons-material/DeviceThermostat";
import CompressIcon from "@mui/icons-material/Compress";
import WaterDropIcon from "@mui/icons-material/WaterDrop";
import CloudIcon from "@mui/icons-material/Cloud";
import AirIcon from "@mui/icons-material/Air";

const Row = styled(Typography)(({ theme }) => ({
  padding: 10,
  fontSize: 22,
  letterSpacing: 1.5,
  [theme.breakpoints.down("md")]: {
    padding: 5,
    fontSize: 18,
  },
  [theme.breakpoints.down("sm")]: {
    padding: 0,
    fontSize: 14,
  },
}));

const Div = styled(Box)(({ theme }) => ({
  margin: "30px 60px",
  [theme.breakpoints.down("md")]: {
    margin: "10px 20px",
  },
  [theme.breakpoints.down("sm")]: {
    margin: 0,
  },
}));

const Information = ({ result }) => {
  return result && Object.keys(result).length > 0 ? (
    <Div>
      <Row>
        <LocationOnIcon />
        Место: {result.name}, {result.sys.country}
      </Row>

      <Row>
        <DeviceThermostatIcon />
        Температура: {result.main.temp}°C
      </Row>

      <Row>
        <DeviceThermostatIcon />
        Ощущается как: {result.main.feels_like}°C
      </Row>

      <Row>
        <CompressIcon />
        Давление: {result.main.pressure} мм рт.ст.
      </Row>

      <Row>
        <WaterDropIcon />
        Влажность: {result.main.humidity}%
      </Row>

      <Row>
        <WbTwilightIcon />
        Восход: {new Date(result.sys.sunrise * 1000).toLocaleTimeString()}
      </Row>

      <Row>
        <WbTwilightIcon />
        Закат: {new Date(result.sys.sunset * 1000).toLocaleTimeString()}
      </Row>

      <Row>
        <CloudIcon />
        Облачность: {result.weather[0].main}, {result.weather[0].description}
      </Row>

      <Row>
        <AirIcon />
        Скорость ветра: {result.wind.speed} km/h
      </Row>
    </Div>
  ) : null;
};

export default Information;
