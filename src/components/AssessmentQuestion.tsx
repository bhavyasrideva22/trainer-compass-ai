import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Question } from "@/types/assessment";
import { likertOptions } from "@/data/questions";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";

interface AssessmentQuestionProps {
  question: Question;
  currentIndex: number;
  totalQuestions: number;
  onAnswer: (response: number | string) => void;
  onPrevious: () => void;
  onNext: () => void;
  canGoBack: boolean;
  canGoNext: boolean;
  selectedAnswer?: number | string;
}

export default function AssessmentQuestion({
  question,
  currentIndex,
  totalQuestions,
  onAnswer,
  onPrevious,
  onNext,
  canGoBack,
  canGoNext,
  selectedAnswer
}: AssessmentQuestionProps) {
  const [localAnswer, setLocalAnswer] = useState<string>(
    selectedAnswer !== undefined ? selectedAnswer.toString() : ""
  );

  const handleAnswerChange = (value: string) => {
    setLocalAnswer(value);
    onAnswer(question.type === 'likert' ? parseInt(value) : value);
  };

  const progress = ((currentIndex + 1) / totalQuestions) * 100;

  const getCategoryDisplay = (category: string) => {
    switch (category) {
      case 'psychometric':
        return { name: 'Personality & Interests', color: 'bg-blue-500' };
      case 'technical':
        return { name: 'Technical Skills', color: 'bg-green-500' };
      case 'wiscar':
        return { name: 'WISCAR Framework', color: 'bg-purple-500' };
      default:
        return { name: 'Assessment', color: 'bg-primary' };
    }
  };

  const categoryInfo = getCategoryDisplay(question.category);

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-muted/50 to-accent/20 py-8 px-4">
      <div className="max-w-3xl mx-auto">
        {/* Progress Header */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-3">
              <div className={`w-3 h-3 rounded-full ${categoryInfo.color}`}></div>
              <span className="text-sm font-medium text-muted-foreground">
                {categoryInfo.name}
              </span>
            </div>
            <span className="text-sm text-muted-foreground">
              {currentIndex + 1} of {totalQuestions}
            </span>
          </div>
          <Progress value={progress} className="h-2" />
        </div>

        {/* Question Card */}
        <Card className="shadow-xl border-0 bg-card/95 backdrop-blur-sm mb-8">
          <CardHeader>
            <CardTitle className="text-2xl leading-relaxed">
              {question.question}
            </CardTitle>
          </CardHeader>
          <CardContent>
            {question.type === 'likert' ? (
              <RadioGroup value={localAnswer} onValueChange={handleAnswerChange}>
                <div className="space-y-4">
                  {likertOptions.map((option, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <RadioGroupItem value={index.toString()} id={`option-${index}`} />
                      <Label 
                        htmlFor={`option-${index}`} 
                        className="flex-1 cursor-pointer text-base leading-relaxed py-2"
                      >
                        {option}
                      </Label>
                    </div>
                  ))}
                </div>
              </RadioGroup>
            ) : (
              <RadioGroup value={localAnswer} onValueChange={handleAnswerChange}>
                <div className="space-y-4">
                  {question.options?.map((option, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <RadioGroupItem value={index.toString()} id={`option-${index}`} className="mt-1" />
                      <Label 
                        htmlFor={`option-${index}`} 
                        className="flex-1 cursor-pointer text-base leading-relaxed py-2"
                      >
                        {option}
                      </Label>
                    </div>
                  ))}
                </div>
              </RadioGroup>
            )}
          </CardContent>
        </Card>

        {/* Navigation */}
        <div className="flex justify-between items-center">
          <Button
            variant="outline"
            onClick={onPrevious}
            disabled={!canGoBack}
            className="flex items-center gap-2"
          >
            <ChevronLeft className="w-4 h-4" />
            Previous
          </Button>

          <Button
            variant="default"
            onClick={onNext}
            disabled={!canGoNext || !localAnswer}
            className="flex items-center gap-2"
          >
            {currentIndex === totalQuestions - 1 ? 'Complete Assessment' : 'Next'}
            <ChevronRight className="w-4 h-4" />
          </Button>
        </div>
      </div>
    </div>
  );
}