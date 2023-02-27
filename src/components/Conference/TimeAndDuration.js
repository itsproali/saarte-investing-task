import { Box, Typography, Stack , useTheme} from "@mui/material";
import { duration_input } from "./conference.module.css";
import { useEffect, useState } from "react";
import moment from "moment";

export default function TimeAndDuration({ setDuration }) {
  const theme = useTheme();
  const [time, setTime] = useState("00:00 AM");

  // Set Real Time Clock of the user
  useEffect(() => {
    setInterval(() => {
      setTime(moment().format("LT"));
    }, 1000);
  }, []);

  // Handle Set Duration
  const handleDuration = (e) => {
    e.preventDefault();
    const duration = e.target.duration.value;
    setDuration(duration);
  };
  return (
    <Box sx={{ textAlign: "center" }}>
      <Typography variant="h3" sx={{ fontSize: "35px", fontWeight: 700 }}>
        Time Now: {time}
      </Typography>

      <Stack
        direction="row"
        alignItems="center"
        justifyContent="center"
        spacing={2}
        mt={4}
      >
        <Typography variant="subtitle1" sx={{ fontSize: "20px" }}>
          Enter Meeting Duration(min)
        </Typography>
        <form onSubmit={handleDuration}>
          <input
            min={1}
            max={60}
            required
            type="number"
            name="duration"
            id="duration"
            className={duration_input}
            placeholder="Duration"
            onWheel={(e) => e.target.blur()}
          />
        </form>
      </Stack>
    </Box>
  );
}
