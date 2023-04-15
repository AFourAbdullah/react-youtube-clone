import React from "react";
import { Stack } from "@mui/material";
import { Link } from "react-router-dom";
import { logo } from "../utils/Constants";
import SearchBar from "./SearchBar";

const Navbar = () => (
  <Stack
    p={2}
    direction="row"
    alignItems="center"
    sx={{
      position: "sticky",
      top: 0,
      justifyContent: "space-between",
      background: "#000",
    }}
  >
    <Link to="/" style={{ display: "flex", alignItems: "center" }}>
      <img src={logo} height={45} alt="logo" />
    </Link>
    <SearchBar />
  </Stack>
);

export default Navbar;
