import { Box, Button, Typography } from '@mui/material';
import Link from "next/link"

const Maintenance = () => {
  return (
    <Box display="flex" alignItems="center" justifyContent="center" height="90vh">
      <Box textAlign="center">
        <Typography variant="h5" gutterBottom>
          We are performing maintenance
        </Typography>
        <Typography variant="body1">
          We&rsquo;ll be back soon. Sorry for the inconvenience.
        </Typography>
        <Link href="/conference">
      <Button variant='contained' color="primary" sx={{mt: 3}}>Visit Conference</Button>
        </Link>
      </Box>
    </Box>
  );
};

export default Maintenance;