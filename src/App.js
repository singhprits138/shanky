import { motion } from "framer-motion";
import "./Stars.css";
import { useEffect } from "react";


const jyotirlingas = [
  {
    name: "Somnath",
    img: "/resources/somnath.jpg",
    blessing: "May faith always rebuild you, no matter what is lost.",
  },
  {
    name: "Mallikarjuna",
    img: "/resources/Mallikarjuna.jpg",
    blessing: "May devotion give you strength when words fall short.",
  },
  {
    name: "Mahakaleshwar",
    img: "/resources/mahakaal.jpg",
    blessing: "May time always bow gently before your courage.",
  },
  {
    name: "Omkareshwar",
    img: "/resources/omkareshwar.jpg",
    blessing: "May balance guide you through every turning point.",
  },
  {
    name: "Kedarnath",
    img: "/resources/kedarnath.jpg",
    blessing: "May solitude never feel lonely, only protective.",
  },
  {
    name: "Bhimashankar",
    img: "/resources/bhimashankar.jpg",
    blessing: "May resilience rise within you, quietly and firmly.",
  },
  {
    name: "Kashi Vishwanath",
    img: "/resources/vishwanath.jpg",
    blessing: "May truth always find its way back to you.",
  },
  {
    name: "Trimbakeshwar",
    img: "/resources/triambkeshwar.jpg",
    blessing: "May beginnings always carry grace.",
  },
  {
    name: "Vaijyanath",
    img: "/resources/vaijnath.jpg",
    blessing: "May healing reach you in unseen ways.",
  },
  {
    name: "Nageshwar",
    img: "/resources/nagnath.jpg",
    blessing: "May protection surround you, always.",
  },
  {
    name: "Rameshwaram",
    img: "/resources/rameshwaram.jpg",
    blessing: "May bridges form even across distances.",
  },
  {
    name: "Grishneshwar",
    img: "/resources/Grishneshwarjpg.jpg",
    blessing: "May humility keep your soul light.",
  },
];


const charDham = [
  {
    name: "Badrinath",
    img: "/resources/badrinath.jpg",
    blessing: "May wisdom anchor every journey you take.",
  },
  {
    name: "Dwarka",
    img: "/resources/dwarka.jpg",
    blessing: "May purpose guide you, even through uncertainty.",
  },
  {
    name: "Puri",
    img: "/resources/puri.jpg",
    blessing: "May acceptance bring you peace.",
  },
  {
    name: "Rameswaram",
    img: "/resources/rameshwaram.jpg",
    blessing: "May closure never close your heart.",
  },
];



const AnimatedText = ({ children, delay = 0 }) => {
  const variants = {
    hidden: { opacity: 0 },
    visible: (i) => ({
      opacity: 1,
      transition: {
        delay: i * 0.05 + delay,
      },
    }),
  };

  const text = typeof children === "string" ? children : String(children);

  return (
    <>
      {text.split("").map((char, i) => (
        <motion.span
          key={i}
          custom={i}
          variants={variants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {char}
        </motion.span>
      ))}
    </>
  );
};

const Section = ({ children }) => (
  <motion.section
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 1.2, ease: "easeOut" }}
    viewport={{ once: true }}
    className="min-h-screen flex items-center justify-center px-6"
  >
    <div className="max-w-3xl text-center">{children}</div>
  </motion.section>
);

export default function App() {

  useEffect(() => {
  const handleScroll = () => {
    const scrollTop = window.scrollY;
    const docHeight =
      document.documentElement.scrollHeight - window.innerHeight;

    const progress = Math.min(scrollTop / docHeight, 1);

    // Map scroll → moon phase (right to left)
    const shadowX = 120 - progress * 300;

    document.documentElement.style.setProperty(
      "--shadow-x",
      `${shadowX}%`
    );
  };

  window.addEventListener("scroll", handleScroll);
  handleScroll();

  return () => window.removeEventListener("scroll", handleScroll);
}, []);

  return (
    <>
    {/* ⭐ Background stars */}
    <div className="stars">
      {[...Array(150)].map((_, i) => (
        <div
          key={i}
          className="star"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            width: `${1 + Math.random() * 2}px`,
            height: `${1 + Math.random() * 2}px`,
            animationDelay: `${Math.random() * 4}s`,
          }}
        ></div>
      ))}
    </div>
   <div className="moon-container">
  <div className="moon-clouds"></div>
  <div className="moon">
    <img
      src="/resources/moon2.jpg"
      alt="Moon"
    />
    <div className="moon-phase"></div>
  </div>
