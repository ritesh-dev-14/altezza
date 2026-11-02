import {
  EditorialImage,
  EditorialLink,
  EditorialPage,
  Eyebrow,
  ImageCta,
} from '../components/EditorialPage';
import usePageMetadata from '../hooks/usePageMetadata';
import image8 from '../../images/8.png';
import image9 from '../../images/9.png';
import image10 from '../../images/10.png';

export default function Wardrobes() {
  usePageMetadata(
    'Wardrobes',
    'Explore considered ALTEZZA wardrobe design and tailored storage for your home.',
  );

  return (
    <EditorialPage>
      <section className="px-6 pb-16 pt-32 sm:px-12 sm:pb-24 sm:pt-40 lg:px-24">
        <div className="mx-auto max-w-[1440px]">
          <div className="grid gap-10 lg:grid-cols-[1fr_0.85fr] lg:items-end lg:gap-20">
            <div data-reveal className="max-w-3xl">
              <Eyebrow>Room for what matters</Eyebrow>
              <h1 className="mt-6 font-serif text-[clamp(3.5rem,8vw,8rem)] leading-[0.89] tracking-[-0.045em]">
                Wardrobes,
                <br />
                <span className="italic text-[#806a43]">thoughtfully made.</span>
              </h1>
            </div>
            <p
              data-reveal
              className="max-w-lg pb-2 text-sm leading-7 text-charcoal/70 sm:text-base sm:leading-8"
            >
              Considered storage, tailored to your space, your belongings, and
              the rhythm of your day.
            </p>
          </div>
          <EditorialImage
            src={image8}
            alt="Walk-in wardrobe with tailored dark timber cabinetry and integrated lighting"
            className="mt-10 aspect-[4/3] sm:mt-14 sm:aspect-[16/9]"
          />
        </div>
      </section>

      <section className="bg-[#FCFBF8] px-6 py-20 sm:px-12 sm:py-28 lg:px-24 lg:py-36">
        <div className="mx-auto grid max-w-[1440px] gap-10 lg:grid-cols-[0.75fr_1.25fr] lg:gap-20">
          <div data-reveal>
            <Eyebrow>Storage with a sense of order</Eyebrow>
            <h2 className="mt-5 font-serif text-[clamp(2.7rem,5.5vw,5.5rem)] leading-[0.94] tracking-[-0.04em]">
              A place for everything.
            </h2>
          </div>
          <div className="grid gap-7 sm:grid-cols-[1.1fr_0.9fr] sm:items-center sm:gap-10">
            <EditorialImage
              src="/images/about-interior.webp"
              alt="An open timber drawer showing integrated storage and careful organization"
              className="aspect-[4/3]"
            />
            <p
              data-reveal
              className="max-w-sm text-sm leading-7 text-charcoal/70"
            >
              The best storage works quietly. A considered arrangement makes
              room for what you use and helps the whole space feel settled.
            </p>
          </div>
        </div>
      </section>

      <section className="px-6 py-20 sm:px-12 sm:py-28 lg:px-24 lg:py-36">
        <div className="mx-auto grid max-w-[1440px] gap-8 lg:grid-cols-12 lg:items-center lg:gap-10">
          <div data-reveal className="lg:col-span-4">
            <Eyebrow>Designed around your room</Eyebrow>
            <h2 className="mt-5 font-serif text-[clamp(2.7rem,5vw,5rem)] leading-[0.94] tracking-[-0.04em]">
              Made to fit the way you live.
            </h2>
            <p className="mt-6 text-sm leading-7 text-charcoal/70">
              Room dimensions, daily habits, and the details you want close at
              hand all guide the design conversation.
            </p>
            <div className="mt-7">
              <EditorialLink to="/design">Explore the design process</EditorialLink>
            </div>
          </div>
          <EditorialImage
            src="/images/material-01.webp"
            alt="Warm wood-lined wardrobe interior with considered hanging and storage space"
            className="aspect-[4/3] lg:col-span-7 lg:col-start-6 lg:aspect-[5/4]"
          />
        </div>
      </section>

      <section className="bg-[#D8D0C4] px-6 py-20 sm:px-12 sm:py-28 lg:px-24">
        <div className="mx-auto grid max-w-[1440px] gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center lg:gap-16">
          <EditorialImage
            src={image9}
            alt="Warm vertical timber detailing and a sculptural wall light"
            className="aspect-[4/3]"
          />
          <div data-reveal>
            <Eyebrow>Quiet details, lasting character</Eyebrow>
            <h2 className="mt-5 font-serif text-[clamp(2.7rem,5vw,5rem)] leading-[0.94] tracking-[-0.04em]">
              A finish that feels at home.
            </h2>
            <p className="mt-6 max-w-lg text-sm leading-7 text-charcoal/70">
              Tone, texture, and proportion bring a wardrobe into conversation
              with its surroundings. Material choices are considered as part
              of the room, not in isolation.
            </p>
            <div className="mt-7">
              <EditorialLink to="/materials">Materials and detail</EditorialLink>
            </div>
          </div>
        </div>
      </section>

      <ImageCta
        image={image10}
        alt="Softly lit living room with neutral upholstery and a calm palette"
        title={
          <>
            Make room for
            <br />
            what matters.
          </>
        }
      />
    </EditorialPage>
  );
}
