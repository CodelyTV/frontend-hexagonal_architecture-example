import { Course } from "../../modules/courses/domain/Course";
import styles from "./CourseCard.module.scss";

export function CourseCard({ course }: { course: Course }) {
	return <div className={styles.courseCard}>{course.title}</div>;
}
