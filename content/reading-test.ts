import { countWords } from "@/lib/reading";

// Original passage written for this site. Do not include its title in the count.
export const passage = {
  title: "The bookshop at the end of the street",
  paragraphs: [
    "Every Thursday, Mara took the long way home. The shorter route followed the river and saved her ten minutes, but the longer one passed a small bookshop with a green door. She rarely bought anything. She simply liked the handwritten note in the window, which recommended a different book each week without ever mentioning its title.",
    "One evening, the note said: For anyone who has forgotten how to be surprised. Below it sat a thin blue book, its cover turned away from the glass. Mara had spent the whole afternoon checking figures in a spreadsheet. A small surprise sounded like exactly what she needed, so she pushed open the door.",
    "The bookseller was repairing a torn map behind the counter. When Mara asked about the window, he smiled and handed her the blue book. He explained that the recommendations came from customers. Each reader left a sentence describing who might enjoy a book, rather than a summary of what happened inside it. The idea was to introduce people to stories they would never think to search for.",
    "Mara settled into a chair beside the window and opened the first page. Outside, a cyclist stopped to adjust a basket. A bus arrived, waited, and left. She noticed none of it. The story followed a woman who collected lost objects and tried to return them to their owners, guided only by the places where she found them.",
    "After a few pages, Mara closed the book. She could remember the woman's tiny kitchen, a red glove drying on a radiator, and an address written on the back of a train ticket. She could not remember the last time a spreadsheet had given her such a clear picture of anything.",
    "She bought the book and asked for a blank recommendation card. The bookseller suggested she finish the story first. Mara laughed, slipped the card between the pages, and stepped outside. This time, she took the route along the river. There was still enough daylight to read on a bench before going home.",
  ],
};
export const passageWordCount = countWords(passage.paragraphs.join(" "));
export const questions = [
  {
    question: "Why did Mara usually take the longer route home?",
    options: [
      "It passed a bookshop she liked.",
      "The river path was closed.",
      "She wanted to visit a friend.",
    ],
    answer: 0,
  },
  {
    question: "Who wrote the book recommendations in the window?",
    options: [
      "The authors of the books.",
      "Customers of the shop.",
      "The bookseller's family.",
    ],
    answer: 1,
  },
  {
    question: "What did the bookseller suggest before Mara wrote her card?",
    options: [
      "Read another recommendation.",
      "Return the following Thursday.",
      "Finish reading the story first.",
    ],
    answer: 2,
  },
] as const;
