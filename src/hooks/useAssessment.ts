import { useState, useCallback } from 'react';
import { AssessmentState, AssessmentResponse, AssessmentResult } from '@/types/assessment';
import { assessmentQuestions } from '@/data/questions';
import { calculateAssessmentResult } from '@/utils/scoring';

export function useAssessment() {
  const [state, setState] = useState<AssessmentState>({
    currentQuestionIndex: 0,
    responses: [],
    startTime: new Date(),
    isCompleted: false,
  });

  const currentQuestion = assessmentQuestions[state.currentQuestionIndex];
  const totalQuestions = assessmentQuestions.length;
  const canGoBack = state.currentQuestionIndex > 0;
  const canGoNext = state.currentQuestionIndex < totalQuestions - 1;

  const startAssessment = useCallback(() => {
    setState({
      currentQuestionIndex: 0,
      responses: [],
      startTime: new Date(),
      isCompleted: false,
    });
  }, []);

  const recordResponse = useCallback((response: number | string) => {
    if (!currentQuestion) return;

    setState(prev => {
      const existingResponseIndex = prev.responses.findIndex(
        r => r.questionId === currentQuestion.id
      );

      let newResponses;
      if (existingResponseIndex >= 0) {
        // Update existing response
        newResponses = [...prev.responses];
        newResponses[existingResponseIndex] = {
          questionId: currentQuestion.id,
          response,
          timestamp: new Date(),
        };
      } else {
        // Add new response
        newResponses = [
          ...prev.responses,
          {
            questionId: currentQuestion.id,
            response,
            timestamp: new Date(),
          },
        ];
      }

      return {
        ...prev,
        responses: newResponses,
      };
    });
  }, [currentQuestion]);

  const goToNext = useCallback(() => {
    setState(prev => {
      const newIndex = prev.currentQuestionIndex + 1;
      
      if (newIndex >= totalQuestions) {
        // Assessment completed - calculate results
        const result = calculateAssessmentResult(prev.responses);
        return {
          ...prev,
          currentQuestionIndex: newIndex,
          isCompleted: true,
          result,
        };
      }

      return {
        ...prev,
        currentQuestionIndex: newIndex,
      };
    });
  }, [totalQuestions]);

  const goToPrevious = useCallback(() => {
    setState(prev => ({
      ...prev,
      currentQuestionIndex: Math.max(0, prev.currentQuestionIndex - 1),
    }));
  }, []);

  const getResponseForCurrentQuestion = useCallback(() => {
    if (!currentQuestion) return undefined;
    
    const response = state.responses.find(r => r.questionId === currentQuestion.id);
    return response?.response;
  }, [currentQuestion, state.responses]);

  const restartAssessment = useCallback(() => {
    setState({
      currentQuestionIndex: 0,
      responses: [],
      startTime: new Date(),
      isCompleted: false,
    });
  }, []);

  return {
    state,
    currentQuestion,
    totalQuestions,
    canGoBack,
    canGoNext,
    startAssessment,
    recordResponse,
    goToNext,
    goToPrevious,
    getResponseForCurrentQuestion,
    restartAssessment,
  };
}