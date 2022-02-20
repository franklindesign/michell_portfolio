import EmblaCarousel from "./EmblaCarousel";

const SLIDE_COUNT = 12;
const slides = Array.from(Array(SLIDE_COUNT).keys());

export default function Slides() {
  return (
    <div>
      <EmblaCarousel slides={slides} />
    </div>
  );
}
