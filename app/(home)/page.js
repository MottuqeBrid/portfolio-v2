import AboutMe from "./(components)/AboutMe";
import Education from "./(components)/Education";
import Hero from "./(components)/Hero";
import MyProjects from "./(components)/MyProjects";
import MySkills from "./(components)/MySkills";

export default function HomePage() {
  return (
    <div>
      <Hero />
      <AboutMe />
      <MySkills />
      <Education />
      <MyProjects />
    </div>
  );
}
