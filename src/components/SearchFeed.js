import { Box, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchFromAPI } from "../utils/fetchFromAPi";
import Sidebar from "./Sidebar";
import Videos from "./Videos";

const SearchFeed = () => {
  const [videos, setVideos] = useState([]);
  const { searchTerm } = useParams();

  useEffect(() => {
    fetchFromAPI(`search?part=snippet&q=${searchTerm}`).then((data) =>
      setVideos(data.items)
    );
  }, [searchTerm]);
  return (
    <Box p={2} sx={{ overflowY: "auto", height: "92vh", flex: 2 }}>
      <Typography fontWeight="bold" mb={2} sx={{ color: "white" }} variant="h4">
        Searched Results For
        <span style={{ color: "#f31503" }}> {searchTerm}</span> Videos
      </Typography>
      <Videos videos={videos} />
    </Box>
  );
};

export default SearchFeed;
