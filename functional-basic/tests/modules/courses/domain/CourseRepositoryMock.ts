import { CourseRepository } from "../../../../src/modules/courses/domain/CourseRepository";

export function createCourseRepositoryMock(): jest.Mocked<CourseRepository> {
	return {
		save: jest.fn(),
		get: jest.fn(),
		getAll: jest.fn(),
	};
}
