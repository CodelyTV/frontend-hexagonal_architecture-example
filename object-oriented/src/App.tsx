import { CoursesContextProvider } from "./CoursesContext";
import { LocalStorageCourseRepository } from "./modules/courses/infrastructure/LocalStorageCourseRepository";
import { CoursesList } from "./sections/courses/CoursesList";
import { CreateCourseForm } from "./sections/courses/CreateCourseForm";

export function App() {
	const repository = new LocalStorageCourseRepository();

	return (
		<CoursesContextProvider repository={repository}>
			<div className="App">
				<h3>🌱⚛️ Create React App Codely template example</h3>
				<h2>Current courses</h2>

				<CoursesList />
				<CreateCourseForm />
			</div>
		</CoursesContextProvider>
	);
}
