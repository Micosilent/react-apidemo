/* eslint-disable no-fallthrough */
//Platform Images
import appleImage from "./img/apple.svg";
import gamepadImage from "./img/gamepad.svg";
import nintendoImage from "./img/nintendo.svg";
import playstationImage from "./img/playstation.svg";
import steamImage from "./img/steam.svg";
import xboxImage from "./img/xbox.svg";

//Media Resize

export const smallImage = (imagePath, size) => {
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

//The API sends each platform generation as a separate element of an object,
//to reduce cluterring and duplication we first clean up the data
export const returnPlatformImages = (platforms) => {
  let returnMap = new Map();
  let xboxRegex = new RegExp("Xbox");
  let playRegex = new RegExp("Play");

  for (let platform of platforms) {
    //Duplicate platforms are tested withh a regex
    if (playRegex.test(platform.platform.name)) {
      returnMap.set("play", {
        image: playstationImage,
        name: "PlayStation",
      });
    } else if (xboxRegex.test(platform.platform.name)) {
      returnMap.set("xbox", {
        image: xboxImage,
        name: "Xbox",
      });
    } else {
      //The rest of the options are handled  with a switch case
      switch (platform.platform.name) {
        default:
          returnMap.set("default", {
            image: gamepadImage,
            name: "Unwnowkasdfwer",
          });
        case "Nintendo Switch":
          returnMap.set("nintendo", {
            image: nintendoImage,
            name: "Nintendo Switch",
          });
        case "iOS":
          returnMap.set("apple", {
            image: appleImage,
            name: "iOS",
          });
        case "PC":
          returnMap.set("pc", {
            image: steamImage,
            name: "PC",
          });
      }
    }
  }
  return [...returnMap.values()];
};
