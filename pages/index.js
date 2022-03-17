import classes from "../styles/Home.module.css";
import Container from "../components/UI/Container";
import ProjectSection from "../components/UI/ProjectSection";
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { sortByDate } from "../utils";

export default function Home({ posts }) {
	return (
		<>
			<title>WZW Blog</title>
			<Container>
				<img
					alt="Logo"
					height={200}
					width={200}
					className={classes.logo}
					src="https://i.imgur.com/sNnWLCb.png"
				/>
				<h1 className="title">
					<a>Hi! My name is Whoong Zi Wei</a>
				</h1>
				<p className={classes.description}>
					I am currently a student in Taylor's University majoring in Computer
					Science! This website is dedicated to serve as a documentation of all
					of my projects that I have done - either personal projects or school
					assignments.
				</p>
				<h1 className={classes["blog-header"]}>Posts ⬇</h1>
				<div className={classes["post-container"]}>
					{posts.map((post, index) => (
						<ProjectSection key={index} className={classes.posts} post={post} />
					))}
				</div>
				{/* <ProjectSection
          title="First Project"
          description="Put the date of the project's creation"
        /> */}
			</Container>
		</>
	);
}

export async function getStaticProps() {
	// Get files from the posts dir
	const files = fs.readdirSync(path.join("posts"));

	// Get slug and frontmatter from posts
	const posts = files.map((filename) => {
		// Create slug
		const slug = filename.replace(".md", "");

		// Get frontmatter
		const markdownWithMeta = fs.readFileSync(
			path.join("posts", filename),
			"utf-8"
		);

		const { data: frontmatter } = matter(markdownWithMeta);

		return {
			slug,
			frontmatter,
		};
	});

	return {
		props: {
			posts: posts.sort(sortByDate),
		},
	};
}
