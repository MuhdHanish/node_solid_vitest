# Node Solid Server Vitest

Node Solid Server is a project aimed at demonstrating how to implement testing using the Vitest framework in a TypeScript-based Node.js project following clean architecture principles.

## Directory Structure

- entities/
  
  ├── appointment.ts             # Entity definition for appointments
  
  ├── appointment.spec.ts        # Test file for appointment entity

- repositories/
  
  ├── appointments-repository.ts      # Interface for appointments repository

  ├── in-memory-appointments-repository.ts # In-memory implementation of appointments repository

- use-cases/
  
  ├── create-appointment.ts      # Use case for creating appointments
  
  └── create-appointment.spec.ts # Test file for create-appointment use case

- tests/
  
  ├── utils/
  
  │   ├── get-future-date.ts     # Utility function for getting future dates

  │   └── get-future-date.spec.ts# Test file for get-future-date utility

- package.json                   # Node.js package configuration file
- package-lock.json              # Lock file for npm dependencies
- tsconfig.json                  # TypeScript configuration file
- vite.config.ts                 # Vite configuration file
- .eslintrc.js                   # ESLint configuration file
- README.md                      # Documentation for your project
- .gitignore                     # Git ignore file to exclude certain files/directories

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Dependencies](#dependencies)
- [Feedback](#feedback)
- [Contributing](#contributing)
- [Support](#support)

## Installation

1. Clone the repository.
2. Run `npm install` to install dependencies.
2. Run `npm run dev` to start testing.

## Usage

Node Solid Server can be used for:

- Implementing and testing new features following clean architecture principles.
- Writing tests using the Vitest framework to ensure the correctness of implemented features.
- Executing tests with Vitest to validate the functionality of the application.
- Integrating the project into larger Node.js applications to demonstrate effective structuring and testing practices.

## Dependencies

- `typescript`: A superset of JavaScript that adds static typing to the language.
- `date-fns`: Modern JavaScript date utility library that provides various functions to work with dates
- `eslint`: JavaScript and TypeScript linter.
- `vitest`: Lightweight test runner for JavaScript and TypeScript.


## Feedback

If you have any feedback, please reach me at [muhammedhanish11@gmail.com](mailto:muhammedhanish11@gmail.com) or connect with me on [LinkedIn](https://www.linkedin.com/in/muhdhanish/).

## Contributing

Contributions are welcome! 

## Support

Show your support by 🌟 the project!!
