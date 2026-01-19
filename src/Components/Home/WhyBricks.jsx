import { FaCubes, FaUsers, FaLightbulb, FaRocket } from "react-icons/fa";

const WhyBricks = () => {
  return (
    <section className="py-20 px-6">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
        Why Choose <span className="text-primary">Bricks</span>?
      </h2>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4 max-w-6xl mx-auto">
        <div className="card bg-base-100 shadow-md hover:shadow-xl transition">
          <div className="card-body items-center text-center">
            <FaCubes className="text-5xl text-primary mb-4" />
            <h3 className="card-title">Premium Builds</h3>
            <p className="text-sm">
              Carefully curated LEGO creations built with precision and passion.
            </p>
          </div>
        </div>

        <div className="card bg-base-100 shadow-md hover:shadow-xl transition">
          <div className="card-body items-center text-center">
            <FaUsers className="text-5xl text-secondary mb-4" />
            <h3 className="card-title">Creative Community</h3>
            <p className="text-sm">
              Join builders from around the world and share your imagination.
            </p>
          </div>
        </div>

        <div className="card bg-base-100 shadow-md hover:shadow-xl transition">
          <div className="card-body items-center text-center">
            <FaLightbulb className="text-5xl text-accent mb-4" />
            <h3 className="card-title">Endless Ideas</h3>
            <p className="text-sm">
              Get inspired by thousands of unique and creative brick designs.
            </p>
          </div>
        </div>

        <div className="card bg-base-100 shadow-md hover:shadow-xl transition">
          <div className="card-body items-center text-center">
            <FaRocket className="text-5xl text-success mb-4" />
            <h3 className="card-title">Easy to Explore</h3>
            <p className="text-sm">
              Fast, clean interface built for smooth discovery and enjoyment.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyBricks;
