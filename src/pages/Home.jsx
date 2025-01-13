import { Box, styled } from "@mui/material";
import Sunset from "../assests/images/bg.jpg";
import Form from "../components/Form";
import Information from "../components/Information";
import { useState } from "react";

const Component = styled(Box)({
  height: "100vh",
  display: "flex",
  alignItems: "center",
  margin: "0 auto",
  width: "70%",
});

const Image = styled(Box)({
  backgroundImage: `url(${Sunset})`,
  width: "27%",
  height: "80%",
  backgroundSize: "cover",
  backgroundPosition: "center",
  borderRadius: "45px 0 0 120px",
});

export default function Home() {
  const [result, setResult] = useState({});

  return (
    <Component>
      <Image />
      <Box style={{ width: "73%", height: "80%" }}>
        <Form setResult={setResult}></Form>
        <Information result={result}></Information>
      </Box>
    </Component>
  );
}
