import Link from "next/link";

export default function Hero() {
  return (
    <section className="hero min-h-[90vh] bg-base-200 my-7 rounded-2xl">
      <div className="hero-content flex-col lg:flex-row-reverse gap-12">
        {/* Image / Visual */}
        <div className="relative">
          <img
            src="/lego1.png"
            alt="Lego blocks"
            className="max-w-sm rounded-2xl shadow-2xl"
          />
          <div className="badge badge-primary absolute top-4 left-4 text-lg p-4">
            New Sets 🚀
          </div>
        </div>

        {/* Text Content */}
        <div className="max-w-fit">
          <h1 className="text-3xl md:text-5xl font-extrabold leading-tight">
            Build Your <span className="text-primary">Imagination</span>
            <br /> Brick by Brick
          </h1>

          <p className="py-6 text-sm text-base-content/80">
            <strong>Bricks</strong> is your ultimate LEGO-inspired playground.
            Discover creative sets, design your own worlds, and bring ideas to
            life one block at a time.
          </p>

          <div className="flex gap-4">
            <Link href={"/products"} className="btn btn-primary btn-lg">
              Explore Sets
            </Link>
            <button className="btn btn-outline btn-lg">Build Online</button>
          </div>

          {/* Stats */}
          <div className="stats shadow mt-8">
            <div className="stat">
              <div className="stat-title">Blocks</div>
              <div className="stat-value text-primary">12K+</div>
            </div>

            <div className="stat">
              <div className="stat-title">Builders</div>
              <div className="stat-value">4.5K</div>
            </div>

            <div className="stat">
              <div className="stat-title">Creations</div>
              <div className="stat-value">980+</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
