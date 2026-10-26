import {
  EditorialImage,
  EditorialPage,
  Eyebrow,
  ImageCta,
} from '../components/EditorialPage';
import usePageMetadata from '../hooks/usePageMetadata';

const studies = [
  {
    image: '/images/kitchen-01.webp',
    alt: 'Light kitchen with pared-back cabinetry and a generous central island',
    title: 'Light and proportion',
    category: 'Kitchen study',
    className: 'md:col-span-7',
  },
  {
    image: '/images/signature-living.webp',
    alt: 'Dining space with a sculptural dark table and soft daylight',
    title: 'A place to gather',
    category: 'Interior reference',
    className: 'md:col-span-4 md:col-start-9 md:mt-28',
  },
  {
    image: '/images/detail-stone.webp',
    alt: 'Natural marble with considered veining and a quiet, pale finish',
    title: 'The character of stone',
    category: 'Material study',
    className: 'md:col-span-5 md:col-start-2',
  },
  {
    image: '/images/editorial-interior.webp',
    alt: 'Light-filled living and dining room with soft neutral furnishings',
    title: 'A sense of place',
    category: 'Architecture reference',
    className: 'md:col-span-6 md:col-start-7 md:mt-20',
  },
];

export default function Projects() {
  usePageMetadata(
    'Projects',
    'Explore interior, architectural, and material references that inform considered spaces.',
  );

  return (
    <EditorialPage>
      <section className="px-6 pb-16 pt-32 sm:px-12 sm:pb-24 sm:pt-40 lg:px-24 lg:pb-28">
        <div className="mx-auto max-w-[1440px]">
          <div className="grid gap-8 lg:grid-cols-[1fr_0.75fr] lg:items-end lg:gap-20">
            <div data-reveal>
              <Eyebrow>Spaces, materials, ideas</Eyebrow>
              <h1 className="mt-6 max-w-4xl font-serif text-[clamp(3.5rem,8vw,8rem)] leading-[0.89] tracking-[-0.045em]">
                A considered
                <br />
                <span className="italic text-[#806a43]">point of view.</span>
              </h1>
            </div>
            <p
              data-reveal
              className="max-w-lg pb-2 text-sm leading-7 text-charcoal/70 sm:text-base sm:leading-8"
            >
              A visual collection of interiors, architectural spaces, and
              materials that explore the feeling of a well-considered home.
            </p>
          </div>
          <EditorialImage
            src="/images/craftsmanship-kitchen.webp"
            alt="Contemporary kitchen interior with integrated cabinetry and a natural stone island"
            className="mt-10 aspect-[4/3] sm:mt-14 sm:aspect-[16/8]"
          />
          <p className="mt-4 max-w-2xl text-xs leading-6 text-charcoal/55">
            These photographs are visual references, not representations of
            completed ALTEZZA client projects.
          </p>
        </div>
      </section>

      <section className="bg-[#FCFBF8] px-6 py-20 sm:px-12 sm:py-28 lg:px-24 lg:py-36">
        <div className="mx-auto max-w-[1440px]">
          <div data-reveal className="mb-12 sm:mb-16">
            <Eyebrow>Details and atmosphere</Eyebrow>
            <h2 className="mt-5 font-serif text-[clamp(2.8rem,5.5vw,5.5rem)] leading-[0.94] tracking-[-0.04em]">
              A study in considered spaces.
            </h2>
          </div>
          <div className="grid gap-x-6 gap-y-12 md:grid-cols-12 md:gap-y-20">
            {studies.map((study) => (
              <figure key={study.title} className={study.className}>
                <EditorialImage
                  src={study.image}
                  alt={study.alt}
                  className="aspect-[4/3]"
                  imageClassName="transition-transform duration-700 hover:scale-[1.02]"
                />
                <figcaption className="mt-4 flex flex-wrap items-baseline justify-between gap-2 border-b border-charcoal/20 pb-3">
                  <span className="font-serif text-2xl sm:text-3xl">
                    {study.title}
                  </span>
                  <span className="text-[9px] uppercase tracking-[0.17em] text-charcoal/50">
                    {study.category}
                  </span>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      <ImageCta
        image="/images/enquiry-interior.webp"
        alt="Calm, light-filled living space with natural textures"
        title={
          <>
            Have a space
            <br />
            in mind?
          </>
        }
      />
    </EditorialPage>
  );
}
