import {
  EditorialImage,
  EditorialLink,
  EditorialPage,
  Eyebrow,
  ImageCta,
} from '../components/EditorialPage';
import usePageMetadata from '../hooks/usePageMetadata';
import image12 from '../../images/12.png';
import image14 from '../../images/14.png';

export default function Materials() {
  usePageMetadata(
    'Materials & Craftsmanship',
    'Explore the material character, finishes, and details that shape considered ALTEZZA interiors.',
  );

  return (
    <EditorialPage>
      <section className="px-6 pb-16 pt-32 sm:px-12 sm:pb-24 sm:pt-40 lg:px-24">
        <div className="mx-auto grid max-w-[1440px] gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-end lg:gap-20">
          <div data-reveal>
            <Eyebrow>Material, touch, time</Eyebrow>
            <h1 className="mt-6 font-serif text-[clamp(3.5rem,7.5vw,7.5rem)] leading-[0.89] tracking-[-0.045em]">
              The character
              <br />
              of <span className="italic text-[#806a43]">detail.</span>
            </h1>
            <p className="mt-7 max-w-lg text-sm leading-7 text-charcoal/70 sm:mt-9 sm:text-base sm:leading-8">
              Surfaces, tones, and finishes give a room its own language. The
              right choices are the ones that feel at home in yours.
            </p>
          </div>
          <EditorialImage
            src={image12}
            alt="Veined marble surface with a subtle mix of pale stone tones"
            className="aspect-[4/3] lg:aspect-[5/4]"
          />
        </div>
      </section>

      <section className="bg-[#D8D0C4] px-6 py-20 sm:px-12 sm:py-28 lg:px-24 lg:py-36">
        <div className="mx-auto max-w-[1440px]">
          <div data-reveal className="grid gap-7 lg:grid-cols-[0.8fr_1.2fr] lg:items-end lg:gap-20">
            <div>
              <Eyebrow>Material in context</Eyebrow>
              <h2 className="mt-5 max-w-xl font-serif text-[clamp(2.8rem,5.5vw,5.5rem)] leading-[0.94] tracking-[-0.04em]">
                Choose for the whole room.
              </h2>
            </div>
            <p className="max-w-lg text-sm leading-7 text-charcoal/70">
              A work surface, a cabinet finish, and the tones around them all
              shape how a kitchen feels. Looking at materials together helps
              create a more considered whole.
            </p>
          </div>
          <div className="mt-10 grid gap-5 sm:mt-14 sm:grid-cols-2 sm:gap-8">
            <figure>
              <EditorialImage
                src="/images/detail-wood.webp"
                alt="Warm timber door and woodwork with a natural grain"
                className="aspect-[4/3]"
              />
              <figcaption className="mt-4 font-serif text-2xl">
                Warmth and grain
              </figcaption>
            </figure>
            <figure className="sm:mt-20">
              <EditorialImage
                src="/images/detail-finish.webp"
                alt="Vertical timber detail and a sculptural wall light"
                className="aspect-[4/3]"
              />
              <figcaption className="mt-4 font-serif text-2xl">
                Texture and light
              </figcaption>
            </figure>
          </div>
        </div>
      </section>

      <section className="bg-[#FCFBF8] px-6 py-20 sm:px-12 sm:py-28 lg:px-24 lg:py-36">
        <div className="mx-auto grid max-w-[1440px] gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-center lg:gap-20">
          <div data-reveal>
            <Eyebrow>Function is part of the finish</Eyebrow>
            <h2 className="mt-5 max-w-xl font-serif text-[clamp(2.8rem,5.2vw,5.2rem)] leading-[0.94] tracking-[-0.04em]">
              Thought through, not added on.
            </h2>
            <p className="mt-6 max-w-lg text-sm leading-7 text-charcoal/70">
              Storage and everyday use belong in the material conversation.
              A well-resolved detail should feel considered and work naturally
              within the space.
            </p>
            <div className="mt-7">
              <EditorialLink to="/design">Explore the design process</EditorialLink>
            </div>
          </div>
          <EditorialImage
            src="/images/about-interior.webp"
            alt="Timber drawer with fitted internal storage for everyday use"
            className="aspect-[4/3] lg:aspect-[5/4]"
          />
        </div>
      </section>

      <ImageCta
        image={image14}
        alt="Light-toned contemporary kitchen with understated cabinetry"
        title={
          <>
            A thoughtful palette,
            <br />
            made personal.
          </>
        }
      />
    </EditorialPage>
  );
}
