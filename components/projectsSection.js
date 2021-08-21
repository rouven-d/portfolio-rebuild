import QuizCard from "./project-cards/quizCard";
import NoteCard from "./project-cards/noteCard";
import HiroiCard from "./project-cards/hiroiCard";

export default function ProjectSection() {
  return (
    <>
      <section id="projects">
        <h2 className="projects-title">Projects</h2>
        <div className="cards-bg">
          {" "}
          <QuizCard></QuizCard>
          <NoteCard></NoteCard>
          <HiroiCard></HiroiCard>
        </div>
      </section>
    </>
  );
}
