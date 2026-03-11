# JOBSPHERE - Job Search Platform

JOBSPHERE is a modern, responsive web application for job seekers to find and manage employment opportunities. Built with a sleek, user-friendly interface, it allows users to search for jobs based on various criteria, view detailed job descriptions, manage saved jobs, and access specialized portals for authentication.

## ✨ Features

### 1. **Job Search & Filtering**
- **Dynamic Search Bar:** Search for jobs by keywords, title, or company.
- **Location-Based Search:** Filter job listings based on specific geographical locations.
- **Comprehensive Filters:** A left-hand sidebar enables users to refine their search by:
  - **Date Posted:** Find the most recent opportunities.
  - **Job Type:** Filter by Full-time, Part-time, Internship, Contract, or Volunteer.
  - **Experience Level:** Choose from Entry Level, Intermediate, or Senior Level.
  - **Salary Range:** A dynamic salary slider to find roles within an expected compensation bracket.

### 2. **Job Listings & Detailed Views**
- **Job Cards:** Clean, informative cards displaying key job details including company logo, title, location, salary, and experience required.
- **Bookmarks:** Users can save/bookmark jobs straight from the job listing.
- **Job Details Page:** Clicking a job card opens a dedicated `JobDetail` view, offering in-depth information about the role and an application action button.

### 3. **My Saved Jobs**
- A dedicated right-hand sidebar to quickly access jobs the user has bookmarked.
- Users can toggle bookmarks seamlessly across the platform; changes reflect instantly in the "Saved Jobs" view.

### 4. **Modern Authentication Interface**
- **Login Portal:** A well-designed left-and-right split screen interface with a feature illustration (`rafiki.png`).
- **Sign Up Portal:** An intuitive account creation form with a corresponding sign-up illustration (`cuate.png`).
- **Social Connectors:** Both forms support Single Sign-On (SSO) placeholders via Google, Apple, Facebook, and LinkedIn integrations.
- **Brand Consistency:** Features the official `JOBSPHERE` visual logo consistently across all navigation segments.

---

## 🛠 Tech Stack

- **Framework:** [React](https://react.dev/) + [Vite](https://vitejs.dev/)
- **Styling:** [Tailwind CSS](https://tailwindcss.com/)
- **Icons:** [Lucide React](https://lucide.dev/)
- **State Management:** React `useState` for handling UI states (views, authentication transitions, filtering).

---

## 📁 Project Structure

```text
src/
├── components/          # Reusable UI components
│   ├── JobCard.jsx      # Component for individual job listings
│   ├── JobDetail.jsx    # Expanded view for job descriptions
│   ├── Login.jsx        # Login page UI overlay
│   └── SignUp.jsx       # Registration page UI overlay
├── Images/              # Core image assets
│   ├── Logo.png         # Main JOBSPHERE visual logo
│   ├── cuate.png        # Sign-up illustrative graphic
│   └── rafiki.png       # Login illustrative graphic
├── App.jsx              # Main application entry point and state manager
├── main.jsx             # React Virtual DOM rendering logic
└── index.css            # Global Tailwind CSS imports
```

---

## 🚀 How to Run the Application

If you are demoing the platform or presenting it, follow these steps to run it locally on your machine.

**Prerequisites:** 
- Make sure [Node.js](https://nodejs.org/en) is installed on your computer.

1. **Open the project directory in your terminal:**
   ```bash
   cd c:\Users\Je--rry\Downloads\Jobsearch
   ```

2. **Install the required dependencies:**
   ```bash
   npm install
   ```

3. **Start the development server:**
   ```bash
   npm run dev
   ```

4. **View the application:**
   - Open your web browser and navigate to the local server address provided in the terminal (usually `http://localhost:5173`).

---

## Screenshots

<img width="1731" height="1796" alt="image" src="https://github.com/user-attachments/assets/d656101e-e7b3-41aa-a72b-4c61c86f63ae" />

<img width="1731" height="914" alt="image" src="https://github.com/user-attachments/assets/fb04754f-570e-4904-9778-b6a62cac6882" />

<img width="1731" height="1052" alt="image" src="https://github.com/user-attachments/assets/c16e526f-7d72-468d-81d9-f775ca24400b" />

<img width="466" height="830" alt="image" src="https://github.com/user-attachments/assets/801bb906-0a77-4ae9-a81d-3f395c566896" />


