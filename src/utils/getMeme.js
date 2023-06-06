import axios from "axios";

export default async function getMemeImage(setData) {
  try {
    const res = await axios.get(process.env.REACT_APP_MEME_API);
    if (res.data.success) setData(res.data.data.memes);
    else throw new Error("Couldn't fetch Memes");
  } catch (error) {
    console.log(error);
  }
}
