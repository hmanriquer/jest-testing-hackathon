# Jest Testing Project

This project serves as a testing environment for a hackathon challenge. It provides a boilerplate setup with React, TypeScript, and Jest to encourage and demonstrate your testing skills.

## Features / Boilerplate Integrations

- React and TypeScript configuration
- Jest testing framework integration
- Easy-to-use commands for running tests

## Instructions

The project is a simple user list with a form where you can add more users to the list.

You will find 2 main folders, `src` and `test`. Inside `src` folder you can view all the project structure, also you can find the context provider for the users. In the route `src/components` you will find the ui folder where main components will relay. The `App` folder manages the main app. You will find a test example file in the test folder to have a guide on the test writting.

In test folder is where you will add all the test described below

### Detailed Test Instructions

- For each file in UI folder you must create at least 3 test cases to test it's functionality.
- You must create a test suite with 3 or more test for AddUser component at: `@components/Adduser`
- You must create a test suite for the `App.tsx` to ensure it's correct functionality.
- _Bonus_: Add testing suite for the user context in `src/context/user.context.tsx`

## Considerations

The projected is structured to only use the commands in package.json to run all test suites. Also it will autogenerate a snapshot in the folder of the test automatically when you run the testing command. All configurations are done, and you only need to write the tests.

If you have a question, found a bug or have some considerations plese refer to your current host (or presenters)

Happy hacking! 🎭
