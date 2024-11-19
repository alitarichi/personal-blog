import { twMerge } from "tailwind-merge";

const tesimonials = [
  {
    text: "The user experience is phenomenal, and the support team is always there to help. Highly Recommended!",
    name: "Erica Wyatt",
    title: "Product Manager - BlockLink",
    avatarImage: "/assets/images/avatar-erica-wyatt.jpg",
  },
  {
    text: "Our productivity has skyrocketed since we started using blochforge. It's a game-changer for our team",
    name: "Noel Baldwin",
    title: "Lead Developer - BitBridge",
    avatarImage: "/assets/images/avatar-noel-baldwin.jpg",
  },
  {
    text: "The integration process was seamless, and the performance improvements are byond our expectations",
    name: "Harry Bender",
    title: "CTO - CryptoSolutions",
    avatarImage: "/assets/images/avatar-harry-bender.jpg",
  },
];

export const TestimonialsSection = () => {
  return (
    <section className="py-32 bg-zinc-800">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16 md:gap-8 lg:gap-12">
          {tesimonials.map((testimonial, testimonialIndex) => (
            <blockquote
              key={testimonialIndex}
              className={twMerge(
                testimonialIndex === 2 && "md:hidden lg:block"
              )}
            >
              <p className="font-heading text-3xl lg:text-4xl font-black">
                &ldquo;{testimonial.text}&rdquo;
              </p>
              <cite className="mt-8 block">
                <div className="flex gap-3 items-center">
                  <div>
                    <div
                      className="size-16 bg-zinc-700 rounded-full bg-cover"
                      style={{
                        backgroundImage: `url(${testimonial.avatarImage})`,
                      }}
                    ></div>
                  </div>
                </div>
                <div className="text-lg not-italic font-black">
                  {testimonial.name}
                </div>
                <div className="text-zinc-400 not-italic">
                  {testimonial.title}
                </div>
              </cite>
            </blockquote>
          ))}
        </div>
      </div>
    </section>
  );
};
