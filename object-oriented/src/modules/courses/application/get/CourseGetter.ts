import { Course } from "../../domain/Course";
import { CourseId } from "../../domain/CourseId";
import { CourseRepository } from "../../domain/CourseRepository";

export class CourseGetter {
	constructor(private readonly repository: CourseRepository) {}

	get(id: string): Course | null {
		return this.repository.get(new CourseId(id));
	}
}
