export const heroParticleEffects = {
    fullScreen: {
      enable: false,
      zIndex: 0,
    },
    fpsLimit: 60,
    particles: {
      color: {
        value: '#f2f2eb',
      },
      links: {
        enable: true,
        color: '#c4c4bc',
        distance: 150,
        opacity: 0.5,
      },
      move: {
        direction: 'none',
        enable: true,
        outModes: {
          default: 'bounce',
        },
        random: true,
        speed: 0.8,
        straight: false,
      },
      number: {
        density: {
          enable: true,
          area: 800,
        },
        value: 35,
      },
      opacity: {
        value: 0.5,
      },
      size: {
        value: { min: 1, max: 5 },
      },
    },
  }