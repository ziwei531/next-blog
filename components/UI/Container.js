import styles from "./Container.module.css";

export default function Container(props) {
	const classes = styles.container + " " + props.className;
	return <div className={classes}>{props.children}</div>;
}
