import { CourseCard } from "./CourseCard";
import { useCoursesContext } from "./CoursesContext";

export function CoursesList() {
	const { courses } = useCoursesContext();

	return (
		<section>
			<h2>Current courses</h2>
			{courses.map((course) => (
				<CourseCard key={course.id} course={course} />
			))}
		</section>
	);
}
