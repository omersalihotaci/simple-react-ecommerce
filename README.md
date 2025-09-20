
# React E-Commerce App

A simple e-commerce application built with **React**, **TypeScript**, **Redux**, **React Router**, **Material-UI (MUI)**, **Formik**, **Yup**, and **Axios**.  
This project was created to **reinforce what I learned while learning React** and to practice modern frontend development patterns including state management, routing, form validation, and async API calls.

----------------------------------------------------------------------------------------------------------------------------------------------------

##  Features

1. **Authentication & Protected Routes**
   - Login page with **Formik** + **Yup** validation.  
   - Registration page for new users.  
   - Protected routes prevent unauthenticated users from accessing restricted pages like Home.

2. **Home Page**
   - Product listing with search input and category filters.  
   - Navigate to product details.  

3. **Shopping Cart**
   - Add products to the cart.  
   - Sidebar displays cart items and total price.  
   - Remove items or clear cart.  

4. **User Account**
   - Logout functionality to exit the account.  

----------------------------------------------------------------------------------------------------------------------------------------------------

##  Tech Stack

- **React** with **TypeScript**  
- **Redux Toolkit** for state management  
- **React Router** for navigation  
- **Formik & Yup** for form handling and validation  
- **Material-UI (MUI)** for UI components  
- **Axios** for async API requests  
- **JSON Server** for local mock backend (`localhost:5000`)  

----------------------------------------------------------------------------------------------------------------------------------------------------

##  Installation

### 1- Clone the repository:
git clone https://github.com/omersalihotaci/simple-react-ecommerce.git
### 2- Navigate to the project folder:
cd simple-react-ecommerce
### 3- Install dependencies:
npm install
### 4-Start the JSON server (to handle users):
json-server --watch .\src\jsonserver\db.json --port 5000
### 5-Start
npm run dev