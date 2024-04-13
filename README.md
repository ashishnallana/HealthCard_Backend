# Health Card Backend

Welcome to the Health Card Backend repository!
Health Card is a comprehensive health record management system built using the MERN stack. It allows users to securely store and manage their medical records digitally, while also facilitating seamless communication with healthcare professionals. With features like real-time doctor consultation, medication management, and personalized health insights, Health Card empowers individuals to take control of their wellness journey effectively. Developed with a focus on accessibility, efficiency, and safety, Health Card aims to revolutionize the way healthcare information is stored, accessed, and managed.

This repository contains the backend/server code for the Health Card project, which aims to provide a comprehensive health record management system.

## Setup

To get started with the backend, make sure you have Node.js installed on your system. Then, follow these steps:

1. Clone this repository to your local machine.
2. Navigate to the project directory in your terminal.
3. Run `npm install` to install all the dependencies.
4. Create a `.env` file in the root directory of the project with the following format:

MONGO_URL = <Your MongoDB connection URL>
PORT = <Port number for the server>
JWT_SECRET_KEY = <Your JWT secret key>
AUTH_EMAIL = <Your email for authentication>
AUTH_PASS = <Your password for authentication>


Make sure to replace the placeholders `<...>` with your actual values.

5. Once the `.env` file is set up, you can start the server by running `npm start`.

## Repositories

- [User's Portal Repo](link_to_user_portal_repo): This repository contains the frontend code for the user portal.
- [Organisation's Portal Repo](link_to_org_portal_repo): This repository contains the frontend code for the health organization portal.

## Contributing

We welcome contributions from the community! If you encounter any bugs, have suggestions for improvements, or would like to add new features, feel free to open an issue or submit a pull request.

## License

This project is licensed under the [MIT License](LICENSE).
