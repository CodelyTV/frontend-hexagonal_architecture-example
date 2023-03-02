import { createLocalStorageCourseRepository } from "./modules/courses/infrastructure/LocalStorageCourseRepository";
import { CoursesContextProvider } from "./sections/courses/CoursesContext";
import { CoursesList } from "./sections/courses/CoursesList";
import { CreateCourseForm } from "./sections/courses/CreateCourseForm";

export function App() {
	const repository = createLocalStorageCourseRepository();

	return (
		<CoursesContextProvider repository={repository}>
			<div className="App">
				<h3>🌱⚛️ Create React App Codely template example</h3>
				<CoursesList />
				<CreateCourseForm />
			</div>
		</CoursesContextProvider>
	);
}
