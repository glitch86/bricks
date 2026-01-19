import { FaRobot, FaCity, FaCar } from "react-icons/fa";

const Categories = () => {
  return (
    <section className="py-16 px-6">
      <h2 className="text-3xl font-bold text-center mb-10">
        Brick Categories
      </h2>

      <div className="grid md:grid-cols-3 gap-6">
        <div className="card bg-primary text-primary-content">
          <div className="card-body items-center text-center">
            <FaRobot className="text-5xl" />
            <h3 className="card-title">Robots</h3>
          </div>
        </div>

        <div className="card bg-secondary text-secondary-content">
          <div className="card-body items-center text-center">
            <FaCity className="text-5xl" />
            <h3 className="card-title">City</h3>
          </div>
        </div>

        <div className="card bg-accent text-accent-content">
          <div className="card-body items-center text-center">
            <FaCar className="text-5xl" />
            <h3 className="card-title">Vehicles</h3>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Categories;
