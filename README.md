# 🎟️ VotacaoCRUD FrontEnd

As the title says, this project is the FrontEnd for the (Voting API)[https://github.com/AurorinhaBoreal/VotacaoCRUD-BackEnd].

In conjuction with the API, with this FrontEnd you can register Users, create Agendas and vote in the respective agendas.

## Table of Contents
- [✨ Running the Project](#running-the-project)
- [🎨 Choosen Design](#design-of-the-pages)
- [🏗️ Developing the Project](#developing-the-project)
- [📄 License](#license)

## Running the Project

To run the the front end is simple.

For it to work you'll need to first run the back end. The instructions for running it can be found on its own repository.

After that, you can run the front using the command:

- In Development :D

## Choosen Design

This subtopic refers to the design and pages made in Figma that will be used as base for the design of the frontEnd.

First of all we have the Home page that will be the signUp one, It allows you to add a User as you enter the site.

![Figma Home Page](docs/home-page.png)

After we Sign Up we will be redirected to the Active Agendas Page were... It will show us exactly that.

![Figma Active Agendas Page](docs/active-agendas-page.png)

Using the "+" Button we can create a new agenda trough a modal

![Figma Create Agenda Modal](docs/create-agenda-modal.png)

We can click on the "Ended Agendas" to be redirected to the Ended Agendas Page

![Figma Ended Agendas Page](docs/ended-agendas-page.png)

And last but no least you can see the create and vote logs clicking on "Logs" localized also in the header

![Figma Logs Page](docs/logs-page.png)

## Developing the Project

This topic refers to all the technologies used in the project and the steps to build it using them.

### Technologies & Tools

- ⚛️ React
- #️⃣ TypeScript
- 🐋 Docker
- 🎨 Figma

### US's - MPV

- ✅ [US000] Configure Repository
  - ✅ [US000-1] Implements a README
  - ✅ [US000-2] Configure GitHub Actions
- ✅ [US001] Configure Project
  - ✅ [US001-1] Create Design
  - ✅ [US001-2] Create React App
  - ✅ [US001-3] Implement React Routes
- ✅ [US002] Home Page
  - ✅ [US002-1] Main Structure
  - ✅ [US002-2] Sign Up Form
  - ✅ [US002-3] Create User Method
- 🚧 [US003] Active Agendas Page
  - ✅ [US003-1] Create Main Structure
  - ✅ [US003-2] Get Active Agenda Method
  - ✅ [US003-3] Create Agenda Modal
  - ✅ [US003-4] Create Agenda Method
  - ✅ [US003-5] Active Agenda Component
  - 🚧 [US003-6] Logic for End of the Agenda
  - 🚧 [US003-7] Timed Component
- 🚧 [US004] Ended Agendas Page
  - 🚧 [US004-1] Get Ended Agenda Method
  - 🚧 [US004-2] Ended Agenda Component
- 🚧 [US005] Logs Page
  - 🚧 [US005-1] Get Log Method
  - 🚧 [US005-2] Create Log Card
- 🚧 [US006] Tests
  - 🚧 [US006-1] Implement Tests in Home Page
  - 🚧 [US006-2] Implement Tests in Active Agendas Page
  - 🚧 [US006-3] Implement Tests in Ended Agendas Page
  - 🚧 [US006-4] Implement Tests in Logs Page

### US's - Extra

- 🚧 [US00X] Extra Features
  - 🚧 [US00X-1] Refactor for Better Responsiveness


## License
This project is licensed under the Apache 2.0 License. See the [LICENSE](LICENSE) file for details.
