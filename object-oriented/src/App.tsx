import { CourseCard } from "./sections/courses/CourseCard";
import { CreateCourseForm } from "./sections/courses/CreateCourseForm";
import { useCourses } from "./sections/courses/useCourses";

export function App() {
	const courses = useCourses();

	return (
		<div className="App">
			<h3>🌱⚛️ Create React App Codely template example</h3>
			<h2>Current courses</h2>

			{courses.map((course) => (
				<CourseCard key={course.idValue()} course={course} />
			))}

			<CreateCourseForm />
		</div>
	);
}
