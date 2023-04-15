import axios from "axios";
export const BASE_URL = "https://youtube-v31.p.rapidapi.com";
const options = {
  params: { maxResults: 50 },
  headers: {
    "X-RapidAPI-Key": "e9b6b22e96mshf26887d6c7fb387p1f2f96jsn81797d391716",
    "X-RapidAPI-Host": "youtube-v31.p.rapidapi.com",
  },
};

export const fetchFromAPI = async (url) => {
  const { data } = await axios.get(`${BASE_URL}/${url}`, options);
  return data;
};
