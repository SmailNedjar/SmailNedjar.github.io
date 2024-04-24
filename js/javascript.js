const observerIntersectionAnimation = ()=> {

    const skills = document.querySelectorAll('.progress_bar');
    skills.forEach((skill,index) => {
        skill.style.width = "0"
    }
    
    );
    let skillsObserver = new IntersectionObserver(function(entries, observer) {
        entries.forEach(entry => {
        if (entry.isIntersecting) {
            let element =entry.target;
            element.style.width = element.dataset.width + '%';
            element.style.transition = "all 1.6s";
        }
        
    }
        );

    
});
skills.forEach(skill => {
    skillsObserver.observe(skill)
})
}
observerIntersectionAnimation ();

document.addEventListener("DOMContentLoaded", () => {
    function animation (pieChartClass, endangle) {

    const pieChart = document.querySelector(pieChartClass);
    console.log(pieChart);
    let angle = 0;
    let  angle2=0;
    
    // Fonction pour mettre à jour le dégradé conique
    function updateGradient() {
        angle -= 3; // Augmente l'angle du dégradé
        angle2 = 360 + angle; //
        pieChart.style.backgroundImage = `conic-gradient(#d4d4d4 ${angle2}deg, #12301b ${angle}deg)`;
        if (angle  >endangle) {
            requestAnimationFrame(updateGradient);
        }
    }
    updateGradient();
}
    // Démarre l'animation
    animation('.piechart1', -280); // 80 degrés pour le premier camembert
    animation('.piechart2', -250);
    animation('.piechart3', -300); // 80 degrés pour le premier camembert
    animation('.piechart4', -250);
    animation('.piechart5', -230); // 80 degrés pour le premier camembert
});
