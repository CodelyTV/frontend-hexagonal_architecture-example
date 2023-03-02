export interface Course {
	id: string;
	title: string;
	imageUrl: string;
}

function isIdValid(id: string): boolean {
	const regexExp =
		/^[0-9a-fA-F]{8}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{12}$/gi;

	return regexExp.test(id);
}

export function validateCourse({ id, title, imageUrl }: Course): void {
	if (!isIdValid(id)) {
		throw new Error("Id is not valid");
	}
}
