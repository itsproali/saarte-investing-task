import Link from "next/link";
import {
  Box,
  Container,
  FormControl,
  IconButton,
  Menu,
  MenuItem,
  Select,
  Stack,
  Typography,
  useTheme,
} from "@mui/material";
import { useState } from "react";
import { IoMdHome } from "react-icons/io";
import { HiOutlineMenu } from "react-icons/hi";
import { useRouter } from "next/router";

const pages = [
  { label: "Home", path: "/" },
  { label: "Development", path: "/development" },
  { label: "Conference", path: "/conference" },
  { label: "Blog", path: "/blog" },
];
export default function Navbar() {
  const theme = useTheme();
  const [isOpen, setIsOpen] = useState(null);
  const open = Boolean(isOpen);
  const { pathname } = useRouter();

  const handleOpen = (e) => setIsOpen(e.currentTarget);
  const handleClose = () => setIsOpen(null);

  const [language, setLanguage] = useState("English");

  const handleLanguage = (e) => {
    setLanguage(e.target.value);
  };
  return (
    <>
      <Container maxWidth="xl">
        <Stack
          direction="row"
          alignItems="center"
          justifyContent="space-between"
          sx={{ py: 2 }}
        >
          <Stack
            direction="row"
            alignItems="center"
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
          <Stack
            direction="row"
            alignItems="center"
            spacing={4}
            sx={{ display: { xs: "none", md: "inherit" } }}
          >
            {pages?.map((page, i) => (
              <Link key={i} href={page.path}>
                <Typography
                  variant="subtitle1"
                  sx={{
                    color: pathname === page.path ? "black" : "gray.main",
                    "&:hover": {
                      color: "black",
                    },
                  }}
                >
                  {page.label}
                </Typography>
              </Link>
            ))}

            {/* Language Select */}
            <FormControl
              variant="standard"
              size="small"
              sx={{ display: { xs: "none", md: "block" } }}
            >
              <Select
                value={language}
                label="Language"
                onChange={handleLanguage}
              >
                <MenuItem value="English">English</MenuItem>
                <MenuItem value="Hindi">Hindi</MenuItem>
                <MenuItem value="Bengali">Bengali</MenuItem>
              </Select>
            </FormControl>
          </Stack>
          {/* Responsive Menu */}
          <Box sx={{ flexGrow: 0, display: { md: "none" } }}>
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
              {/* Language Select */}
              <FormControl fullWidth variant="standard" size="small" sx={{px: 2}}>
                <Select
                  value={language}
                  label="Language"
                  onChange={handleLanguage}
                >
                  <MenuItem value="English">English</MenuItem>
                  <MenuItem value="Hindi">Hindi</MenuItem>
                  <MenuItem value="Bengali">Bengali</MenuItem>
                </Select>
              </FormControl>
            </Menu>
          </Box>
        </Stack>
      </Container>
    </>
  );
}
