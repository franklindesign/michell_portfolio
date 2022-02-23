import Slides from "../Slides";
import DesktopPhotoAlbum from "../PhotoAlbum";

export default function Work() {
  return (
    <>
      <div class="sm:hidden">
        <Slides></Slides>
      </div>
      <div class="hidden sm:block">
        <DesktopPhotoAlbum></DesktopPhotoAlbum>
      </div>
    </>
  );
}
