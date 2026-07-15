import { motion, useReducedMotion } from 'motion/react'
import type { ComponentPropsWithoutRef, ElementType, ReactNode } from 'react'

type HeadingProps<T extends ElementType = 'h2'> = { children: ReactNode; className?: string; as?: T; delay?: number } & Omit<ComponentPropsWithoutRef<T>, 'children' | 'as'>
export function AnimatedHeading<T extends ElementType = 'h2'>({ children, className, as, delay = 0, ...props }: HeadingProps<T>) {
  const reduceMotion = useReducedMotion()
  const MotionTag = motion(as ?? 'h2') as typeof motion.h2
  return <MotionTag className={className} initial={reduceMotion ? false : { opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-80px' }} transition={{ duration: .55, delay, ease: [.22, 1, .36, 1] }} {...props}>{children}</MotionTag>
}

export function AnimatedText({ children, className, delay = .15 }: { children: ReactNode; className?: string; delay?: number }) {
  const reduceMotion = useReducedMotion()
  return <motion.p className={className} initial={reduceMotion ? false : { opacity: 0, y: 14 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-80px' }} transition={{ duration: .45, delay, ease: [.22, 1, .36, 1] }}>{children}</motion.p>
}

export function MaskedImage({ src, alt, className, delay = 0 }: { src: string; alt: string; className?: string; delay?: number }) {
  return <motion.div className={className} initial={{ clipPath: 'inset(100% 0 0 0)' }} whileInView={{ clipPath: 'inset(0% 0 0 0)' }} viewport={{ once: true, margin: '-80px' }} transition={{ duration: 1.1, delay, ease: [.22, 1, .36, 1] }}><img src={src} alt={alt} className="h-full w-full object-cover" /></motion.div>
}
