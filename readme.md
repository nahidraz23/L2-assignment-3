# 📚 Library Management API

A **Library Management System backend** built with **Express, TypeScript, and MongoDB (Mongoose)**.  
This API supports managing books, borrowing, returning, and tracking borrowed books, with proper validation and business logic.

## 🔹 Features

- **Book Management**
  - Create, read, update, and delete books
  - Fields: `title`, `author`, `genre`, `isbn`, `description`, `copies`, `available`
  - Filtering, sorting, and pagination support for listing books

- **Borrowing System**
  - Borrow books with quantity control
  - Automatic availability updates
  - Return books and update inventory
  - Summary of borrowed books using aggregation pipeline

- **Validation & Business Logic**
  - Mongoose schema validation
  - Middleware for pre/post-save operations
  - Instance/static methods for book availability

- **Tech Stack**
  - Node.js, Express.js
  - TypeScript
  - MongoDB & Mongoose
  - dotenv for environment variables

## 📂 Folder Structure

```

book-borrowing-system/
│── src/
│   ├── config/
│   │   └── db.ts
│   ├── models/
│   │   ├── Book.ts
│   │   └── Borrow\.ts
│   ├── controllers/
│   │   ├── bookController.ts
│   │   └── borrowController.ts
│   ├── routes/
│   │   ├── bookRoutes.ts
│   │   └── borrowRoutes.ts
│   ├── app.ts
│   └── server.ts
│── package.json
│── tsconfig.json
│── .env

````

## ⚡ API Endpoints

### 📚 Books

- **Get all books**  
  `GET /api/books`  
  Query params:  
  - `filter` → genre filter (optional)  
  - `sortBy` → field to sort by (optional)  
  - `sort` → asc/desc (default: asc)  
  - `limit` → number of results (default: 10)  

- **Get a book by ID**  
  `GET /api/books/:id`  

- **Create a new book**  
  `POST /api/books`  
  ```json
  {
    "title": "The Theory of Everything",
    "author": "Stephen Hawking",
    "genre": "SCIENCE",
    "isbn": "9780553380163",
    "description": "An overview of cosmology and black holes.",
    "copies": 5,
    "available": true
  }
````

* **Update a book**
  `PUT /api/books/:id`

  ```json
  {
    "copies": 50
  }
  ```

* **Delete a book**
  `DELETE /api/books/:id`

### 📖 Borrowing

* **Borrow a book**
  `POST /api/borrows`

  ```json
  {
    "bookId": "64ab3f9e2a4b5c6d7e8f9012",
    "memberId": "64bc4a0f9e1c2d3f4b5a6789"
  }
  ```

* **Return a book**
  `PUT /api/borrows/:id/return`

* **Borrowed books summary**
  `GET /api/borrows/summary`

## ⚙️ Setup & Installation

1. **Clone the repository**

```bash
git clone https://github.com/<your-username>/library-management-api.git
cd library-management-api
```

2. **Install dependencies**

```bash
npm install
```

3. **Create a `.env` file**

```env
PORT=5000
MONGO_URI=mongodb://localhost:27017/library
```

4. **Start the server (development)**

```bash
npm run dev
```

5. **Start the server (production)**

```bash
npm run build
npm start
```

6. **Test API**
   Use Postman or any API client to test endpoints at:

```
http://localhost:5000/api/books
http://localhost:5000/api/borrows
```

## 🛠 Scripts

```json
"scripts": {
  "dev": "ts-node-dev src/server.ts",
  "build": "tsc",
  "start": "node dist/server.js"
}
```

## 🔗 Dependencies

* express
* mongoose
* dotenv
* typescript
* ts-node-dev
* @types/express
* @types/node

## 📌 Notes

* Ensure MongoDB is running locally or use a cloud URI.
* All validations are done via **Mongoose schemas**.
* API strictly follows the **assignment requirements**.

## 📌 License

This project is **for educational purposes**.

