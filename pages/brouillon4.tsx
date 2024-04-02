.background {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-image: url('../public/background.png');
    background-size: cover;
    background-position: center;
    mask-size: 1000% 1000%;
    mask-position: 50% 50%;
    mask-repeat: no-repeat;
    mask-image: radial-gradient(circle at center, transparent 0%, black 40%, black 50%, transparent 60%);
    animation: revealMask 10s linear infinite forwards;
    pointer-events: none; /* Permet aux événements de souris de traverser le fond noir */
  }
  
  @keyframes revealMask {
    0% {
      mask-size: 0% 0%;
    }
    100% {
      mask-size: 1000% 1000%;
    }
  }

  .container.reveal .background {
    mask-image: none;
  }