# React Tic Tac Toe Game with Firebase Deployment

This is just a simple lil' Tic Tac Toe game built using React and which is configured to be deployed and hosted to a Firebase web project.

You can find the deployed app live here: https://tictactoe-76767.web.app/

# Build & Deploy

To build the web app and deploy it to Firebase, open a command line, navigate to the app's root directory, and then follow the instructions below.

## Prerequisites

- Firebase Tools installed via `npm install -g firebase-tools`
- Authenticated with Firebase via `firebase login`

## Building the App for Production & Deploying to Firebase Using the Existing Configuration Settings

Run the following commands from the app's root directory:
`npm run build`
`firebase deploy`

## Changing the Firebase Hosting Configuration

To change where the Firebase app will be deployed and hosted, use one of the following approaches:

### Method #1: Reinitialize Firebase from Scratch

1. Run `firebase init` in the app's root directory
2. Follow the rest of the instructions here: https://medium.com/geekculture/deploy-react-app-to-firebase-43c9651c2417

### Method #2: Edit the Current Settings

1. Edit the [Firebase config settings](./src/firebaseConfig.tsx)
2. Edit the [Firebase project name](.firebaserc)