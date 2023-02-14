import { ImageUrl } from "../../shared/domain/ImageUrl";
import { CourseId } from "./CourseId";

export class Course {
	constructor(
		private readonly id: CourseId,
		private readonly name: string,
		private readonly imageUrl: ImageUrl
	) {}
}
