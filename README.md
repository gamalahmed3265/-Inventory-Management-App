# MERN Inventory Management App

A comprehensive full-stack Inventory Management Application built using the MERN stack (MongoDB, Express, React, Node.js). This application provides a robust solution for tracking products, managing stock levels, and handling user authentication, including secure password resets.

## Features

- **User Authentication**: Secure Login, Registration, Password Reset, and Password Change features using JWT cookies.
- **Product Management**: Ability to Create, Read, Update, and Delete (CRUD) products.
- **Dashboard & Analytics**: Monitor total store value, out-of-stock items, and categorize products on a summary dashboard.
- **Image Uploads**: Cloudinary integration for handling product and user profile images.
- **Email Notifications**: Nodemailer integration to send automated emails for password resets to users.
- **Responsive UI**: A modern front-end designed using React, Redux Toolkit, and Sass.
- **Secure API**: Backend endpoints protected by JWT authentication middleware.

## Technology Stack

### Frontend

- **React**: Component-based UI.
- **Redux Toolkit**: State management for user authentication and product data.
- **React Router Dom**: Dynamic client-side routing.
- **Axios**: HTTP requests to the backend API.
- **Sass**: Custom styling and UI design.
- **React Toastify**: In-app notifications.

### Backend

- **Node.js & Express**: Server runtime and API framework.
- **MongoDB & Mongoose**: NoSQL Database and object modeling.
- **JWT (JSON Web Tokens)**: Secure HTTP-only cookies for authentication.
- **Bcrypt.js**: Password hashing and encryption.
- **Cloudinary**: Cloud storage for media files.
- **Nodemailer**: For sending password reset emails.

## Application Screenshots

Here are previews of the application in action:

- **Login Screen**: `screen/screencapture-localhost-3000-login-2026-03-06-21_41_20.png`
- **Registration**: `screen/screencapture-localhost-3000-register-2026-03-06-21_40_22.png`
- **Dashboard Overview**: `screen/screencapture-localhost-3000-dashboard-2026-03-06-21_42_31.png`
- **Add Product**: `screen/screencapture-localhost-3000-add-product-2026-03-06-21_43_23.png`
- **Profile View**: `screen/screencapture-localhost-3000-profile-2026-03-06-21_42_59.png`
- **Edit Profile**: `screen/screencapture-localhost-3000-edit-profile-2026-03-06-21_43_10.png`

## Getting Started

### Prerequisites

You need Node.js and MongoDB installed on your local machine.

### Installation & Setup

1. **Clone the repository**
   \`\`\`bash
   git clone <repository_url>
   cd -Inventory-Management-App
   \`\`\`

2. **Backend Setup**
   \`\`\`bash
   cd backend
   npm install
   \`\`\`
   - Create a `.env` file in the `backend` directory with the following variables:
     \`\`\`env
     PORT=5000
     MONGO_URI=mongodb://localhost:27017/InventoryManagementSystem
     JWT_SECRET=your_jwt_secret
     FRONTEND_URL=http://localhost:3000
     EMAIL_USER=your_email@gmail.com
     EMAIL_PASS=your_email_password
     \`\`\`
   - Start the backend server:
     \`\`\`bash
     npm start
     \`\`\`
     _(Or `npm run backend` to use Nodemon)._

3. **Frontend Setup**
   \`\`\`bash
   cd ../frontend
   npm install
   \`\`\`
   - Create a `.env` file in the `frontend` directory with the following variable:
     \`\`\`env
     REACT_APP_BACKEND_URL=http://localhost:5000
     \`\`\`
   - Start the React development server:
     \`\`\`bash
     npm start
     \`\`\`

4. **Access the application**
   Open your browser and navigate to `http://localhost:3000`.
