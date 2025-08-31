# AI Agent Application

## Description

An AI-powered agent application built with **Next.js**, **TypeScript**, and modern web development tools.  
This project is structured for scalability, modularity, and clean code practices.

### Project Flow
1. **Authentication** → User must **Login** or **Signup**.  
2. **Dashboard** → After login, user lands on the **Agents Dashboard**.  
3. **Create Agent** → User can create an **AI Agent** (free option available).  
4. **Create Meeting** → Based on the selected agent, user can **schedule a meeting**.  
5. **Start Meeting** → User joins the meeting and interacts with the AI Agent.  
6. **End Meeting** → After the meeting ends, the following will be available:  
   - **Summarized Meeting Text**  
   - **Recorded Meeting Video**  
   - **Chat Section** for summarized text & AI assistant Q&A  

### Features
- Next.js 15 with App Router
- TypeScript for type safety
- Drizzle ORM for database management
- TailwindCSS + PostCSS for styling
- ESLint & Prettier for code quality
- API routes for backend logic
- Component-driven UI

## Demo
The application is deployed on **Vercel**.
👉 [Live Demo Link](https://ai-agent-application.vercel.app)  

## Getting Started

### Clone the Repository
```bash
https://github.com/pavan-rajulapati/ai-agent-application.git
cd ai-agent-application
```

### DotENV File 
```
# Database
DATABASE_URL="your_postgresql_connection_string"

# Authentication (BetterAuth / NextAuth)
BETTER_AUTH_SECRET="your_better_auth_secret"
BETTER_AUTH_URL="http://localhost:3000"

# GitHub OAuth
GITHUB_CLIENT_ID="your_github_client_id"
GITHUB_CLIENT_SECRET="your_github_client_secret"

# Google OAuth
GOOGLE_CLIENT_ID="your_google_client_id"
GOOGLE_CLIENT_SECRET="your_google_client_secret"

# Application URL
NEXT_PUBLIC_APP_URL="http://localhost:3000"

# Stream Video API
NEXT_PUBLIC_STREAM_VIDEO_API_KEY="your_stream_video_api_key"
STREAM_VIDEO_SECRET_KEY="your_stream_video_secret"

# Stream Chat API
NEXT_PUBLIC_STREAM_CHAT_API_KEY="your_stream_chat_api_key"
STREAM_CHAT_SECRET_KEY="your_stream_chat_secret"

# Polar Integration
POLAR_ACCESS_TOKEN="your_polar_access_token"

# OpenAI
OPENAI_API_KEY="your_openai_api_key"

```

### Run 
```
npm run dev
```

