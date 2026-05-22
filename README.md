# StudyNook 📚

StudyNook is a specialized digital platform designed to streamline study space management. It allows users to browse available study rooms, view detailed room specifications, and seamlessly book rooms for their educational needs.

### 🔗 Live Deployments
* **Client-Side Live Site:** https://studynook-client-sand.vercel.app
* **Server-Side API:** https://studynook-server-tau.vercel.app

### ✨ Key Features

* **Dynamic Room Discovery:** Users can browse a comprehensive catalog of available study rooms fetched in real-time from a MongoDB database.
* **Granular Room Details:** Secure, route-protected view that allows authenticated users to see deep-dive specifications for any individual study room.
* **Instant Booking System:** A dedicated booking management flow enabling users to reserve study spaces instantly and keep track of their personal schedules.
* **Secure JWT Token Verification:** Built-in custom server middleware that inspects Authorization headers to protect sensitive user data and endpoints.
* **Full CRUD Functionality:** Robust API infrastructure allowing seamless creation (`POST`), retrieval (`GET`), updating (`PATCH`), and deletion (`DELETE`) of rooms and bookings.

### 🛠️ Tech Stack

* **Frontend:** Next.js, DaisyUI, HeroUI, Hot-Toast
* **Backend:** Express.js
* **Database:** MongoDB (via official MongoDB Node.js Driver)
* **Hosting/Deployment:** Vercel (Server & Client)
* **Security:** JSON Web Tokens (JWT), CORS Middleware, Dotenv Environment Management
