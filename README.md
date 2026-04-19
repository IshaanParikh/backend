# Portfolio API

A mini REST API built with Node.js + Express that returns personal info as structured JSON.

## How to Run

1. **Install dependencies**
   ```bash
   npm install
   ```

2. **Start the server**
   ```bash
   node index.js
   ```

3. The API will be running at `http://localhost:3000`

---

## Example Endpoints

### 1. GET `/api/about`
Returns basic info about me.

**Request:**
```
GET http://localhost:3000/api/about
```

**Response:**
```json
{
  "name": "Ishaan Parikh",
  "major": "CS",
  "year": "2027",
  "hometown": "Your Hometown"
}
```

---

### 2. GET `/api/projects`
Returns a list of my projects.

**Request:**
```
GET http://localhost:3000/api/projects
```

**Response:**
```json
[
  {
    "id": 1,
    "title": "Portfolio API",
    "description": "A mini REST API built with Node.js and Express.",
    "tech": ["Node.js", "Express"]
  },
  ...
]
```

---

### 3. POST `/api/projects`
Adds a new project to the list.

**Request:**
```
POST http://localhost:3000/api/projects
Content-Type: application/json

{
  "title": "New Project",
  "description": "What it does",
  "tech": ["React", "Python"]
}
```

**Response:**
```json
{
  "id": 4,
  "title": "New Project",
  "description": "What it does",
  "tech": ["React", "Python"]
}
```

---

### 4. GET `/api/fun-fact` ⭐ Creative Endpoint
Returns a random fun fact about me.

**Request:**
```
GET http://localhost:3000/api/fun-fact
```

**Response:**
```json
{
  "fact": "I can solve a Rubik's cube in under 2 minutes.",
  "total_facts": 5
}
```
