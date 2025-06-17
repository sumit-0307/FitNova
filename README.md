# Hemlo Guys!

![Silly Car](https://i1.sndcdn.com/artworks-zyYqA8D0BdfuyH28-WeeHrw-t1080x1080.jpg)

---

🚀 **Live Demo:** [FitNova](https://fit-nova-izumi.vercel.app)

---

#  FITNOVA – Your AI-Powered Fitness Trainer

FITNOVA is an AI-powered fitness web app designed to revolutionize your health journey. From voice-driven conversations to personalized workouts and meal plans, FITNOVA leverages the latest in AI and modern web technologies to deliver a smart, interactive fitness experience.

---

## 🚀 Highlights

- **Tech Stack:** Next.js, React, Tailwind CSS, Shadcn UI
- 🎙️ **Voice AI Assistant:** Built with [Vapi](https://vapi.ai)
- 🧠 **LLM Integration:** Powered by **Gemini AI**
- 🏋️ **Personalized Workout Plans**
- 🥗 **Custom Diet Programs**
- 🔒 **Authentication & Authorization:** [Clerk](https://clerk.dev)
- 💾 **Real-Time Database:** [Convex](https://convex.dev)
- 🎬 **Dynamic Program Generation**
- 💻 **Reusable Layouts**
- 🎭 **Client & Server Components Architecture**

---

## ✨ Features

- 🤖 **Smart AI Assistant**  
  Interact with an intelligent voice AI that understands your fitness goals, physical condition, and preferences.

- 🏋️ **Tailored Workout Plans**  
  Get customized training programs based on your experience, goals, injuries, and schedule.

- 🥗 **Personalized Diet Recommendations**  
  Receive meal plans that respect your dietary restrictions and allergies.

- 🔐 **Secure Authentication**  
  Sign in with GitHub, Google, or traditional email/password using Clerk.

- 📋 **Program Management**  
  Create, view, and manage multiple fitness programs—only the latest one stays active.

- 📱 **Responsive UI**  
  Clean, modern, and fully responsive interface across all screen sizes.

---

### 🧰 Technologies Used
| Technology       | Purpose                                  |
| ---------------- | ---------------------------------------- |
| **Next.js**      | React framework for SSR & API routes     |
| **React**        | Core UI Library                          |
| **Tailwind CSS** | Utility-first CSS framework              |
| **Shadcn UI**    | Beautiful component library              |
| **Clerk**        | Authentication & user session management |
| **Vapi**         | Voice-based AI interaction               |
| **Convex**       | Real-time backend & data management      |
| **Gemini AI**    | LLM for personalized plan generation     |

---

## 🛠️ Setup Instructions

### 1. Clone the Repository

```bash
git clone https://github.com/sumit-0307/fitnova.git
cd fitnova
```
### 2. Install Dependencies

```bash
npm install
```

### 3. Configure Environment Variables
Create a .env file in the root directory and add:

```bash
# Clerk Authentication
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=
CLERK_SECRET_KEY=

# Clerk Redirect URLs
NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up

# Vapi Voice AI
NEXT_PUBLIC_VAPI_WORKFLOW_ID=
NEXT_PUBLIC_VAPI_API_KEY=

# Convex Database
CONVEX_DEPLOYMENT=
NEXT_PUBLIC_CONVEX_URL=
```

### 4. Run Development Server

```bash
npm run dev
```
Visit http://localhost:3000 to start using the app.


### 📬 Contact
Have questions or suggestions?
Feel free to reach out at [izoomie03@gmail.com].
