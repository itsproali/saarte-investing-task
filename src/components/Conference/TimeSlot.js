import { Box, Typography, Stack, useTheme, Button } from "@mui/material";
import moment from "moment";
import schedules from "@/assets/data/schedules.json";
import { useState } from "react";

export default function TimeSlot({
  schedule,
  duration,
  selectedSlot,
  setSelectedSlot,
}) {
  const theme = useTheme();

  // Get Schedule Information
  const start = schedule.start;
  const end = schedule.end;
  let slots = [{slot: moment(start).format(), isBooked: false}];
  let last = start;

  while (last < end) {
    const next = moment(last).add(duration, "minute").format();
    slots.push({ slot: next, isBooked: false });
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
        {slots.map((item, i) => (
          <Button
            key={i}
            variant="outlined"
            color={item?.slot === selectedSlot?.slot ? "primary" : "black"}
            sx={{
              borderRadius: 10,
              backgroundColor: `${
                item?.slot === selectedSlot?.slot && "primary.light"
              }`,
            }}
            onClick={() => setSelectedSlot(item)}
            disabled={item?.isBooked}
          >
            {moment(item?.slot).format("LT")}
          </Button>
        ))}
      </Stack>
    </Box>
  );
}
