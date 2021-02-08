function toggleChild(questionNumber) {
    const question = document.getElementById(`question${questionNumber}`);
    $("#answer" + questionNumber).slideToggle();
    if(question.classList.contains("active")) {
        question.classList.remove("active");
    } else {
        question.classList.add("active");
    }
}