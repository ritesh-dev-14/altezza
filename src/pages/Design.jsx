import {
  EditorialImage,
  EditorialLink,
  EditorialPage,
  Eyebrow,
  ImageCta,
} from '../components/EditorialPage';
import usePageMetadata from '../hooks/usePageMetadata';

const steps = [
  {
    number: '01',
    title: 'Start with a conversation',
    text: 'Tell us about your home, what you have in mind, and the way you want the space to work.',
  },
  {
    number: '02',
    title: 'Understand the space',
    text: 'Discuss the room, its proportions, and the routines and practical needs that shape it.',
  },
  {
    number: '03',
    title: 'Explore ideas and materials',
    text: 'Consider layouts, cabinetry, finishes, and the details that bring a direction together.',
  },
  {
    number: '04',
    title: 'Develop a considered design',
    text: 'Shape those conversations into a design direction that feels personal to your home.',
  },
];

export default function Design() {
  usePageMetadata(
    'Design',
    'Learn about the ALTEZZA design journey, from the first conversation to a considered kitchen or interior design.',
  );

  return (
    <EditorialPage>
      <section className="px-6 pb-16 pt-32 sm:px-12 sm:pb-24 sm:pt-40 lg:px-24">
        <div className="mx-auto grid max-w-[1440px] gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-end lg:gap-20">
          <div data-reveal>
            <Eyebrow>A thoughtful process</Eyebrow>
            <h1 className="mt-6 font-serif text-[clamp(3.5rem,8vw,8rem)] leading-[0.89] tracking-[-0.045em]">
              Design that
              <br />
              <span className="italic text-[#806a43]">starts with you.</span>
            </h1>
            <p className="mt-7 max-w-lg text-sm leading-7 text-charcoal/70 sm:mt-9 sm:text-base sm:leading-8">
              A good design journey is a conversation: about your home, your
              routines, and the details you want to get right.
            </p>
          </div>
          <EditorialImage
            src="/images/kitchen-02.webp"
            alt="Timber kitchen cabinetry and a pale stone worktop in natural light"
            className="aspect-[4/3] lg:aspect-[5/4]"
          />
        </div>
      </section>

      <section className="bg-[#20201D] px-6 py-20 text-white sm:px-12 sm:py-28 lg:px-24 lg:py-36">
        <div className="mx-auto max-w-[1440px]">
          <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-end lg:gap-20">
            <div data-reveal>
              <Eyebrow light>From first thoughts to a clear direction</Eyebrow>
              <h2 className="mt-5 max-w-2xl font-serif text-[clamp(2.8rem,5.5vw,5.5rem)] leading-[0.94] tracking-[-0.04em]">
                A process with room to think.
              </h2>
            </div>
            <EditorialImage
              src="/images/signature-living.webp"
              alt="Dining space with dark timber, soft daylight, and an open layout"
              className="aspect-[16/9]"
            />
          </div>
          <ol className="mt-12 grid border-t border-white/25 sm:mt-16 sm:grid-cols-2 lg:grid-cols-4">
            {steps.map((step) => (
              <li
                key={step.number}
                data-reveal
                className="border-b border-white/25 py-7 sm:px-5 sm:py-8 lg:border-b-0 lg:border-r lg:first:pl-0 lg:last:border-r-0"
              >
                <span className="text-[9px] tracking-[0.2em] text-[#D8C7AA]">
                  {step.number}
                </span>
                <h3 className="mt-5 max-w-[14rem] font-serif text-2xl leading-tight sm:text-3xl">
                  {step.title}
                </h3>
                <p className="mt-4 max-w-xs text-sm leading-6 text-white/65">
                  {step.text}
                </p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="px-6 py-20 sm:px-12 sm:py-28 lg:px-24 lg:py-36">
        <div className="mx-auto grid max-w-[1440px] gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:items-center lg:gap-20">
          <div data-reveal>
            <Eyebrow>Space planning and detail</Eyebrow>
            <h2 className="mt-5 max-w-xl font-serif text-[clamp(2.8rem,5.2vw,5.2rem)] leading-[0.94] tracking-[-0.04em]">
              The practical and the personal, together.
            </h2>
            <p className="mt-6 max-w-lg text-sm leading-7 text-charcoal/70">
              Layout and storage are considered alongside materials and
              finishes. The aim is a space that feels composed and supports
              how you use it.
            </p>
            <div className="mt-7">
              <EditorialLink to="/materials">Explore materials</EditorialLink>
            </div>
          </div>
          <EditorialImage
            src="/images/about-interior.webp"
            alt="Close view of an organized drawer and considered timber joinery"
            className="aspect-[4/3] lg:aspect-[5/4]"
          />
        </div>
      </section>

      <ImageCta
        image="/images/craftsmanship-kitchen.webp"
        alt="Modern kitchen with stone surfaces and integrated cabinetry"
        title={
          <>
            Begin with a
            <br />
            conversation.
          </>
        }
      />
    </EditorialPage>
  );
}
