export type Founder = {
  name: string;
  role: string;
  photo: string;
  bio: string;
};

// export const founders: Founder[] = [
//   {
//     name: "Sherrey Chng",
//     role: "Co-founder — Operations",
//     photo: "/founders/sherrey.png",
//     bio: "16+ years leading user research, product design and innovation across banking and fintech. Designed and launched two digital banks, Tonik and Vikki, and a lending SaaS platform from the ground up.",
//   },
//   {
//     name: "Dr Debarka Sengupta",
//     role: "Co-founder — AI",
//     photo: "/founders/debarka.png",
//     bio: "Associate Professor of Computational Biology and Computer Science at IIIT-Delhi. Recipient of the INSPIRE Faculty Award. His research group was among the first to apply big-data algorithms to single-cell genomics.",
//   },
//   {
//     name: "Pawan Bahuguna",
//     role: "Co-founder — Product & Commercial",
//     photo: "/founders/pawan.png",
//     bio: "Co-founder of Tonik Bank, securing the first digital banking licence in the Philippines and building the bank from the ground up. Led digital transformation across banking, tech, education and retail.",
//   },
//   {
//     name: "Arivuval Ramu",
//     role: "Senior Advisor — Technology",
//     photo: "/founders/ramu.png",
//     bio: "25+ years at C-level in operations and PMO within financial services. Built and scaled four startups, including two digital banks — Tonik and Galaxy FinX — and two financial companies across Southeast Asia.",
//   },
// ];

export const site = {
  name: "Fintilla",
  legalName: "Fintilla Pte. Ltd.",
  url: "https://www.fintilla.com",
  email: "sherrey@fintilla.com",
  title: "Fintilla | AI Credit Assessment for MSME Lenders",
  description:
    "AI credit assessment for lenders serving small businesses with limited financial records. A guided mobile session becomes evidence-backed lending insights.",
  shortDescription:
    "Fintilla is an AI-powered credit assessment platform that helps lenders assess small businesses (MSMEs) with limited financial records.",
};

export type Commitment = {
  title: string;
  body: string;
};

export const commitments: Commitment[] = [
  {
    title: "No politics",
    body: "Decisions are made in the room, based on the best ideas — not side conversations or personal connections.",
  },
  {
    title: "Say it plainly",
    body: "Use simple words, real numbers, and be direct. If something is late or broken, say it first, not on the last slide.",
  },
  {
    title: "Speak up",
    body: "If you disagree, say it. Silence means agreement.",
  },
  {
    title: "Firm, not rude",
    body: "Never lower the standard to avoid discomfort. Be tough on the work, respectful to the people.",
  },
  {
    title: "One result",
    body: "We succeed as one team. Help before you're asked.",
  },
  {
    title: "Finish it",
    body: "We measure results, not effort. It counts only when the customer has it and it's working.",
  },
];
