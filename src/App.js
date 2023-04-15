import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Box } from "@mui/material";
import {
  Navbar,
  SearchFeed,
  FeedPage,
  VideoDetail,
  ChannelDetail,
} from "./components";

const App = () => (
  <BrowserRouter>
    <Box sx={{ backgroundColor: "#000" }}>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<FeedPage />} />
        <Route exact path="/video/:id" element={<VideoDetail />} />
        <Route exact path="/channel/:id" element={<ChannelDetail />} />
        <Route exact path="/search/:searchTerm" element={<SearchFeed />} />
      </Routes>
    </Box>
  </BrowserRouter>
);

export default App;
