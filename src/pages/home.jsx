import HomeWelcome from "../components/homeWelcome";

function Home({ getInput, input }) {
  return (
    <div className="container">
      <section className="home-welcome">
        <HomeWelcome getInput={getInput} input={input} />
      </section>
    </div>
  );
}

export default Home;
