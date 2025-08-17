import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { BookOpen, Clock, Target, Users } from "lucide-react";

interface AssessmentIntroProps {
  onStartAssessment: () => void;
}

export default function AssessmentIntro({ onStartAssessment }: AssessmentIntroProps) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-muted/50 to-accent/20 py-12 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Target className="w-4 h-4" />
            Career Discovery Assessment
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6 leading-tight">
            Should I Become a{" "}
            <span className="bg-gradient-to-r from-primary to-primary-glow bg-clip-text text-transparent">
              Corporate Trainer?
            </span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Discover if you have the right combination of personality, skills, and motivation 
            to succeed as a Corporate Trainer through our comprehensive career assessment.
          </p>
        </div>

        {/* Assessment Overview */}
        <Card className="mb-8 shadow-lg border-0 bg-card/80 backdrop-blur-sm">
          <CardHeader>
            <CardTitle className="text-2xl text-center">What You'll Discover</CardTitle>
            <CardDescription className="text-center text-base">
              Our AI-powered assessment evaluates your fit across multiple dimensions
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                    <Users className="w-4 h-4 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">Personality & Interests</h3>
                    <p className="text-sm text-muted-foreground">
                      Evaluate your communication style, motivation, and natural inclination for teaching
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                    <BookOpen className="w-4 h-4 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">Skills & Experience</h3>
                    <p className="text-sm text-muted-foreground">
                      Assess your current abilities in facilitation, presentation, and content creation
                    </p>
                  </div>
                </div>
              </div>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                    <Target className="w-4 h-4 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">Technical Readiness</h3>
                    <p className="text-sm text-muted-foreground">
                      Measure your knowledge of learning principles and training technologies
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                    <Clock className="w-4 h-4 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">Career Guidance</h3>
                    <p className="text-sm text-muted-foreground">
                      Get personalized next steps and alternative career paths based on your results
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* What Corporate Trainers Do */}
        <Card className="mb-8 shadow-lg border-0 bg-card/80 backdrop-blur-sm">
          <CardHeader>
            <CardTitle className="text-2xl">What Does a Corporate Trainer Do?</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground mb-4">
              Corporate Trainers create and deliver educational content, facilitate workshops, and support 
              employee skill development across departments. They may specialize in:
            </p>
            <div className="grid md:grid-cols-2 gap-4">
              <ul className="space-y-2">
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-primary"></div>
                  <span className="text-sm">Soft skills development</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-primary"></div>
                  <span className="text-sm">Leadership training</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-primary"></div>
                  <span className="text-sm">Compliance training</span>
                </li>
              </ul>
              <ul className="space-y-2">
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-primary"></div>
                  <span className="text-sm">Product training</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-primary"></div>
                  <span className="text-sm">Digital transformation</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-primary"></div>
                  <span className="text-sm">New hire onboarding</span>
                </li>
              </ul>
            </div>
          </CardContent>
        </Card>

        {/* Assessment Details */}
        <Card className="mb-8 shadow-lg border-0 bg-card/80 backdrop-blur-sm">
          <CardContent className="pt-6">
            <div className="grid md:grid-cols-3 gap-6 text-center">
              <div>
                <div className="text-2xl font-bold text-primary mb-2">25</div>
                <div className="text-sm text-muted-foreground">Questions</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-primary mb-2">20-25</div>
                <div className="text-sm text-muted-foreground">Minutes</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-primary mb-2">Instant</div>
                <div className="text-sm text-muted-foreground">Results</div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* CTA */}
        <div className="text-center">
          <Button 
            variant="hero" 
            size="lg" 
            onClick={onStartAssessment}
            className="text-lg px-12 py-6 h-auto"
          >
            Start Assessment
          </Button>
          <p className="text-sm text-muted-foreground mt-4">
            No registration required • Complete privacy • Instant results
          </p>
        </div>
      </div>
    </div>
  );
}