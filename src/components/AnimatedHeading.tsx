import { motion } from 'motion/react'
import type { ComponentPropsWithoutRef, ElementType, ReactNode } from 'react'

type HeadingProps<T extends ElementType = 'h2'> = { children: ReactNode; className?: string; as?: T; delay?: number } & Omit<ComponentPropsWithoutRef<T>, 'children' | 'as'>
export function AnimatedHeading<T extends ElementType = 'h2'>({ children, className, as, delay = 0, ...props }: HeadingProps<T>) {
  const MotionTag = motion(as ?? 'h2') as typeof motion.h2
  return <MotionTag className={className} initial={{ opacity: 0, y: 30, filter: 'blur(12px)' }} whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }} viewport={{ once: true, margin: '-80px' }} transition={{ duration: .9, delay, ease: [.22, 1, .36, 1] }} {...props}>{children}</MotionTag>
}

export function AnimatedText({ children, className, delay = .15 }: { children: ReactNode; className?: string; delay?: number }) {
  return <motion.p className={className} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-80px' }} transition={{ duration: .7, delay, ease: [.22, 1, .36, 1] }}>{children}</motion.p>
}

export function MaskedImage({ src, alt, className, delay = 0 }: { src: string; alt: string; className?: string; delay?: number }) {
  return <motion.div className={className} initial={{ clipPath: 'inset(100% 0 0 0)' }} whileInView={{ clipPath: 'inset(0% 0 0 0)' }} viewport={{ once: true, margin: '-80px' }} transition={{ duration: 1.1, delay, ease: [.22, 1, .36, 1] }}><img src={src} alt={alt} className="h-full w-full object-cover" /></motion.div>
}
