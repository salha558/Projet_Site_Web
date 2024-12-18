document.getElementById("quizz-form").addEventListener("submit", function(event) {
    event.preventDefault();

    // Réponses correctes
    const correctAnswers = {
        q1: "b",
        q2: "b",
        q3: "b",
        q4: "a",
        q5: "a",
        q6: "b", 
        q7: "b",
        q8: "a",
        q9: "b",
        q10: "a",
        q11: "a",
        q12: "b",
        q13: "b",
        q14: "a",
        q15: "b"
    };

    let score = 0;
    let totalQuestions = Object.keys(correctAnswers).length;
    let reponsesCorrectesList = "";

    // Parcourir chaque réponse
    for (let question in correctAnswers) {
        const userAnswer = document.querySelector(`input[name="${question}"]:checked`);
        if (userAnswer && userAnswer.value === correctAnswers[question]) {
            score++;
        } else {
            reponsesCorrectesList += `<li>Question ${question.slice(1)} : ${correctAnswers[question]}</li>`;
        }
    }

    // Affichage des résultats
    const resultatSection = document.getElementById("resultat");
    document.getElementById("score").innerHTML = `Vous avez obtenu ${score} / ${totalQuestions}.`;
    document.getElementById("reponses-correctes").innerHTML = reponsesCorrectesList;

    resultatSection.classList.remove("hidden");
});
