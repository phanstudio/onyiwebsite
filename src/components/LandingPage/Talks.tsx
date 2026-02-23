export const Talks = () => {
  const talks = [
    {
      title: "How to create an online portfolio",
      link: "https://docs.google.com/presentation/d/1w5lyZjVB4qJmRiEIsh5bABzQ-Dxcm2saVuHj8tB4P_o",
      label: "Slides",
    },
  ];

  return (
    <section className="px-6 py-10 sm:px-10 md:px-24 lg:px-28 css-1b2i1yf">
      <h2 className="mb-3.5 text-base font-semibold tracking-wide uppercase text-gray-600">
        Community
      </h2>

      <h4 className="mb-7 text-2xl font-semibold tracking-wide text-gray-800 sm:text-3xl md:text-4xl">
        Talks, Open Source, Conferences
      </h4>

      {talks.map((item, i) => (
        <article className="rounded-md bg-custom-lightGhost hover:scale-105 transition-transform">
          <div
            key={i}
            className="flex w-full items-center justify-between rounded-md border border-gray-400 
            p-2.5 text-gray-700 hover:border-custom-purple hover:text-custom-purple sm:p-6 mb-6"
          >
            <h4 className="text-sm md:text-base">{item.title}</h4>

            <a
              href={item.link} target="_blank" rel="noopener noreferrer"
              className="text-xs underline opacity-80 hover:opacity-100"
            >
              {item.label}
            </a>
          </div>
        </article>
      ))}
    </section>
  );
};
