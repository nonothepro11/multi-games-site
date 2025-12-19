// Add smooth transitions and animations
document.addEventListener('DOMContentLoaded', function() {
    // Add animation to game cards on load
    const gameCards = document.querySelectorAll('.game-card');
    gameCards.forEach((card, index) => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        
        setTimeout(() => {
            card.style.transition = 'opacity 0.5s, transform 0.5s';
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
        }, index * 100);
    });
    
    // Add click sound effect
    gameCards.forEach(card => {
        card.addEventListener('click', function() {
            // You can add a click sound here
            console.log('Navigating to game...');
        });
    });
});
