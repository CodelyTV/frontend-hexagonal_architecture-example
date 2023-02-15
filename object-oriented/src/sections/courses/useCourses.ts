import { AllCoursesGetter } from "../../modules/courses/application/get-all/AllCoursesGetter";
import { Course } from "../../modules/courses/domain/Course";
import { LocalStorageCourseRepository } from "../../modules/courses/infrastructure/LocalStorageCourseRepository";

export function useCourses(): Course[] {
	const repository = new LocalStorageCourseRepository();
	const allCoursesGetter = new AllCoursesGetter(repository);

	return allCoursesGetter.get();
}
