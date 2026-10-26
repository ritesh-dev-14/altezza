import { useState } from 'react';
import {
  EditorialImage,
  EditorialPage,
  Eyebrow,
} from '../components/EditorialPage';
import usePageMetadata from '../hooks/usePageMetadata';

export default function Contact() {
  const [submissionError, setSubmissionError] = useState('');

  usePageMetadata(
    'Contact',
    'Start a conversation about a considered kitchen, wardrobe, or interior design.',
  );

  function handleSubmit(event) {
    event.preventDefault();
    setSubmissionError(
      'This enquiry form is not connected to a submission service. Your details have not been sent.',
    );
  }

  return (
    <EditorialPage>
      <section className="px-6 pb-16 pt-32 sm:px-12 sm:pb-24 sm:pt-40 lg:px-24">
        <div className="mx-auto grid max-w-[1440px] gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-end lg:gap-20">
          <div data-reveal>
            <Eyebrow>Start a conversation</Eyebrow>
            <h1 className="mt-6 font-serif text-[clamp(3.5rem,8vw,8rem)] leading-[0.89] tracking-[-0.045em]">
              Tell us about
              <br />
              <span className="italic text-[#806a43]">your space.</span>
            </h1>
            <p className="mt-7 max-w-lg text-sm leading-7 text-charcoal/70 sm:mt-9 sm:text-base sm:leading-8">
              Every project begins somewhere different. Share a little about
              your home and what you have in mind.
            </p>
          </div>
          <EditorialImage
            src="/images/enquiry-interior.webp"
            alt="Quiet contemporary living room with warm natural materials"
            className="aspect-[4/3] lg:aspect-[5/4]"
          />
        </div>
      </section>

      <section className="bg-[#FCFBF8] px-6 py-20 sm:px-12 sm:py-28 lg:px-24 lg:py-36">
        <div className="mx-auto grid max-w-[1440px] gap-12 lg:grid-cols-[1.15fr_0.55fr] lg:gap-24">
          <div>
            <div data-reveal className="mb-8 sm:mb-10">
              <Eyebrow>A few details to begin</Eyebrow>
              <h2 className="mt-4 font-serif text-4xl leading-none tracking-[-0.035em] sm:text-5xl">
                Your project
              </h2>
            </div>
            <form
              onSubmit={handleSubmit}
              className="grid gap-x-6 gap-y-6 sm:grid-cols-2"
            >
              <div>
                <label
                  htmlFor="name"
                  className="mb-2 block text-[9px] uppercase tracking-[0.18em] text-charcoal/65"
                >
                  Name
                </label>
                <input
                  autoComplete="name"
                  className="min-h-12 w-full border-0 border-b border-charcoal/25 bg-transparent px-0 text-sm outline-none transition-colors placeholder:text-charcoal/35 focus:border-[#806a43] focus:ring-0"
                  id="name"
                  name="name"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="mb-2 block text-[9px] uppercase tracking-[0.18em] text-charcoal/65"
                >
                  Email
                </label>
                <input
                  autoComplete="email"
                  className="min-h-12 w-full border-0 border-b border-charcoal/25 bg-transparent px-0 text-sm outline-none transition-colors placeholder:text-charcoal/35 focus:border-[#806a43] focus:ring-0"
                  id="email"
                  name="email"
                  required
                  type="email"
                />
              </div>
              <div>
                <label
                  htmlFor="phone"
                  className="mb-2 block text-[9px] uppercase tracking-[0.18em] text-charcoal/65"
                >
                  Phone <span className="normal-case tracking-normal">(optional)</span>
                </label>
                <input
                  autoComplete="tel"
                  className="min-h-12 w-full border-0 border-b border-charcoal/25 bg-transparent px-0 text-sm outline-none transition-colors placeholder:text-charcoal/35 focus:border-[#806a43] focus:ring-0"
                  id="phone"
                  name="phone"
                  type="tel"
                />
              </div>
              <div>
                <label
                  htmlFor="city"
                  className="mb-2 block text-[9px] uppercase tracking-[0.18em] text-charcoal/65"
                >
                  City
                </label>
                <input
                  autoComplete="address-level2"
                  className="min-h-12 w-full border-0 border-b border-charcoal/25 bg-transparent px-0 text-sm outline-none transition-colors placeholder:text-charcoal/35 focus:border-[#806a43] focus:ring-0"
                  id="city"
                  name="city"
                />
              </div>
              <div className="sm:col-span-2">
                <label
                  htmlFor="project"
                  className="mb-2 block text-[9px] uppercase tracking-[0.18em] text-charcoal/65"
                >
                  What are you considering?
                </label>
                <select
                  className="min-h-12 w-full border-0 border-b border-charcoal/25 bg-transparent px-0 text-sm text-charcoal outline-none transition-colors focus:border-[#806a43] focus:ring-0"
                  defaultValue=""
                  id="project"
                  name="project"
                  required
                >
                  <option disabled value="">
                    Select an area
                  </option>
                  <option value="kitchen">Kitchen</option>
                  <option value="wardrobe">Wardrobe</option>
                  <option value="both">Kitchen and wardrobe</option>
                  <option value="other">Another interior space</option>
                </select>
              </div>
              <div className="sm:col-span-2">
                <label
                  htmlFor="requirements"
                  className="mb-2 block text-[9px] uppercase tracking-[0.18em] text-charcoal/65"
                >
                  A little about your project
                </label>
                <textarea
                  className="min-h-28 w-full resize-y border-0 border-b border-charcoal/25 bg-transparent px-0 py-3 text-sm leading-6 outline-none transition-colors placeholder:text-charcoal/35 focus:border-[#806a43] focus:ring-0"
                  id="requirements"
                  name="requirements"
                  placeholder="Your space, ideas, or questions"
                  required
                  rows="3"
                />
              </div>
              <p
                aria-live="polite"
                className="text-xs leading-6 text-[#8a3d2d] sm:col-span-2"
                id="form-status"
                role={submissionError ? 'alert' : undefined}
              >
                {submissionError}
              </p>
              <div className="sm:col-span-2">
                <p className="mb-4 max-w-lg text-xs leading-6 text-charcoal/55">
                  This website does not have a connected enquiry service yet.
                  Submitting this form will not send your details.
                </p>
                <button
                  className="inline-flex min-h-14 items-center gap-8 bg-[#20201D] px-7 text-[9px] font-medium uppercase tracking-[0.2em] text-white transition-colors hover:bg-[#49453f] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#806a43] sm:text-[10px]"
                  type="submit"
                >
                  Send enquiry <span aria-hidden="true" className="text-base">↗</span>
                </button>
              </div>
            </form>
          </div>

          <aside className="lg:pt-24">
            <EditorialImage
              src="/images/detail-wood.webp"
              alt="Close view of warm timber grain and a carefully finished edge"
              className="aspect-[4/3] lg:aspect-[4/5]"
            />
            <p className="mt-4 max-w-sm text-xs leading-6 text-charcoal/55">
              The details that matter most are a good place to begin.
            </p>
          </aside>
        </div>
      </section>
    </EditorialPage>
  );
}
