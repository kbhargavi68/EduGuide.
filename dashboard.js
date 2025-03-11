document.addEventListener("DOMContentLoaded", function () {
    let completedCourses = 2;
    let totalCourses = 5;
    let progressPercentage = (completedCourses / totalCourses) * 100;

    // Update progress bar dynamically
    document.getElementById("completedCourses").innerText = completedCourses;
    document.getElementById("courseProgressBar").style.width = progressPercentage + "%";

    // AI Recommendation System based on quiz performance
    let quizScores = {
        "C Programming": 85,
        "Java": 50,
        "Data Structures": 90
    };

    let strengths = [];
    let weaknesses = [];

    for (let subject in quizScores) {
        if (quizScores[subject] >= 75) {
            strengths.push(subject);
        } else {
            weaknesses.push(subject);
        }
    }

    document.getElementById("strengthsText").innerText = "Strengths: " + strengths.join(", ");
    document.getElementById("weaknessesText").innerText = "Weak Areas: " + weaknesses.join(", ") + " - Recommended: More practice & tutorials";
});
