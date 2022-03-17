import classes from "./Header.module.css";
import Link from "next/link";

export default function Header() {
	return (
		<>
			<Link passHref href={`/`}>
				<header className={classes.header}>
					<span className={classes.logo}>WZW Blog</span>
				</header>
			</Link>
		</>
	);
}
