# Employee Manager Application

A full-stack employee management system built with Spring Boot and Angular.

## 📋 Overview

This application provides a complete CRUD (Create, Read, Update, Delete) interface for managing employee records. The system features a RESTful API backend powered by Spring Boot and a modern, responsive frontend built with Angular.

## 🏗️ Architecture

- **Backend**: Spring Boot 4.0.1 with Java 21
- **Frontend**: Angular 21
- **Database**: MySQL
- **ORM**: Spring Data JPA with Hibernate

## 📁 Project Structure

```
.
├── backend/          # Spring Boot REST API
│   ├── src/
│   │   ├── main/
│   │   │   ├── java/
│   │   │   └── resources/
│   │   └── test/
│   └── pom.xml
└── frontend/         # Angular application
    ├── src/
    ├── package.json
    └── angular.json
```

## 🚀 Getting Started

### Prerequisites

- **Java 21** or higher
- **Node.js** (npm 11.6.2 or higher)
- **MySQL** (8.0 or higher)
- **Maven** (included via Maven Wrapper)

### Database Setup

1. Create a MySQL database:
```sql
CREATE DATABASE employeedb;
```

2. Update database credentials in `backend/src/main/resources/application.properties`:
```properties
spring.datasource.url=jdbc:mysql://localhost:3306/employeedb
spring.datasource.username=your_username
spring.datasource.password=your_password
```

### Backend Setup

1. Navigate to the backend directory:
```bash
cd backend
```

2. Run the Spring Boot application:
```bash
./mvnw spring-boot:run
```

The backend API will start at `http://localhost:8080`

### Frontend Setup

1. Navigate to the frontend directory:
```bash
cd frontend
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm start
```

The frontend application will start at `http://localhost:4200`

## 🔌 API Endpoints

The backend exposes the following REST endpoints:

- `GET /employee/all` - Get all employees
- `GET /employee/find/{id}` - Get employee by ID
- `POST /employee/add` - Add new employee
- `PUT /employee/update` - Update existing employee
- `DELETE /employee/delete/{id}` - Delete employee

## 💾 Employee Model

Each employee record contains:
- **id**: Unique identifier
- **name**: Employee name
- **email**: Employee email address
- **jobTitle**: Job position
- **phone**: Contact number
- **imageUrl**: Profile image URL
- **employeeCode**: Unique employee code

## 🛠️ Technologies

### Backend
- Spring Boot 4.0.1
- Spring Data JPA
- Spring Web MVC
- MySQL Connector
- Hibernate

### Frontend
- Angular 21
- TypeScript 5.9
- RxJS 7.8
- Angular SSR (Server-Side Rendering)
- Express 5.1

## 📝 Available Scripts

### Backend
```bash
./mvnw spring-boot:run    # Run the application
./mvnw test               # Run tests
./mvnw clean package      # Build the application
```

### Frontend
```bash
npm start                 # Start development server
npm run build            # Build for production
npm test                 # Run tests
npm run watch            # Build in watch mode
```

## 🔧 Configuration

### Backend Configuration
Edit `backend/src/main/resources/application.properties`:
- Database connection settings
- Server port (default: 8080)
- JPA/Hibernate settings

### Frontend Configuration
Edit `frontend/src/environments/environment.ts`:
- API endpoint URL
- Environment-specific settings

## 📦 Building for Production

### Backend
```bash
cd backend
./mvnw clean package
```
The JAR file will be created in `backend/target/`

### Frontend
```bash
cd frontend
npm run build
```
The production build will be created in `frontend/dist/`



