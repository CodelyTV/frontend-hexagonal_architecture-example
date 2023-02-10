export interface Course {
	name: string;
}

export function createCourse(name: string): Course {
	return {
		name,
	};
}
