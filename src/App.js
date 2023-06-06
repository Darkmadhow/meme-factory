import { useContext, useEffect, useState } from "react";
import { MemeContext } from "./memeContext.js";
import getMemeImage from "./utils/getMeme.js";
import exportMeme from "./utils/exportMeme.js";
import "./App.css";

function App() {
  const { memeImage, setMemeImage } = useContext(MemeContext);
  const [topText, setTopText] = useState("Top Text");
  const [bottomText, setBottomText] = useState("Bottom Text");
  const [randomMeme, setRandomMeme] = useState(Math.floor(Math.random() * 100));

  useEffect(() => {
    getMemeImage(setMemeImage);
  }, []);

  function handleUpload(files) {
    if (!files.length) return;
    setMemeImage([
      ...memeImage,
      { name: files[0].name, url: URL.createObjectURL(files[0]) },
    ]);
    setRandomMeme(memeImage.length);
  }
  return (
    <div className="App">
      {memeImage && (
        <>
          <h2>{memeImage[randomMeme]?.name}</h2>
          <div className="yourMeme" id="yourMeme">
            <img src={memeImage[randomMeme]?.url} alt="Meme" />
            <h3 className="caption-top">{topText}</h3>
            <h3 className="caption-bottom">{bottomText}</h3>
          </div>
        </>
      )}
      <div className="userInput">
        <input
          type="file"
          id="fileElem"
          accept="image/*"
          style={{ display: "none" }}
          onChange={(e) => {
            handleUpload(e.target.files);
          }}
        />
        <button
          id="fileSelect"
          type="button"
          onClick={() => {
            document.getElementById("fileElem").click();
          }}
        >
          Upload an image
        </button>
        <label htmlFor="caption-top">Top Text</label>
        <input
          type="text"
          id="caption-top"
          onChange={(e) => {
            setTopText(e.target.value);
          }}
        />
        <label htmlFor="caption-bottom">Bottom Text</label>
        <input
          type="text"
          id="caption-bottom"
          onChange={(e) => {
            setBottomText(e.target.value);
          }}
        />
        <div className="userChoice">
          <button
            onClick={() => setRandomMeme(Math.floor(Math.random() * 100))}
          >
            New Image
          </button>
          <span>or</span>
          <button
            onClick={() => exportMeme(document.getElementById("yourMeme"))}
          >
            Download my Meme
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
