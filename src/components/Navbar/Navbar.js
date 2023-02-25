import Link from "next/link";
import {
  AppBar,
  Avatar,
  Box,
  Button,
  Container,
  IconButton,
  Menu,
  MenuItem,
  Stack,
  Toolbar,
  Tooltip,
  Typography,
  useTheme,
} from "@mui/material";
import { useState } from "react";
import { IoMdHome } from "react-icons/io";
import { HiOutlineMenu } from "react-icons/hi";

const pages = [
  { label: "Home", path: "/" },
  { label: "Development", path: "/" },
  { label: "Conference", path: "/" },
  { label: "Blog", path: "/" },
];
export default function Navbar() {
  const theme = useTheme();
  const [isOpen, setIsOpen] = useState(null);
  const open = Boolean(isOpen);

  const handleOpen = (e) => setIsOpen(e.currentTarget);
  const handleClose = () => setIsOpen(null);

  return (
    <>
      <Container maxWidth="lg">
        <Stack
          direction="row"
          alignItems="center"
          justifyContent="space-between"
          sx={{ py: 2 }}
        >
          <Stack
            direction="row"
            alignItems="center"
            noWrap
            component="a"
            href="/"
            spacing={1}
            sx={{
              color: "black",
              fontWeight: 500,
              textDecoration: "none",
            }}
          >
            <IoMdHome size={25} color={theme?.palette?.primary?.main} />
            <Typography variant="h6">Saarte Investing</Typography>
          </Stack>

          {/* Nav Pages */}
          <Stack direction="row" alignItems="center" spacing={4}>
            {pages?.map((page, i) => (
              <Link key={i} href={page.path}>
                <Typography
                  variant="subtitle1"
                  sx={{
                    color: "gray.main",
                    "&:hover": {
                      color: "black",
                    },
                  }}
                >
                  {page.label}
                </Typography>
              </Link>
            ))}
          </Stack>

          {/* Responsive Menu */}
          <Box sx={{ flexGrow: 0 }}>
            <IconButton
              id="basic-button"
              aria-controls={open ? "basic-menu" : undefined}
              aria-haspopup="true"
              aria-expanded={open ? "true" : undefined}
              onClick={handleOpen}
            >
              <HiOutlineMenu size={25} />
            </IconButton>

            <Menu
              id="basic-menu"
              anchorEl={isOpen}
              open={open}
              onClose={handleClose}
              MenuListProps={{
                "aria-labelledby": "basic-button",
              }}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "right",
              }}
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
            >
              {pages.map((page, i) => (
                <MenuItem key={i} onClick={handleClose}>
                  <Link href={page.path}>
                    <Typography
                      variant="subtitle1"
                      textAlign="center"
                      sx={{ color: "black" }}
                    >
                      {page.label}
                    </Typography>
                  </Link>
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </Stack>
      </Container>
    </>
  );
}
