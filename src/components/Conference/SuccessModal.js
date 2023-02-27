import { Modal, Box, Typography, Button } from "@mui/material";
import Image from "next/image";
import tickIcon from "@/assets/images/tick.png";
import moment from "moment";

export default function SuccessModal({ success, handleClose, slot }) {
  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: { xs: "100%", sm: 500 },
    bgcolor: "background.paper",
    boxShadow: 24,
    p: 4,
    borderRadius: 4,
    textAlign: "center",
  };

  const date = moment(slot).format("DD MMM YYYY");
  const time = moment(slot).format("LT");
  return (
    <>
      <Modal open={success} onClose={handleClose}>
        <Box sx={style}>
          <Image src={tickIcon} alt="success" width={70} height={70} />
          <Typography variant="h4" component="h4" sx={{ mt: 1 }}>
            Great!
          </Typography>
          <Typography variant="subtitle1" sx={{ mt: 2, mb: 1 }}>
            Your Booked Time
          </Typography>
          <Typography variant="subtitle1">
            Date: <b>{date}</b>, Time: <b>{time}</b>
          </Typography>
          <Button
            variant="contained"
            color="primary"
            onClick={handleClose}
            sx={{ px: 6, py: 1, borderRadius: 10, mt: 2 }}
          >
            Ok
          </Button>
        </Box>
      </Modal>
    </>
  );
}
