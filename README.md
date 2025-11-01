# Allora-Shop

![HTML5](https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)
![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
![Next JS](https://img.shields.io/badge/Next-black?style=for-the-badge&logo=next.js&logoColor=white)
![TailwindCSS](https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white)
![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white)
![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white)

---

**Allora-Shop** is a modern, production-ready online shop starter built with **Next.js 14** and **React 18**. It's designed to be fast, accessible, and easy to extend.

> 💡 This is my **first project** built with modern technologies such as React, Next.js, and Tailwind CSS. The UI design is based on **free Figma demo templates** that I customized for this project. It’s both a learning journey and a foundation for my future web development projects.

---

## ✅ Highlights

- Clean and responsive UI with **Tailwind CSS**
- Product & category management
- Shopping cart, checkout flow (sample implementation)
- Authentication (JWT + bcrypt)
- Maps using **React-Leaflet**
- Charts with **Recharts**
- Components & interactions: Swiper, AOS, React Select
- Notifications using SweetAlert
- TypeScript-ready structure (optional)

---

## 🧰 Tech stack

**Frontend:** React 18, Next.js 14, Tailwind CSS, Swiper, AOS, React-Leaflet, React Select

**Backend & DB:** Node.js, Express, MongoDB, Mongoose (also `json-server` for local sample data)

**Libraries & Tools:** Axios, bcryptjs, jsonwebtoken, react-icons, sweetalert, react-timer-hook

**Dev:** TypeScript, ESLint, PostCSS, Autoprefixer

---

## ⚙️ Prerequisites

- Node.js **v18+** (recommended)
- npm **v9+** (or yarn)
- MongoDB instance (local or hosted) if you want persistent backend data

---

## 🚀 Quick start

1. Clone the repo:

```bash
git clone https://github.com/username/allora-shop.git
cd allora-shop
```

2. Install dependencies:

```bash
npm install
# or
# yarn
```

3. Create a `.env` in the project root and add the variables below (example):

```env
MONGO_URI=mongodb+srv://<user>:<password>@cluster0.mongodb.net/allora
JWTSECRET=your_jwt_secret_here
NEXT_PUBLIC_API_URL=http://localhost:3000/api
```

4. Start the development server:

```bash
npm run dev
```

Open your browser at `http://localhost:3000`.

---

## 🛠 NPM scripts

| Command         | Description                         |
| --------------- | ----------------------------------- |
| `npm run dev`   | Run the project in development mode |
| `npm run build` | Build the production version        |
| `npm run start` | Run the production version          |
| `npm run lint`  | Run ESLint checks                   |

---

## 🔒 Authentication

This project includes an example authentication flow using **bcryptjs** for password hashing and **jsonwebtoken** for issuing JWTs. For production, make sure to:

- Use a strong `JWTSECRET` stored in environment variables
- Serve traffic over HTTPS
- Implement refresh tokens / token revocation as needed

---

## 🤝 Contributing

Contributions are welcome! Suggested workflow:

1. Fork the repository
2. Create a feature branch: `git checkout -b feat/your-feature`
3. Commit your changes and push
4. Open a Pull Request with a clear description and screenshots if relevant

Please follow the existing code style and run linting/tests before submitting.

---

## 📄 License

This project is licensed under the **MIT License**. See the `LICENSE` file for details.

---

## 🙏 Acknowledgements

Thanks to the open-source community and tools used in this project. Some guidance and troubleshooting were supported by ChatGPT.

> 🧠 Tip: Using free Figma demo templates helped structure the design and accelerate the development process. It’s a great way to learn how to translate designs into reusable React components.

---

## 📬 Contact

If you have any questions or need help with integrating new features, feel free to open an issue or reach out directly via the links below:

📧 **Email:** (mohammadr.momeneh@gmail.com)
💻 **GitHub:** [https://github.com/momeneh2001/alloraShop](https://github.com/momeneh2001/alloraShop)
🔗 **LinkedIn:** [https://www.linkedin.com/in/mohammadreza-momeneh-b67821363/](https://www.linkedin.com/in/mohammadreza-momeneh-b67821363/)

---

_Last updated: 2025-10-31_
