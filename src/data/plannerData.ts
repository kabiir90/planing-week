export const weeklyPlannerData = {
  "timezone": "Africa/Casablanca",
  "week_program": {
    "Monday": [],
    "Tuesday": [],
    "Wednesday": [],
    "Thursday": [],
    "Friday": [],
    "Saturday": [],
    "Sunday": []
  },
  "daily_template": [
    {
      "time": "06:00-06:30",
      "activity": "Fajr prayer + light stretching + mindset planning",
      "focus": "Spiritual & mental clarity"
    },
    {
      "time": "06:30-07:30",
      "activity": "English learning (listening + speaking)",
      "details": "Podcast, YouTube, shadowing, vocabulary notebook"
    },
    {
      "time": "07:30-08:00",
      "activity": "Breakfast + rest"
    },
    {
      "time": "08:00-10:00",
      "activity": "Exam preparation",
      "details": "Past exams, summaries, active recall"
    },
    {
      "time": "10:00-10:15",
      "activity": "Break (walk, water, no phone)"
    },
    {
      "time": "10:15-12:00",
      "activity": "Node.js learning",
      "details": "Core concepts: async, modules, Express, APIs"
    },
    {
      "time": "12:00-12:30",
      "activity": "Dhuhr prayer + mental reset"
    },
    {
      "time": "12:30-13:30",
      "activity": "Lunch + rest"
    },
    {
      "time": "13:30-15:00",
      "activity": "Node.js practice",
      "details": "Build small features, CRUD, authentication"
    },
    {
      "time": "15:00-15:30",
      "activity": "Asr prayer + short rest"
    },
    {
      "time": "15:30-17:00",
      "activity": "UML & system design",
      "details": "Use case, class diagrams, sequence diagrams"
    },
    {
      "time": "17:00-17:15",
      "activity": "Break"
    },
    {
      "time": "17:15-18:30",
      "activity": "Development logic & problem solving",
      "details": "Algorithms, clean code, design thinking"
    },
    {
      "time": "18:30-19:00",
      "activity": "Maghrib prayer"
    },
    {
      "time": "19:00-20:00",
      "activity": "Dinner + family time"
    },
    {
      "time": "20:00-20:30",
      "activity": "Isha prayer + calm reflection"
    },
    {
      "time": "20:30-21:00",
      "activity": "Light review",
      "details": "What I learned today"
    },
    {
      "time": "21:00-22:00",
      "activity": "Gym",
      "details": "Strength + cardio"
    },
    {
      "time": "22:00-23:00",
      "activity": "Relax & light learning",
      "details": "Tech videos, dev podcasts"
    },
    {
      "time": "23:00-00:00",
      "activity": "Fun + English memorization",
      "details": "Series, games, flashcards, journaling in English"
    }
  ],
  "weekly_focus": {
    "Monday": "Node.js fundamentals + English basics",
    "Tuesday": "APIs & Express + UML basics",
    "Wednesday": "Authentication & databases + system logic",
    "Thursday": "Clean architecture + design patterns",
    "Friday": "Revision + light learning + spiritual focus",
    "Saturday": "Project building (Node.js full feature)",
    "Sunday": "Review, planning, soft skills & rest"
  },
  "extra_skills_for_developer": [
    "Git & GitHub workflow",
    "Debugging techniques",
    "API documentation (Swagger)",
    "Reading technical docs",
    "Time management & deep work",
    "Basic DevOps concepts"
  ]
};

export type Mission = {
  time: string;
  activity: string;
  focus?: string;
  details?: string;
};
