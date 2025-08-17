import { useState } from 'react';
import AssessmentIntro from '@/components/AssessmentIntro';
import AssessmentQuestion from '@/components/AssessmentQuestion';
import AssessmentResults from '@/components/AssessmentResults';
import { useAssessment } from '@/hooks/useAssessment';

type AppState = 'intro' | 'assessment' | 'results';

const Index = () => {
  const [appState, setAppState] = useState<AppState>('intro');
  const {
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
  } = useAssessment();

  const handleStartAssessment = () => {
    startAssessment();
    setAppState('assessment');
  };

  const handleAnswer = (response: number | string) => {
    recordResponse(response);
  };

  const handleNext = () => {
    goToNext();
    if (state.isCompleted) {
      setAppState('results');
    }
  };

  const handleRestart = () => {
    restartAssessment();
    setAppState('intro');
  };

  if (appState === 'intro') {
    return <AssessmentIntro onStartAssessment={handleStartAssessment} />;
  }

  if (appState === 'results' && state.result) {
    return <AssessmentResults result={state.result} onRestart={handleRestart} />;
  }

  if (appState === 'assessment' && currentQuestion) {
    return (
      <AssessmentQuestion
        question={currentQuestion}
        currentIndex={state.currentQuestionIndex}
        totalQuestions={totalQuestions}
        onAnswer={handleAnswer}
        onPrevious={goToPrevious}
        onNext={handleNext}
        canGoBack={canGoBack}
        canGoNext={canGoNext}
        selectedAnswer={getResponseForCurrentQuestion()}
      />
    );
  }

  return null;
};

export default Index;
