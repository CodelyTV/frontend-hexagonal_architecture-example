import { getAllCourses } from "../../../../../src/modules/courses/application/get-all/getAllCourses";
import { CourseMother } from "../../domain/CourseMother";
import { createCourseRepositoryMock } from "../../domain/CourseRepositoryMock";

describe("getAllCourses", () => {
	it("returns all the courses from the repository", async () => {
		const repository = createCourseRepositoryMock();
		const courses = CourseMother.createList();
		repository.getAll.mockResolvedValue(courses);

		const result = await getAllCourses(repository);

		expect(result).toEqual(courses);
	});

	it("returns an empty list when there are no courses", async () => {
		const repository = createCourseRepositoryMock();
		repository.getAll.mockResolvedValue([]);

		const result = await getAllCourses(repository);

		expect(result).toEqual([]);
	});
});
