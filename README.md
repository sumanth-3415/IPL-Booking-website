# IPL Ticket Booking System
# This is not the original application it is Demo application.
## Overview

The IPL Ticket Booking System is a full-stack web application developed to simplify the process of booking tickets for IPL cricket matches. The system allows users to register, log in, view available matches, select seats, make bookings, and generate tickets through an interactive and user-friendly interface.

This project demonstrates the integration of frontend technologies with backend services and database management using modern web development tools.

---

## Features

### User Authentication

* User Registration
* User Login
* Secure Session Management
* Logout Functionality

### Match Dashboard

* View available IPL matches
* Match details including teams and stadium information
* Interactive user dashboard

### Seat Booking

* Dynamic seat selection
* Multiple seat categories:

  * VIP
  * Premium
  * Normal
* Real-time seat selection interface

### Ticket Management

* Ticket Preview
* Booking Confirmation
* Booking History

### Database Integration

* User data storage
* Booking information storage
* MongoDB database connectivity

---

## Technology Stack

### Frontend

* HTML5
* CSS3
* JavaScript

### Backend

* Node.js
* Express.js

### Database

* MongoDB
* MongoDB Compass
* MongoDB Atlas

### Development Tools

* Visual Studio Code
* Git
* GitHub
* Render
* Vercel

---

## Project Structure

IPL Booking

├── Frontend

│ ├── index.html

│ ├── register.html

│ ├── login.html

│ ├── dashboard.html

│ ├── seats.html

│ ├── payment.html

│ └── ticket.html

│

├── Backend

│ ├── Models

│ │ ├── User.js

│ │ └── Booking.js

│ │

│ ├── Routes

│ │ ├── userRoutes.js

│ │ └── bookingRoutes.js

│ │

│ ├── server.js

│ ├── package.json

│ └── .env

---

## Installation

### Clone Repository

git clone https://github.com/sumanth-3415/IPL-Booking-website.git

### Install Dependencies

cd Backend

npm install

### Configure Environment Variables

Create a .env file:

MONGO_URI=your_mongodb_connection_string

PORT=5000

### Run Backend

node server.js

### Run Frontend

Open index.html using Live Server.

---

## Future Enhancements

* Online Payment Gateway Integration
* QR Code Based Tickets
* Email Notifications
* Admin Dashboard
* Live Match Updates
* Ticket PDF Download
* Mobile Application Support

---

## Learning Outcomes

* Full Stack Web Development
* REST API Development
* Database Design and Management
* Authentication and Authorization
* Git and GitHub Version Control
* Cloud Deployment using Render and Vercel

---

## Author

Sumanth Lingari


---

## License

This project is developed for educational and academic purposes.

