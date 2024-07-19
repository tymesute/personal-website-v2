import React from "react";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";

export default function Content() {
  const [text] = useTypewriter({
    words: ["Hello,", "สวัสดีครับ"],
    loop: {},
    typeSpeed: 120,
    deleteSpeed: 80,
  });

  return (
    <div className="content">
      <h1 className="heading-style">
        <span>{text}</span>
        <span>
          <Cursor cursorStyle="|" />
        </span>
        {""}I'm Tyme 👋
      </h1>

      <div className="row">
        <div>
          <p
            className="p-style"
            style={{
              paddingBottom: "35px",
            }}
          >
            I'm a rising sophomore from Bangkok, Thailand 🇹🇭 studying Computer
            Science at Northeastern University. I'm currently a software
            engineer intern at Agoda for Summer 2024. I love playing guitar,
            basketball, going to the gym, and spending time with friends/family.
          </p>

          <ResponsiveMasonry columnsCountBreakPoints={{ 750: 2, 900: 3 }}>
            {
              // implement mapping to image: https://cedricdelpoux.github.io/react-responsive-masonry/
            }
            <Masonry gutter="10px">
              <img src={"./src/assets/tyme-pic2.png"} />
              <img src={"./src/assets/IMG_4923.JPG"} />
              <img src={"./src/assets/IMG_7072.JPG"} />
              <img src={"./src/assets/IMG_1788.JPG"} />
              <img src={"./src/assets/IMG_9844.JPG"} />
              <img src={"./src/assets/mocha1.png"} />
              <img src={"./src/assets/IMG_6785.JPG"} />
              <img src={"./src/assets/IMG_4836.JPG"} />
              <img src={"./src/assets/friends1.png"} />
            </Masonry>
          </ResponsiveMasonry>
        </div>

        {
          // <img src={"./src/assets/tyme-pic2.png"} style={{ width: "38%" }} />
        }
      </div>
    </div>
  );
}
