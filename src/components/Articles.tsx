export function Articles() {
  const articles = [
    "Getting to Grips with Component Library As A Developing Engineer",
    "How to Toggle Nested Folders with Vanilla JS (DOM Tree)",
    "How to create a carousel slider with ReactJS & TailwindCSS",
    "How to create a custom slider with CSS",
    "How to gracefully implement Semantic IDs into React.js A11y",
    "How to create custom checkboxes, Switches, and Radio Buttons [Part 1 and 2]",
    "How to Migrate from NextJS to Gatsby.js without losing your content"
  ];

  return (
    <section className="py-20 px-6 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-4">
          <span className="text-sm text-gray-500">WRITINGS</span>
        </div>
        <h2 className="text-4xl font-bold text-center mb-16">Published articles.</h2>

        <div className="space-y-4 max-w-4xl mx-auto">
          {articles.map((article, index) => (
            <a
              key={index}
              href="#"
              className="flex items-center justify-between p-6 bg-white border border-gray-200 rounded-lg hover:shadow-md transition-shadow group"
            >
              <span className="text-gray-700 group-hover:text-black">{article}</span>
              <div className="flex items-center gap-4">
                {index < 2 && (
                  <div className="flex gap-2">
                    <div className="w-8 h-8 bg-orange-300 rounded-full"></div>
                    <div className="w-8 h-8 bg-gray-800 rounded-full"></div>
                  </div>
                )}
                <svg className="w-5 h-5 text-gray-400 group-hover:text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
