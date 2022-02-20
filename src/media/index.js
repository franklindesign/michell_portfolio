import media01 from "./media-01.jpg";
import media02 from "./media-02.jpg";
import media03 from "./media-03.jpg";
import media04 from "./media-04.jpg";
import media05 from "./media-05.jpg";
import media06 from "./media-06.jpg";
import media07 from "./media-07.jpg";
import media08 from "./media-08.jpg";
import media09 from "./media-09.jpg";
import media10 from "./media-10.jpg";
import media11 from "./media-11.jpg";
import media12 from "./media-12.jpg";

export const media = [
  media01,
  media02,
  media03,
  media04,
  media05,
  media06,
  media07,
  media08,
  media09,
  media10,
  media11,
  media12,
];
export const mediaByIndex = (index) => media[index % media.length];
