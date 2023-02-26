import { Box, Stack, Typography, useTheme } from "@mui/material";
import { useState } from "react";
import Calendar from "./Calendar";
import TimeAndDuration from "./TimeAndDuration";
import TimeSlot from "./TimeSlot";
import schedules from "@/assets/data/schedules.json";
import moment from "moment";

export default function Conference() {
  const [duration, setDuration] = useState(0);
  const defaultIndex = schedules?.schedule?.findIndex(
    (item) => moment(item?.start).format("L") === moment().format("L")
  );
  const [scheduleIndex, setScheduleIndex] = useState(defaultIndex);

  const theme = useTheme();
  return (
    <>
      <Box
        sx={{
          width: { xs: "98%", md: "65%" },
          mx: "auto",
          my: 6,
          px: 6,
          py: 3,
          border: `2px solid ${theme.palette.gray.light}`,
          borderRadius: 8,
        }}
      >
        {/* Top Time Section */}
        <TimeAndDuration setDuration={setDuration} />

        {/* Calendar Section */}
        {duration && 
        <Stack
          direction={{ xs: "column", lg: "row" }}
          alignItems="center"
          justifyContent="space-evenly"
          spacing={8}
          sx={{ mt: 8 }}
        >
          <Calendar setScheduleIndex={setScheduleIndex} />

          <TimeSlot scheduleIndex={scheduleIndex} duration={duration} />
        </Stack>}
      </Box>
    </>
  );
}
