import classes from "../../styles/project-section.module.css";
import Card from "./Card";
import Link from "next/link";

export default function ProjectSection(props) {
	const allClass = `${classes["project-section"]} ${props.className}`;
	return (
		<>
			<Card className={allClass}>
				<img
					className={classes["cover-img"]}
					src={props.post.frontmatter.cover_image}
					alt="Cover Image"
				/>
				<h1>{props.post.frontmatter.title}</h1>
				<p className={classes.description}>{props.post.frontmatter.excerpt}</p>
				<div className={classes.date}>
					{" "}
					Posted on {props.post.frontmatter.date}
				</div>
				<Link href={`/blog/${props.post.slug}`}>
					<a className={classes.btn}>Read More</a>
				</Link>
			</Card>
		</>
	);
}
