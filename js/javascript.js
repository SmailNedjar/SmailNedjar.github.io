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



function adjustScale() {
    const element = document.querySelector('.main_container');
    const width = window.innerWidth;
    console.log(width);
    
    // Définir l'échelle en fonction de la largeur de la fenêtre
    let scale;
    if (width < 480) {
        scale = 0.3; // Réduire l'échelle pour les petits écrans
    } else if (width < 728) {
        scale = 0.4; // Échelle normale pour les écrans moyens
    } else if (width <1000){
        scale = 0.7; // Agrandir pour les grands écrans
    }

    element.style.transform = `scale(${scale})`;
    element.style.margin = 0;
}

// Écoutez l'événement de redimensionnement et le chargement initial
window.addEventListener('resize', adjustScale);
window.addEventListener('load', adjustScale);
