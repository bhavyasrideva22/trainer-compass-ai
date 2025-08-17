export interface Question {
  id: string;
  category: 'psychometric' | 'technical' | 'wiscar';
  subcategory?: string;
  question: string;
  type: 'likert' | 'multiple_choice' | 'scenario';
  options?: string[];
  weight?: number;
}

export interface AssessmentResponse {
  questionId: string;
  response: number | string;
  timestamp: Date;
}

export interface ScoreBreakdown {
  interest: number;
  personality_fit: number;
  motivation: number;
  cognitive_style: number;
  general_aptitude: number;
  prerequisite_knowledge: number;
  domain_knowledge: number;
  will: number;
  skill: number;
  cognitive_readiness: number;
  ability_to_learn: number;
  real_world_alignment: number;
}

export interface AssessmentResult {
  overall_confidence: number;
  recommendation: 'Yes' | 'Maybe' | 'No';
  psychometric_score: number;
  technical_score: number;
  wiscar_score: number;
  detailed_scores: ScoreBreakdown;
  next_steps: string[];
  career_paths: string[];
  insights: string[];
}

export interface AssessmentState {
  currentQuestionIndex: number;
  responses: AssessmentResponse[];
  startTime: Date;
  isCompleted: boolean;
  result?: AssessmentResult;
}