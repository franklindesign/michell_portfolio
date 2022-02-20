import photo from "../media/media-01.jpg";

export default function About() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-7">
      <div className="md:flex">
        <div className="md:shrink-0">
          <img
            className="h-fit w-full object-cover  md:w-48"
            src={photo}
            alt="Michell"
          ></img>
        </div>
        <div className="mt-4 px-4">
          <div className="uppercase text-xl text-red-400 font-semibold">
            About Michell
          </div>
          <p className="block mt-1 text-md leading-tight font-thin text-gray-500 ">
            Makeup Artist
          </p>
          <p className="mt-8 text-black">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis et
            enim quis ligula pulvinar malesuada vel vel odio. Quisque sodales in
            neque non vulputate. Praesent semper est at elit egestas, egestas
            feugiat est pellentesque. Fusce lobortis massa tincidunt, viverra
            neque eget, aliquet felis. Pellentesque id ullamcorper risus. Nam
            consectetur ipsum sapien, a porttitor diam ultrices vitae. Aenean
            lacinia velit justo, a cursus nulla finibus et. In laoreet sit amet
            quam quis mattis. Vivamus nunc tortor, feugiat nec dictum sed,
            placerat in nisl. Duis vitae nisi metus. Cras euismod id ante ut
            semper. Nulla sit amet varius ante, a semper dolor.
          </p>
          <p className="mt-8 text-black">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis et
            enim quis ligula pulvinar malesuada vel vel odio. Quisque sodales in
            neque non vulputate. Praesent semper est at elit egestas, egestas
            feugiat est pellentesque. Fusce lobortis massa tincidunt, viverra
            neque eget, aliquet felis. Pellentesque id ullamcorper risus. Nam
            consectetur ipsum sapien, a porttitor diam ultrices vitae. Aenean
            lacinia velit justo, a cursus nulla finibus et. In laoreet sit amet
            quam quis mattis. Vivamus nunc tortor, feugiat nec dictum sed,
            placerat in nisl. Duis vitae nisi metus. Cras euismod id ante ut
            semper. Nulla sit amet varius ante, a semper dolor.
          </p>
          <div className="my-16">
            <p className="uppercase text-xl text-black font-semibold">
              Contact
            </p>
            <p className="hover:text-red-400 hover:underline">
              <span>email@email.com</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
