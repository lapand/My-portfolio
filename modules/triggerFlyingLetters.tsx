// Déclenche, dans la section d'accueil, l'animation d'un élément volant depuis le livre vers un HTMLElement cible donné en 1er paramètre.
// Prend en second paramètre la durée de l'animation qui doit être la même que celle du TypingEffect.

export default function triggerFlyingLetters(targetNode: HTMLElement, duration: number, shootingStarRef){
            
    const lastCharRect = targetNode.getBoundingClientRect();
    const lastCharX = lastCharRect.left + lastCharRect.width / 2;
    const lastCharY = lastCharRect.top + lastCharRect.height / 2;

    if(shootingStarRef.current){

        // Position de départ de l'objet volant en % par rapport aux dimensions actuelles de la fenêtre du navigateur de l'user
        const initialX = 38;
        const initialY = 52;
        // Position de départ de l'objet volant en px par rapport au bord supérieur gauche de la fenêtre du navigateur de l'user
        const initialXPx = window.innerWidth * (initialX / 100);
        const initialYPx = window.innerHeight * (initialY / 100);
        // Distance en px entre le point de départ et l'arrivée
        const deltaX = lastCharX - initialXPx;
        const deltaY = lastCharY - initialYPx;
        // Calcul de l'angle de la trajectoire par rapport à l'axe des abscisses
        const radians = Math.atan2(deltaY, deltaX);
        const degrees = radians * (180 / Math.PI);

        // Définit l'angle de rotation de l'objet volant
        shootingStarRef.current.style.setProperty('transform', `rotate(${degrees}deg)`);

        // Définit les règles css et options d'animation
        let keyframes = [
            { left: initialXPx + 'px', top: initialYPx + 'px' },
            { offset: 0.01, opacity: 1 },
            { offset: 0.5, opacity: 1 },
            { offset: 0.7, opacity: 1, width: '50px' },
            { left: lastCharX + 'px', top: lastCharY + 'px', width: '30px', opacity: 1 }
        ];
        let options = {
            duration,
            easing: 'linear',
        };
        
        // Lance l'animation
        shootingStarRef.current.animate(keyframes, options);
    }
};
