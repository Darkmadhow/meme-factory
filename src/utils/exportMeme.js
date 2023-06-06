import DomToImage from "dom-to-image";

export default async function exportMeme(domNode) {
  DomToImage.toJpeg(domNode, { quality: 0.95 }).then(function (dataUrl) {
    var link = document.createElement("a");
    link.download = "my-Meme.jpeg";
    link.href = dataUrl;
    link.click();
  });
}
