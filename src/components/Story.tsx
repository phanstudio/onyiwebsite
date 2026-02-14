export function Story() {
  return (
    <section className="py-20 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-4">
          <span className="text-sm text-gray-500">ABOUT</span>
        </div>
        <h2 className="text-4xl font-bold text-center mb-16">My Story.</h2>

        <div className="flex flex-col md:flex-row gap-12 items-center">
          <div className="flex-1">
            <div className="relative w-full max-w-sm mx-auto">
              <div className="bg-amber-50 rounded-full aspect-square flex items-center justify-center p-12">
                <svg viewBox="0 0 200 300" className="w-full h-full">
                  <path d="M 100 50 Q 70 70 70 100 L 70 180 Q 70 200 90 210 L 110 210 Q 130 200 130 180 L 130 100 Q 130 70 100 50"
                        fill="white" stroke="#333" strokeWidth="2"/>
                  <circle cx="85" cy="120" r="8" fill="#FF6B6B"/>
                  <circle cx="115" cy="120" r="8" fill="#FF6B6B"/>
                  <path d="M 80 140 Q 100 150 120 140" fill="none" stroke="#FF6B6B" strokeWidth="2"/>
                  <path d="M 60 70 Q 50 50 70 40 L 130 40 Q 150 50 140 70 Q 120 30 100 30 Q 80 30 60 70"
                        fill="white" stroke="#333" strokeWidth="2"/>
                </svg>
              </div>
            </div>
          </div>

          <div className="flex-1 space-y-4 text-gray-700 leading-relaxed">
            <p>
              I'm a frontend software engineer with 4 years experience building creative user interfaces and writing technical content on my blog and for other leading publications worldwide.
            </p>
            <p>
              As someone with a Biochemistry background, I found myself passionate about building things on the web. I built my first website back in 2016 (terrible experience), and I fell in love with the web development process. Since then, I've spent my time crafting experiences and building products that simplify complex processes.
            </p>
            <p>
              I currently work remotely at StudentBeans building the future of youth marketing through design systems, marketing sites, and product experiences. When I'm not building things, I enjoy spending time with loved ones, exploring random places, and having deep conversations about anything and everything.
            </p>
            <p>
              My goal now is to provide technical solutions and create digital experiences that cut across different industries while spreading knowledge through mentoring and community projects.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
