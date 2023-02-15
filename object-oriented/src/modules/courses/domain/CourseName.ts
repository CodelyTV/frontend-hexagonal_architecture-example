export class CourseName {
	readonly MAX_COURSE_LENGTH = 40;

	constructor(readonly value: string) {
		if (value.length > this.MAX_COURSE_LENGTH) {
			throw new Error(
				`The title [${value}] is too long. ${this.MAX_COURSE_LENGTH} chars is the max allowed`
			);
		}
	}
}
