import Hero from './component/Hero';
import BookNow from './component/bookNow';
import Services from './component/services';
import "./homepage.scss";

const Homepage = () => {
  return (
    <>
      <div className="flex items-center justify-center">
        <Hero />
        <BookNow />
      </div>
      <Services />
    </>
  );
}

export default Homepage