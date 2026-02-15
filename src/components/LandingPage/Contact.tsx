import aboutImg from "../../assets/IMG_4590_mo3fje619b.png";

export function Contact() {
  return (
    <section
      style={{ opacity: 1, transform: "none" }}
      className="
        story-waves
        bg-custom-orange bg-opacity-10
        px-6 sm:px-10 md:px-24 lg:px-28
        py-24 md:pt-14 mb-pb-20
        text-center
      "
    >
      {/* Header */}
      <h2 
        className="mb-3.5 text-gray-600 tracking-wide uppercase font-semibold text-base"
        style={{ opacity: 1, transform: "none" }}
      >
        Contact
      </h2>
      
      <h4 
        className="mb-7 text-2xl sm:text-3xl md:text-4xl tracking-wide font-semibold text-custom-purple"
        style={{ opacity: 1, transform: "none" }}
      >
        Are you ready to work with me?
      </h4>

      {/* Main Content Grid */}
      <article className="py-6 my-8 md:grid md:grid-cols-2 gap-x-8">
        {/* Image Side */}
        {/* <article className="self-center w-3/4 mx-auto mb-4 md:mb-0 md:mx-0 md:w-full lg:bg-green-500"> */}
        <article className="self-center w-3/4 mx-auto mb-4 md:mb-0 md:mx-0 md:w-full lg:w-9/12">
          <img 
            src={aboutImg} 
            alt="about illustration"
            className="w-full h-auto"
          />
        </article>

        {/* Text Side */}
        <article className="self-center md:text-left text-center md:-mt-6 text-custom-purple space-y-2 text-base">
          <p>I'm actively open to new opportunities and requests.</p>
          <p>If you have a question, or just want to say hi, I'll try my best to get back to you.</p>
          <div style={{ opacity: 1, transform: "none" }}>
            <a href="mailto:adeola.adeyemoj@gmail.com">
              <button
                type="button"
                className="border border-solid font-semibold bg-transparent cursor-pointer rounded-sm px-5 py-3.5 text-custom-purple border-custom-purple hover:text-indigo-900 hover:border-indigo-900"
                aria-label="Get in touch"
              >
                Get in touch
              </button>
            </a>
          </div>
        </article>
      </article>
    </section>
  );
}
