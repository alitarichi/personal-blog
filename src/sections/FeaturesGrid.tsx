import { CutCornerButton } from "../components/CutCornerButton";
import { TextButton } from "../components/TextButton";

const listItems = [
  "experience unparalleled security and scalability",
  "fully benefit from scalable network effects",
  "unlock the potential of decentralized networks",
];

export const FeaturesGrid = () => {
  return (
    <section className="py-24">
      <div className="container">
        <div className="flex flex-col gap-56">
          <div className="grid grid-cols-3">
            <div className="col-span-2">
              <h2 className="font-heading font-black text-4xl">
                Empowering the future of blockchain
              </h2>
              <p className="text-xl text-zinc-400 mt-8">
                Blockforge provides robust and secure infrastructure to support
                the next generation of decentralized applications.
              </p>
              <ul className="flex flex-col gap-8 mt-12">
                {listItems.map((item) => (
                  <li key={item} className="flex items-center gap-3">
                    <div className="inline-flex flex-shrink-0 justify-center items-center size-8 outline outline-4 -outline-offset-4 outline-fuchsia-500/10 rounded-full">
                      <div className="size-1.5 bg-fuchsia-500 rounded-full"></div>
                    </div>
                    <span className="text-xl font-bold">{item}</span>
                  </li>
                ))}
              </ul>
              <div className="flex gap-8 mt-12">
                <CutCornerButton>Get Started</CutCornerButton>
                <TextButton>Learn More</TextButton>
              </div>
            </div>
            <div>
              <img src="/assets/images/torus-knot.png" alt="torus 3d image" />
              <img
                src="/assets/images/hemisphere.png"
                alt="hemisphere 3d image"
              />
            </div>
          </div>
          <div>
            <h2 className="font-heading font-black text-4xl md:text-5xl">
              Blogforge leads the way
            </h2>
            <div className="flex flex-col text-xl text-zinc-400 mt-6 gap-6">
              <p>
                Blockforge is dedicated to supporting the evolution of web3
                applications by delivering the necessary infrastructure and
                security for web3.
              </p>
              <p>
                Blockforge champions Web3 for everyone. As a decentralized
                blockchain scaling platform, Blockforge enables developers to
                create scalable, user-friendly dApps with low transaction costs,
                all while ensuring robust security.
              </p>
            </div>
            <div className="flex gap-8 mt-12">
              <CutCornerButton>Get Started</CutCornerButton>
              <TextButton>Learn More</TextButton>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
