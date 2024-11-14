import { CutCornerButton } from "../components/CutCornerButton";

const listItems = [
  "experience unparalleled security and scalability",
  "fully benefit from scalable network effects",
  "unlock the potential of decentralized networks",
];

export const FeaturesGrid = () => {
  return (
    <section>
      <div className="container">
        <h2>Empowering the future of blockchain</h2>
        <p>
          Blockforge provides robust and secure infrastructure to support the
          next generation of decentralized applications.
        </p>
        <ul>
          {listItems.map((item) => (
            <li key={item}>
              <span>{item}</span>
            </li>
          ))}
        </ul>
        <div>
          <CutCornerButton>Get Started</CutCornerButton>
          <button></button>
        </div>
      </div>
    </section>
  );
};
