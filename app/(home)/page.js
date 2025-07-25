import AboutMe from "./(components)/AboutMe";
import Hero from "./(components)/Hero";
import MySkills from "./(components)/MySkills";

export default function HomePage() {
  return (
    <div>
      <Hero />
      <AboutMe />
      <MySkills />
    </div>
  );
}
