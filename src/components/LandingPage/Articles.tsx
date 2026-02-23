export const Articles = () => {
  const talks = [
    {
      title: "Getting to Grips with Component Library As A Developing Engineer",
      link: "https://docs.google.com/presentation/d/1w5lyZjVB4qJmRiEIsh5bABzQ-Dxcm2saVuHj8tB4P_o",
    },
    {
      title: "How to Toggle Nested Folders with Vanilla JS (DOM Tree)",
      link: "https://docs.google.com/presentation/d/1w5lyZjVB4qJmRiEIsh5bABzQ-Dxcm2saVuHj8tB4P_o",
    },
    {
      title: "How to create a carousel slider with ReactJS & TailwindCSS",
      link: "https://docs.google.com/presentation/d/1w5lyZjVB4qJmRiEIsh5bABzQ-Dxcm2saVuHj8tB4P_o",
    },
    {
      title: "How to create a custom slider with CSS",
      link: "https://docs.google.com/presentation/d/1w5lyZjVB4qJmRiEIsh5bABzQ-Dxcm2saVuHj8tB4P_o",
    },
    {
      title: "How to gracefully implement Semantic IDs into React.js A11y",
      link: "https://docs.google.com/presentation/d/1w5lyZjVB4qJmRiEIsh5bABzQ-Dxcm2saVuHj8tB4P_o",
    },
    {
      title: "How to create custom checkboxes, Switches, and Radio Buttons [Part 1 and 2]",
      link: "https://docs.google.com/presentation/d/1w5lyZjVB4qJmRiEIsh5bABzQ-Dxcm2saVuHj8tB4P_o",
    },
    {
      title: "How to Migrate from NextJS to Gatsby.js without losing your content",
      link: "https://docs.google.com/presentation/d/1w5lyZjVB4qJmRiEIsh5bABzQ-Dxcm2saVuHj8tB4P_o",
    },
  ];

  return (
    <section className="px-6 py-10 sm:px-10 md:px-24 lg:px-28 css-xp1dmv">
      <h2 className="mb-3.5 text-base font-semibold tracking-wide uppercase text-gray-600">
        Blog posts
      </h2>

      <h4 className="mb-7 text-2xl font-semibold tracking-wide text-gray-800 sm:text-3xl md:text-4xl">
        Published articles
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
