import {
  EditorialImage,
  EditorialLink,
  EditorialPage,
  Eyebrow,
  ImageCta,
} from '../components/EditorialPage';
import usePageMetadata from '../hooks/usePageMetadata';
import image4 from '../../images/4.png';
import image5 from '../../images/5.png';
import image6 from '../../images/6.png';
import image7 from '../../images/7.png';

export default function Kitchens() {
  usePageMetadata(
    'Kitchens',
    'Explore considered ALTEZZA kitchen design, cabinetry, space planning, and finishes.',
  );

  return (
    <EditorialPage>
      <section className="px-6 pb-14 pt-32 sm:px-12 sm:pb-20 sm:pt-40 lg:px-24">
        <div className="mx-auto grid max-w-[1440px] gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-end lg:gap-20">
          <div data-reveal>
            <Eyebrow>Made for everyday rituals</Eyebrow>
            <h1 className="mt-6 font-serif text-[clamp(3.5rem,8vw,8rem)] leading-[0.89] tracking-[-0.045em]">
              Kitchens,
              <br />
              <span className="italic text-[#806a43]">considered.</span>
            </h1>
            <p className="mt-7 max-w-lg text-sm leading-7 text-charcoal/70 sm:mt-9 sm:text-base sm:leading-8">
              A thoughtful foundation for the way you cook, gather, and move
              through the day. Designed around your home, not a template.
            </p>
            <div className="mt-7">
              <EditorialLink to="/design">Discover the design process</EditorialLink>
            </div>
          </div>
          <EditorialImage
            src={image4}
            alt="Modern kitchen with integrated cabinetry, a stone island, and natural light"
            className="aspect-[4/3] lg:aspect-[5/4]"
          />
        </div>
      </section>

      <section className="bg-[#20201D] px-6 py-16 text-white sm:px-12 sm:py-20 lg:px-24">
        <div
          data-reveal
          className="mx-auto grid max-w-[1440px] gap-6 lg:grid-cols-[0.6fr_1.4fr] lg:items-start lg:gap-20"
        >
          <Eyebrow light>A room that works beautifully</Eyebrow>
          <p className="max-w-4xl font-serif text-[clamp(2rem,4.5vw,4.5rem)] leading-[1.02] tracking-[-0.035em]">
            From the first sketch to the last considered finish, the kitchen
            should feel like it belongs to your home.
          </p>
        </div>
      </section>

      <section className="px-6 py-20 sm:px-12 sm:py-28 lg:px-24 lg:py-36">
        <div className="mx-auto max-w-[1440px]">
          <div data-reveal className="mb-10 max-w-2xl sm:mb-14">
            <Eyebrow>Find your direction</Eyebrow>
            <h2 className="mt-5 font-serif text-[clamp(2.8rem,5.5vw,5.5rem)] leading-[0.94] tracking-[-0.04em]">
              A kitchen shaped around you.
            </h2>
          </div>
          <div className="grid gap-8 md:grid-cols-12 md:items-start md:gap-10">
            <figure className="md:col-span-7">
              <EditorialImage
                src={image5}
                alt="Light-toned kitchen with clean cabinetry and an island for gathering"
                className="aspect-[4/3] sm:aspect-[5/4]"
              />
              <figcaption className="mt-4 flex items-center justify-between border-b border-charcoal/20 pb-3">
                <span className="font-serif text-2xl sm:text-3xl">
                  Light, space, and flow
                </span>
                <span className="text-[9px] uppercase tracking-[0.17em] text-charcoal/55">
                  Interior study
                </span>
              </figcaption>
            </figure>
            <div className="md:col-span-4 md:col-start-9 md:pt-24">
              <EditorialImage
                src={image6}
                alt="Warm timber cabinetry paired with a pale kitchen worktop"
                className="aspect-[4/3] md:aspect-[4/5]"
              />
              <div data-reveal className="mt-6">
                <Eyebrow>Materials in conversation</Eyebrow>
                <p className="mt-3 max-w-md text-sm leading-7 text-charcoal/70">
                  Wood tones, work surfaces, and cabinetry finishes can change
                  the character of a kitchen. We consider them together with
                  your space and the way you want to use it.
                </p>
                <div className="mt-5">
                  <EditorialLink to="/materials">Explore materials</EditorialLink>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#FCFBF8] px-6 py-20 sm:px-12 sm:py-28 lg:px-24 lg:py-32">
        <div className="mx-auto grid max-w-[1440px] gap-8 lg:grid-cols-[1fr_1fr] lg:items-center lg:gap-20">
          <div data-reveal>
            <Eyebrow>Beyond the worktop</Eyebrow>
            <h2 className="mt-5 max-w-xl font-serif text-[clamp(2.8rem,5.5vw,5.5rem)] leading-[0.94] tracking-[-0.04em]">
              Consider the whole room.
            </h2>
            <p className="mt-6 max-w-lg text-sm leading-7 text-charcoal/70">
              Storage, circulation, light, and the connection to adjoining
              spaces all shape a kitchen that feels natural to live in.
              Planning begins with understanding those relationships.
            </p>
            <div className="mt-7">
              <EditorialLink to="/design">How we work</EditorialLink>
            </div>
          </div>
          <EditorialImage
            src="/images/signature-living.webp"
            alt="Open dining space with natural light and warm timber details"
            className="aspect-[4/3]"
          />
        </div>
      </section>

      <ImageCta
        image={image7}
        alt="A softly lit contemporary living space with calm natural materials"
        title={
          <>
            Let’s find the
            <br />
            right direction.
          </>
        }
      />
    </EditorialPage>
  );
}
