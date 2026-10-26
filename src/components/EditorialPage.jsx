import { useRef } from 'react';
import { Link } from 'react-router-dom';
import useEditorialMotion from '../hooks/useEditorialMotion';

export function EditorialPage({ children, className = '' }) {
  const pageRef = useRef(null);
  useEditorialMotion(pageRef);

  return (
    <main
      ref={pageRef}
      className={`bg-[#F5F2EC] text-[#20201D] ${className}`}
    >
      {children}
    </main>
  );
}

export function Eyebrow({ children, light = false, className = '' }) {
  return (
    <p
      className={`text-[9px] uppercase tracking-[0.25em] sm:text-[10px] ${
        light ? 'text-white/70' : 'text-[#806a43]'
      } ${className}`}
    >
      {children}
    </p>
  );
}

export function EditorialImage({
  alt,
  className = '',
  imageClassName = '',
  src,
  loading = 'lazy',
}) {
  return (
    <div data-image-reveal className={`overflow-hidden ${className}`}>
      <img
        src={src}
        alt={alt}
        loading={loading}
        decoding="async"
        className={`h-full w-full object-cover ${imageClassName}`}
      />
    </div>
  );
}

export function EditorialLink({ children, to = '/consultation', light = false }) {
  return (
    <Link
      to={to}
      className={`group inline-flex min-h-12 items-center gap-8 border-b pb-2 text-[9px] uppercase tracking-[0.2em] transition-colors sm:text-[10px] ${
        light
          ? 'border-white/50 text-white hover:text-[#E2D5C1]'
          : 'border-charcoal/40 text-charcoal hover:text-[#806a43]'
      }`}
    >
      {children}
      <span
        aria-hidden="true"
        className="text-sm transition-transform duration-300 group-hover:translate-x-1"
      >
        ↗
      </span>
    </Link>
  );
}

export function ImageCta({
  alt,
  eyebrow = 'Begin with a conversation',
  image,
  title,
}) {
  return (
    <section className="relative isolate min-h-[500px] overflow-hidden bg-[#20201D] text-white sm:min-h-[620px]">
      <EditorialImage
        src={image}
        alt={alt}
        className="absolute inset-0"
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[#171512]/55"
      />
      <div className="relative mx-auto flex min-h-[500px] max-w-[1600px] flex-col justify-between px-6 py-12 sm:min-h-[620px] sm:px-12 sm:py-16 lg:flex-row lg:items-end lg:px-24">
        <div data-reveal className="max-w-4xl">
          <Eyebrow light>{eyebrow}</Eyebrow>
          <h2 className="mt-6 font-serif text-[clamp(3rem,7vw,7rem)] leading-[0.92] tracking-[-0.045em]">
            {title}
          </h2>
        </div>
        <div data-reveal className="mt-10 lg:mb-2 lg:ml-8">
          <EditorialLink light>Book a consultation</EditorialLink>
        </div>
      </div>
    </section>
  );
}
