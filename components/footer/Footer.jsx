import Image from "next/image";
import styles from "./footer.module.css";
import githubIcon from "@/assets/github.svg";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className={styles.footer}>
      <a href="" target="_blank">
        <Image src={githubIcon} alt="Icon of github" />
        <p>GitHub</p>
      </a>
      <p>All rights reserved ©{currentYear} </p>
    </footer>
  );
};

export default Footer;
