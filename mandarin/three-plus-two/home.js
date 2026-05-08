const startBtn = document.getElementById("startBtn");
const topicDisplay = document.getElementById("topicDisplay");

const topics = [

  {
    name: "FOOD",
    color: "#ff5f57",
    page: "food-game.html"
  },

  {
    name: "PUBLIC FACILITIES",
    color: "#14b8a6",
    page: "public-facilities-game.html"
  },

  {
    name: "FAMILY MEMBERS",
    color: "#ff6b6b",
    page: "family-members-game.html"
  },

  {
    name: "PLACES",
    color: "#3b82f6",
    page: "places-game.html"
  },

  {
  name: "HOBBIES",
  color: "#f59e0b",
  page: "hobbies-game.html"
  },
  
  {
  name: "SCHOOL SUBJECTS",
  color: "#6366f1",
  page: "school-subjects-game.html"
  },
  
  {
  name: "PETS",
  color: "#f97316",
  page: "pets-game.html"
  },
  
  {
  name: "TRANSPORTATION",
  color: "#0ea5e9",
  page: "transportation-game.html"
  },

  {
  name: "JOBS",
  color: "#f59e0b",
  page: "jobs-game.html"
  },

  {
  name: "FRUIT & VEGETABLES",
  color: "#84cc16",
  page: "fruit-and-vegetables-game.html"
  },

  {
  name: "COUNTRIES",
  color: "#2563eb",
  page: "countries-game.html"
  },

  {
  name: "SHOPPING",
  color: "#a855f7",
  page: "shopping-game.html"
  },

  {
  name: "CLOTHES",
  color: "#a855f7",
  page: "clothes-game.html"
  },

  {
  name: "COLOURS",
  color: "#ec4899",
  page: "colours-game.html"
  },

  {
  name: "WEATHER",
  color: "#38bdf8",
  page: "weather-game.html"
  },

  {
  name: "DRINKS",
  color: "#06b6d4",
  page: "drinks-game.html"
  },

  {
  name: "SPORTS",
  color: "#ef4444",
  page: "sports-game.html"
  }

];

startBtn.addEventListener("click", () => {
  startBtn.style.display = "none";

  let count = 0;
  let currentIndex = 0;

  const animation = setInterval(() => {
    currentIndex++;

    if (currentIndex >= topics.length) {
      currentIndex = 0;
    }

    const currentTopic = topics[currentIndex];

    topicDisplay.textContent = currentTopic.name;

    document.documentElement.style.setProperty(
      "--topic-color",
      currentTopic.color
    );

    count++;

    if (count >= 25) {
      clearInterval(animation);

      const finalTopic = topics[Math.floor(Math.random() * topics.length)];

      topicDisplay.textContent = finalTopic.name;

      document.documentElement.style.setProperty(
        "--topic-color",
        finalTopic.color
      );

      setTimeout(() => {
        window.location.href = finalTopic.page;
      }, 1800);
    }
  }, 120);
});