</div>


    <div className="relative z-10 font-serif">

      {/* Opening */}
      <Section>
        <h1 className="text-4xl md:text-5xl leading-relaxed">
          <AnimatedText>
            Some journeys are not planned.
          </AnimatedText>
          <br />
          <span className="text-gray-400">
            <AnimatedText delay={0.5}>
              They begin quietly… and stay forever.
            </AnimatedText>
          </span>
          <br /><br />
          <AnimatedText delay={1.5}>Like us!</AnimatedText>
        </h1>
      </Section>

      {/* About Him */}
      <Section>
        <p className="text-xl leading-relaxed">
          Born on <strong>24 January 1997</strong>,<br />
          a traveler at heart,<br />
          a seeker by soul.
        </p>
        <p className="mt-6 text-gray-400">
          Some people don’t just visit places.<br />
          They collect meanings.
        </p>
      </Section>

      {/* Journey */}
      <Section>
        <p className="text-xl leading-relaxed">
          From temples to mountains,<br />
          from faith to footsteps,<br />
          your journey touched places many only dream of.
        </p>
      </Section>

      {/* Jyotirling */}
      <Section>
        <h2 className="text-2xl mb-4">Twelve Jyotirling</h2>
        <p className="text-gray-400 mb-10">
          Twelve silent witnesses of faith.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {jyotirlingas.map((j, i) => (
            <div
              key={i}
              className="bg-black/30 rounded-xl overflow-hidden shadow-lg"
            >
              <img
                src={j.img}
                alt={j.name}
                className="w-full h-48 object-cover grayscale hover:grayscale-0 transition duration-700"
              />
              <div className="p-4">
                <p className="text-lg mb-2">{j.name}</p>
                <p className="text-sm text-gray-400 italic">
                  {j.blessing}
                </p>
              </div>
            </div>
          ))}
        </div>
      </Section>


      {/* Char Dham */}
     <Section>
      <h2 className="text-2xl mb-4">The Four Dham</h2>
      <p className="text-gray-400 mb-10">
        Some places don’t just change journeys. They steady the soul.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
        {charDham.map((d, i) => (
          <div
            key={i}
            className="bg-black/30 rounded-xl overflow-hidden shadow-lg"
          >
            <img
              src={d.img}
              alt={d.name}
              className="w-full h-56 object-cover grayscale hover:grayscale-0 transition duration-700"
            />
            <div className="p-4">
              <p className="text-lg mb-2">{d.name}</p>
              <p className="text-sm text-gray-400 italic">
                {d.blessing}
              </p>
            </div>
          </div>
        ))}
      </div>
    </Section>



      {/* Unspoken */}
      <Section>
        <p className="italic text-gray-400 leading-relaxed">
          Some prayers are never spoken aloud.<br />
          They live quietly… and wish well.
        </p>
      </Section>

      {/* Birthday */}
      <Section>
        <div className="birthday-panel" aria-label="Birthday message">
          <div className="birthday-panel__banner">
            <span className="birthday-panel__emoji">✨✨✨✨✨✨✨✨✨✨✨✨✨✨</span>
            <div className="birthday-panel__title-row">
              <span
                className="birthday-panel__animated-heart birthday-panel__animated-heart--left"
                aria-hidden="true"
              >
                ❤️
              </span>
              <h2 className="birthday-panel__title text-4xl md:text-5xl leading-relaxed">
                Happyyyy Birthdayyyyy!!!
              </h2>
              <span
                className="birthday-panel__animated-heart birthday-panel__animated-heart--right"
                aria-hidden="true"
              >
                ❤️
              </span>
            </div>
            <span className="birthday-panel__emoji">✨✨✨✨✨✨✨✨✨✨✨✨✨✨</span>
          </div>
          <br />
          <p className="birthday-panel__message">
            May your journey always be protected.<br />
            May faith walk with you.<br />
            And may you always remember—<br />
            <span className="birthday-panel__highlight">
              you were deeply and purely loved and will always be.
            </span>
          </p>
          <p className="birthday-panel__signature">— Always wishing you well</p>
        </div>
      </Section>

    </div>
    </>
  );
}
