# pantryTracker
Inventory Management App

This project builds an Inventory Management App using  web technologies. The app will enable users to add items to their inventory, monitor quantities, and remove items when they’re sold or used. We’ll leverage Next.js as our React framework, Material-UI for creating a sleek and responsive user interface, and Firebase Firestore as our backend database. This powerful combination of technologies will allow us to develop a real-time web application that’s both scalable and user-friendly.

Table of Contents
Features
Technologies
Setup
Usage
Future Improvements
Deployment
Features
Add, update, and delete items in the inventory
Monitor quantities of inventory items
Real-time updates using Firebase Firestore
Responsive user interface with Material-UI
Basic user authentication (optional)
Technologies
Frontend: Next.js, React, Material-UI
Backend: Firebase Firestore
Deployment: Vercel
Setup
Prerequisites
Node.js and npm installed. You can download and install them from the official Node.js website.
Installation
Clone the repository:


git clone https://github.com/oreBajela/pantryTracker.git
cd inventory-management-app
Install the dependencies:


npm install
Set up Firebase:

Go to the Firebase Console and create a new project.
Add a web app to your Firebase project and copy the Firebase configuration object.
Create a firebase.js file in the root directory of your project and add the Firebase configuration:

import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_PROJECT_ID.firebaseapp.com",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_PROJECT_ID.appspot.com",
  messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
  appId: "YOUR_APP_ID"
};

const app = initializeApp(firebaseConfig);
const firestore = getFirestore(app);

export { firestore };
Start the development server:

bash
Copy code
npm run dev
Open your browser and navigate to http://localhost:3000.

Usage
Adding Items
Click the "Add New Item" button.
Enter the item name in the modal that appears.
Click "Add" to add the item to the inventory.
Removing Items
Click the "Remove" button next to the item you want to remove.
The item will be removed from the inventory.
Future Improvements
User Authentication: Implement user authentication to allow multiple users to have their own inventories using Firebase Authentication.
Item Categories: Add the ability to categorize items.
Search and Filter: Implement a search bar and filtering options.
Pagination: Implement pagination or infinite scrolling for large inventories.
Item Details: Add the ability to view and edit more details about each item.
Data Export: Allow users to export their inventory data.
Responsive Design: Improve the app’s responsiveness for mobile devices.
