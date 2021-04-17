// creating an array and passing the number, questions, options, and answers
let questions = [
    {
    numb: 1,
    question: "Cortex-M Processors are designed with a fairly _______",
    answer: "short pipeline",
    options: [
      "long pipeline",
      "mid pipeline",
      "short pipeline",
      "no pipeline"
    ] 

  },
    {
    numb: 2,
    question: "Cortex-M Processor, Sleep mode can be entered using _______",
    answer: "WFI",
    options: [
      "WFI",
      "WIC",
      "NWFE",
      "MPU"
    ]
  },
    {
    numb: 3,
    question: "Register bank of Cortex-MO and Cortex-MO+ consists of _______",
    answer: "16 registers",
    options: [
      "8 registers",
      "16 registers",
      "32 registers",
      "64 registers"
    ]
  },
    {
    numb: 4,
    question: " Cortex-MO and Cortex-MO+ processor do not include any _______",
    answer: "memory",
    options: [
      "bus",
      "instruction",
      "processing",
      "memory"
    ]
  },
    {
    numb: 5,
    question: "Processors designed for low power applications are _______",
    answer: "Cortex-M processors",
    options: [
      "Cortex-A processors",
      "Cortex-M processors",
      "Cortex-R processors",
      "ARM9E series"
    ]
  },
  {
    numb: 6,
    question: "Cortex-R Processor, Purpose of tightly coupled memory in Cortex-R processor is to provide _______",
    answer: "low latency memory",
    options: [
      "low latency memory",
      "high latency memory",
      "ROM",
      "SD card interface"
    ]
  },
  {
    numb: 7,
    question: "Architecturally, speed modes present in Cortex-M processors are _______",
    answer: "two",
    options: [
      "two",
      "three",
      "four",
      "five"
    ]
  },
  {
    numb: 8,
    question: "In Cortex-M pipelining, after fetching, data is _______",
    answer: "Decoded",
    options: [
      "Initialized",
      "Decoded",
      "Deleted",
      "Executed"
    ]
  },
  {
    numb: 9,
    question: "Which of the following supports the same instruction set as Cortex M0 Processor?",
    answer: "Cortex M0+ Processor",
    options: [
      "Cortex M7 Processor",
      "Cortex M4 Processor",
      "Cortex M3 Processor",
      "Cortex M0+ Processor"
    ]
  },
  {
    numb: 10,
    question: "Cortex-M0 processor support _______",
    answer: "56 instructions",
    options: [
      "36 instructions",
      "56 instructions",
      "64 instructions",
      "89 instructions"
    ]
  },
  // you can uncomment the below codes and make duplicate as more as you want to add question
  // but remember you need to give the numb value serialize like 1,2,3,5,6,7,8,9.....

  //   {
  //   numb: 6,
  //   question: "Your Question is Here",
  //   answer: "Correct answer of the question is here",
  //   options: [
  //     "Option 1",
  //     "option 2",
  //     "option 3",
  //     "option 4"
  //   ]
  // },
];