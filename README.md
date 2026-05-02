<h1 align="center">✨ Magic Stream ✨</h1>

<p align="center">
  <strong>The ultimate platform for collaborative coding interviews and pair programming.</strong>
</p>

## ✨ Highlights

- 🧑‍💻 **Collaborative Code Editor:** Real-time code synchronization using Stream Custom Events.
- 🚀 **Live Code Execution:** Secure, rapid code execution powered by JDoodle API.
- 🎥 **1-on-1 Video Interview Rooms:** Seamless video and audio communication powered by Stream Video SDK.
- 💬 **Real-time Chat Messaging:** Integrated messaging during active sessions.
- 🔐 **Authentication via Clerk:** Secure and seamless user management.
- 🧭 **Dashboard with Live Stats:** Track your sessions and progress.
- 🧩 **Practice Problems Page:** Hone your skills in solo coding mode.
- 🔒 **Room Locking:** Sessions strictly limited to 2 participants for focused pair programming.
- 🧠 **Background Jobs:** Asynchronous tasks handled via Inngest.
- 🧰 **REST API:** Robust backend powered by Node.js, Express, and MongoDB.

## 🛠️ Tech Stack
- **Frontend:** React, Vite, TailwindCSS, Monaco Editor, Stream Video React SDK.
- **Backend:** Node.js, Express, MongoDB, Stream Chat Node SDK.
- **Tools:** Clerk (Auth), Inngest (Background Jobs), JDoodle (Code Execution).

---

## 🧪 .env Setup

### Backend (`/backend`)

```bash
PORT=3000
NODE_ENV=development

DB_URL=your_mongodb_connection_url

INNGEST_EVENT_KEY=your_inngest_event_key
INNGEST_SIGNING_KEY=your_inngest_signing_key

STREAM_API_KEY=your_stream_api_key
STREAM_API_SECRET=your_stream_api_secret

CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key
CLERK_SECRET_KEY=your_clerk_secret_key

CLIENT_URL=http://localhost:5173
```

### Frontend (`/frontend`)

```bash
VITE_CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key

VITE_API_URL=http://localhost:3000/api

VITE_STREAM_API_KEY=your_stream_api_key
```

---

## 🔧 Run the Backend

```bash
cd backend
npm install
npm run dev
```

---

## 🔧 Run the Frontend

```bash
cd frontend
npm install
npm run dev
```
