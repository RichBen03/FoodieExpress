# 🍕 FoodieExpress - A Zomato Clone (MERN Stack)

Welcome to **FoodieExpress**, a full-stack food delivery web application inspired by Zomato. Users can explore restaurants, view menus, place orders, and checkout using Stripe—all in one responsive, mobile-friendly platform.

---

## 📌 0. Project Goals

- Recreate a functional and aesthetically pleasing food delivery app.
- Implement user authentication, dynamic filtering, and cart/checkout experience.
- Provide admin-level functionality like restaurant and menu management.
- Ensure secure, modular backend API architecture.
- Practice scalable, production-ready full-stack app design.

---

## 📁 1. Project Structure

```
FoodieExpress/
├── client/               # React frontend
│   ├── components/       # UI components
│   ├── pages/            # Pages like Home, Cart, Login, etc.
│   ├── context/          # Cart context
│   └── App.jsx
├── server/               # Node.js backend
│   ├── models/           # MongoDB Mongoose schemas
│   ├── routes/           # API routes
│   ├── controllers/      # Business logic
│   └── index.js
└── README.md
```

---

## ⚙️ 2. Tech Stack and Purpose

| Tech / Library    | Purpose |
|-------------------|---------|
| **React.js**      | Frontend UI and routing |
| **Bootstrap**     | Styling and layout |
| **Node.js + Express** | Backend API and server logic |
| **MongoDB + Mongoose** | Database and schema modeling |
| **JWT**           | Authentication and authorization |
| **Stripe**        | Payment processing |
| **Nodemon**       | Dev server reloading |
| **Helmet + Rate Limit + MongoSanitize** | API security |

---

## 🚀 3. Features of the App

- ✅ User Sign Up / Login with JWT
- ✅ Browse restaurants and filter by location, cuisine, cost, rating
- ✅ View detailed menus with dish images and descriptions
- ✅ Add to cart, view cart summary
- ✅ Stripe Checkout integration
- ✅ Admin: Add restaurants and menu items
- ✅ Responsive for mobile and desktop

---

## 👨‍💻 4. Roles Played

This project was fully developed by me, covering:

- 🔧 Backend API design and database modeling
- 🎨 Frontend design and integration
- 🧪 Testing and debugging
- 🛡️ Security middleware
- 💳 Stripe payment integration

---

## 🧱 5. Feature Design

| Feature | Description |
|--------|-------------|
| **Search + Filters** | Filter restaurants by cuisine, cost, rating, and location |
| **Cart System** | Add to cart with quantities, remove and clear |
| **Restaurant Pages** | Menu items rendered based on selected restaurant |
| **Authentication** | Role-based JWT login for secure endpoints |
| **Checkout Flow** | Cart summary → Stripe checkout → Success page |

---

## 🧩 6. Feature Breakdown

### 🔐 Authentication
- `/api/auth/signup`
- `/api/auth/login`
- JWT token storage in `localStorage`

### 🍽️ Restaurants & Menus
- `/api/restaurants` - Fetch all restaurants
- `/api/menus/:restaurantId` - Fetch dishes per restaurant

### 🛒 Orders & Payments
- `/api/orders` - Protected route to place order
- `/api/orders/create-checkout-session` - Stripe checkout session

---

## 🔐 7. API Security

- `helmet` – Secures headers
- `express-rate-limit` – Limits repeated API calls
- `express-mongo-sanitize` – Prevents NoSQL injections
- `JWT Auth Middleware` – Restricts sensitive routes to logged-in users

---

## 🧰 8. Getting Started with the Project

### Prerequisites
- Node.js
- MongoDB (installed or use MongoDB Atlas)
- Stripe account

### Setup

1. **Clone the repo**
```bash
git clone https://github.com/your-username/foodieexpress.git
cd foodieexpress
```

2. **Server Setup**
```bash
cd server
npm install
create a `.env` file with:
  MONGO_URI=your_mongodb_uri
  JWT_SECRET=your_jwt_secret
  STRIPE_SECRET=your_stripe_secret
npm run dev
```

3. **Client Setup**
```bash
cd client
npm install
npm start
```

---

## 🔄 9. Areas for Improvement

- ✅ Add Admin Dashboard for managing orders and menus
- ✅ Store orders in Stripe webhook securely
- 🕵️‍♀️ Implement user order history and tracking
- 📦 Add delivery address and real-time status updates
- ✉️ Add email confirmation on successful orders
- 📱 Native mobile app version using React Native

---

## 🏁 Final Notes

This project demonstrates a complete MERN stack implementation, focused on usability, performance, and clean code practices. Feel free to fork, contribute, or deploy your own version!
