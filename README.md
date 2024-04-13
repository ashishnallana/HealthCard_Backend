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

```dotenv
MONGO_URL = <Your MongoDB connection URL>
PORT = <Port number for the server>
JWT_SECRET_KEY = <Your JWT secret key>
AUTH_EMAIL = <Your email for authentication>
AUTH_PASS = <Your password for authentication>
```
## NodeMailer Setup

To send emails programmatically using your Gmail account, you'll need to generate an "App Password" from your Google Account settings. Follow these steps:

1. **Sign In:** Sign in to the Google Account associated with the Gmail address you want to use for sending emails programmatically.

2. **Security:** In the left sidebar, click on "Security."

3. **Two-step Verification:** Scroll down to "How you sign in to Google" and click on "2-step verification." If you haven't set up 2-step verification, you'll need to do so before proceeding.

4. **App Passwords:** After setting up 2-step verification, scroll down to "App passwords" and click on it. You may be prompted to re-enter your password for security purposes.

5. **App Name:** Enter a custom name for this App Password. It helps you identify it later, so choose something related to the application or use case where you plan to use this App Password.

6. **Create:** Click the "Create" button. Google will create a unique 16-character App Password for your custom application/device.

Once you have generated the App Password, you can use it as the `AUTH_PASS` value in your `.env` file along with your Gmail email address as `AUTH_EMAIL`. Make sure to keep this App Password secure and avoid sharing it publicly.


Make sure to replace the placeholders `<...>` with your actual values.

5. Once the `.env` file is set up, you can start the server by running `npm start`.

## Repositories

- [User's Portal Repo](https://github.com/ashishnallana/HealthCard_Frontend): This repository contains the frontend code for the user portal.
- [Organisation's Portal Repo](https://github.com/ashishnallana/HealthCard_Frontend_Org): This repository contains the frontend code for the health organization portal.

## Contributing

We welcome contributions from the community! If you encounter any bugs, have suggestions for improvements, or would like to add new features, feel free to open an issue or submit a pull request.


