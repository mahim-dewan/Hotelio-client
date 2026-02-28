# Hotelio (Client) 🏨

The Hotelio Frontend is built with Next.js to deliver a fast, scalable, and modern user experience for hotel booking and management. It focuses on performance, clean UI architecture, secure authentication flow, and seamless integration with the backend API.

## 🚀 Purpose
#### The frontend is designed to:

- Provide a responsive and modern hotel booking experience

- Ensure secure user authentication and authorization handling

- Maintain scalable and maintainable UI architecture

- Deliver optimized performance using Next.js features

## 🖇️ Quick Links

[Live Link](https://hotel-hotelio.vercel.app/)  
[Backend Repository](https://github.com/mahim-dewan/Hotelio-server)

## ✨ Features

- Fully responsive UI (Mobile, Tablet, Laptop)

- SEO-friendly metadata (Open Graph & Twitter cards)

- Authentication flow with local stratigy, google and facebook sign in
  - Registration with OTP verification

  - Secure login system

  - Forgot & reset password flow

  - JWT-based authentication handling

   - Protected routes for authorized users

## 🧑‍💻 Tech Stack

- **Next.js** (App Router) for server-side rendering and routing

- **Tailwind CSS** for utility-first styling

- **React Hook Form + Zod** for forms and validation

- **React Context API** for managing global state

- **Axios** for API interactions

## 📂 Project Structure

```
Hotelio-client/
├── public/
│
├── src/
│   ├── app/
│   │   ├── (pages)
│   │   ├── favicon.ico
│   │   ├── globals.css
│   │   ├── layout.js
│   │   └── page.js
│   │
│   ├── components/
│   ├── contexts/
│   ├── hooks/
│   ├── lib/
│   ├── reducers/
│   ├── schemas/
│   └── utils/
│
├── .env
│
├── .gitIgnore
│
├── eslint.config.mjs
│
├── jsconfig.json
│
├── next.config.mjs
│
├── package.json
│
├── postcss.config.mjs
│
└── README.md
```

## ⚙️ Installation

```bash
1. git clone https://github.com/mahim-dewan/Hotelio-client.git
2. cd Hotelio-client
3. npm install
```

#### Environment Variables

Create a .env.local file in the client root:

```bash
NEXT_PUBLIC_SITE_URL="http://localhost:3000/"
NEXT_PUBLIC_BASE_API="http://localhost:5000/api"
```

#### Run the Development Server

```bash
npm run dev
```

#### Run the Production Server

```bash
1. npm run build

2. npm run start
```
## 🧠 What I Learned

- Structuring scalable Next.js applications

- Implementing secure authentication flows

- Managing complex UI state efficiently

- Designing reusable and maintainable components

- Following real-world frontend best practices

## 🤝 Contribution

Contributions, feedback, and suggestions are welcome. Feel free to open an issue or submit a pull request.
## 📌 Author

Mahim Dewan  
MERN Stack Developer | Next.js Enthusiast

### 🛜 Connect With Me

[**Portfolio↗️**](https://mahim-dewan.vercel.app/) 
[**GitHub↗️**](https://github.com/mahim-dewan)
[**LinkedIn↗️**](https://www.linkedin.com/in/mahim-dewan79)
[**Whatsapp↗️**](https://wa.me/8801568517556) 
