import { Primitives } from "@codelytv/primitives-type";

import { Course } from "../domain/Course";
import { CourseId } from "../domain/CourseId";
import { CourseRepository } from "../domain/CourseRepository";

export class LocalStorageCourseRepository implements CourseRepository {
	save(course: Course): void {
		const courses = this.getAllFromLocalStorage();
		const coursePrimitives = course.toPrimitives();

		courses.set(coursePrimitives.id, coursePrimitives);

		localStorage.setItem("courses", JSON.stringify(Array.from(courses.entries())));
	}

	get(id: CourseId): Course | null {
		const courses = this.getAllFromLocalStorage();
		const course = courses.get(id.value);

		if (!course) {
			return null;
		}

		return Course.create(course);
	}

	getAll(): Course[] {
		const courses = this.getAllFromLocalStorage();

		return Array.from(courses.values()).map((course) => Course.create(course));
	}

	private getAllFromLocalStorage(): Map<string, Primitives<Course>> {
		const courses = localStorage.getItem("courses");

		if (courses === null) {
			return new Map();
		}

		const map = new Map(JSON.parse(courses) as Iterable<[string, Primitives<Course>]>);

		return map;
	}
}
