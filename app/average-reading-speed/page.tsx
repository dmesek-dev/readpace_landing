import { ResourcePage } from "@/components/ResourcePage";
import { pageMetadata } from "@/lib/seo";
const title = "What is an average reading speed?";
const description =
  "Understand average reading speed in words per minute, what changes your pace, and why comprehension matters alongside WPM.";
export const metadata = pageMetadata(
  "Average Reading Speed: WPM, Research & Comprehension",
  description,
  "/average-reading-speed",
  true,
);
export default function AverageReadingSpeedPage() {
  return (
    <ResourcePage
      title={title}
      description={description}
      path="/average-reading-speed"
      label="Average reading speed"
      article
    >
      <article className="article-body">
        <div className="answer-box">
          <p>
            <strong>
              Average adult silent reading speed in English is about 238 WPM for
              nonfiction and 260 WPM for fiction
            </strong>
            , according to Marc Brysbaert’s 2019 meta-analysis of 190 studies
            involving 18,573 participants. These are group averages, not
            personal targets.{" "}
            <a href="https://doi.org/10.1016/j.jml.2019.104047">
              Read the study.
            </a>
          </p>
        </div>
        <h2>Reading speed averages, with context</h2>
        <table>
          <caption>
            Adult English reading rates reported in Brysbaert (2019)
          </caption>
          <thead>
            <tr>
              <th scope="col">Type of reading</th>
              <th scope="col">Average rate</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">Silent nonfiction</th>
              <td>238 WPM</td>
            </tr>
            <tr>
              <th scope="row">Silent fiction</th>
              <td>260 WPM</td>
            </tr>
            <tr>
              <th scope="row">Reading aloud</th>
              <td>183 WPM</td>
            </tr>
          </tbody>
        </table>
        <p>
          The distinction matters: reading aloud and reading silently are
          different activities. These English-language averages should not be
          treated as universal benchmarks for children, every language or every
          kind of text.{" "}
          <a href="https://biblio.ugent.be/publication/8647789">
            Study record and abstract at Ghent University.
          </a>
        </p>
        <h2>Is my reading speed good?</h2>
        <p>
          Start with the reason you opened the book. If you are reading to
          understand a new idea, time spent rereading a paragraph may be useful.
          If you are scanning a timetable, finding one detail may be all you
          need. A WPM result without that context cannot say whether you
          achieved your goal.
        </p>
        <p>
          To get a baseline, try our{" "}
          <a href="/reading-speed-test">free reading speed test</a>. Then
          compare it with a session in your own book. Record the kind of text,
          the time spent and what you can recall, so you know what each number
          represents.
        </p>
        <h2>Why faster reading can mean less understanding</h2>
        <p>
          A 2016 review by Keith Rayner and colleagues describes a trade-off
          between reading speed and comprehension. Skimming can help when you
          only need the gist, but large speed increases should not be assumed to
          preserve detailed understanding.{" "}
          <a href="https://doi.org/10.1177/1529100615623267">
            Read the review.
          </a>
        </p>
        <p>
          The authors point to reading practice and stronger language skills,
          including vocabulary, as ways to support more efficient reading. That
          is different from promising a shortcut to doubling your speed without
          losing meaning.{" "}
          <a href="https://www.psychologicalscience.org/journals/pspi/1529100615623267/">
            Research summary from the Association for Psychological Science.
          </a>
        </p>
        <h2>A practical way to compare your reading sessions</h2>
        <p>
          The following is a simple self-tracking routine, not a validated
          training programme:
        </p>
        <ol>
          <li>
            <strong>Use similar material.</strong> Compare chapters from the
            same book or texts with a similar style and purpose.
          </li>
          <li>
            <strong>Time the reading, not the breaks.</strong> Pause when
            interrupted and count only the words you actually read.
          </li>
          <li>
            <strong>Write down what stayed with you.</strong> Close the book and
            recall its main point or the events you just read.
          </li>
          <li>
            <strong>Look across several sessions.</strong> Treat an unusually
            fast or slow result as one observation before drawing a conclusion.
          </li>
        </ol>
        <h2>How ReadPace connects WPM with recall</h2>
        <p>
          ReadPace is a tracker for physical books. Its timer records reading
          time, a page scan counts words on your phone, and an optional quiz
          checks recall of the scanned text. The app groups tested sessions into
          25-WPM bands and highlights the band with the highest average recall
          after at least five tested sessions.
        </p>
        <p>
          That “reading sweet spot” describes your recorded sessions. It is not
          a clinical assessment, a universal ideal or a guarantee of improved
          comprehension. The quiz score is the percentage of its questions you
          answered correctly.
        </p>
        <p>
          <a href="/#sweet-spot">See how the reading sweet spot works</a>, or
          use the <a href="/wpm-calculator">WPM calculator</a> to measure your
          next session yourself.
        </p>
        <h2>Sources</h2>
        <ul>
          <li>
            Marc Brysbaert (2019).{" "}
            <a href="https://doi.org/10.1016/j.jml.2019.104047">
              How many words do we read per minute? A review and meta-analysis
              of reading rate.
            </a>{" "}
            Journal of Memory and Language, 109, 104047.
          </li>
          <li>
            Keith Rayner, Elizabeth R. Schotter, Michael E. J. Masson, Mary C.
            Potter and Rebecca Treiman (2016).{" "}
            <a href="https://doi.org/10.1177/1529100615623267">
              So Much to Read, So Little Time: How Do We Read, and Can Speed
              Reading Help?
            </a>{" "}
            Psychological Science in the Public Interest, 17(1), 4–34.
          </li>
        </ul>
      </article>
    </ResourcePage>
  );
}
