# NeuroArena - Product Requirements Document (PRD)

## Version 1.0 | MVP

---

## Document Information

| Field | Details |
|-------|---------|
| **Project Name** | NeuroArena |
| **Document Type** | Product Requirements Document (PRD) |
| **Version** | 1.0 |
| **Date** | March 29, 2026 |
| **Status** | Ready for Development |

---

## 1. Executive Summary

**NeuroArena** is a real-time multiplayer quiz battle platform where up to 10 players compete simultaneously in fast-paced quiz battles. Players can choose from 8 different room types, answer 10 questions within 30 seconds each, and receive immediate results including a cognitive snapshot of their performance.

### Key Differentiators

| # | Differentiator | Description |
|---|----------------|-------------|
| 1 | **No Signup Required** | Instant play with just a username |
| 2 | **Real-Time Battles** | Instant gameplay with no delays |
| 3 | **Room Variety** | 8 different quiz categories to choose from |
| 4 | **Session Analytics** | Post-battle cognitive profile (just for fun, no storage) |
| 5 | **Self-Contained** | Everything works in one package |

---

## 2. Product Vision & Goals

### Vision Statement
To create the world's most accessible real-time quiz battle platform where intelligence meets competition, enabling anyone to test their knowledge in a fun, competitive environment without barriers to entry.

### Mission
Deliver a seamless, real-time multiplayer quiz experience that is instantly accessible and provides immediate gratification through competitive gameplay.

### Primary Goals

| Goal | Metric | Target |
|------|--------|--------|
| Zero Barrier Entry | Time from landing to gameplay | Less than 30 seconds |
| Real-Time Experience | Question delivery speed | Instant (no noticeable delay) |
| Battle Completion | Battles that reach full players | More than 80% |
| User Satisfaction | Positive feedback after battle | More than 90% |

---

## 3. Target Audience

### Primary User Personas

| Persona | Description | Key Needs |
|---------|-------------|-----------|
| **Casual Gamers** | People looking for quick entertainment | Fast gameplay, no commitment, social fun |
| **Trivia Enthusiasts** | Knowledge lovers who enjoy testing themselves | Challenging questions, variety of topics |
| **Friend Groups** | Groups of friends looking for group activity | Private rooms, shareable codes, competitive fun |
| **Streamers** | Live streamers engaging their audience | Spectator-friendly, quick matches, shareable results |

### User Characteristics

| Characteristic | Details |
|----------------|---------|
| **Age Range** | 16-35 years |
| **Tech Comfort** | Moderate (can type username and enter code) |
| **Session Length** | 5-10 minutes per battle |

---

## 4. Core Features

### Feature Overview

| ID | Feature | Description | Priority |
|----|---------|-------------|----------|
| F1 | Create Room | Host creates battle with room type, gets shareable code | Must Have |
| F2 | Join Room | Player enters username + code to join waiting lobby | Must Have |
| F3 | Waiting Lobby | Real-time player count display, auto-start at 10 players | Must Have |
| F4 | Quiz Battle | 10 questions, 30 seconds each, speed-based scoring | Must Have |
| F5 | Live Leaderboard | Real-time score updates after each question | Must Have |
| F6 | Answer Feedback | Visual feedback (correct/incorrect) with points | Must Have |
| F7 | Final Results | Full leaderboard with rankings and scores | Must Have |
| F8 | Session Analytics | One-time cognitive snapshot after battle | Must Have |
| F9 | Room Type Selection | 8 different quiz categories to choose from | Must Have |
| F10 | Share Room Code | Copy/share room code functionality | Nice to Have |

### Feature Details

#### F1: Create Room
- User enters a username (3-20 characters, letters and numbers only)
- User selects room type from 8 options
- System generates unique 6-digit room code
- Host becomes first player in waiting lobby
- Room code is displayed for sharing

#### F2: Join Room
- User enters username (3-20 characters)
- User enters 6-digit room code
- System validates room exists and battle hasn't started
- System ensures username is not already taken in that room
- User is added to waiting lobby

#### F3: Waiting Lobby
- Display room code with copy button
- Show selected room type with icon and description
- Real-time player count with visual progress bar
- List of all joined players
- Auto-start when 10 players join
- Display fun waiting tips during wait

#### F4: Quiz Battle
- 10 questions per battle
- 30-second timer per question
- Speed-based scoring (faster answers = more points)
- No penalty for incorrect answers
- All players see same questions in same order
- Questions are selected based on room type

#### F5: Live Leaderboard
- Real-time updates after each player answers
- Shows current top 5 players
- Highlights the current player's position
- Updates scores immediately when answers are submitted

#### F6: Answer Feedback
- Brief modal or toast appears after each answer
- Green flash for correct, red flash for incorrect
- Shows points earned (if correct)
- Shows correct answer (if incorrect)
- Automatically advances to next question after 2 seconds

#### F7: Final Results
- Full leaderboard showing all 10 players with ranks
- Personal statistics: rank, score, accuracy, average response time
- Battle duration display
- Action buttons: Play Again, New Room

#### F8: Session Analytics
- Player archetype calculated from this battle only
- Top strength identified
- One personalized improvement recommendation
- No data saved — displayed once and then gone
- Based on: response times, accuracy, answer patterns

#### F9: Room Type Selection
- 8 visually distinct room types
- Each type has icon, name, description
- Different question pools for each type
- Visual cards with hover effects

#### F10: Share Room Code
- One-click copy to clipboard
- Room code displayed prominently
- Optional: shareable link generation

---

## 5. Room Types

### Complete Room Type List

| # | Type | Icon | Description | Difficulty |
|---|------|------|-------------|------------|
| 1 | Mixed Bag | 🌍 | Random questions from all categories | Mixed |
| 2 | Science & Tech | 🧪 | Physics, Chemistry, Biology, Technology | Medium |
| 3 | History & Culture | 📜 | World history, geography, arts | Medium |
| 4 | Pop Culture | ⚡ | Movies, music, celebrities, trends | Easy |
| 5 | Brain Teasers | 🧠 | Logic puzzles, riddles, lateral thinking | Hard |
| 6 | Hardcore Mode | 🏆 | Difficult questions, faster pace | Hard |
| 7 | Gaming & Esports | 🎮 | Video games, gaming history | Medium |
| 8 | Sports | ⚽ | Football, basketball, Olympics, sports trivia | Medium |

---

## 6. Future Roadmap

### Phase 2: Analytics Storage (Future)
- Store battle data in database
- Admin dashboard with usage insights
- Question performance analytics
- Player engagement metrics
