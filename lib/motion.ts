'use client';

// Import and re-export specific items from framer-motion with named exports
import {
  motion,
  AnimatePresence,
  useScroll,
  useTransform,
  useSpring,
  useMotionValue,
  useMotionTemplate,
  useInView,
  animate,
  useAnimation,
  useReducedMotion,
  MotionConfig,
  LayoutGroup,
  Reorder
} from 'framer-motion';

// Export them individually (named exports)
export {
  motion,
  AnimatePresence,
  useScroll,
  useTransform,
  useSpring,
  useMotionValue,
  useMotionTemplate,
  useInView,
  animate,
  useAnimation,
  useReducedMotion,
  MotionConfig,
  LayoutGroup,
  Reorder
};

// Add types for variants and animation config
export type {
  Variant,
  AnimationControls,
  Transition,
  Variants
} from 'framer-motion';
