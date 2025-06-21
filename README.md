# Hemlo Guys!

![Silly Car](https://i1.sndcdn.com/artworks-zyYqA8D0BdfuyH28-WeeHrw-t1080x1080.jpg)

---

🚀 **Live Demo:** [FitNova](https://fit-nova-izumi.vercel.app)

---

## 📖 How to Use the Live Demo

Ready to try **FITNOVA** in action? Follow these steps to experience the AI-powered fitness assistant:

### 🔑 Step 1: Log In / Sign Up

- Visit the live site: [FitNova](https://fit-nova-izumi.vercel.app)
- Create an account or log in using GitHub, Google, or email/password.

### 🏗️ Step 2: Build Your Fitness Program

- Once logged in, click on **"Build/Generate Program"**.
- This will start the process of building your personalized workout and diet plans.

### 📞 Step 3: Start the AI Voice Call

- Tap on **“Start Call”** to begin your conversation with the AI assistant.
- The AI will ask you about:
  - Age, weight and height to calculate your BMI
  - Any existing injuries related to physical or mental health
  - Fitness goals
  - Workout days preferences
  - Current fitness level (beginner, intermediate, advanced)
  - Diet preferences and allergies (veg or non-veg preferences or any other)

> 🗣️ **Tip:** Speak clearly and answer all questions patiently. Since this is an AI, it may occasionally misunderstand or misinterpret your input.

### 📝 Step 4: Monitor the Subtitle Window

- A **subtitle window** below the call displays transcriptions of your responses.
- ⚠️ It may contain minor errors — it's meant to help you verify that the AI is hearing you correctly.

### ⏳ Step 5: Wait for Generation

- After all information is collected, the AI will ask you to wait while it processes your inputs.
- It will send API requests and generate a custom program in the background.
- **Do not manually end the call** — the AI will automatically end the call once everything is ready.

### 📂 Step 6: Access Your Generated Program

- After the call ends, go to the **Profile** section to view your:
  - Personalized workout plan
  - Custom diet program
- If you don’t see them immediately, try **refreshing the page**.

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
### 5. Run Convex Backend Server

```bash
npx convex dev
```
Visit http://localhost:3000 to start using the app.


### 📬 Contact
Have questions or suggestions?
Feel free to reach out at [izoomie03@gmail.com].
