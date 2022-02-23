import PhotoAlbum from "react-photo-album";

import media01 from "./media/media-01.jpg";
import media02 from "./media/media-02.jpg";
import media03 from "./media/media-03.jpg";
import media04 from "./media/media-04.jpg";
import media05 from "./media/media-05.jpg";
import media06 from "./media/media-06.jpg";
import media07 from "./media/media-07.jpg";
import media08 from "./media/media-08.jpg";
import media09 from "./media/media-09.jpg";
import media10 from "./media/media-10.jpg";
import media11 from "./media/media-11.jpg";
import media12 from "./media/media-12.jpg";

const photos = [
  {
    src: media01,
    width: 500,
    height: 750,
  },
  {
    src: media02,
    width: 630,
    height: 750,
  },
  {
    src: media03,
    width: 414,
    height: 750,
  },
  {
    src: media04,
    width: 441,
    height: 750,
  },
  {
    src: media05,
    width: 600,
    height: 750,
  },
  {
    src: media06,
    width: 441,
    height: 750,
  },
  {
    src: media07,
    width: 478,
    height: 750,
  },
  {
    src: media08,
    width: 462,
    height: 750,
  },
  {
    src: media09,
    width: 450,
    height: 750,
  },
  {
    src: media10,
    width: 434,
    height: 750,
  },
  {
    src: media11,
    width: 468,
    height: 750,
  },
  {
    src: media12,
    width: 415,
    height: 750,
  },
];

export default function DesktopPhotoAlbum() {
  return (
    <div class="mb-12 mx-12">
      <PhotoAlbum
        layout="masonry"
        photos={photos}
        columns={(containerWidth) => {
          if (containerWidth < 400) return 2;
          if (containerWidth < 800) return 3;
          return 4;
        }}
      />
    </div>
  );
}
