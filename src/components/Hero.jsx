import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Hero() {
  const containerRef = useRef(null);
  const desktopVideoRef = useRef(null);
  const mobileVideoRef = useRef(null);
  const progressLineRef = useRef(null);

  const openingContentRef = useRef(null);
  const chapter1Ref = useRef(null);
  const chapter2Ref = useRef(null);
  const chapter3Ref = useRef(null);
  const finalContentRef = useRef(null);
  const scrollIndicatorRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    const desktopVideo = desktopVideoRef.current;
    const mobileVideo = mobileVideoRef.current;

    if (!container || !desktopVideo || !mobileVideo) return;

    const mobileQuery = window.matchMedia("(max-width: 767px)");
    const reducedMotionQuery = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    );

    let ctx;
    let activeVideo;
    let activeVideoHandler;
    let destroyed = false;

    const getActiveVideo = () =>
      mobileQuery.matches ? mobileVideo : desktopVideo;

    const resetContent = () => {
      gsap.set(
        [
          openingContentRef.current,
          chapter1Ref.current,
          chapter2Ref.current,
          chapter3Ref.current,
          finalContentRef.current,
          scrollIndicatorRef.current,
          progressLineRef.current,
        ],
        {
          clearProps: "opacity,transform,display",
        }
      );
    };

    const buildTimeline = () => {
      if (destroyed) return;

      const nextVideo = getActiveVideo();

      if (activeVideo === nextVideo && ctx) return;

      // Remove the previous video timeline when switching breakpoints.
      ctx?.revert();
      ctx = undefined;

      if (activeVideo && activeVideoHandler) {
        activeVideo.removeEventListener(
          "loadedmetadata",
          activeVideoHandler
        );
      }

      activeVideo = nextVideo;
      activeVideoHandler = null;

      resetContent();

      // Avoid duplicate timelines while video metadata loads.
      if (
        activeVideo.readyState < 1 ||
        !Number.isFinite(activeVideo.duration) ||
        activeVideo.duration <= 0
      ) {
        activeVideoHandler = () => buildTimeline();

        activeVideo.addEventListener(
          "loadedmetadata",
          activeVideoHandler,
          { once: true }
        );

        return;
      }

      ctx = gsap.context(() => {
        const reducedMotion = reducedMotionQuery.matches;

        if (reducedMotion) {
          gsap.set(
            [
              openingContentRef.current,
              chapter1Ref.current,
              chapter2Ref.current,
              chapter3Ref.current,
            ],
            { display: "none", opacity: 0 }
          );

          gsap.set(finalContentRef.current, {
            opacity: 1,
            y: 0,
            display: "flex",
          });

          gsap.set(scrollIndicatorRef.current, { display: "none" });

          return;
        }

        activeVideo.pause();
        activeVideo.currentTime = 0;

        const videoState = { time: 0 };

        // Mobile gets a shorter scroll distance for comfortable touch scrolling.
        const scrollMultiplier = mobileQuery.matches ? 3 : 4.5;

        const mainTl = gsap.timeline({
          scrollTrigger: {
            trigger: container,
            start: "top top",
            end: () => `+=${window.innerHeight * scrollMultiplier}`,
            pin: true,
            scrub: 0.5,
            anticipatePin: 1,
            invalidateOnRefresh: true,
            onUpdate: (self) => {
              if (progressLineRef.current) {
                gsap.set(progressLineRef.current, {
                  scaleY: self.progress,
                  transformOrigin: "top",
                });
              }
            },
          },
        });

        // Scrub the active video according to scroll progress.
        mainTl.to(
          videoState,
          {
            time: activeVideo.duration,
            ease: "none",
            duration: 1,
            onUpdate: () => {
              if (
                activeVideo.readyState >= 2 &&
                Math.abs(activeVideo.currentTime - videoState.time) > 0.03
              ) {
                activeVideo.currentTime = videoState.time;
              }
            },
          },
          0
        );

        // Opening headline
        mainTl.to(
          openingContentRef.current,
          {
            opacity: 0,
            y: -40,
            ease: "power1.in",
            duration: 0.12,
          },
          0.08
        );

        mainTl.to(
          scrollIndicatorRef.current,
          { opacity: 0, duration: 0.06 },
          0.03
        );

        // Chapter 01
        mainTl.fromTo(
          chapter1Ref.current,
          { opacity: 0, y: 30 },
          { opacity: 1, y: 0, duration: 0.08, ease: "power1.out" },
          0.18
        );

        mainTl.to(
          chapter1Ref.current,
          { opacity: 0, y: -20, duration: 0.08, ease: "power1.in" },
          0.32
        );

        // Chapter 02
        mainTl.fromTo(
          chapter2Ref.current,
          { opacity: 0, y: 30 },
          { opacity: 1, y: 0, duration: 0.08, ease: "power1.out" },
          0.4
        );

        mainTl.to(
          chapter2Ref.current,
          { opacity: 0, y: -20, duration: 0.08, ease: "power1.in" },
          0.54
        );

        // Chapter 03
        mainTl.fromTo(
          chapter3Ref.current,
          { opacity: 0, y: 30 },
          { opacity: 1, y: 0, duration: 0.08, ease: "power1.out" },
          0.62
        );

        mainTl.to(
          chapter3Ref.current,
          { opacity: 0, y: -20, duration: 0.08, ease: "power1.in" },
          0.76
        );

        // Final reveal
        mainTl.fromTo(
          finalContentRef.current,
          { opacity: 0, y: 35 },
          { opacity: 1, y: 0, duration: 0.12, ease: "power2.out" },
          0.82
        );
      }, container);

      ScrollTrigger.refresh();
    };

    const handleBreakpointChange = () => {
      // Ensure the correct video is loaded and animated after resizing.
      buildTimeline();
    };

    const handleMotionChange = () => {
      buildTimeline();
    };

    buildTimeline();

    mobileQuery.addEventListener("change", handleBreakpointChange);
    reducedMotionQuery.addEventListener("change", handleMotionChange);

    return () => {
      destroyed = true;

      mobileQuery.removeEventListener("change", handleBreakpointChange);
      reducedMotionQuery.removeEventListener("change", handleMotionChange);

      if (activeVideo && activeVideoHandler) {
        activeVideo.removeEventListener(
          "loadedmetadata",
          activeVideoHandler
        );
      }

      ctx?.revert();

      desktopVideo.pause();
      mobileVideo.pause();
    };
  }, []);

  return (
    <section
      ref={containerRef}
      className="relative isolate h-[100svh] min-h-[600px] w-full overflow-hidden bg-[#1A1715] text-[#F5F0E8] md:min-h-[650px]"
    >
      {/* Desktop video: landscape */}
      <video
        ref={desktopVideoRef}
        src="/video/altezza-kitchen-build.mp4"
        preload="auto"
        muted
        playsInline
        aria-label="Luxury modular kitchen assembling"
        className="absolute inset-0 z-0 hidden h-full w-full object-cover object-center md:block"
        style={{ pointerEvents: "none" }}
      />

      {/* Mobile video: portrait */}
      <video
        ref={mobileVideoRef}
        src="/video/altezza-kitchen-build-mobile.mp4"
        preload="auto"
        muted
        playsInline
        aria-label="Luxury modular kitchen assembling in portrait format"
        className="absolute inset-0 z-0 h-full w-full object-cover object-center md:hidden"
        style={{ pointerEvents: "none" }}
      />

      {/* Cinematic overlays */}
      <div className="pointer-events-none absolute inset-0 z-[1] bg-black/15" />

      <div className="pointer-events-none absolute inset-0 z-[1] bg-gradient-to-r from-black/80 via-black/40 to-transparent md:w-4/5" />

      <div className="pointer-events-none absolute inset-0 z-[1] bg-gradient-to-t from-black/70 via-transparent to-black/30" />

      {/* Vertical progress indicator */}
      <div className="pointer-events-none absolute left-6 top-1/2 z-20 hidden h-32 w-px -translate-y-1/2 bg-white/20 sm:block lg:left-12">
        <div
          ref={progressLineRef}
          className="h-full w-full origin-top scale-y-0 bg-[#E2D5C1]"
        />
      </div>

      {/* Opening frame */}
      <div
        ref={openingContentRef}
        className="pointer-events-none absolute inset-0 z-10 flex items-center justify-start px-6 sm:px-16 lg:px-24"
      >
        <div className="pointer-events-auto max-w-2xl pt-8 md:pt-10">
          <p className="mb-4 text-[10px] font-medium uppercase tracking-[0.3em] text-[#E2D5C1] sm:tracking-[0.35em] sm:text-xs">
            Altezza / Bespoke Living
          </p>

          <h1 className="font-serif text-[clamp(2.6rem,8vw,5.5rem)] font-normal leading-[1.02] tracking-[-0.035em] text-[#F5F0E8] md:text-[clamp(2.5rem,5.8vw,5.5rem)]">
            A SPACE THAT
            <br />
            <span className="italic text-[#E2D5C1]">FEELS LIKE YOU.</span>
          </h1>

          <p className="mt-5 max-w-md text-xs font-light leading-relaxed tracking-wide text-white/80 sm:mt-6 sm:text-sm">
            Thoughtfully engineered kitchens and wardrobes, designed for the
            way you live.
          </p>
        </div>
      </div>

      {/* Story chapters */}
      <div className="pointer-events-none absolute inset-0 z-10 flex items-center justify-start px-6 sm:px-16 lg:px-24">
        <div
          ref={chapter1Ref}
          className="absolute max-w-[85%] opacity-0 will-change-transform sm:max-w-md"
        >
          <span className="mb-3 block text-[9px] font-semibold uppercase tracking-[0.25em] text-[#E2D5C1] sm:text-[10px] sm:tracking-[0.35em]">
            01 / The Foundation
          </span>

          <h2 className="font-serif text-3xl font-light leading-snug text-[#F5F0E8] sm:text-4xl">
            Every detail begins
            <br />
            with intention.
          </h2>
        </div>

        <div
          ref={chapter2Ref}
          className="absolute max-w-[85%] opacity-0 will-change-transform sm:max-w-md"
        >
          <span className="mb-3 block text-[9px] font-semibold uppercase tracking-[0.25em] text-[#E2D5C1] sm:text-[10px] sm:tracking-[0.35em]">
            02 / The Craft
          </span>

          <h2 className="font-serif text-3xl font-light leading-snug text-[#F5F0E8] sm:text-4xl">
            Made around the
            <br />
            way you live.
          </h2>
        </div>

        <div
          ref={chapter3Ref}
          className="absolute max-w-[85%] opacity-0 will-change-transform sm:max-w-md"
        >
          <span className="mb-3 block text-[9px] font-semibold uppercase tracking-[0.25em] text-[#E2D5C1] sm:text-[10px] sm:tracking-[0.35em]">
            03 / The Finish
          </span>

          <h2 className="font-serif text-3xl font-light leading-snug text-[#F5F0E8] sm:text-4xl">
            Material. Texture.
            <br />
            Precision.
          </h2>
        </div>
      </div>

      {/* Final reveal */}
      <div
        ref={finalContentRef}
        className="pointer-events-none absolute inset-0 z-10 flex items-end justify-start px-6 pb-20 opacity-0 will-change-transform sm:px-16 sm:pb-20 lg:px-24"
      >
        <div className="pointer-events-auto max-w-2xl">
          <p className="mb-3 text-[9px] font-semibold uppercase tracking-[0.25em] text-[#E2D5C1] sm:text-[10px] sm:tracking-[0.35em]">
            Uncompromising Excellence
          </p>

          <h2 className="font-serif text-[clamp(2rem,7vw,4.5rem)] font-normal leading-[1.02] tracking-[-0.03em] text-[#F5F0E8] md:text-[clamp(2.2rem,4.8vw,4.5rem)]">
            A NEW PERSPECTIVE
            <br />
            <span className="italic text-[#E2D5C1]">ON LIVING.</span>
          </h2>

          <div className="mt-6 flex flex-col gap-3 sm:mt-8 sm:flex-row sm:items-center sm:gap-4">
            <Link
              to="/kitchens"
              className="inline-flex min-h-[48px] items-center justify-center gap-5 bg-[#F5F0E8] px-6 text-[9px] font-semibold uppercase tracking-[0.18em] text-[#1A1715] transition-colors hover:bg-[#E2D5C1] sm:px-8 sm:text-[10px]"
            >
              Explore our kitchens <span>↗</span>
            </Link>

            <Link
              to="/consultation"
              className="inline-flex min-h-[48px] items-center justify-center gap-5 border border-white/50 px-6 text-[9px] font-medium uppercase tracking-[0.18em] text-white transition-colors hover:bg-white/10 sm:px-8 sm:text-[10px]"
            >
              Book a consultation <span>↗</span>
            </Link>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div
        ref={scrollIndicatorRef}
        className="pointer-events-none absolute bottom-7 left-0 right-0 z-20 flex justify-center sm:bottom-8"
      >
        <span className="text-[9px] uppercase tracking-[0.3em] text-white/70">
          Scroll to explore ↓
        </span>
      </div>
    </section>
  );
}