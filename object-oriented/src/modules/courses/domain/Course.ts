import { ImageUrl } from "../../shared/domain/ImageUrl";
import { CourseId } from "./CourseId";
import { CourseName } from "./CourseName";

export class Course {
	private constructor(
		private readonly id: CourseId,
		private readonly name: CourseName,
		private readonly imageUrl: ImageUrl
	) {}

	public static create(id: string, name: string, imageUrl: string): Course {
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
}
