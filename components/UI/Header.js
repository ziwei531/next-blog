import classes from "./Header.module.css";
import Link from 'next/Link'

export default function Header() {
    return (
        <>
        <Link href={`/`}>
            <header className={classes.header}>
                <span className={classes.logo}>WZW Blog</span>
            </header>
        </Link>
        </>
    )
}