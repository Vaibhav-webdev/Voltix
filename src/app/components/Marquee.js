const cardsData = [
  {
    image: 'https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=200',
    name: 'Briar Martin',
    handle: '@neilstellar',
    date: 'April 20, 2025',
  },
  {
    image: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=200',
    name: 'Avery Johnson',
    handle: '@averywrites',
    date: 'May 10, 2025',
  },
  {
    image: 'https://images.unsplash.com/photo-1527980965255-d3b416303d12?w=200&auto=format&fit=crop&q=60',
    name: 'Jordan Lee',
    handle: '@jordantalks',
    date: 'June 5, 2025',
  },
  {
    image: 'https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?w=200&auto=format&fit=crop&q=60',
    name: 'Avery Johnson',
    handle: '@averywrites',
    date: 'May 10, 2025',
  },
];

const CreateCard = ({ card }) => {
  return (
    <div className="p-4 rounded-lg mx-4 shadow hover:shadow-lg transition-all duration-200 w-72 shrink-0 bg-white">
      <div className="flex gap-2">
        <img
          className="size-11 rounded-full"
          src={card.image}
          alt={card.name}
        />
        <div className="flex flex-col">
          <div className="flex items-center gap-1">
            <p className="font-medium">{card.name}</p>
            <svg
              className="mt-0.5"
              width="12"
              height="12"
              viewBox="0 0 12 12"
              fill="none"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M4.555.72..."
                fill="#2196F3"
              />
            </svg>
          </div>
          <span className="text-xs text-slate-500">{card.handle}</span>
        </div>
      </div>

      <p className="text-sm py-4 text-gray-800">
        Radiant made undercutting all of our competitors an absolute breeze.
      </p>

      <div className="flex items-center justify-between text-slate-500 text-xs">
        <div className="flex items-center gap-1">
          <span>Posted on</span>
          <a
            href="https://x.com"
            target="_blank"
            className="hover:text-sky-500"
          >
            <svg width="11" height="10" viewBox="0 0 11 10" fill="none">
              <path
                d="m.027 0 4.247 5.516L0 10h.962l3.742-3.926L7.727 10H11L6.514 4.174 10.492 0H9.53L6.084 3.616 3.3 0z"
                fill="currentColor"
              />
            </svg>
          </a>
        </div>
        <p>{card.date}</p>
      </div>
    </div>
  );
};

export default function Home() {
  return (
    <div id="testimonial" className="flex flex-col items-center py-10 gap-4">
        <div className="flex items-center gap-2 text-gray-500 border border-gray-200 rounded-full px-4 py-2">
            <div className="relative flex size-3.5 items-center justify-center">
                <span className="absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75 animate-ping duration-300"></span>
                <span className="relative inline-flex size-2 rounded-full bg-green-600"></span>
            </div>
            <span>Book a live demo today</span>
        </div>
    <div className="max-w-3xl mx-auto text-center px-4">
        <h2 className="text-4xl font-bold text-gray-600">
          Don't just take our words
        </h2>

        {/* 🔹 Paragraph */}
        <p className="mt-4 text-lg text-gray-600">
          Hear what our users say about us. We're always looking for ways to improve. If you have a positive experience with us, leave a review.
        </p>
      </div>
      {/* Row 1 */}
      <div className="marquee-row w-full mx-auto max-w-5xl overflow-hidden relative">
        <div className="absolute left-0 top-0 h-full w-20 z-10 pointer-events-none bg-gradient-to-r from-white to-transparent" />

        <div className="marquee-inner flex min-w-[200%] pt-10 pb-5">
          {[...cardsData, ...cardsData].map((card, index) => (
            <CreateCard key={index} card={card} />
          ))}
        </div>

        <div className="absolute right-0 top-0 h-full w-20 md:w-40 z-10 pointer-events-none bg-gradient-to-l from-white to-transparent" />
      </div>

      {/* Row 2 (Reverse) */}
      <div className="marquee-row w-full mx-auto max-w-5xl overflow-hidden relative">
        <div className="absolute left-0 top-0 h-full w-20 z-10 pointer-events-none bg-gradient-to-r from-white to-transparent" />

        <div className="marquee-inner marquee-reverse flex min-w-[200%] pt-10 pb-5">
          {[...cardsData, ...cardsData].map((card, index) => (
            <CreateCard key={index} card={card} />
          ))}
        </div>

        <div className="absolute right-0 top-0 h-full w-20 md:w-40 z-10 pointer-events-none bg-gradient-to-l from-white to-transparent" />
      </div>
    </div>
  );
}
