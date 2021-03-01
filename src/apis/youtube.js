import axios from "axios";

const KEY = "AIzaSyDRrPVVO0FhYqWS5_f4DB-UGO1jFL0dHLo";
export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    maxResults: 5,
    key: KEY,
  },
});
