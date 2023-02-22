import { LocalStorageCourseRepository } from "./modules/courses/infrastructure/LocalStorageCourseRepository";
import { CourseCard } from "./sections/courses/CourseCard";
import { CreateCourseForm } from "./sections/courses/CreateCourseForm";
import { useCourses } from "./sections/courses/useCourses";

export function App() {
	const courses = useCourses();
	const courseRepository = new LocalStorageCourseRepository();

	return (
		<div className="App">
			<h3>🌱⚛️ Create React App Codely template example</h3>
			<h2>Current courses</h2>

			{courses.map((course) => (
				<CourseCard key={course.idValue()} course={course} />
			))}

			<CreateCourseForm repository={courseRepository} />
		</div>
	);
}
