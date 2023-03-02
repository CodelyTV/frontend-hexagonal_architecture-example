import { Course, validateCourse } from "../../domain/Course";
import { CourseRepository } from "../../domain/CourseRepository";

export async function createCourse(
	courseRepository: CourseRepository,
	course: Course
): Promise<void> {
	validateCourse(course);

	await courseRepository.save(course);
}
