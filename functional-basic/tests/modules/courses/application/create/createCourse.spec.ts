import { createCourse } from "../../../../../src/modules/courses/application/create/createCourse";
import { CourseMother } from "../../domain/CourseMother";
import { createCourseRepositoryMock } from "../../domain/CourseRepositoryMock";

describe("createCourse", () => {
	it("saves a valid course", async () => {
		const repository = createCourseRepositoryMock();
		const course = CourseMother.create();

		await createCourse(repository, course);

		expect(repository.save).toHaveBeenCalledWith(course);
	});

	it("throws and does not save when the id is not a valid uuid", async () => {
		const repository = createCourseRepositoryMock();
		const course = CourseMother.create({ id: "not-a-uuid" });

		await expect(createCourse(repository, course)).rejects.toThrow("Id not-a-uuid is not valid");
		expect(repository.save).not.toHaveBeenCalled();
	});

	it("throws and does not save when the title is too short", async () => {
		const repository = createCourseRepositoryMock();
		const course = CourseMother.createWithTooShortTitle();

		await expect(createCourse(repository, course)).rejects.toThrow(
			`Title ${course.title} is not valid`
		);
		expect(repository.save).not.toHaveBeenCalled();
	});

	it("throws and does not save when the title is too long", async () => {
		const repository = createCourseRepositoryMock();
		const course = CourseMother.createWithTooLongTitle();

		await expect(createCourse(repository, course)).rejects.toThrow(
			`Title ${course.title} is not valid`
		);
		expect(repository.save).not.toHaveBeenCalled();
	});

	it("throws and does not save when the image url is not valid", async () => {
		const repository = createCourseRepositoryMock();
		const course = CourseMother.createWithInvalidImageUrl();

		await expect(createCourse(repository, course)).rejects.toThrow(
			`Image url ${course.imageUrl} is not valid`
		);
		expect(repository.save).not.toHaveBeenCalled();
	});
});
