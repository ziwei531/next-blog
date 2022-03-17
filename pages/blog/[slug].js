import Header from "../../components/UI/Header";
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { marked } from "marked";
import Link from "next/link";
import Container from "../../components/UI/Container";
import Card from "../../components/UI/Card";
import classes from "./blog.module.css";

export default function PostPage({ frontmatter, slug, content }) {
	return (
		<>
			<Header />
			<Container className={classes.container}>
				<Link href="/">
					<a className={classes["btn-back"]}>Go back</a>
				</Link>
				<Card className={classes.card}>
					<h1 className="title">{frontmatter.title}</h1>
					<h3 className={classes.date}>{frontmatter.date}</h3>
					<div className={classes["img-container"]}>
						<img
							className={classes["post-img"]}
							src={frontmatter.cover_image}
							alt="Post's Images"
						/>
					</div>
					<div className={classes["content"]}>
						<div
							dangerouslySetInnerHTML={{
								__html: marked(content),
							}}
						></div>
					</div>
				</Card>
			</Container>
		</>
	);
}

export async function getStaticPaths() {
	const files = fs.readdirSync(path.join("posts"));
	const paths = files.map((filename) => ({
		params: { slug: filename.replace(".md", "") },
	}));

	return {
		paths,
		fallback: false,
	};
}

export async function getStaticProps({ params: { slug } }) {
	const markdownWithMeta = fs.readFileSync(
		path.join("posts", slug + ".md"),
		"utf-8"
	);

	const { data: frontmatter, content } = matter(markdownWithMeta);

	return {
		props: {
			frontmatter,
			slug,
			content,
		},
	};
}
