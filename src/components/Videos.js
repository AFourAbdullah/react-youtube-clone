import { Box, Stack } from "@mui/material";
import React from "react";
import ChannelCard from "./ChannelCard";
import Videocard from "./Videocard";

const Videos = ({ videos, direction }) => {
  if (!videos?.length) return "Loading..";
  return (
    <Stack
      direction={direction || "row"}
      flexWrap="wrap"
      gap={2}
      justifyContent="start"
    >
      {videos.map((item, index) => (
        <Box key={index}>
          {item.id.videoId && <Videocard video={item} />}

          {item.id.channelId && <ChannelCard channelDetail={item} />}
        </Box>
      ))}
    </Stack>
  );
};

export default Videos;
