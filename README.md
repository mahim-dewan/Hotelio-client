# Hotelio (Client) 🏨

A modern Next.js frontend for the Hotelio hotel booking platform. This client-side app focuses on performance, responsive design, clean architecture, and SEO best practices.

## 🖇️ Quick Links

[Live Link](https://localhost:3000)  
[Backend Repository](https://github.com/mahim-dewan/Hotelio-server)

## ✨ Features

- Fully responsive UI (Mobile, Tablet, Laptop)

- SEO-friendly metadata (Open Graph & Twitter cards)

- Authentication flow with local stratigy, google and facebook sign in

## 🧑‍💻 Tech Stack

- **Next.js** (App Router) for server-side rendering and routing

- **Tailwind CSS** for utility-first styling

- **React Hook Form + Zod** for forms and validation

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
│   ├── lib/
│   ├── reducers/
│   └── schemas/
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

## 📌 Author

Mahim Dewan  
Full Stack (MERN) Web Developer
