import { Primitives } from "@codelytv/primitives-type";

import { ImageUrl } from "../../shared/domain/ImageUrl";
import { CourseId } from "./CourseId";
import { CourseName } from "./CourseName";

export class Course {
	private constructor(
		readonly id: CourseId,
		readonly name: CourseName,
		readonly imageUrl: ImageUrl
	) {}

	public static create({ id, name, imageUrl }: Primitives<Course>): Course {
		return new Course(new CourseId(id), new CourseName(name), new ImageUrl(imageUrl));
	}

	idValue(): string {
		return this.id.value;
	}

	nameValue(): string {
		return this.name.value;
	}

	imageUrlValue(): string {
		return this.imageUrl.value;
	}

	toPrimitives(): Primitives<Course> {
		return {
			id: this.id.value,
			name: this.name.value,
			imageUrl: this.imageUrl.value,
		};
	}
}
