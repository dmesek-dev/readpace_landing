"use client";

import { useEffect, useRef, useState } from "react";
import { ArrowIcon, TimerIcon } from "@/components/Icons";
import { passage, passageWordCount, questions } from "@/content/reading-test";
import { calculateWpm, formatTime } from "@/lib/reading";

type Stage = "ready" | "reading" | "paused" | "quiz" | "result";
export function ReadingTest() {
  const [stage, setStage] = useState<Stage>("ready");
  const [elapsed, setElapsed] = useState(0);
  const [answers, setAnswers] = useState<Record<number, number>>({});
  const startedAt = useRef(0);
  const accumulated = useRef(0);
  const heading = useRef<HTMLHeadingElement>(null);
  const moved = useRef(false);

  useEffect(() => {
    if (moved.current) heading.current?.focus();
    moved.current = true;
  }, [stage]);

  useEffect(() => {
    if (stage !== "reading") return;
    const tick = () =>
      setElapsed(
        accumulated.current + (performance.now() - startedAt.current) / 1000,
      );
    const timer = window.setInterval(tick, 250);
    const onVisibility = () => {
      if (document.hidden) {
        accumulated.current += (performance.now() - startedAt.current) / 1000;
        setElapsed(accumulated.current);
        setStage("paused");
      }
    };
    document.addEventListener("visibilitychange", onVisibility);
    return () => {
      clearInterval(timer);
      document.removeEventListener("visibilitychange", onVisibility);
    };
  }, [stage]);

  function begin() {
    startedAt.current = performance.now();
    setStage("reading");
  }
  function stop(next: "paused" | "quiz") {
    accumulated.current += (performance.now() - startedAt.current) / 1000;
    setElapsed(accumulated.current);
    setStage(next);
  }
  function reset() {
    accumulated.current = 0;
    startedAt.current = 0;
    setElapsed(0);
    setAnswers({});
    setStage("ready");
  }
  const wpm = elapsed >= 15 ? calculateWpm(passageWordCount, elapsed) : null;
  const correct = questions.filter(
    (question, index) => answers[index] === question.answer,
  ).length;

  return (
    <section className="tool-panel" aria-label="Interactive reading speed test">
      <noscript>
        <p>
          This timer needs JavaScript. You can also time a passage yourself and
          use the formula below: words × 60 ÷ seconds.
        </p>
      </noscript>
      {stage === "ready" && (
        <div className="test-ready">
          <TimerIcon aria-hidden="true" />
          <h2 ref={heading} tabIndex={-1}>
            A small story. A little self-discovery.
          </h2>
          <p>
            Read an original {passageWordCount}-word story at your normal pace,
            then answer three recall questions. The timer starts when you do.
          </p>
          <button type="button" className="button button-brand" onClick={begin}>
            Start reading <ArrowIcon aria-hidden="true" />
          </button>
          <p>Read for understanding. There’s no number to beat.</p>
        </div>
      )}
      {stage === "reading" && (
        <>
          <div className="tool-kicker">
            <span>{passageWordCount} WORDS · ORIGINAL FICTION</span>
            <span aria-label="Elapsed reading time">{formatTime(elapsed)}</span>
          </div>
          <h2 ref={heading} tabIndex={-1}>
            {passage.title}
          </h2>
          <div className="reading-passage">
            {passage.paragraphs.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>
          <div className="tool-controls">
            <button
              type="button"
              className="button button-brand"
              onClick={() => stop("quiz")}
            >
              Finished reading <ArrowIcon aria-hidden="true" />
            </button>
            <button
              type="button"
              className="button button-outline"
              onClick={() => stop("paused")}
            >
              Pause
            </button>
          </div>
          <p>
            Finish the whole passage before stopping the timer. Switching tabs
            pauses the test.
          </p>
        </>
      )}
      {stage === "paused" && (
        <div className="test-ready">
          <h2 ref={heading} tabIndex={-1}>
            Take your time.
          </h2>
          <p>
            Your test is paused at {formatTime(elapsed)}. The passage is hidden
            until you’re ready to continue.
          </p>
          <div className="tool-controls justify-center">
            <button
              type="button"
              className="button button-brand"
              onClick={begin}
            >
              Resume reading
            </button>
            <button
              type="button"
              className="button button-outline"
              onClick={reset}
            >
              Start over
            </button>
          </div>
        </div>
      )}
      {stage === "quiz" && (
        <>
          <div className="tool-kicker">
            <span>READING COMPLETE</span>
            <span>{formatTime(elapsed)}</span>
          </div>
          <h2 ref={heading} tabIndex={-1}>
            What stayed with you?
          </h2>
          <p>Your timer has stopped. Answer these questions from memory.</p>
          <form
            onSubmit={(event) => {
              event.preventDefault();
              setStage("result");
            }}
          >
            {questions.map((question, index) => (
              <fieldset className="quiz-question" key={question.question}>
                <legend>
                  {index + 1}. {question.question}
                </legend>
                {question.options.map((option, optionIndex) => (
                  <label key={option}>
                    <input
                      type="radio"
                      name={`question-${index}`}
                      value={optionIndex}
                      required
                      checked={answers[index] === optionIndex}
                      onChange={() =>
                        setAnswers((current) => ({
                          ...current,
                          [index]: optionIndex,
                        }))
                      }
                    />
                    {option}
                  </label>
                ))}
              </fieldset>
            ))}
            <button className="button button-brand" type="submit">
              See my results <ArrowIcon aria-hidden="true" />
            </button>
          </form>
        </>
      )}
      {stage === "result" && (
        <>
          <h2 ref={heading} tabIndex={-1}>
            Your reading, in perspective.
          </h2>
          <div className="result-grid">
            <div>
              <strong>{wpm === null ? "—" : wpm}</strong>
              <span>words per minute</span>
            </div>
            <div>
              <strong>{correct}/3</strong>
              <span>recall questions correct</span>
            </div>
          </div>
          {wpm === null ? (
            <p className="tool-alert">
              This reading lasted less than 15 seconds, so we haven’t estimated
              your WPM. Restart and read the whole passage for a more useful
              result.
            </p>
          ) : (
            <p>
              You read {passageWordCount} words in {formatTime(elapsed)} and
              answered {correct} of 3 questions correctly (
              {Math.round((correct / 3) * 100)}%). This is a snapshot of this
              passage, not a validated assessment of your reading ability.
            </p>
          )}
          <p>
            Different texts, languages and reading goals change your pace. A
            three-question quiz is a brief recall check, not a complete measure
            of comprehension.
          </p>
          <details className="quiz-review">
            <summary>Review the answers</summary>
            <ol>
              {questions.map((question, index) => (
                <li key={question.question}>
                  <strong>
                    {index + 1}. {question.question}
                  </strong>
                  <br />
                  {answers[index] === question.answer
                    ? "Correct"
                    : "Correct answer"}
                  : {question.options[question.answer]}
                </li>
              ))}
            </ol>
          </details>
          <div className="result-next">
            <h3>One story is a start. Your books tell the bigger picture.</h3>
            <p>
              ReadPace tracks WPM and recall across sessions in your physical
              books, helping you find the pace where you remember most.
            </p>
            <div className="tool-controls">
              <a className="button button-brand" href="/#get">
                Explore the ReadPace app <ArrowIcon aria-hidden="true" />
              </a>
              <button
                type="button"
                className="button button-outline"
                onClick={reset}
              >
                Try again
              </button>
            </div>
            <p>
              Repeating a familiar passage can change your result. Use new
              material to compare sessions.
            </p>
          </div>
        </>
      )}
    </section>
  );
}
