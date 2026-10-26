import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Footer from '../components/Footer';
import Hero from '../components/Hero';

gsap.registerPlugin(ScrollTrigger);

function ImageFrame({ alt, className = '', imageClassName = '', src, ...props }) {
  return (
    <div
      data-image-reveal
      className={`overflow-hidden ${className}`}
      {...props}
    >
      <img
        src={src}
        alt={alt}
        loading="lazy"
        decoding="async"
        className={`h-full w-full object-cover ${imageClassName}`}
      />
    </div>
  );
}

function Eyebrow({ children, light = false }) {
  return (
    <p
      className={`text-[9px] uppercase tracking-[0.26em] sm:text-[10px] ${
        light ? 'text-ivory/65' : 'text-[#806a43]'
      }`}
    >
      {children}
    </p>
  );
}

export default function Home() {
  const contentRef = useRef(null);

  useEffect(() => {
    const content = contentRef.current;
    if (!content) return undefined;

    const prefersReducedMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)',
    ).matches;
    if (prefersReducedMotion) return undefined;

    const ctx = gsap.context(() => {
      gsap.utils.toArray('[data-reveal]').forEach((element) => {
        gsap.fromTo(
          element,
          { y: 22, autoAlpha: 0 },
          {
            y: 0,
            autoAlpha: 1,
            duration: 0.85,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: element,
              start: 'top 86%',
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
            duration: 1.15,
            ease: 'power3.inOut',
            scrollTrigger: {
              trigger: frame,
              start: 'top 88%',
              once: true,
            },
          },
        );

        gsap.fromTo(
          image,
          { scale: 1.06 },
          {
            scale: 1,
            duration: 1.5,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: frame,
              start: 'top 88%',
              once: true,
            },
          },
        );
      });
    }, content);

    return () => ctx.revert();
  }, []);

  return (
    <div className="relative bg-[#F5F2EC] text-[#20201D]">
      <main ref={contentRef}>
        <Hero />

        <section className="bg-[#FCFBF8] px-6 py-28 sm:px-12 sm:py-40 lg:px-24 lg:py-48">
          <div className="mx-auto grid max-w-[1440px] gap-10 lg:grid-cols-[0.65fr_1.35fr] lg:gap-20">
            <div data-reveal className="flex flex-col justify-between gap-10">
              <Eyebrow>The ALTEZZA philosophy</Eyebrow>
              <span className="hidden text-[10px] uppercase tracking-[0.2em] text-charcoal/45 lg:block">
                Considered living, by design
              </span>
            </div>
            <div>
              <h2
                data-reveal
                className="max-w-[1000px] font-serif text-[clamp(3.25rem,8vw,8rem)] leading-[0.91] tracking-[-0.045em]"
              >
                A home is shaped by{' '}
                <span className="italic text-[#806a43]">how it feels</span>
                <span className="text-[#806a43]">.</span>
              </h2>
              <p
                data-reveal
                className="mt-8 max-w-xl text-sm leading-7 text-charcoal/65 sm:mt-12 sm:text-base sm:leading-8"
              >
                The quiet confidence of a well-made detail. The ease of a room
                that works with you. We bring thoughtful design and purposeful
                craft together to make spaces feel entirely your own.
              </p>
            </div>
          </div>
        </section>

        <section className="bg-[#F5F2EC] px-6 py-24 sm:px-12 sm:py-32 lg:px-24 lg:py-40">
          <div className="mx-auto max-w-[1440px]">
            <div
              data-reveal
              className="mb-12 flex flex-col justify-between gap-6 sm:mb-16 sm:flex-row sm:items-end"
            >
              <div>
                <Eyebrow>Spaces with a point of view</Eyebrow>
                <h2 className="mt-5 font-serif text-[clamp(3rem,6vw,6rem)] leading-[0.94] tracking-[-0.04em]">
                  Signature spaces
                </h2>
              </div>
              <p className="max-w-xs text-sm leading-6 text-charcoal/65">
                A sense of place, made personal through material, proportion
                and detail.
              </p>
            </div>

            <div className="grid items-start gap-x-6 gap-y-10 lg:grid-cols-12 lg:gap-y-16">
              <figure className="lg:col-span-8">
                <ImageFrame
                  src="/images/kitchen-01.webp"
                  alt="Bright contemporary kitchen with pale cabinetry and a central island"
                  className="aspect-[5/4] sm:aspect-[16/10]"
                />
                <figcaption className="mt-4 flex items-baseline justify-between border-b border-charcoal/15 pb-4">
                  <span className="font-serif text-2xl sm:text-3xl">
                    The gathering place
                  </span>
                  <span className="text-[9px] uppercase tracking-[0.18em] text-charcoal/50">
                    Kitchen
                  </span>
                </figcaption>
              </figure>

              <figure className="lg:col-span-4 lg:pt-28">
                <ImageFrame
                  src="/images/signature-living.webp"
                  alt="Dining area with a dark table, warm timber and natural light"
                  className="aspect-[4/5] sm:aspect-[5/4] lg:aspect-[4/5]"
                />
                <figcaption className="mt-4 flex items-baseline justify-between border-b border-charcoal/15 pb-4">
                  <span className="font-serif text-2xl sm:text-3xl">
                    The shared table
                  </span>
                  <span className="text-[9px] uppercase tracking-[0.18em] text-charcoal/50">
                    Dining
                  </span>
                </figcaption>
              </figure>

              <figure className="lg:col-span-5 lg:col-start-2">
                <ImageFrame
                  src="/images/signature-joinery.webp"
                  alt="Quiet living room with a soft palette and considered furnishings"
                  className="aspect-[4/3] sm:aspect-[16/10]"
                />
                <figcaption className="mt-4 flex items-baseline justify-between border-b border-charcoal/15 pb-4">
                  <span className="font-serif text-2xl sm:text-3xl">
                    Room to pause
                  </span>
                  <span className="text-[9px] uppercase tracking-[0.18em] text-charcoal/50">
                    Living
                  </span>
                </figcaption>
              </figure>

              <div
                data-reveal
                className="flex items-end pb-2 lg:col-span-5 lg:col-start-8"
              >
                <p className="max-w-sm font-serif text-3xl leading-tight text-charcoal/75 sm:text-4xl">
                  Designed for the moments that make a house a home.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="relative isolate min-h-[620px] overflow-hidden bg-[#20201D] text-[#FCFBF8] sm:min-h-[760px] lg:min-h-[860px]">
          <ImageFrame
            src="/images/craftsmanship-kitchen.webp"
            alt="Modern kitchen with integrated cabinetry, a stone island and natural light"
            className="absolute inset-0"
            imageClassName="object-center"
          />
          <div
            aria-hidden="true"
            className="absolute inset-0 bg-[#171512]/35"
          />
          <div className="relative mx-auto flex min-h-[620px] max-w-[1600px] flex-col justify-between px-6 py-12 sm:min-h-[760px] sm:px-12 sm:py-16 lg:min-h-[860px] lg:px-24 lg:py-20">
            <div data-reveal>
              <Eyebrow light>Made with intention</Eyebrow>
            </div>
            <div data-reveal className="max-w-5xl">
              <h2 className="font-serif text-[clamp(3.3rem,8.3vw,8.5rem)] leading-[0.88] tracking-[-0.045em]">
                The beauty is
                <br />
                in the <span className="italic text-[#E2D5C1]">making.</span>
              </h2>
              <p className="mt-7 max-w-md text-sm leading-7 text-white/80 sm:mt-9 sm:text-base sm:leading-8">
                A considered palette. A precise edge. Materials chosen to
                reward a closer look and to feel right for years to come.
              </p>
            </div>
          </div>
        </section>

        <section className="bg-[#FCFBF8] px-6 py-24 sm:px-12 sm:py-32 lg:px-24 lg:py-40">
          <div className="mx-auto max-w-[1440px]">
            <div
              data-reveal
              className="mb-12 grid gap-6 sm:mb-16 lg:grid-cols-[1fr_auto] lg:items-end"
            >
              <div>
                <Eyebrow>Made around the way you live</Eyebrow>
                <h2 className="mt-5 font-serif text-[clamp(3rem,6vw,6rem)] leading-[0.94] tracking-[-0.04em]">
                  Considered collections
                </h2>
              </div>
              <p className="max-w-sm text-sm leading-7 text-charcoal/65">
                Thoughtful kitchens and wardrobes, tailored to the character
                of your home.
              </p>
            </div>

            <div className="grid gap-10 md:grid-cols-2 md:items-start md:gap-8 lg:gap-14">
              <Link to="/kitchens" className="group block">
                <ImageFrame
                  src="/images/kitchen-02.webp"
                  alt="Warm contemporary kitchen with timber cabinetry and a pale worktop"
                  className="aspect-[4/3] sm:aspect-[5/4]"
                  imageClassName="transition-transform duration-700 group-hover:scale-[1.025]"
                />
                <div className="mt-5 flex items-center justify-between border-b border-charcoal/20 pb-4">
                  <div>
                    <Eyebrow>Kitchens</Eyebrow>
                    <h3 className="mt-2 font-serif text-3xl sm:text-4xl">
                      A natural centre
                    </h3>
                  </div>
                  <span aria-hidden="true" className="text-lg">
                    ↗
                  </span>
                </div>
              </Link>
              <Link to="/wardrobes" className="group block md:mt-24">
                <ImageFrame
                  src="/images/collection-wardrobes.webp"
                  alt="Walk-in wardrobe with dark timber cabinetry and integrated lighting"
                  className="aspect-[4/3] sm:aspect-[5/4]"
                  imageClassName="transition-transform duration-700 group-hover:scale-[1.025]"
                />
                <div className="mt-5 flex items-center justify-between border-b border-charcoal/20 pb-4">
                  <div>
                    <Eyebrow>Wardrobes</Eyebrow>
                    <h3 className="mt-2 font-serif text-3xl sm:text-4xl">
                      Space, resolved
                    </h3>
                  </div>
                  <span aria-hidden="true" className="text-lg">
                    ↗
                  </span>
                </div>
              </Link>
            </div>
          </div>
        </section>

        <section className="overflow-hidden bg-[#D8D0C4] px-6 py-24 sm:px-12 sm:py-32 lg:px-24 lg:py-40">
          <div className="mx-auto max-w-[1440px]">
            <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-end lg:gap-16">
              <div data-reveal>
                <Eyebrow>Material, touch, time</Eyebrow>
                <h2 className="mt-5 font-serif text-[clamp(3rem,6vw,6rem)] leading-[0.92] tracking-[-0.04em]">
                  Details worth
                  <br />
                  <span className="italic">noticing.</span>
                </h2>
              </div>
              <p
                data-reveal
                className="max-w-md pb-2 text-sm leading-7 text-charcoal/70"
              >
                Natural grain, tactile stone and quiet, considered finishes:
                the elements that give a space its own character.
              </p>
            </div>

            <div className="mt-12 grid grid-cols-2 items-start gap-3 sm:mt-16 sm:gap-5 lg:grid-cols-12 lg:gap-6">
              <figure className="col-span-1 lg:col-span-4">
                <ImageFrame
                  src="/images/detail-stone.webp"
                  alt="Veined natural marble across a bathroom wall and vanity"
                  className="aspect-[4/5]"
                />
                <figcaption className="mt-3 text-[9px] uppercase tracking-[0.18em] text-charcoal/60">
                  Stone · quiet variation
                </figcaption>
              </figure>
              <figure className="col-span-1 mt-12 sm:mt-20 lg:col-span-4 lg:mt-28">
                <ImageFrame
                  src="/images/detail-wood.webp"
                  alt="Warm timber door and joinery in a softly lit interior"
                  className="aspect-[4/5]"
                />
                <figcaption className="mt-3 text-[9px] uppercase tracking-[0.18em] text-charcoal/60">
                  Wood · natural grain
                </figcaption>
              </figure>
              <figure className="col-span-2 lg:col-span-3 lg:col-start-10 lg:mt-10">
                <ImageFrame
                  src="/images/detail-finish.webp"
                  alt="Wood slat detailing and a sculptural wall light in a refined interior"
                  className="aspect-[16/10] lg:aspect-[4/5]"
                />
                <figcaption className="mt-3 text-[9px] uppercase tracking-[0.18em] text-charcoal/60">
                  Detail · light and finish
                </figcaption>
              </figure>
            </div>
          </div>
        </section>

        <section className="bg-[#FCFBF8] px-6 py-24 sm:px-12 sm:py-32 lg:px-24 lg:py-40">
          <div className="mx-auto max-w-[1440px]">
            <div
              data-reveal
              className="mb-12 grid gap-6 sm:mb-16 lg:grid-cols-[1fr_0.7fr] lg:items-end"
            >
              <div>
                <Eyebrow>A thoughtful process</Eyebrow>
                <h2 className="mt-5 max-w-3xl font-serif text-[clamp(3rem,6vw,6rem)] leading-[0.94] tracking-[-0.04em]">
                  Start with a conversation.
                </h2>
              </div>
              <p className="max-w-md text-sm leading-7 text-charcoal/65 lg:justify-self-end">
                Every home begins somewhere different. Share what matters to
                you, and we can explore the right direction together.
              </p>
            </div>
            <ol className="grid border-t border-charcoal/20 sm:grid-cols-2 lg:grid-cols-4">
              {[
                ['01', 'A first conversation'],
                ['02', 'Your space and routines'],
                ['03', 'Ideas and materials'],
                ['04', 'A considered design'],
              ].map(([number, title]) => (
                <li
                  data-reveal
                  key={number}
                  className="border-b border-charcoal/20 py-6 sm:px-5 sm:py-8 lg:border-b-0 lg:border-r lg:first:pl-0 lg:last:border-r-0"
                >
                  <span className="text-[9px] tracking-[0.2em] text-[#806a43]">
                    {number}
                   </span>
                  <h3 className="mt-6 max-w-[12rem] font-serif text-2xl leading-tight sm:text-3xl">
                    {title}
                  </h3>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section className="relative isolate min-h-[600px] overflow-hidden bg-[#20201D] text-[#FCFBF8] sm:min-h-[760px]">
          <ImageFrame
            src="/images/editorial-interior.webp"
            alt="Open-plan interior with generous daylight and considered furnishings"
            className="absolute inset-0"
          />
          <div
            aria-hidden="true"
            className="absolute inset-0 bg-[#171512]/40"
          />
          <div className="relative mx-auto flex min-h-[600px] max-w-[1600px] flex-col justify-between px-6 py-12 sm:min-h-[760px] sm:px-12 sm:py-16 lg:px-24 lg:py-20">
            <div data-reveal>
              <Eyebrow light>Spaces that speak softly</Eyebrow>
            </div>
            <div data-reveal className="max-w-5xl">
              <h2 className="font-serif text-[clamp(3.3rem,8vw,8rem)] leading-[0.9] tracking-[-0.045em]">
                Quietly
                <br />
                <span className="italic text-[#E2D5C1]">distinctive.</span>
              </h2>
              <p className="mt-7 max-w-md text-sm leading-7 text-white/80 sm:mt-9 sm:text-base sm:leading-8">
                A thoughtful balance of light, material and proportion. A
                feeling that stays with you long after you leave the room.
              </p>
            </div>
          </div>
        </section>

        <section className="relative isolate min-h-[580px] overflow-hidden bg-[#20201D] text-[#FCFBF8] sm:min-h-[720px]">
          <ImageFrame
            src="/images/enquiry-interior.webp"
            alt="Calm contemporary living room with soft upholstery and warm daylight"
            className="absolute inset-0"
          />
          <div
            aria-hidden="true"
            className="absolute inset-0 bg-[#171512]/55"
          />
          <div className="relative mx-auto flex min-h-[580px] max-w-[1600px] flex-col justify-between px-6 py-12 sm:min-h-[720px] sm:px-12 sm:py-16 lg:flex-row lg:items-end lg:px-24 lg:py-20">
            <div data-reveal className="max-w-4xl">
              <Eyebrow light>Begin with a conversation</Eyebrow>
              <h2 className="mt-6 font-serif text-[clamp(3.1rem,7.2vw,7.2rem)] leading-[0.91] tracking-[-0.045em]">
                Let’s make room
                <br />
                for what <span className="italic text-[#E2D5C1]">matters.</span>
              </h2>
              <p className="mt-6 max-w-lg text-sm leading-7 text-white/80">
                Tell us about your home and what you have in mind. We would be
                glad to hear from you.
              </p>
            </div>
            <Link
              to="/consultation"
              data-reveal
              className="mt-10 inline-flex min-h-14 w-fit items-center justify-between gap-10 bg-[#FCFBF8] px-6 text-[9px] font-medium uppercase tracking-[0.2em] text-[#20201D] transition-colors hover:bg-[#D8D0C4] sm:px-8 sm:text-[10px] lg:mb-1 lg:ml-8"
            >
              Book a consultation <span className="text-base">↗</span>
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}