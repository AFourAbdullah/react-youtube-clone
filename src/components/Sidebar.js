import { Stack } from "@mui/material";
import React from "react";
import { categories } from "../utils/Constants";

const Sidebar = ({ selectedCategory, setSelectedCategory }) => (
  <Stack
    direction="row"
    sx={{
      flexDirection: { md: "column" },
      overflowY: "auto",
      height: { sx: "auto", md: "95%" },
    }}
  >
    {categories.map((category) => (
      <button
        className="category-btn"
        key={category.name}
        style={{
          background: category.name === selectedCategory && "#FC1503",
          color: "white",
        }}
        onClick={() => setSelectedCategory(category.name)}
      >
        <span
          style={{
            color: category.name === selectedCategory ? "white" : "red",
            marginRight: 10,
          }}
        >
          {category.icon}
        </span>
        <span
          style={{
            opacity: category.name === selectedCategory ? "1" : "0.8",
          }}
        >
          {category.name}
        </span>
      </button>
    ))}
  </Stack>
);

export default Sidebar;
