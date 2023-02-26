import Navbar from "@/components/Navbar/Navbar";
import { Typography, Container, Box } from "@mui/material";

export default function conference() {
  return (
    <div>
      <Navbar />
      <Container maxWidth="xl">
        <Box sx={{ height: "90vh", display: "grid", placeItems: "center" }}>
          <Typography variant="h4">This is Conference Page</Typography>
        </Box>
      </Container>
    </div>
  );
}
