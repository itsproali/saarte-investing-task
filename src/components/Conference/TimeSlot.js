import { Box, Typography, Stack, useTheme, Button } from "@mui/material";
import moment from "moment";
import schedules from "@/assets/data/schedules.json";

export default function TimeSlot({scheduleIndex, duration}) {
  const theme = useTheme();
  
  const start = schedules.schedule[scheduleIndex].start;
  const end = schedules.schedule[scheduleIndex].end;
  let slots = [moment(start).format()];
  let last = start;

  while (last < end) {
    const next = moment(last).add(duration, "minute").format();
    slots.push(next);
    last = next;
  }
  return (
    <Box>
      <Typography
        variant="subtitle1"
        sx={{ textAlign: "left", fontWeight: 600 }}
      >
        Select Time Slot
      </Typography>

      <Stack
        direction="row"
        alignItems="center"
        justifyContent="flex-start"
        sx={{ flexWrap: "wrap", gap: 1.5, mt: 2 }}
      >
        {slots.map((slot, i) => (
          <Button
            key={i}
            variant="outlined"
            color="black"
            sx={{ borderRadius: 10 }}
          >
            {moment(slot).format("LT")}
          </Button>
        ))}
      </Stack>
    </Box>
  );
}
