import { Course } from "../../domain/Course";
import { CourseRepository } from "../../domain/CourseRepository";

export class CourseCreator {
	constructor(private readonly repository: CourseRepository) {}

	create(id: string, title: string, imageUrl: string): void {
		const course = Course.create({ id, title, imageUrl });

		this.repository.save(course);
	}
}
