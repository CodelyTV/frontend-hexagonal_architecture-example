import { Course } from "../../../modules/courses/domain/Course";

export function useCourses(): Course[] {
	return [
		{ name: "Tratamiento de datos en Bash: Gestiona archivos JSON, XML, YAML" },
		{ name: "React de 0 aplicando buenas prácticast de 0 aplicando buenas prácticas" },
		{ name: "Auditoría Holaluz" },
		{ name: "API HTTP en Kotlin aplicando Arquitectura Hexagonal" },
		{ name: "DDD en TypeScript: Comunicación entre servicios y aplicaciones" },
		{ name: "Desarrolla plugins de Figma con TypeScript" },
		{ name: "Linting en JavaScript y TypeScript" },
		{ name: "Patrones de Diseño de Comportamiento" },
	];
}
