export const LatestPosts = () => {
  return (
    <section className="py-60">
      <div className="container">
        <h2 className="font-heading font-black text-4xl text-center">
          Your Portal to everything blockChain
        </h2>
        <p className="text-xl text-center text-zinc-400 mt-8">
          keep up with the newest trends, updates and insights in the blockchain
          world, updated weekly
        </p>
        <div className="mt-16">
          {[
            ...new Array(4).fill(0).map((item, itemIndex) => (
              <div>
                <div>Technology</div>
                <h3>Regulatory Challenges Facing Blockchain</h3>
                <p>
                  Understanding the regulatory landscape surrounding blockchain
                  and what it means for the future of this technology.
                </p>
                <div>
                  <button>Read More</button>
                  <div>arrow</div>
                </div>
              </div>
            )),
          ]}
        </div>
      </div>
    </section>
  );
};
