import { getCourse } from "../../../../../src/modules/courses/application/get/getCourse";
import { CourseMother } from "../../domain/CourseMother";
import { createCourseRepositoryMock } from "../../domain/CourseRepositoryMock";

describe("getCourse", () => {
	it("returns the course with the given id", async () => {
		const repository = createCourseRepositoryMock();
		const course = CourseMother.create();
		repository.get.mockResolvedValue(course);

		const result = await getCourse(repository, course.id);

		expect(repository.get).toHaveBeenCalledWith(course.id);
		expect(result).toEqual(course);
	});

	it("returns null when the course does not exist", async () => {
		const repository = createCourseRepositoryMock();
		const { id } = CourseMother.create();
		repository.get.mockResolvedValue(null);

		const result = await getCourse(repository, id);

		expect(repository.get).toHaveBeenCalledWith(id);
		expect(result).toBeNull();
	});
});
