import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

import { CourseCreator } from "../../modules/courses/application/create/CourseCreator";
import { CourseRepository } from "../../modules/courses/domain/CourseRepository";

export const enum FormStatus {
	Loading,
	Success,
	Error,
	Initial,
}

export function useCourseForm(repository: CourseRepository): {
	formStatus: FormStatus;
	submitForm: (formData: { title: string; imageUrl: string }) => void;
	resetFormStatus: () => void;
} {
	const [formStatus, setFormStatus] = useState(FormStatus.Initial);

	function submitForm(formData: { title: string; imageUrl: string }) {
		setFormStatus(FormStatus.Loading);

		// submit form
		const courseCreator = new CourseCreator(repository);

		try {
			const uuid = (uuidv4 as () => string)(); // TODO: check uuid types
			courseCreator.create(uuid, formData.title, formData.imageUrl);
			setFormStatus(FormStatus.Success);
		} catch (e) {
			setFormStatus(FormStatus.Error);
		}
	}

	function resetFormStatus() {
		setFormStatus(FormStatus.Initial);
	}

	return {
		formStatus,
		submitForm,
		resetFormStatus,
	};
}
