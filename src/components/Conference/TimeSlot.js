import { Box, Typography, Stack, useTheme, Button } from "@mui/material";
import moment from "moment";
import schedules from "@/assets/data/schedules.json";
import { useState, useEffect } from "react";

export default function TimeSlot({
  slots,
  setSlots,
  schedule,
  duration,
  selectedSlot,
  setSelectedSlot,
}) {
  const theme = useTheme();

  // Get Schedule Information
  const start = moment(schedule.start).subtract(duration, "minute").format();
  const end = moment(schedule.end).subtract(duration, "minute").format();
  let last = start;

  // let slots = [{ slot: moment(start).format(), isBooked: false }];

  useEffect(() => {
    const setTimeSlots = () => {
      while (last < end) {
        const next = moment(last).add(duration, "minute").format();
        setSlots((slots) => [...slots, { slot: next, isBooked: false }]);
        last = next;
      }
    };
    setTimeSlots();
  }, [schedule, duration]);

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
