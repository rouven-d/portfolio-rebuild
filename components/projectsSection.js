import QuizCard from "./project-cards/quizCard";
import NoteCard from "./project-cards/noteCard";

export default function ProjectSection() {
  return (
    <>
      <section id="project-section">
        <h2 className="p-section-title">Projects</h2>
        <div className="cards-bg">
          {" "}
          <QuizCard></QuizCard>
          <NoteCard></NoteCard>
        </div>
      </section>
    </>
  );
}
