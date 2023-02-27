import { Box, Stack, useTheme, Button } from "@mui/material";
import { useState } from "react";
import Calendar from "./Calendar";
import TimeAndDuration from "./TimeAndDuration";
import TimeSlot from "./TimeSlot";
import schedules from "@/assets/data/schedules.json";
import moment from "moment";
import { message_field, circle_top, circle_center, circle_bottom } from "./conference.module.css";
import SuccessModal from "./SuccessModal";
import circle_top_img from "@/assets/images/circle_top.png";
import circle_center_img from "@/assets/images/circle_center.png";
import circle_bottom_img from "@/assets/images/circle_bottom.png";
import Image from "next/image";

export default function Conference() {
  const [duration, setDuration] = useState(0);
  const defaultSchedule = schedules?.schedule?.find(
    (item) => moment(item?.start).format("L") === moment().format("L")
  );
  const [schedule, setSchedule] = useState(defaultSchedule);
  const [selectedSlot, setSelectedSlot] = useState({});
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
                setSchedule={setSchedule}
                setSelectedSlot={setSelectedSlot}
              />

              {!schedule ? (
                <>There is no slot in this date</>
              ) : (
                <TimeSlot
                  schedule={schedule}
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
                  disabled={selectedSlot?.slot ? false : true}
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

      {/* Bg Circles */}
      <Image src={circle_top_img} alt="circle_top" width={200} height={200} className={circle_top} />
      <Image src={circle_center_img} alt="circle_center" width={300} height={300} className={circle_center} />
      <Image src={circle_bottom_img} alt="circle_bottom" width={200} height={200} className={circle_bottom} />
    </>
  );
}
