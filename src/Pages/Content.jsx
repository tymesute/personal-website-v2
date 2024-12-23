import { useTypewriter, Cursor } from "react-simple-typewriter";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";

// Import all images with absolute paths
import tymePic2 from "/src/assets/tyme-pic2.png";
import img4923 from "/src/assets/img_4923.png";
import img7072 from "/src/assets/img_7072.png";
import img1788 from "/src/assets/img_1788.png";
import img9844 from "/src/assets/img_9844.png";
import mocha1 from "/src/assets/mocha1.png";
import img6785 from "/src/assets/img_6785.png";
import img4836 from "/src/assets/img_4836.png";
import friends1 from "/src/assets/friends1.png";

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
              paddingBottom: "30px",
            }}
          >
            I&apos;m a sophomore from Bangkok, Thailand 🇹🇭 studying Computer
            Science at Northeastern University. This past summer, I worked as a
            software engineer intern at Agoda and SIX Network. I love playing
            guitar, basketball, going to the gym, and spending time with
            friends/family.
          </p>

          <ResponsiveMasonry columnsCountBreakPoints={{ 750: 2, 900: 3 }}>
            <Masonry gutter="10px">
              <img src={tymePic2} alt="tyme-pic2" />
              <img src={img4923} alt="img_4923" />
              <img src={img7072} alt="img_7072" />
              <img src={img1788} alt="img_1788" />
              <img src={img9844} alt="img_9844" />
              <img src={mocha1} alt="mocha1" />
              <img src={img6785} alt="img_6785" />
              <img src={img4836} alt="img_4836" />
              <img src={friends1} alt="friends1" />
            </Masonry>
          </ResponsiveMasonry>
        </div>
      </div>
    </div>
  );
}
