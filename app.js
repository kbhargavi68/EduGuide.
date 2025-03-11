document.addEventListener("DOMContentLoaded", function() {
    console.log("Homepage loaded!");
});
//personalized

document.getElementById("studyForm").addEventListener("submit", function(event) {
    event.preventDefault();

    let subject = document.getElementById("subject").value;
    let hours = document.getElementById("hours").value;
    let studyPlan = document.getElementById("studyPlan");
    let videoContainer = document.getElementById("videoContainer");
    let videoFrame = document.getElementById("videoFrame");

    if (subject === "" || hours === "") {
        studyPlan.innerHTML = "<p class='text-danger text-center'>Please fill out all fields!</p>";
        return;
    }

    // YouTube Video URLs
    let videos = {
        "C Programming": "https://www.youtube.com/embed/irqbmMNs2Bo",
        "Java": "https://www.youtube.com/embed/xTtL8E4LzTQ",
        "C++": "https://www.youtube.com/embed/-TkoO8Z07hI",
        "Data Structures": "https://www.youtube.com/embed/MdG0Vw9f1A4"
    };

    // Study Plan Content
    let plan = `
        <h2 class="text-primary">Your Personalized Study Plan</h2>
        <p><strong>Subject:</strong> ${subject}</p>
        <p><strong>Study Hours per Day:</strong> ${hours}</p>
        <p><strong>Recommended Schedule:</strong></p>
        <ul class="list-group">
            <li class="list-group-item">📝 Theory: ${Math.floor(hours * 0.4)} hours</li>
            <li class="list-group-item">💻 Practice & Coding: ${Math.floor(hours * 0.5)} hours</li>
            <li class="list-group-item">🎯 Revision & Quizzes: ${Math.floor(hours * 0.1)} hours</li>
        </ul>
        <p>Stay consistent and track your progress!</p>
    `;

    // Display Study Plan
    studyPlan.innerHTML = plan;

    // Display Video
    videoFrame.src = videos[subject];
    videoContainer.style.display = "block";
});
//ai-task
document.addEventListener("DOMContentLoaded", function() {
    const taskInput = document.querySelector(".ai-task-input");
    const taskTime = document.querySelector(".ai-task-time");
    const addTaskBtn = document.querySelector(".ai-add-task");
    const optimizeBtn = document.querySelector(".ai-optimize");
    const taskList = document.querySelector(".ai-task-list");
    const modal = document.getElementById("ai-modal");
    const closeModal = document.querySelector(".ai-close");
    const optimizedList = document.querySelector(".ai-optimized-list");

    let tasks = []; // Array to store tasks

    // Function to add a task
    addTaskBtn.addEventListener("click", function() {
        const taskText = taskInput.value.trim();
        const taskDate = taskTime.value;

        if (taskText === "" || taskDate === "") {
            alert("Please enter a task and a valid date/time.");
            return;
        }

        // Add task to array
        tasks.push({
            text: taskText,
            date: new Date(taskDate)
        });

        // Refresh the task list
        renderTasks();

        // Clear input fields
        taskInput.value = "";
        taskTime.value = "";
    });

    // Function to optimize the schedule
    optimizeBtn.addEventListener("click", function() {
        if (tasks.length === 0) {
            alert("No tasks to optimize.");
            return;
        }

        // Sort tasks by date and time
        tasks.sort((a, b) => a.date - b.date);

        // Refresh the modal with sorted tasks
        renderOptimizedTasks();

        // Open the modal
        modal.style.display = "flex";
    });

    // Function to close the modal
    closeModal.addEventListener("click", function() {
        modal.style.display = "none";
    });

    // Close modal when clicking outside
    window.addEventListener("click", function(event) {
        if (event.target === modal) {
            modal.style.display = "none";
        }
    });

    // Function to render the tasks in the list
    function renderTasks() {
        taskList.innerHTML = ""; // Clear previous list

        tasks.forEach((task, index) => {
            const taskItem = document.createElement("li");
            taskItem.classList.add("ai-task-item");

            taskItem.innerHTML = `
                <span><strong>Task:</strong> ${task.text} <br>
                <strong>Scheduled Time:</strong> ${task.date.toLocaleString()}</span>
                <button class="ai-complete-task">✔</button>
            `;

            taskList.appendChild(taskItem);

            // Mark as completed
            taskItem.querySelector(".ai-complete-task").addEventListener("click", function() {
                taskItem.classList.toggle("ai-task-completed");
            });
        });
    }

    // Function to render optimized tasks in the modal
    function renderOptimizedTasks() {
        optimizedList.innerHTML = ""; // Clear previous list

        tasks.forEach((task, index) => {
            const optimizedItem = document.createElement("li");
            optimizedItem.classList.add("ai-optimized-item");

            optimizedItem.innerHTML = `
                <strong>${index + 1}. ${task.text}</strong><br>
                📅 ${task.date.toLocaleString()}
            `;

            optimizedList.appendChild(optimizedItem);
        });
    }
});
