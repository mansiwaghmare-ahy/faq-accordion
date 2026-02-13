const questions = document.querySelectorAll(".question");
questions.forEach(question => { 
    question.addEventListener("click", () => { 
        const answer = question.nextElementSibling; 
        const icon = question.querySelector(".icon-plus");

        if (answer.style.display === "block") 
            { answer.style.display = "none"; icon.src = "icon-plus.svg"; } 
        else {
            answer.style.display = "block"; icon.src = "icon-minus.svg"; 
        } 
    }); 
});