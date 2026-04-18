import { Variants, stagger } from "motion/react";

export const backgroundVariants: Variants = {
  open: { opacity: 1, pointerEvents: "auto" },
  closed: { opacity: 0, pointerEvents: "none" },
};

export const listVariants: Variants = {
  open: {
    transition: { delayChildren: stagger(0.07, { startDelay: 0.2 }) },
  },
  closed: {
    transition: { delayChildren: stagger(0.05, { from: "last" }) },
  },
};

export const itemVariants: Variants = {
  open: {
    y: 0,
    opacity: 1,
    transition: { y: { stiffness: 3000, velocity: -10 } },
  },
  closed: {
    y: 50,
    opacity: 0,
    transition: { y: { stiffness: 3000 } },
  },
};
