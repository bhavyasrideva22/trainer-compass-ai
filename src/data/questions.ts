import { Question } from "@/types/assessment";

export const assessmentQuestions: Question[] = [
  // Psychometric - Interest Scale (5 questions)
  {
    id: "p1",
    category: "psychometric",
    subcategory: "interest",
    question: "I enjoy helping others understand complex ideas and concepts.",
    type: "likert",
    weight: 1.2
  },
  {
    id: "p2", 
    category: "psychometric",
    subcategory: "interest",
    question: "Facilitating group learning sessions energizes me.",
    type: "likert",
    weight: 1.0
  },
  {
    id: "p3",
    category: "psychometric", 
    subcategory: "interest",
    question: "I actively follow trends in workplace learning and development.",
    type: "likert",
    weight: 0.8
  },
  {
    id: "p4",
    category: "psychometric",
    subcategory: "interest", 
    question: "I find satisfaction in seeing others grow professionally.",
    type: "likert",
    weight: 1.1
  },
  {
    id: "p5",
    category: "psychometric",
    subcategory: "interest",
    question: "I enjoy breaking down complex processes into teachable steps.",
    type: "likert",
    weight: 0.9
  },

  // Psychometric - Personality Compatibility (4 questions)
  {
    id: "p6",
    category: "psychometric",
    subcategory: "personality",
    question: "I feel comfortable speaking in front of groups of people.",
    type: "likert",
    weight: 1.3
  },
  {
    id: "p7",
    category: "psychometric", 
    subcategory: "personality",
    question: "I can easily adapt my communication style to different audiences.",
    type: "likert",
    weight: 1.1
  },
  {
    id: "p8",
    category: "psychometric",
    subcategory: "personality",
    question: "I remain patient when working with people who learn at different speeds.",
    type: "likert", 
    weight: 1.2
  },
  {
    id: "p9",
    category: "psychometric",
    subcategory: "personality",
    question: "I enjoy collaborating with others to solve problems.",
    type: "likert",
    weight: 0.8
  },

  // Psychometric - Motivation (4 questions)
  {
    id: "p10",
    category: "psychometric",
    subcategory: "motivation",
    question: "I am motivated by the opportunity to help organizations improve their performance.",
    type: "likert",
    weight: 1.0
  },
  {
    id: "p11",
    category: "psychometric",
    subcategory: "motivation", 
    question: "I enjoy continuous learning and staying updated with industry trends.",
    type: "likert",
    weight: 0.9
  },
  {
    id: "p12",
    category: "psychometric",
    subcategory: "motivation",
    question: "Making a positive impact on people's careers drives me.",
    type: "likert",
    weight: 1.2
  },
  {
    id: "p13",
    category: "psychometric",
    subcategory: "motivation",
    question: "I am excited by the challenge of engaging disinterested learners.",
    type: "likert",
    weight: 1.1
  },

  // Technical - General Aptitude (4 questions)
  {
    id: "t1",
    category: "technical",
    subcategory: "aptitude",
    question: "You need to train a diverse group with varying experience levels. What's your primary approach?",
    type: "multiple_choice",
    options: [
      "Create separate sessions for different skill levels",
      "Use a layered approach with basic and advanced content",
      "Focus on the majority skill level present", 
      "Pair experienced learners with beginners as mentors"
    ],
    weight: 1.2
  },
  {
    id: "t2",
    category: "technical",
    subcategory: "aptitude",
    question: "A participant challenges your expertise during a session. How do you respond?",
    type: "multiple_choice", 
    options: [
      "Acknowledge their perspective and use it as a learning opportunity",
      "Redirect the conversation back to the planned content",
      "Take the discussion offline to avoid disruption",
      "Ask the group to vote on the best approach"
    ],
    weight: 1.3
  },
  {
    id: "t3",
    category: "technical",
    subcategory: "aptitude",
    question: "When explaining a complex concept, I prefer to:",
    type: "multiple_choice",
    options: [
      "Start with theory then provide practical examples",
      "Begin with a real-world scenario then explain the theory",
      "Use visual aids and interactive demonstrations", 
      "Encourage participants to discover the concept through activities"
    ],
    weight: 1.0
  },
  {
    id: "t4",
    category: "technical",
    subcategory: "aptitude", 
    question: "How do you typically measure training effectiveness?",
    type: "multiple_choice",
    options: [
      "Pre and post-training assessments",
      "Participant feedback and satisfaction scores",
      "On-the-job performance changes over time",
      "Combination of assessments, feedback, and performance tracking"
    ],
    weight: 1.1
  },

  // Technical - Prerequisite Knowledge (3 questions)
  {
    id: "t5",
    category: "technical",
    subcategory: "prerequisite",
    question: "I am familiar with adult learning principles (such as ADDIE or Kirkpatrick's model).",
    type: "likert",
    weight: 1.2
  },
  {
    id: "t6",
    category: "technical",
    subcategory: "prerequisite",
    question: "I have experience with presentation tools and learning technologies.",
    type: "likert",
    weight: 0.8
  },
  {
    id: "t7",
    category: "technical",
    subcategory: "prerequisite",
    question: "I understand how to create effective learning objectives and curricula.",
    type: "likert", 
    weight: 1.1
  },

  // WISCAR Framework (6 questions)
  {
    id: "w1",
    category: "wiscar",
    subcategory: "will",
    question: "When faced with unmotivated learners, I persist in finding ways to re-engage them.",
    type: "likert",
    weight: 1.2
  },
  {
    id: "w2",
    category: "wiscar",
    subcategory: "skill",
    question: "I have experience leading workshops, presentations, or training sessions.",
    type: "likert",
    weight: 1.3
  },
  {
    id: "w3",
    category: "wiscar",
    subcategory: "cognitive",
    question: "I can quickly adjust my training content based on real-time learner feedback.",
    type: "likert",
    weight: 1.1
  },
  {
    id: "w4",
    category: "wiscar",
    subcategory: "ability_to_learn",
    question: "I actively reflect on what worked and what didn't in my presentations or teaching.",
    type: "likert",
    weight: 1.0
  },
  {
    id: "w5",
    category: "wiscar", 
    subcategory: "real_world",
    question: "I would enjoy designing courses and facilitating workshops as part of my regular work.",
    type: "likert",
    weight: 1.2
  },
  {
    id: "w6",
    category: "wiscar",
    subcategory: "real_world", 
    question: "I am comfortable working with corporate stakeholders to align training with business goals.",
    type: "likert",
    weight: 0.9
  }
];

export const likertOptions = [
  "Strongly Disagree",
  "Disagree", 
  "Neutral",
  "Agree",
  "Strongly Agree"
];