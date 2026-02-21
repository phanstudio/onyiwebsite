import img1 from "../../assets/notes/global-talent_1_gy5ac81ce1.jpg";
import img2 from "../../assets/notes/levelup_hagmez921e.jpg";
import img3 from "../../assets/notes/trigger_y6cwn507e2.jpg";

export function Notes() {
  const notes = [
    {
      title: '5 Lessons To Learn As A Self-Taught Developer',
      date: 'November 11, 2020',
      readTime: '4 min',
      tags: ['Career', 'Advice'],
      description: 'A personal guide to the Global talent visa through Tech Nation',
      image: img1,
      slug: "",
    },
    {
      title: 'CSS Blend Mode And Filters',
      date: 'October 24, 2020',
      readTime: '5 min',
      tags: ['CSS', 'Tutorial'],
      description: 'Key points from an email newsletter on "High Growth Engineer": 5 Lessons I learned the hard way from 10+ years as a software engineer',
      image: img2,
      slug: "",
    },
    {
      title: 'How To Understand Any Programming Task As A Coding Newbie',
      date: 'October 17, 2020',
      readTime: '4 min',
      tags: ['Advice', 'Tutorial'],
      description: "A simple tutorial on Database Functions and Triggers - Part 3",
      image: img3,
      slug: "",
    }
  ];

  return (
    <section className="px-6 sm:px-10 md:px-24 lg:px-28 py-10">
      <div className="max-w-7xl mx-auto">
        <div className="text-left mb-4">
          <span className="text-gray-600 uppercase font-semibold text-base">BLOG</span>
        </div>
        <h2 className="text-4xl font-bold text-left mb-16 text-gray-800">Latest Notes.</h2>

        <ul className="grid grid-cols-1 gap-4 mb-6 md:gap-6 lg:gap-8 md:grid-cols-2 lg:grid-cols-3 list-none">
          {notes.map((note, index) => (
            <li key={index} className="block w-full col-span-1 mb-12 rounded-md sm:w-3/4 md:w-full shadow-card hover:-translate-y-0.5 transition-transform">
              <div className="relative rounded-tl-md rounded-tr-md object-cover h-48 overflow-hidden">
                <img
                  src={note.image}
                  alt={note.title}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>

              <div className="p-6">
                <a href={`/notes/${note.slug}`} className="hover:underline transition-all">
                  <h4 className="mb-2 text-sm font-semibold text-gray-800 capitalize sm:text-base">
                    {note.title}
                  </h4>
                </a>

                <p className="mb-3 text-sm text-gray-700">{note.description}</p>

                <div className="flex flex-wrap items-center justify-start mb-3 text-gray-500 stack">
                  {note.tags.map((tag) => (
                    <span key={tag} className="mr-2 text-xs">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </li>
          ))}
        </ul>

        <div className="flex">
          <button className="px-6 py-3 border-none bg-indigo-50 font-semibold cursor-pointer text-xs sm:text-sm rounded-sm sm:px-4 sm:py-3 text-custom-purple hover:bg-indigo-100 flex mt-4 mb-12 ml-auto">
            More Articles
          </button>
        </div>
      </div>
    </section>
  );
}
