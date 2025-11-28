import ProblemBackgroundImages from './ProblemBackgroundImages';
import ProblemHeadline from './ProblemHeadline';

const Problem = () => {
  return (
    <section
      id="problem"
      data-scroll-section
      data-scroll-id="problem"
      className="relative w-full min-h-[180vh] overflow-hidden pt-[45vh]"
      style={{ filter: 'grayscale(var(--problem-grayscale))' }}
    >
      <ProblemBackgroundImages />

      <div
        className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/50 to-black/90 pointer-events-none z-0"
        aria-hidden="true"
      />

      <ProblemHeadline />
    </section>
  );
};

export default Problem;


