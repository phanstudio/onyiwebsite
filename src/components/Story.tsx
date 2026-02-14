import aboutImg from "../assets/IMG_4589_g6a1txe59e.png";

export function Story() {
  return (
    <section
      style={{ opacity: 1, transform: "none" }}
      className="
        story-waves
        bg-[#EDC79B]/30
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
        About
      </h2>
      
      <h4 
        className="mb-7 text-gray-800 text-2xl sm:text-3xl md:text-4xl tracking-wide font-semibold"
        style={{ opacity: 1, transform: "none" }}
      >
        My Story.
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
        <article className="self-center text-left md:-mt-6 text-custom-purple space-y-4">
          <p>
            Senior Frontend Engineer that loves creating solutions and crafting amazing user experiences.
          </p>

          <p>
            My journey with Software development started in 2015, in my second year in the University of Lagos. A group
            of friends and I wanted to build a social e-commerce platform. It did not work out as planned but the
            interest was sparked, and I had picked up relevant skills like HTML, CSS and JavaScript during that period.
          </p>

          <p>
            Ever since, I have had the opportunity to work on interesting projects with focus on adding value. I kept
            improving on the fundamental skills and have picked up valuable experience along the way. After graduating
            from the University, I joined Formplus (data collection) as the first Frontend Engineer on the team.
          </p>

          <p>
            Then, I joined Kora (payment infrastructure) as a Senior Frontend Engineer at Kora, and helped build the
            foundation for the Checkout Cards product for transactions. Thereafter, I joined Talentdrop as a Founding
            Engineer to build the future of recruiting.
          </p>

          <p>
            Currently, I'm actively searching for my next role where I can keep adding value and working with amazing
            people. Feel free to reach out if you have an opening that fits my skillset or not — I'm open to learning.
          </p>
        </article>
      </article>
    </section>
  );
}
