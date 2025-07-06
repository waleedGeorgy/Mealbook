import Link from "next/link";
import Image from "next/image";
import mainLogo from "@/assets/logo.png";
import styles from "./mainHeader.module.css";
import Navlink from "../navlink/Navlink";

const MainHeader = () => {
  return (
    <>
      <header className={styles.mainHeader}>
        <Link href="/">
          {/* NextJS provides a special tag for images <Image>. This tag optimizes images, by
          providing lazy loading, changing the image type to a type preferred by the browser (for example .webp
          for Chrome), improving image responsiveness for different screen sizes, etc...*/}
          <Image src={mainLogo} alt="some logo" priority />
          <h1>MEALBOOK</h1>
        </Link>
        <nav>
          <ul>
            <Navlink href="/meals">Browse</Navlink>
            <li>
              <h2>|</h2>
            </li>
            <Navlink href="/meals/share">Share</Navlink>
            <li>
              <h2>|</h2>
            </li>
            <Navlink href="/community">Community</Navlink>
          </ul>
        </nav>
      </header>
    </>
  );
};

export default MainHeader;
