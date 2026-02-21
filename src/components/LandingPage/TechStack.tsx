const skills = [
  "HTML",
  "(S)CSS",
  "JavaScript (ES6)",
  "TypeScript",
  "React JS",
  "Redux",
  "Firebase",
  "Supabase",
  "Netlify",
  "Emotion",
  "Styled-Components",
  "Semantic UI",
  "Tailwind CSS",
  "Chakra UI",
  "Next JS",
  "Node JS",
  "Git",
  "ESLint",
  "Babel",
  "Webpack",
  "Jest",
  "React Testing Library",
  "Enzyme",
  "Cypress",
  "Contentful",
  "Sanity",
  "React-Query",
  "PostgreSQL",
  "Postmark",
  "Currently learning Go...",
  "Currently working with OpenAI",
];

export function TechStack() {
  return (
    <section
      style={{ opacity: 1, transform: "none" }}
      className="px-6 sm:px-10 md:px-24 lg:px-28 py-12 text-center"
    >
      <h2
        className="mb-3.5 text-gray-600 tracking-wide uppercase font-semibold text-base"
        style={{ opacity: 1, transform: "none" }}
      >
        Skills
      </h2>

      <h4
        className="mb-7 text-gray-800 text-2xl sm:text-3xl md:text-4xl tracking-wide font-semibold"
        style={{ opacity: 1, transform: "none" }}
      >
        Tech Stack.
      </h4>

      <p>I have experience working with the following technologies</p>

      <article className="my-8">
        <ul className="flex flex-wrap items-center justify-center">
          {skills.map((skill, index) => (
            <li 
              key={index}
              className="px-4 py-2 m-3 text-xs font-semibold text-indigo-900 rounded-full 
              bg-indigo-50 md:px-8 md:py-4 md:m-4 md:text-sm"
            >
              {skill}
            </li>
          ))}
        </ul>
      </article>
    </section>
  );
}
