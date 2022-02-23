import Slides from "../Slides";
import DesktopPhotoAlbum from "../PhotoAlbum";

export default function Work() {
  return (
    <>
      <div class="sm:hidden mb-4">
        <Slides></Slides>
      </div>
      <div class="hidden sm:block">
        <DesktopPhotoAlbum></DesktopPhotoAlbum>
      </div>
    </>
  );
}
