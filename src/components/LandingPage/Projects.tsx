const projects = [
  {
    title: "Neegma (In Progress)",
    href: "https://www.tryneegma.com",
    img: "https://res.cloudinary.com/dzpntisxj/image/upload/v1710342550/portfolio/neegma_nfb8oy.png",
    description:
      "AI powered online playground for interactive games. Explore the 4 pilot games",
    tags: ["OpenAI", "Next JS", "Supabase", "Typescript", "React Query", "2023", "Vertex AI"],
    imageStyle: { transform: "scale(1.00161) translateZ(0px)" },
  },
  {
    title: "PDF Builder",
    href: "https://pdf-builder-gamma.vercel.app/",
    img: "https://res.cloudinary.com/dzpntisxj/image/upload/v1618126150/portfolio/pdf-builder_elp71r.png",
    description:
      "This is a Drag and Drop Builder that enables anyone to create custom PDF forms that can be customized, filled online, and downloaded locally",
    tags: [
      "React JS",
      "React PDF",
      "Node JS",
      "Gulp",
      "Emotion",
      "Webpack",
      "Redux",
      "React Beautiful DND",
      "2020",
    ],
    imageStyle: { transform: "none" },
  },
  {
    title: "Thribe-X",
    href: "https://thribe-x.vercel.app/",
    img: "https://res.cloudinary.com/dzpntisxj/image/upload/v1690300510/portfolio/thribe-x_qovwrv.jpg",
    description:
      "This is a youth church web application. Visitors can generate unique event banners with personal pictures and there's also a linktree replica application for announcements.",
    tags: [
      "Next JS",
      "Cloudinary",
      "Supabase",
      "React Query",
      "Typescript",
      "Personal Illustrations",
      "2023",
    ],
    github: "https://github.com/DeolaJ/thribe-x",
  },
];

function IntrinsicImage({ src, alt }) {
  // This replicates Next.js "intrinsic" layout behavior:
  // - outer span is relative + max-width
  // - inner span provides intrinsic ratio (640x345)
  // - img is absolute and fills the container
  return (
    <span
      style={{
        boxSizing: "border-box",
        display: "inline-block",
        overflow: "hidden",
        width: "initial",
        height: "initial",
        background: "none",
        opacity: 1,
        border: 0,
        margin: 0,
        padding: 0,
        position: "relative",
        maxWidth: "100%",
      }}
    >
      <span
        style={{
          boxSizing: "border-box",
          display: "block",
          width: "initial",
          height: "initial",
          background: "none",
          opacity: 1,
          border: 0,
          margin: 0,
          padding: 0,
          maxWidth: "100%",
        }}
      >
        {/* This is the ratio placeholder (640x345) */}
        <img
          alt=""
          aria-hidden="true"
          src="data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%27640%27%20height=%27345%27/%3e"
          style={{
            display: "block",
            maxWidth: "100%",
            width: "initial",
            height: "initial",
            background: "none",
            opacity: 1,
            border: 0,
            margin: 0,
            padding: 0,
          }}
        />
      </span>

      {/* Actual image fills the box */}
      <img
        alt={alt}
        src={src}
        decoding="async"
        loading="lazy"
        className="object-cover object-top w-full rounded-lg shadow-card"
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          bottom: 0,
          right: 0,
          boxSizing: "border-box",
          padding: 0,
          border: "none",
          margin: "auto",
          display: "block",
          width: 0,
          height: 0,
          minWidth: "100%",
          maxWidth: "100%",
          minHeight: "100%",
          maxHeight: "100%",
        }}
      />
    </span>
  );
}

export function Projects() {
  return (
    <section
      className="px-6 sm:px-10 md:px-24 lg:px-28 py-10 css-1k0gjmv eg35vhw0"
      style={{ opacity: 1, transform: "none" }}
    >
      <h2
        className="mb-3.5 text-gray-600 tracking-wide uppercase font-semibold text-base"
        style={{ opacity: 1, transform: "none" }}
      >
        Projects
      </h2>

      <h4
        className="mb-7 text-gray-800 text-2xl sm:text-3xl md:text-4xl tracking-wide font-semibold"
        style={{ opacity: 1, transform: "none" }}
      >
        Featured Projects.
      </h4>

      {projects.map((p) => (
        <div
          key={p.title}
          className="grid grid-cols-1 mb-10 md:mb-6 gap-y-4 md:gap-y-16 gap-x-8 md:grid-cols-5 css-1iciww0 e1uzzknm1"
        >
          <a
            href={p.href}
            rel="noopener noreferrer"
            target="_blank"
            className="hover:-translate-y-1.5 flex rounded-lg md:mb-16 md:col-start-1 md:col-end-4 css-qnqp8n e1uzzknm0"
            style={p.imageStyle || { transform: "none" }}
          >
            <IntrinsicImage src={p.img} alt={p.title} />
          </a>

          <div className="md:col-start-4 md:col-end-6">
            <a
              href={p.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-700 no-underline hover:underline"
            >
              <h4 className="mb-2 text-lg font-semibold text-gray-800 uppercase sm:text-xl md:text-2xl">
                {p.title}
              </h4>
            </a>

            <p className="mb-4 text-base leading-6 text-gray-700">{p.description}</p>

            <div className="flex flex-wrap items-center justify-start mb-4 text-gray-500">
              {p.tags.map((tag) => (
                <span key={tag} className="mr-4 text-sm">
                  {tag}
                </span>
              ))}
            </div>

            {p.github && (
              <a href={p.github}>
                <button
                  type="button"
                  className="border-none bg-indigo-50 font-semibold cursor-pointer text-xs sm:text-sm rounded-sm px-3 py-2 sm:px-4 sm:py-3 text-custom-purple hover:bg-indigo-100"
                  aria-label="View on Github"
                >
                  View on Github
                </button>
              </a>
            )}
          </div>
        </div>
      ))}

      <a href="/projects">
        <button
          type="button"
          className="border-none bg-indigo-50 font-semibold cursor-pointer text-xs sm:text-sm rounded-sm px-3 py-2 sm:px-4 sm:py-3 text-custom-purple hover:bg-indigo-100 flex mt-4 mb-12 ml-auto"
          aria-label="View All Projects"
        >
          View All Projects
        </button>
      </a>
    </section>
  );
}