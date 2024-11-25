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
        {""}I&apos;m Tyme 👋
      </h1>

      <div className="row">
        <div>
          <p
            className="p-style"
            style={{
              paddingBottom: "35px",
            }}
          >
            I&apos;m a sophomore from Bangkok, Thailand 🇹🇭 studying Computer
            Science at Northeastern University. This past summer, I worked as a
            software engineer intern at Agoda and SIX Network. I love playing
            guitar, basketball, going to the gym, and spending time with
            friends/family.
          </p>

          <ResponsiveMasonry columnsCountBreakPoints={{ 750: 2, 900: 3 }}>
            {
              // implement mapping to image: https://cedricdelpoux.github.io/react-responsive-masonry/
            }
            <Masonry gutter="10px">
              <img src="./src/assets/tyme-pic2.png" alt="tyme-pic2" />
              <img src="./src/assets/img_4923.png" alt="img_4923" />
              <img src="./src/assets/img_7072.png" alt="img_7072" />
              <img src="./src/assets/img_1788.png" alt="img_1788" />
              <img src="./src/assets/img_9844.png" alt="img_9844" />
              <img src="./src/assets/mocha1.png" alt="mocha1" />
              <img src="./src/assets/img_6785.png" alt="img_6785" />
              <img src="./src/assets/img_4836.png" alt="img_4836" />
              <img src="./src/assets/friends1.png" alt="friends1" />
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
