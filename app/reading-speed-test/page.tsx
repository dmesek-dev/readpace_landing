import { ReadingTest } from "@/components/ReadingTest";
import { ResourcePage } from "@/components/ResourcePage";
import { pageMetadata } from "@/lib/seo";
import { passageWordCount } from "@/content/reading-test";

const title = "Free reading speed test";
const description =
  "How fast do you read? Measure your reading speed in words per minute with a short story, then check your recall. Free, with no sign-up.";
export const metadata = pageMetadata(
  "Free Reading Speed Test: WPM & Recall",
  description,
  "/reading-speed-test",
);
export default function ReadingSpeedTestPage() {
  return (
    <ResourcePage
      title={title}
      description={description}
      path="/reading-speed-test"
      label="Reading speed test"
    >
      <ReadingTest />
      <div className="article-body">
        <h2>How to test your reading speed</h2>
        <ol>
          <li>
            Choose a quiet moment and select <strong>Start reading</strong>. The
            timer starts as the passage appears.
          </li>
          <li>
            Read the entire {passageWordCount}-word English story at a
            comfortable pace. Select <strong>Finished reading</strong> when you
            reach the end.
          </li>
          <li>
            Answer three questions from memory. Your result shows WPM and how
            many answers were correct.
          </li>
        </ol>
        <h2>How is WPM calculated?</h2>
        <p>
          WPM means words per minute. This test divides the passage’s word count
          by the time you spend reading, excluding pauses. The title is not
          counted. Words separated by spaces count as words; punctuation on its
          own does not.
        </p>
        <div className="formula">WPM = words read × 60 ÷ seconds</div>
        <p>
          For example, reading 500 words in 2 minutes gives 250 WPM. To use a
          passage or book of your own, try the{" "}
          <a href="/wpm-calculator">WPM calculator</a>.
        </p>
        <h2>What is a good reading speed?</h2>
        <p>
          A useful reading pace depends on your text and your goal. Reading a
          story for pleasure is different from studying a difficult paragraph.
          Compare similar material and pay attention to what you understood. Our{" "}
          <a href="/average-reading-speed">guide to average reading speed</a>{" "}
          explains the research and its limits.
        </p>
        <h2>How accurate is this online reading test?</h2>
        <p>
          This is an informal snapshot, not a standardised or diagnostic test.
          Timing includes your click at the end, and three questions sample only
          a small part of what you read. Tests completed in under 15 seconds do
          not produce a WPM estimate. Repeating this same story may increase
          your score through familiarity.
        </p>
        <p>
          The test runs in your browser. Your answers and result are kept only
          in this page’s memory and clear when you reload. Switching to another
          tab pauses the timer; resume when you return.
        </p>
        <h2>Can I test my reading speed with a physical book?</h2>
        <p>
          Yes. Time a reading session and divide the words read by the minutes
          spent reading. In the <a href="/#how">ReadPace mobile app</a>, you can
          scan the pages to count the words on your phone, then take an optional
          comprehension quiz. Repeated sessions help reveal the relationship
          between your pace and recall.
        </p>
      </div>
    </ResourcePage>
  );
}
