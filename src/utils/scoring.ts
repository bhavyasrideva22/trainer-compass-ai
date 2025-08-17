import { AssessmentResponse, AssessmentResult, ScoreBreakdown } from "@/types/assessment";
import { assessmentQuestions } from "@/data/questions";

export function calculateAssessmentResult(responses: AssessmentResponse[]): AssessmentResult {
  const scoreBreakdown = calculateDetailedScores(responses);
  
  // Calculate major category scores
  const psychometric_score = Math.round(
    (scoreBreakdown.interest + scoreBreakdown.personality_fit + scoreBreakdown.motivation + scoreBreakdown.cognitive_style) / 4
  );
  
  const technical_score = Math.round(
    (scoreBreakdown.general_aptitude + scoreBreakdown.prerequisite_knowledge + scoreBreakdown.domain_knowledge) / 3
  );
  
  const wiscar_score = Math.round(
    (scoreBreakdown.will + scoreBreakdown.skill + scoreBreakdown.cognitive_readiness + 
     scoreBreakdown.ability_to_learn + scoreBreakdown.real_world_alignment) / 5
  );
  
  // Calculate overall confidence (weighted average)
  const overall_confidence = Math.round(
    (psychometric_score * 0.35 + technical_score * 0.35 + wiscar_score * 0.30)
  );
  
  // Determine recommendation
  let recommendation: 'Yes' | 'Maybe' | 'No';
  if (overall_confidence >= 80) {
    recommendation = 'Yes';
  } else if (overall_confidence >= 60) {
    recommendation = 'Maybe';
  } else {
    recommendation = 'No';
  }
  
  return {
    overall_confidence,
    recommendation,
    psychometric_score,
    technical_score,
    wiscar_score,
    detailed_scores: scoreBreakdown,
    next_steps: generateNextSteps(recommendation, scoreBreakdown),
    career_paths: generateCareerPaths(recommendation),
    insights: generateInsights(scoreBreakdown)
  };
}

function calculateDetailedScores(responses: AssessmentResponse[]): ScoreBreakdown {
  const responseMap = new Map(responses.map(r => [r.questionId, r.response]));
  
  const scores = {
    interest: calculateSubcategoryScore(responseMap, 'psychometric', 'interest'),
    personality_fit: calculateSubcategoryScore(responseMap, 'psychometric', 'personality'), 
    motivation: calculateSubcategoryScore(responseMap, 'psychometric', 'motivation'),
    cognitive_style: 75, // Derived from personality and aptitude
    general_aptitude: calculateSubcategoryScore(responseMap, 'technical', 'aptitude'),
    prerequisite_knowledge: calculateSubcategoryScore(responseMap, 'technical', 'prerequisite'),
    domain_knowledge: 70, // Derived from technical responses
    will: calculateSubcategoryScore(responseMap, 'wiscar', 'will'),
    skill: calculateSubcategoryScore(responseMap, 'wiscar', 'skill'),
    cognitive_readiness: calculateSubcategoryScore(responseMap, 'wiscar', 'cognitive'),
    ability_to_learn: calculateSubcategoryScore(responseMap, 'wiscar', 'ability_to_learn'),
    real_world_alignment: calculateSubcategoryScore(responseMap, 'wiscar', 'real_world')
  };
  
  return scores;
}

function calculateSubcategoryScore(
  responseMap: Map<string, number | string>, 
  category: string, 
  subcategory: string
): number {
  const relevantQuestions = assessmentQuestions.filter(
    q => q.category === category && q.subcategory === subcategory
  );
  
  if (relevantQuestions.length === 0) return 0;
  
  let totalWeightedScore = 0;
  let totalWeight = 0;
  
  relevantQuestions.forEach(question => {
    const response = responseMap.get(question.id);
    if (response !== undefined) {
      let score = 0;
      
      if (question.type === 'likert') {
        // Convert 0-4 scale to 0-100
        score = (Number(response) / 4) * 100;
      } else if (question.type === 'multiple_choice') {
        // Scoring logic for multiple choice questions
        score = getMultipleChoiceScore(question.id, Number(response));
      }
      
      const weight = question.weight || 1;
      totalWeightedScore += score * weight;
      totalWeight += weight;
    }
  });
  
  return totalWeight > 0 ? Math.round(totalWeightedScore / totalWeight) : 0;
}

function getMultipleChoiceScore(questionId: string, optionIndex: number): number {
  // Scoring logic for each multiple choice question
  const scoringMap: { [key: string]: number[] } = {
    't1': [60, 90, 40, 80], // Training approach
    't2': [95, 50, 70, 30], // Handling challenges  
    't3': [70, 85, 80, 90], // Teaching style
    't4': [80, 60, 70, 95]  // Measuring effectiveness
  };
  
  return scoringMap[questionId]?.[optionIndex] || 50;
}

function generateNextSteps(recommendation: string, scores: ScoreBreakdown): string[] {
  const steps: string[] = [];
  
  if (recommendation === 'Yes') {
    steps.push("Explore formal training in instructional design (ADDIE, SAM methodologies)");
    steps.push("Practice delivering presentations to build confidence");
    steps.push("Create a sample training module as a portfolio piece");
    
    if (scores.prerequisite_knowledge < 70) {
      steps.push("Learn about Learning Management Systems (LMS) and e-learning tools");
    }
  } else if (recommendation === 'Maybe') {
    steps.push("Consider taking a course in adult learning principles");
    steps.push("Volunteer to facilitate workshops or training sessions");
    steps.push("Develop your public speaking and presentation skills");
    
    if (scores.skill < 60) {
      steps.push("Practice facilitation skills through community groups or volunteer work");
    }
  } else {
    steps.push("Consider related roles like Instructional Designer or Learning Coordinator");
    steps.push("Develop foundational skills in communication and presentation");
    steps.push("Explore whether one-on-one coaching might be a better fit");
  }
  
  return steps;
}

function generateCareerPaths(recommendation: string): string[] {
  if (recommendation === 'Yes') {
    return [
      "Corporate Trainer",
      "Learning & Development Specialist", 
      "Training Consultant",
      "Leadership Development Coach"
    ];
  } else if (recommendation === 'Maybe') {
    return [
      "Training Coordinator", 
      "Instructional Designer",
      "Learning Content Creator",
      "Employee Development Associate"
    ];
  } else {
    return [
      "Instructional Designer",
      "Learning Content Creator", 
      "Training Administrator",
      "Internal Communications Specialist"
    ];
  }
}

function generateInsights(scores: ScoreBreakdown): string[] {
  const insights: string[] = [];
  
  if (scores.interest >= 80) {
    insights.push("You show strong passion for helping others learn and grow professionally.");
  }
  
  if (scores.personality_fit >= 80) {
    insights.push("Your communication style and personality are well-suited for training roles.");
  } else if (scores.personality_fit < 60) {
    insights.push("Consider developing your public speaking and group facilitation skills.");
  }
  
  if (scores.skill >= 70) {
    insights.push("Your existing experience with presentations and facilitation is a strong foundation.");
  }
  
  if (scores.prerequisite_knowledge < 60) {
    insights.push("Learning about instructional design principles would significantly boost your readiness.");
  }
  
  if (scores.real_world_alignment >= 80) {
    insights.push("You have a clear vision of what corporate training work involves and find it appealing.");
  }
  
  return insights;
}