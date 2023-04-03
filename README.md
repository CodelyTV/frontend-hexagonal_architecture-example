<p align="center">
  <a href="https://codely.com">
    <img src="https://user-images.githubusercontent.com/10558907/170513882-a09eee57-7765-4ca4-b2dd-3c2e061fdad0.png" width="300px" height="92px" alt="Codely logo"/>
  </a>
</p>

<h1 align="center">
  Hexagonal Architecture in Frontend
</h1>

<p align="center">
    <a href="https://github.com/CodelyTV"><img src="https://img.shields.io/badge/CodelyTV-OS-green.svg?style=flat-square" alt="Codely Open Source"/></a>
    <a href="https://pro.codely.com"><img src="https://img.shields.io/badge/CodelyTV-PRO-black.svg?style=flat-square" alt="CodelyTV Courses"/></a>
</p>

<p align="center">
  <a href="https://github.com/codelytv/frontend-hexagonal_architecture-example/stargazers">Stars are welcome 😊</a>
</p>

## Hexagonal architecture: what is it and benefits

Hexagonal architecture, also known as "ports and adapters", is a software design approach that separates the internal workings of a system from its external interactions. In frontend development, this architecture pattern is used to structure the frontend code in a way that allows for modularity, testability, and ease of maintenance. The main idea behind the hexagonal architecture in frontend is to create a clear separation between the presentation layer and the application logic, allowing developers to make changes to either layer without affecting the other.

The benefits of using hexagonal architecture in frontend development include increased testability, as the application logic is not coupled to the infrastructure (calls to an API, usage of local storage, etc.). This also makes it easier to maintain the code, as changes to the presentation layer or the application logic can be made without affecting the other. Additionally, the modular structure of the hexagonal architecture pattern allows for easier scaling and improved flexibility, as new features can be added or existing ones can be updated without having to make changes to the underlying architecture. Furthermore, the clear separation between the presentation layer and the application logic makes it easier for multiple developers to work on the same project, as they can focus on their specific areas of responsibility without affecting other parts of the code.

## Approach

While Hexagonal Architecture doesn't talk about layers, we like to organize our code in 3 separate layers:

- **Domain layer**: Core logic and concepts of the application, independent of implementation technology, includes business rules, data models, and behaviors.
- **Application layer**: Implements use cases and features using the domain layer.
- **Infrastructure layer**: Provides abstraction between the app and external systems, enabling flexible and modular interaction via libraries, APIs, etc. Allows easy replacement/upgrade of external systems without affecting core functionality.

This repository shows how we can apply Hexagonal Architecture independently of the programming paradigm, with different examples:

- `object-oriented`: follows object-oriented paradigm with the use of classes, value objetcs, etc.
- `functional-basic`: avoids the use of classes, using functions instead
- `functional-currying`: same as the previous one but it uses currying for dependency injection

## 🌈 Tech Stack

You can apply Hexagonal Architecture with any tech stack, but this is the one we use in the examples:

- [TypeScript](https://www.typescriptlang.org)
- [React](https://reactjs.org/), apps created with the <a href="https://github.com/CodelyTV/cra-template-codely">🌱⚛️ Create React App Codely template</a>
- [ESLint](https://eslint.org) and [Prettier](https://prettier.io) already configured with the [🤏 Codely's configuration](https://github.com/CodelyTV/eslint-config-codely) and [🎯 Codely's Hexagonal Architecture plugin](https://github.com/CodelyTV/eslint-plugin-hexagonal-architecture)
- [Jest](https://jestjs.io) with [React Testing Library](https://testing-library.com/docs/react-testing-library/intro) for the unit tests
- [Cypress](https://www.cypress.io) with [Testing Library](https://testing-library.com/docs/cypress-testing-library) for the end-to-end tests
- [GitHub Action Workflows](https://github.com/features/actions) set up to run tests and linting on push
- [Makefile](https://github.com/CodelyTV/cra-template-codely/blob/main/template/Makefile) for standardize how to run projects
- [Sass](https://sass-lang.com) to supercharge CSS with nested classes and more fun
- [.editorconfig](https://editorconfig.org) for sharing the IDE config
