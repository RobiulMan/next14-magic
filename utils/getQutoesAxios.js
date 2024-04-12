import axios from "axios";
import { cache } from "react";

const getQuotes = cache(async () => {
  return await axios.get("https://quotable.io/random");
});

export default getQuotes;
