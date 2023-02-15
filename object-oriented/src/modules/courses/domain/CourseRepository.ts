import { Course } from "./Course";
import { CourseId } from "./CourseId";

export interface CourseRepository {
	save(course: Course): void;

	get(id: CourseId): Course | null;

	getAll(): Course[];
}
