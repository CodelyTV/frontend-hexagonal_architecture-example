import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

import { CourseCreator } from "../../modules/courses/application/create/CourseCreator";
import { LocalStorageCourseRepository } from "../../modules/courses/infrastructure/LocalStorageCourseRepository";

export const enum FormStatus {
	Loading,
	Success,
	Error,
	Initial,
}

export function useCourseForm(): {
	formStatus: FormStatus;
	submitForm: (formData: { name: string; imageUrl: string }) => void;
	resetFormStatus: () => void;
} {
	const [formStatus, setFormStatus] = useState(FormStatus.Initial);

	function submitForm(formData: { name: string; imageUrl: string }) {
		setFormStatus(FormStatus.Loading);

		// submit form
		const repository = new LocalStorageCourseRepository();
		const courseCreator = new CourseCreator(repository);

		try {
			const uuid = (uuidv4 as () => string)(); // TODO: check uuid types
			courseCreator.create(uuid, formData.name, formData.imageUrl);
			setFormStatus(FormStatus.Success);
		} catch (e) {
			console.log(e);

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
