import Link from 'next/link';
import styles from "./header.module.css";

export default function Header() {
    return (
        <ul className={styles.menu}>
            <li><Link href={"/basic-elements"}>Basic elements</Link></li>
            <li><Link href={"/form"}>Form</Link></li>
        </ul>
    )
}