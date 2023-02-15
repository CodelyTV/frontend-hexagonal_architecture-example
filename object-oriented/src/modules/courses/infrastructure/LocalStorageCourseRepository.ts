import { Course } from "../domain/Course";
import { CourseId } from "../domain/CourseId";
import { CourseRepository } from "../domain/CourseRepository";

export class LocalStorageCourseRepository implements CourseRepository {
	save(course: Course): void {
		const courses = this.getAllFromLocalStorage();

		courses.set(course.idValue(), course);

		localStorage.setItem("courses", JSON.stringify(courses, this.replacer));
	}

	get(id: CourseId): Course | null {
		const courses = this.getAllFromLocalStorage();

		return courses.get(id.value) ?? null;
	}

	getAll(): Course[] {
		const courses = this.getAllFromLocalStorage();

		return Array.from(courses.values());
	}

	private getAllFromLocalStorage(): Map<string, Course> {
		const courses = localStorage.getItem("courses");

		if (courses === null) {
			return new Map();
		}

		return JSON.parse(courses, this.reviver) as Map<string, Course>;
	}

	private replacer(key: any, value: any): any {
		if (value instanceof Map) {
			return {
				dataType: "Map",
				value: Array.from(value.entries()), // or with spread: value: [...value]
			};
		}

		return value;
	}

	private reviver(key: any, value: any): any {
		if (typeof value === "object" && value !== null) {
			if (value.dataType === "Map") {
				return new Map(value.value);
			}
		}

		return value;
	}
}
