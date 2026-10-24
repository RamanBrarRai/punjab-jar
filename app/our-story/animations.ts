export const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  visible: (i: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.12,
      duration: 0.55,
      ease: "easeOut" as const,
    },
  }),
};

export const float = {
  y: [0, -15, 0],
  rotate: [0, 5, -5, 0],
  transition: {
    duration: 6,
    repeat: Infinity,
    ease: "easeInOut" as const,
  },
};

export const floatSlow = {
  y: [0, -25, 0],
  rotate: [0, -8, 8, 0],
  transition: {
    duration: 8,
    repeat: Infinity,
    ease: "easeInOut" as const,
  },
};