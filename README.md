
# Leas Beauty

Leas Beauty is a Full-stack web application that allows customers to easily book appointments with hairstylists and beauty professionals. The app streamlines the reservation process by enabling users to browse available time slots, select services, and manage bookings with ease.

**Link to project:** [Leas Beauty Live Demo](https://github.com/DavidSokoya/leasbeauty)

\
*Alt tag: Leas Beauty appointment booking platform homepage*

---

## How It's Made

**Tech used:**

- HTML
- CSS
- JavaScript
- Node.js
- Express.js
- MongoDB
- TailwindCSS

### Development Process

Leas Beauty was built using the **MERN stack** (MongoDB, Express.js, React, Node.js) to ensure a responsive, fast, and scalable application. The backend handles admin authentication, appointment scheduling, and database management, while the frontend provides a clean, intuitive interface for seamless user interaction.

Key features implemented:

- Admin authentication and secure login
- Appointment scheduling and management
- Mobile-responsive design with Tailwind CSS
- RESTful API integration for smooth frontend-backend communication

---

## How It Works

Follow these steps to set up the project locally:

### 1. Clone the repository

```bash
git clone https://github.com/DavidSokoya/leasbeauty.git
cd leasbeauty
```

### 2. Set up the backend

```bash
cd backend
npm install
```

- Create a `.env` file in the `backend` folder and add the following:

  ```plaintext
  MONGO_URI=your_mongodb_connection_string
  JWT_SECRET=your_jwt_secret_key
  PORT=5000
  ```

- Start the backend server:

  ```bash
  npm start
  ```

### 3. Set up the frontend

```bash
cd ../frontend
npm install
npm start
```

The app should now be running at `http://localhost:3000`. The backend will run on `http://localhost:5000`.

---
### 4. Create an account

**Create a user with email and password and change the role to "ADMIN" from the database** 


## Optimizations (Planned)

- **Performance Improvements:** Refactor API calls to minimize load times and improve responsiveness.
- **Database Optimization:** Implement indexing on MongoDB collections for faster query execution.
- **UI Enhancements:** Introduce image lazy loading and compression for faster rendering.
- **Deployment Optimization:** Implement CI/CD pipelines for streamlined deployment and updates.

---

## Lessons Learned

While building Leas Beauty, I gained deeper insights into:

- Managing state efficiently in React applications.
- Implementing secure user authentication using JWT and bcrypt.
- Structuring RESTful APIs for scalability.
- Enhancing user experience with responsive UI design.
- The importance of writing clean, maintainable code, and using best practices for performance optimization.

This project reinforced my passion for building user-centric applications and sharpened my full-stack development skills.

---

## Examples of Other Projects

- **Digital Amazonite:** [GitHub Repository](https://github.com/davidsokoya/amazonite)
- **Enikin Homes:** [GitHub Repository](https://github.com/davidsokoya/enikinestate)
- **My Portfolio Website:** [GitHub Repository](https://github.com/davidsokoya/portfolio)
