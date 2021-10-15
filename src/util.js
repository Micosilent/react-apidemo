//Media Resize

export const smallImage = (imagePath, size, id) => {
  if (imagePath === null) {
    imagePath =
      "https://media.rawg.io/media/screenshots/18f/18fe55fc0476e24d5a1ebdba6b6b4e1a.jpg";
  }
  const image = imagePath.match(/media\/screenshots/)
    ? imagePath.replace(
        "media/screenshots",
        `media/resize/${size}/-/screenshots/`
      )
    : imagePath.replace("media/games/", `media/resize/${size}/-/games/`);

  return image;
};
