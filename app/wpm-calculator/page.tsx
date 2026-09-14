import { WpmCalculator } from "@/components/WpmCalculator";
import { ResourcePage } from "@/components/ResourcePage";
import { pageMetadata } from "@/lib/seo";
const title = "WPM calculator";
const description =
  "Calculate your reading speed in words per minute. Enter the words you read and the time you spent reading to find your WPM instantly.";
export const metadata = pageMetadata(
  "WPM Calculator: Calculate Your Reading Speed",
  description,
  "/wpm-calculator",
);
export default function WpmCalculatorPage() {
  return (
    <ResourcePage
      title={title}
      description={description}
      path="/wpm-calculator"
      label="WPM calculator"
    >
      <WpmCalculator />
      <div className="article-body">
        <h2>What does WPM mean?</h2>
        <div className="answer-box">
          <p>
            <strong>WPM stands for words per minute.</strong> In reading, it
            measures the number of words you read divided by the time in
            minutes. It describes your pace for a particular passage; it does
            not measure how much you understood.
          </p>
        </div>
        <p>
          WPM is also used for typing and speaking. This calculator is designed
          for reading speed. Typing tests may count standardised character
          groups and apply error adjustments, so a typing score is not directly
          comparable to a reading score.
        </p>
        <h2>How to calculate words per minute</h2>
        <ol>
          <li>
            Count the words in the text you actually read. Page counts alone are
            an estimate because layouts vary.
          </li>
          <li>Record your reading time, excluding breaks.</li>
          <li>
            Divide the number of words by the elapsed minutes. If you measured
            seconds, multiply words by 60 and divide by seconds.
          </li>
        </ol>
        <div className="formula">WPM = words read × 60 ÷ seconds</div>
        <table>
          <caption>Worked examples of reading speed calculations</caption>
          <thead>
            <tr>
              <th scope="col">Words read</th>
              <th scope="col">Reading time</th>
              <th scope="col">WPM</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>250</td>
              <td>1 minute</td>
              <td>250</td>
            </tr>
            <tr>
              <td>500</td>
              <td>2 minutes</td>
              <td>250</td>
            </tr>
            <tr>
              <td>600</td>
              <td>2 minutes 30 seconds</td>
              <td>240</td>
            </tr>
            <tr>
              <td>1,000</td>
              <td>5 minutes</td>
              <td>200</td>
            </tr>
          </tbody>
        </table>
        <h2>What if I don’t know my word count?</h2>
        <p>
          You can use the{" "}
          <a href="/reading-speed-test">free reading speed test</a>, which has a
          passage with a known word count. For printed books,{" "}
          <a href="/#how">ReadPace counts words from scanned pages</a> on your
          phone. Check the scan covers only the text you read for that timed
          session.
        </p>
        <h2>How long will a text take to read?</h2>
        <p>
          Divide the text’s word count by your WPM to estimate reading time in
          minutes. For example, at 250 WPM, a 1,000-word text takes about 4
          minutes. This assumes a steady pace and does not include pauses, notes
          or rereading.
        </p>
        <h2>What does my WPM result tell me?</h2>
        <p>
          A higher number means a faster pace on that text. It does not
          automatically mean better reading. Keep the kind of text and your
          purpose similar when comparing results, and check your understanding
          too. Read the{" "}
          <a href="/average-reading-speed">
            research-based guide to average reading speed
          </a>{" "}
          for context.
        </p>
      </div>
    </ResourcePage>
  );
}
