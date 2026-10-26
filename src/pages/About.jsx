import {
  EditorialImage,
  EditorialLink,
  EditorialPage,
  Eyebrow,
  ImageCta,
} from '../components/EditorialPage';
import usePageMetadata from '../hooks/usePageMetadata';

export default function About() {
  usePageMetadata(
    'About',
    'Discover the ALTEZZA approach to considered kitchens, personal spaces, and thoughtful design.',
  );

  return (
    <EditorialPage>
      <section className="px-6 pb-16 pt-32 sm:px-12 sm:pb-24 sm:pt-40 lg:px-24">
        <div className="mx-auto grid max-w-[1440px] gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-end lg:gap-20">
          <div data-reveal className="pb-2">
            <Eyebrow>The ALTEZZA approach</Eyebrow>
            <h1 className="mt-6 max-w-2xl font-serif text-[clamp(3.5rem,7vw,7.5rem)] leading-[0.9] tracking-[-0.045em]">
              Thoughtful spaces,
              <br />
              <span className="italic text-[#806a43]">beautifully resolved.</span>
            </h1>
            <p className="mt-7 max-w-lg text-sm leading-7 text-charcoal/70 sm:mt-9 sm:text-base sm:leading-8">
              Considered kitchens and interiors begin with listening: to the
              character of a home, the people who live there, and the details
              that make a space feel right.
            </p>
          </div>
          <EditorialImage
            src="/images/editorial-interior.webp"
            alt="Bright living and dining room with natural light and a garden view"
            className="aspect-[4/3] lg:aspect-[5/4]"
          />
        </div>
      </section>

      <section className="bg-[#FCFBF8] px-6 py-20 sm:px-12 sm:py-28 lg:px-24 lg:py-36">
        <div className="mx-auto grid max-w-[1440px] gap-10 lg:grid-cols-[0.6fr_1.4fr] lg:gap-20">
          <div data-reveal>
            <Eyebrow>A considered point of view</Eyebrow>
          </div>
          <div>
            <h2
              data-reveal
              className="max-w-4xl font-serif text-[clamp(2.8rem,6vw,6rem)] leading-[0.94] tracking-[-0.04em]"
            >
              Good design is felt in the{' '}
              <span className="italic text-[#806a43]">everyday.</span>
            </h2>
            <div className="mt-8 grid gap-6 text-sm leading-7 text-charcoal/70 sm:mt-10 sm:grid-cols-2 sm:gap-10">
              <p data-reveal>
                In the way a room opens to the light. In storage that brings
                order without calling attention to itself. In materials and
                proportions that feel at home together.
              </p>
              <p data-reveal>
                We bring the conversation, the space, and the practical
                details into one considered direction—so the finished design
                feels personal, useful, and quietly distinctive.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="px-6 py-20 sm:px-12 sm:py-28 lg:px-24 lg:py-36">
        <div className="mx-auto grid max-w-[1440px] gap-8 md:grid-cols-12 md:items-center md:gap-10">
          <EditorialImage
            src="/images/about-interior.webp"
            alt="Carefully organized timber drawer showing considered interior storage"
            className="aspect-[4/3] md:col-span-7 md:aspect-[5/4]"
          />
          <div data-reveal className="md:col-span-4 md:col-start-9">
            <Eyebrow>Form, function, feeling</Eyebrow>
            <h2 className="mt-5 font-serif text-[clamp(2.5rem,4.5vw,4.5rem)] leading-[0.95] tracking-[-0.04em]">
              Every detail has a place.
            </h2>
            <p className="mt-6 text-sm leading-7 text-charcoal/70">
              We pay attention to how a room is used as much as how it looks.
              Layout, cabinetry, finishes, and the everyday objects they hold
              belong to the same design conversation.
            </p>
            <div className="mt-7">
              <EditorialLink to="/materials">Explore materials</EditorialLink>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#D8D0C4] px-6 py-20 sm:px-12 sm:py-28 lg:px-24 lg:py-32">
        <div className="mx-auto grid max-w-[1440px] gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center lg:gap-16">
          <div data-reveal>
            <Eyebrow>Made for the way you live</Eyebrow>
            <h2 className="mt-5 max-w-xl font-serif text-[clamp(2.8rem,5.5vw,5.5rem)] leading-[0.94] tracking-[-0.04em]">
              Craft with purpose. Space with meaning.
            </h2>
            <p className="mt-6 max-w-lg text-sm leading-7 text-charcoal/70">
              The aim is not more for its own sake, but a thoughtful balance:
              the right amount of space, a natural flow, and details that
              support everyday life.
            </p>
          </div>
          <EditorialImage
            src="/images/detail-wood.webp"
            alt="Warm timber joinery and door detail in a quietly composed interior"
            className="aspect-[4/3] lg:aspect-[5/4]"
          />
        </div>
      </section>

      <ImageCta
        image="/images/craftsmanship-kitchen.webp"
        alt="Contemporary kitchen combining integrated cabinetry, stone, and daylight"
        title={
          <>
            A more considered
            <br />
            way to come home.
          </>
        }
      />
    </EditorialPage>
  );
}
