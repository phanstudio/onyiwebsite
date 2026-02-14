import heroImg from "../../assets/hero-image.png";
import "./css/Hero.css"

export function Hero() {
  return (
    <section
      className="px-6 sm:px-10 md:px-24 lg:px-28 py-14 md:py-24"
      style={{ opacity: 1, transform: "none" }}
    >
      <div className="md:grid md:gap-8 md:grid-cols-5 md:items-center">
        {/* Mobile Image */}
        <article className="relative block w-full mb-6 md:hidden hero-blob-container">
          <article className="w-1/2 mx-auto text-center md:max-w-xs">
            <img alt="hero illustration" src={heroImg} className="w-full h-auto hero-drop-shadow" />
          </article>
        </article>

        {/* Text */}
        <article className="py-6 text-center md:text-left md:col-start-1 md:col-end-4">
        <h2 
            className="mb-3.5 text-gray-600 tracking-wide uppercase font-semibold text-base"
            style={{ opacity: 1, transform: "none" }}
          >
            Hello, I'm Adeola Adeyemo
          </h2>

          <h1 
            className="mb-4 text-4xl md:text-5xl lg:text-6xl md:leading-tight"
            style={{ opacity: 1, transform: "none" }}
          >
            I build Web Interfaces.
          </h1>

          <p 
            className="mb-4 font-semibold"
            style={{ opacity: 1, transform: "none" }}
          >
            Senior Frontend / Founding Engineer
          </p>

          <div style={{ opacity: 1, transform: "none" }}>
            <a href="mailto:adeola.adeyemoj@gmail.com">
              <button
                type="button"
                className="border border-solid font-semibold bg-transparent cursor-pointer rounded-sm px-5 py-3.5 text-[#6B46C1] border-[#6B46C1] hover:text-indigo-900 hover:border-indigo-900"
                aria-label="Get in touch"
              >
                Get in touch
              </button>
            </a>
          </div>
        </article>

        {/* Desktop Image */}
        <article className="hidden md:col-start-4 md:col-end-6 md:flex md:justify-end md:items-end">
          <div className="relative hero-blob-container w-full max-w-sm">
            <img alt="hero illustration" src={heroImg} className="w-full h-auto hero-drop-shadow" />
          </div>
        </article>
      </div>

    </section>
  );
}
