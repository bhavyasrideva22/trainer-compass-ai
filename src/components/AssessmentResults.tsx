import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { AssessmentResult } from "@/types/assessment";
import { CheckCircle, AlertCircle, XCircle, Target, BookOpen, Users, TrendingUp, ArrowRight } from "lucide-react";

interface AssessmentResultsProps {
  result: AssessmentResult;
  onRestart: () => void;
}

export default function AssessmentResults({ result, onRestart }: AssessmentResultsProps) {
  const getRecommendationIcon = () => {
    switch (result.recommendation) {
      case 'Yes':
        return <CheckCircle className="w-8 h-8 text-success" />;
      case 'Maybe':
        return <AlertCircle className="w-8 h-8 text-warning" />;
      case 'No':
        return <XCircle className="w-8 h-8 text-destructive" />;
    }
  };

  const getRecommendationColor = () => {
    switch (result.recommendation) {
      case 'Yes':
        return 'text-success';
      case 'Maybe':
        return 'text-warning';
      case 'No':
        return 'text-destructive';
    }
  };

  const getRecommendationMessage = () => {
    switch (result.recommendation) {
      case 'Yes':
        return "You show strong potential for a career as a Corporate Trainer!";
      case 'Maybe':
        return "You have good potential but may benefit from additional development.";
      case 'No':
        return "Consider exploring related roles that might be a better fit.";
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-muted/50 to-accent/20 py-12 px-4">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex justify-center mb-6">
            {getRecommendationIcon()}
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Your Assessment Results
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            {getRecommendationMessage()}
          </p>
        </div>

        {/* Overall Score */}
        <Card className="mb-8 shadow-xl border-0 bg-card/95 backdrop-blur-sm">
          <CardContent className="pt-8">
            <div className="text-center">
              <div className="text-6xl font-bold mb-4 bg-gradient-to-r from-primary to-primary-glow bg-clip-text text-transparent">
                {result.overall_confidence}%
              </div>
              <h2 className="text-2xl font-semibold mb-2">
                Overall Confidence Score
              </h2>
              <p className={`text-lg font-medium ${getRecommendationColor()}`}>
                Recommendation: {result.recommendation}
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Category Scores */}
        <div className="grid md:grid-cols-3 gap-6 mb-8">
          <Card className="shadow-lg border-0 bg-card/95 backdrop-blur-sm">
            <CardHeader className="pb-3">
              <CardTitle className="flex items-center gap-2 text-lg">
                <Users className="w-5 h-5 text-blue-500" />
                Personality & Interests
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-blue-500 mb-2">
                {result.psychometric_score}%
              </div>
              <Progress value={result.psychometric_score} className="mb-4" />
              <p className="text-sm text-muted-foreground">
                Your natural inclination and motivation for training roles
              </p>
            </CardContent>
          </Card>

          <Card className="shadow-lg border-0 bg-card/95 backdrop-blur-sm">
            <CardHeader className="pb-3">
              <CardTitle className="flex items-center gap-2 text-lg">
                <BookOpen className="w-5 h-5 text-green-500" />
                Technical Skills
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-green-500 mb-2">
                {result.technical_score}%
              </div>
              <Progress value={result.technical_score} className="mb-4" />
              <p className="text-sm text-muted-foreground">
                Your current knowledge and technical readiness
              </p>
            </CardContent>
          </Card>

          <Card className="shadow-lg border-0 bg-card/95 backdrop-blur-sm">
            <CardHeader className="pb-3">
              <CardTitle className="flex items-center gap-2 text-lg">
                <Target className="w-5 h-5 text-purple-500" />
                WISCAR Framework
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-purple-500 mb-2">
                {result.wiscar_score}%
              </div>
              <Progress value={result.wiscar_score} className="mb-4" />
              <p className="text-sm text-muted-foreground">
                Your will, interest, skill, and alignment factors
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Detailed Insights */}
        <div className="grid md:grid-cols-2 gap-8 mb-8">
          {/* Key Insights */}
          <Card className="shadow-lg border-0 bg-card/95 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <TrendingUp className="w-5 h-5" />
                Key Insights
              </CardTitle>
              <CardDescription>
                What your results reveal about your fit
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                {result.insights.map((insight, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0"></div>
                    <span className="text-sm leading-relaxed">{insight}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          {/* Next Steps */}
          <Card className="shadow-lg border-0 bg-card/95 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <ArrowRight className="w-5 h-5" />
                Recommended Next Steps
              </CardTitle>
              <CardDescription>
                Actions to move forward in your career journey
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                {result.next_steps.map((step, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <div className="w-2 h-2 rounded-full bg-success mt-2 flex-shrink-0"></div>
                    <span className="text-sm leading-relaxed">{step}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>

        {/* Career Paths */}
        <Card className="mb-8 shadow-lg border-0 bg-card/95 backdrop-blur-sm">
          <CardHeader>
            <CardTitle>Suggested Career Paths</CardTitle>
            <CardDescription>
              Based on your assessment results, these roles might be a good fit
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-4">
              {result.career_paths.map((path, index) => (
                <div key={index} className="flex items-center gap-3 p-3 rounded-lg bg-muted/50">
                  <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                    <span className="text-sm font-semibold text-primary">{index + 1}</span>
                  </div>
                  <span className="font-medium">{path}</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Detailed Score Breakdown */}
        <Card className="mb-8 shadow-lg border-0 bg-card/95 backdrop-blur-sm">
          <CardHeader>
            <CardTitle>Detailed Score Breakdown</CardTitle>
            <CardDescription>
              How you performed across different assessment dimensions
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="text-sm font-medium">Interest Level</span>
                    <span className="text-sm">{result.detailed_scores.interest}%</span>
                  </div>
                  <Progress value={result.detailed_scores.interest} className="h-2" />
                </div>
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="text-sm font-medium">Personality Fit</span>
                    <span className="text-sm">{result.detailed_scores.personality_fit}%</span>
                  </div>
                  <Progress value={result.detailed_scores.personality_fit} className="h-2" />
                </div>
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="text-sm font-medium">Motivation</span>
                    <span className="text-sm">{result.detailed_scores.motivation}%</span>
                  </div>
                  <Progress value={result.detailed_scores.motivation} className="h-2" />
                </div>
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="text-sm font-medium">Current Skills</span>
                    <span className="text-sm">{result.detailed_scores.skill}%</span>
                  </div>
                  <Progress value={result.detailed_scores.skill} className="h-2" />
                </div>
              </div>
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="text-sm font-medium">Technical Knowledge</span>
                    <span className="text-sm">{result.detailed_scores.prerequisite_knowledge}%</span>
                  </div>
                  <Progress value={result.detailed_scores.prerequisite_knowledge} className="h-2" />
                </div>
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="text-sm font-medium">Learning Readiness</span>
                    <span className="text-sm">{result.detailed_scores.ability_to_learn}%</span>
                  </div>
                  <Progress value={result.detailed_scores.ability_to_learn} className="h-2" />
                </div>
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="text-sm font-medium">Persistence</span>
                    <span className="text-sm">{result.detailed_scores.will}%</span>
                  </div>
                  <Progress value={result.detailed_scores.will} className="h-2" />
                </div>
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="text-sm font-medium">Role Alignment</span>
                    <span className="text-sm">{result.detailed_scores.real_world_alignment}%</span>
                  </div>
                  <Progress value={result.detailed_scores.real_world_alignment} className="h-2" />
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Action Buttons */}
        <div className="text-center space-y-4">
          <Button 
            variant="hero" 
            size="lg" 
            onClick={onRestart}
            className="text-lg px-12 py-6 h-auto"
          >
            Take Assessment Again
          </Button>
          <p className="text-sm text-muted-foreground">
            Want to share these results? Copy the URL to save your assessment
          </p>
        </div>
      </div>
    </div>
  );
}