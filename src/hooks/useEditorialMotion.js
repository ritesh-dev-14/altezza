import { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function useEditorialMotion(ref) {
  useEffect(() => {
    const root = ref.current;
    if (!root || window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      return undefined;
    }

    const context = gsap.context(() => {
      gsap.utils.toArray('[data-reveal]').forEach((element) => {
        gsap.fromTo(
          element,
          { y: 20, autoAlpha: 0 },
          {
            y: 0,
            autoAlpha: 1,
            duration: 0.8,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: element,
              start: 'top 88%',
              once: true,
            },
          },
        );
      });

      gsap.utils.toArray('[data-image-reveal]').forEach((frame) => {
        const image = frame.querySelector('img');
        if (!image) return;

        gsap.fromTo(
          frame,
          { clipPath: 'inset(0 0 100% 0)' },
          {
            clipPath: 'inset(0 0 0% 0)',
            duration: 1.1,
            ease: 'power3.inOut',
            scrollTrigger: {
              trigger: frame,
              start: 'top 90%',
              once: true,
            },
          },
        );
        gsap.fromTo(
          image,
          { scale: 1.055 },
          {
            scale: 1,
            duration: 1.4,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: frame,
              start: 'top 90%',
              once: true,
            },
          },
        );
      });
    }, root);

    return () => context.revert();
  }, [ref]);
}
