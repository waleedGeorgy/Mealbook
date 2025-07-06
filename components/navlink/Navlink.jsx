"use client";
import { usePathname } from "next/navigation";
import styles from "./navlink.module.css";
import Link from "next/link";

const Navlink = ({ href, children }) => {
  const path = usePathname();
  return (
    <li className={styles.navlink}>
      <Link
        href={href}
        className={path.endsWith(href) ? styles.active : undefined}
      >
        {children}
      </Link>
    </li>
  );
};

export default Navlink;
