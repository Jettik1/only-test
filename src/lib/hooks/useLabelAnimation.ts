import { useEffect } from 'react'
import gsap from 'gsap'

export const useLabelAnimation = (
  labelRef: React.RefObject<HTMLDivElement | null>,
  activeSegment: number,
  segments: any[]
) => {
  useEffect(() => {
    if (!labelRef.current) return

    const tl = gsap.timeline()

    tl.to(labelRef.current, {
      x: -20, // Уезжает влево
      opacity: 0,
      duration: 0.3,
      ease: 'power2.out',
      onComplete: () => {
        if (labelRef.current) {
          labelRef.current.innerText = segments[activeSegment]?.title || ''
        }
      },
    })
      .set(labelRef.current, { x: 0, y: -10 }) // Скрытое положение сверху
      .to(labelRef.current, {
        y: 0, // Спускается вниз
        opacity: 1,
        duration: 0.3,
        ease: 'power2.in',
      })
  }, [activeSegment, segments])
}
