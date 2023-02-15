import { Course } from "../../domain/Course";
import { CourseRepository } from "../../domain/CourseRepository";

export class AllCoursesGetter {
	constructor(private readonly repository: CourseRepository) {}

	get(): Course[] {
		return this.repository.getAll();
	}
}
