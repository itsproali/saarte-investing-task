import {
  Box,
  Button,
  Container,
  IconButton,
  Menu,
  MenuItem,
  Stack,
  Typography,
  useTheme,
} from "@mui/material";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";
import { HiOutlineMenu } from "react-icons/hi";
import { IoMdArrowDropdown, IoMdHome } from "react-icons/io";

const pages = [
  { label: "Home", path: "/" },
  { label: "Development", path: "/development" },
  { label: "Conference", path: "/conference" },
  { label: "Blog", path: "/blog" },
];
const languages = ["EN", "HI", "BN", "AR"];

export default function Navbar() {
  const theme = useTheme();
  const [isOpen, setIsOpen] = useState(null);
  const [isLanguageOpen, setIsLanguageOpen] = useState(null);
  const open = Boolean(isOpen);
  const languageOpen = Boolean(isLanguageOpen);

  const { pathname } = useRouter();

  const handleOpen = (e) => setIsOpen(e.currentTarget);
  const handleClose = () => setIsOpen(null);
  const handleLanguageOpen = (e) => setIsLanguageOpen(e.currentTarget);
  const handleLanguageClose = () => setIsLanguageOpen(null);

  const [language, setLanguage] = useState("EN");

  const handleLanguage = (e) => {
    setLanguage(e.target.innerText);
    setIsLanguageOpen(null);
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
            <Box sx={{ display: { xs: "none", md: "block" } }}>
              <Button
                variant="text"
                color="black"
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: 1,
                }}
                onClick={handleLanguageOpen}
              >
                <span>{language}</span>
                <IoMdArrowDropdown />
              </Button>
              <Menu
                anchorEl={isLanguageOpen}
                open={languageOpen}
                onClose={handleLanguageClose}
              >
                {languages.map((item, i) => (
                  <MenuItem key={i} onClick={handleLanguage}>
                    {item}
                  </MenuItem>
                ))}
              </Menu>
            </Box>
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
              <>
                <Button
                  variant="text"
                  color="black"
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "flex-start",
                    px: 2,
                    gap: 1,
                    width: "100%",
                  }}
                  onClick={handleLanguageOpen}
                >
                  <span>{language}</span>
                  <IoMdArrowDropdown />
                </Button>
                <Menu
                  anchorEl={isLanguageOpen}
                  open={languageOpen}
                  onClose={handleLanguageClose}
                >
                  {languages.map((item, i) => (
                    <MenuItem key={i} onClick={handleLanguage}>
                      {item}
                    </MenuItem>
                  ))}
                </Menu>
              </>
            </Menu>
          </Box>
        </Stack>
      </Container>
    </>
  );
}
