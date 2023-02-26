import Navbar from "@/components/Navbar/Navbar";
import Conference from "@/components/Conference";
import { Container } from "@mui/material";

export default function conference() {
  return (
    <>
      <Navbar />
      <Container maxWidth="xl">
        <Conference />
      </Container>
    </>
  );
}
