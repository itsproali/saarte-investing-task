import { Box, Stack, useTheme, Button } from "@mui/material";
import { useState } from "react";
import Calendar from "./Calendar";
import TimeAndDuration from "./TimeAndDuration";
import TimeSlot from "./TimeSlot";
import schedules from "@/assets/data/schedules.json";
import moment from "moment";
import { message_field } from "./conference.module.css";
import SuccessModal from "./SuccessModal";

export default function Conference() {
  const [duration, setDuration] = useState(0);
  const defaultIndex = schedules?.schedule?.findIndex(
    (item) => moment(item?.start).format("L") === moment().format("L")
  );
  const [scheduleIndex, setScheduleIndex] = useState(defaultIndex);
  const [selectedSlot, setSelectedSlot] = useState(null);
  const [message, setMessage] = useState("");
  const [success, setSuccess] = useState("");

  const theme = useTheme();

  // Handle Submit
  const handleSubmit = () => {
    console.log(message);
    setSuccess(true);
  };
  return (
    <>
      <Box
        sx={{
          width: { xs: "100%", md: "65%" },
          mx: "auto",
          my: 6,
          px: { xs: 1, md: 6 },
          py: 3,
          border: `2px solid ${theme.palette.gray.light}`,
          borderRadius: 8,
        }}
      >
        {/* Top Time Section */}
        <TimeAndDuration setDuration={setDuration} />
        {/* Calendar Section */}
        {duration ? (
          <>
            <Stack
              direction={{ xs: "column", lg: "row" }}
              alignItems="center"
              justifyContent="space-evenly"
              spacing={8}
              sx={{ mt: 8 }}
            >
              <Calendar
                setScheduleIndex={setScheduleIndex}
                setSelectedSlot={setSelectedSlot}
              />

              {scheduleIndex === -1 ? (
                <>There is no slot in this date</>
              ) : (
                <TimeSlot
                  scheduleIndex={scheduleIndex}
                  duration={duration}
                  selectedSlot={selectedSlot}
                  setSelectedSlot={setSelectedSlot}
                />
              )}
            </Stack>

            <Box sx={{ mt: 8, mb: 6 }}>
              <textarea
                name="message"
                id="message"
                cols="30"
                rows="10"
                placeholder="Additional Message"
                onBlur={(e) => setMessage(e.target.value)}
                className={message_field}
              />
              <Stack direction="row" justifyContent="flex-end">
                <Button
                  variant="contained"
                  color="secondary"
                  sx={{ borderRadius: 10, px: 4, py: 1, mt: 2 }}
                  onClick={handleSubmit}
                  disabled={selectedSlot ? false : true}
                >
                  Book Now
                </Button>
              </Stack>
            </Box>
          </>
        ) : (
          <> </>
        )}
      </Box>

      <SuccessModal
        success={success}
        handleClose={() => setSuccess(false)}
        slot={selectedSlot}
      />
    </>
  );
}
