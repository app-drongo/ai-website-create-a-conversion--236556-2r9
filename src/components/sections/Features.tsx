import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { 
  Shield, 
  TrendingUp, 
  Smartphone, 
  Link, 
  BarChart3, 
  Bell,
  CreditCard,
  PieChart,
  Lock
} from "lucide-react"

export default function Features() {
  const features = [
    {
      icon: Shield,
      title: "Bank-Grade Security",
      description: "256-bit encryption and multi-factor authentication protect your financial data with military-grade security.",
      badge: "Security"
    },
    {
      icon: Link,
      title: "Open Banking Integration",
      description: "Securely connect accounts from 12,000+ banks and financial institutions worldwide.",
      badge: "Connectivity"
    },
    {
      icon: TrendingUp,
      title: "AI Financial Insights",
      description: "Machine learning algorithms analyze your spending patterns and provide personalized recommendations.",
      badge: "Intelligence"
    },
    {
      icon: BarChart3,
      title: "Real-Time Analytics",
      description: "Track your financial health with live updates, spending trends, and cash flow analysis.",
      badge: "Analytics"
    },
    {
      icon: PieChart,
      title: "Smart Budgeting",
      description: "Automated budget creation and expense categorization help you stay on track with your goals.",
      badge: "Planning"
    },
    {
      icon: Bell,
      title: "Intelligent Alerts",
      description: "Get notified about unusual spending, bill due dates, and investment opportunities.",
      badge: "Notifications"
    },
    {
      icon: CreditCard,
      title: "Multi-Account View",
      description: "See all your checking, savings, credit cards, and investments in one unified dashboard.",
      badge: "Management"
    },
    {
      icon: Smartphone,
      title: "Mobile-First Design",
      description: "Full-featured mobile app with biometric login and offline transaction viewing.",
      badge: "Mobile"
    },
    {
      icon: Lock,
      title: "Privacy Protection",
      description: "Your financial data is never sold or shared. Complete transparency and control over your information.",
      badge: "Privacy"
    }
  ]

  return (
    <section className="py-24 bg-gradient-to-b from-background to-muted/20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <Badge variant="outline" className="mb-4 px-4 py-2">
            Platform Features
          </Badge>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            Advanced Financial Management
            <span className="block bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
              Built for Modern Banking
            </span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Comprehensive tools and insights to help you understand, manage, and optimize 
            your financial life with confidence and security.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <Card 
                key={index} 
                className="group relative overflow-hidden border-border/50 hover:border-primary/20 transition-all duration-300 hover:shadow-lg hover:shadow-primary/5"
              >
                {/* Background Gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                <CardHeader className="relative">
                  <div className="flex items-center gap-4 mb-2">
                    <div className="size-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300">
                      <Icon className="size-6 text-primary" />
                    </div>
                    <Badge variant="secondary" className="text-xs">
                      {feature.badge}
                    </Badge>
                  </div>
                  <CardTitle className="text-xl group-hover:text-primary transition-colors duration-300">
                    {feature.title}
                  </CardTitle>
                </CardHeader>
                
                <CardContent className="relative">
                  <CardDescription className="text-base leading-relaxed">
                    {feature.description}
                  </CardDescription>
                </CardContent>

                {/* Hover Effect Border */}
                <div className="absolute inset-0 rounded-lg border border-transparent group-hover:border-primary/20 transition-colors duration-300" />
              </Card>
            )
          })}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <p className="text-muted-foreground mb-4">
            Ready to transform your financial management?
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-6 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition-colors">
              Start Free Account
            </button>
            <button className="px-6 py-3 border border-border rounded-lg font-medium hover:bg-accent transition-colors">
              Schedule Demo
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}