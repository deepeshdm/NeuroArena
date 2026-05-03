# NeuroArena Frontend ⚔️🧠

**Real-time multiplayer quiz battles in Angular**

Compete in live 10-player battles, answer questions at lightning speed, and discover your cognitive profile. Built with Angular, WebSocket (STOMP), and SCSS.

---

## 🎮 Features

- **⚡ Real-time multiplayer** using WebSocket (STOMP/SockJS)
- **🎯 8 knowledge domains** with different difficulty levels
- **🔥 Hardcore Mode** - One wrong answer = instant elimination
- **📊 Live leaderboard** updating after every answer
- **🧠 Cognitive profiling** showing 5 cognitive scores
- **🎨 Dark theme UI** optimized for focus
- **📱 Fully responsive** - mobile, tablet, desktop

### Speed-Based Scoring
```
0-2s   → 2.0x multiplier
2-5s   → 1.5x multiplier  
5-10s  → 1.0x multiplier
10-20s → 0.8x multiplier
20-30s → 0.6x multiplier
```

---

## 📸 Screenshots

### Lobby - Waiting for Battle
![Lobby](/public/lobby.png)

### Arena - Live Quiz Battle
![Battle](/public/battle.png)

### Results - Cognitive Profile
![Results](/public/result.png)

---

## 🛠️ Tech Stack

| Layer | Technology |
|-------|-----------|
| **Framework** | Angular 18+ |
| **Language** | TypeScript 5.2+ |
| **Styling** | SCSS |
| **Real-time** | STOMP/SockJS |
| **Build** | Vite/Angular CLI |
| **State** | Component + localStorage |

---

## 🚀 Quick Start

### Prerequisites

Before setting up the frontend, you'll need to set up the backend first.

**Backend Requirements:**
- Java 21
- Maven 3.9.15

**Frontend Requirements:**
- Node.js 18+
- npm 9+

---

## 📋 Setup Instructions

### Step 1: Clone & Setup Backend

```bash
# Clone backend repository
git clone https://github.com/deepeshdm/NeuroArena-Backend.git
cd NeuroArena-Backend

# Build with Maven
./mvnw clean install

# Run backend server
./mvnw spring-boot:run
```

Backend will run on `http://localhost:8080/api`
WebSocket endpoint: `ws://localhost:8080/ws`

### Step 2: Clone & Setup Frontend

```bash
# Clone this repository (frontend)
git clone https://github.com/deepeshdm/NeuroArena.git
cd NeuroArena/frontend

# Install dependencies
npm install

# Start development server
ng serve
# or
npm run dev

# Open browser
# Navigate to http://localhost:4200
```

### Step 3: Verify Configuration

Make sure `src/environments/environment.ts` has correct backend URLs:

```typescript
export const environment = {
  production: false,
  apiUrl: 'http://localhost:8080/api',
  wsUrl: 'ws://localhost:8080/ws'
};
```

### Step 4: Start Playing!

1. Open `http://localhost:4200` in your browser
2. Select a knowledge domain
3. Join or create a room
4. Wait for players to join
5. Battle begins automatically!

---

## 🎮 How to Play

### Lobby Phase
- Get assigned a random alien avatar
- Wait for up to 10 players to join
- Send reactions in the activity feed
- Click "Initiate Neural Link" when ready
- Battle starts when all players are ready

### Arena Phase
- 10 rapid-fire questions
- 30 seconds per question
- Select an answer (A, B, C, D)
- Live leaderboard updates after each answer
- **Hardcore Mode**: Wrong answer = instant elimination!

### Results Phase
- View final rankings
- See your cognitive profile scores
- Get AI-powered insights
- Option to play again

---

## 🌐 Architecture

```
Frontend (Angular)
     ↓
WebSocket (STOMP)
     ↓
Spring Boot Backend
     ↓
H2 Database (memory-based)
```

**Frontend communicates with backend via:**
- REST API for room creation/joining
- WebSocket for real-time game events
- localStorage for session data (encrypted)

---

## 📄 License

MIT License - see LICENSE file

---

## 👥 Authors

**Deepesh Mhatre** - Software Engineer

---

## 🎉 Support

- ⭐ Give this project a star on GitHub
- 🐛 Open issues for bugs
- 💡 Discuss ideas in discussions

**Built with ❤️ for competitive knowledge seekers**
