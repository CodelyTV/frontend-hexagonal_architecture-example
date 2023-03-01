import { useEffect, useState } from "react";

import { AllCoursesGetter } from "../../modules/courses/application/get-all/AllCoursesGetter";
import { Course } from "../../modules/courses/domain/Course";
import { LocalStorageCourseRepository } from "../../modules/courses/infrastructure/LocalStorageCourseRepository";

export function useCourses(): { courses: Course[] } {
	const repository = new LocalStorageCourseRepository();
	const allCoursesGetter = new AllCoursesGetter(repository);
	const [courses, setCourses] = useState<Course[]>([]);

	useEffect(() => {
		allCoursesGetter.get().then((courses) => {
			setCourses(courses);
		});
	}, []);

	return {
		courses,
	};
}
