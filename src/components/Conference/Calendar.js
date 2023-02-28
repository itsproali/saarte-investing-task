import { Box, Typography, useTheme } from "@mui/material";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterMoment } from "@mui/x-date-pickers/AdapterMoment";
import { CalendarPicker } from "@mui/x-date-pickers/CalendarPicker";
import moment from "moment";
import { useState, useCallback } from "react";
import schedules from "@/assets/data/schedules.json";

export default function Calendar({ setSchedule, setSlots, setSelectedSlot }) {
  const theme = useTheme();
  // Calendar
  const [date, setDate] = useState(moment());

  const minDate = moment(schedules?.schedule[0]?.start);
  const length = schedules?.schedule.length;
  const maxDate = moment(schedules?.schedule[length - 1]?.start);

  // Handle Select Date
  const handleDate = useCallback((newDate) => {
    setDate(newDate);
    const selectedDate = moment(newDate).format("L");
    const schedule = schedules?.schedule?.find(
      (item) => moment(item?.start).format("L") === selectedDate
    );
    setSchedule(schedule);
    setSelectedSlot({});
    setSlots([])
  }, [setSchedule, setSelectedSlot, setSlots]);
  return (
    <Box>
      <Typography
        variant="subtitle1"
        sx={{ textAlign: "left", fontWeight: 600 }}
      >
        Select Date
      </Typography>
      <Box
        sx={{
          border: `2px solid ${theme.palette.gray.light}`,
          borderRadius: 5,
        }}
      >
        <LocalizationProvider dateAdapter={AdapterMoment}>
          <CalendarPicker
            date={date}
            onChange={handleDate}
            minDate={minDate}
            maxDate={maxDate}
            disablePast
          />
        </LocalizationProvider>
      </Box>
    </Box>
  );
}
