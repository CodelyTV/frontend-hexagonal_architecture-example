export class CourseImageUrl {
	constructor(public readonly value: string) {
		if (!CourseImageUrl.isValid(value)) {
			throw new Error(CourseImageUrl.invalidMessage(value));
		}
	}

	public static isValid(value: string): boolean {
		const regexExp = /^(?:https?:\/\/)?(?:[\w]+\.)(?:\.?[\w]{2,})(\/[\w]*)*(\.[\w]+)*/;

		return regexExp.test(value);
	}

	public static invalidMessage(value: string): string {
		return `The image url [${value}] is not valid`;
	}
}
