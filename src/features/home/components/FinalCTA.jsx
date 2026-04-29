import Link from "next/link";

const FinalCTA = () => {
  return (
    <section className="relative py-32 flex justify-center items-center overflow-hidden">
      <div className="relative z-10 text-center max-w-2xl px-6">
        <h2 className="text-4xl md:text-6xl font-serif text-primary mb-8">
          Ready for your <br /> next escape?
        </h2>
        <p className="text-dark/60 mb-10 text-lg">
          Join 5,000+ happy guests who found their sanctuary with Hotelio. Book
          today and get 15% off your first stay.
        </p>
        <div className="flex flex-col sm:row gap-4 justify-center">
          <Link
            href={"/rooms"}
            className="btn-rounded p-4 hover:scale-105 transition-transform duration-300"
          >
            Book My Stay
          </Link>
          <Link
            href={"/contact"}
            className="btn-rounded-outline text-primary p-4 hover:scale-105 transition-transform duration-300"
          >
            Contact Support
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;
