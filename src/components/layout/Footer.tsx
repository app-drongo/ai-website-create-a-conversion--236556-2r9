import Link from "next/link"
import { Button } from "@/components/ui/button"
import { 
  Facebook, 
  Twitter, 
  Instagram, 
  Linkedin, 
  Github,
  Mail,
  MapPin,
  Phone,
  ArrowRight,
  Heart,
  Shield,
  Lock,
  CreditCard,
  Building2
} from "lucide-react"

export default function Footer() {
  const footerSections = [
    {
      title: "Platform",
      links: [
        { name: "Open Banking API", href: "#features" },
        { name: "Payment Solutions", href: "/payments" },
        { name: "Account Aggregation", href: "/aggregation" },
        { name: "Financial Data", href: "/data" },
        { name: "Developer Tools", href: "/developers" },
        { name: "API Documentation", href: "/docs" }
      ]
    },
    {
      title: "Company",
      links: [
        { name: "About OpenFlow", href: "/about" },
        { name: "Security & Compliance", href: "/security" },
        { name: "Careers", href: "/careers" },
        { name: "Press & Media", href: "/press" },
        { name: "Partner Program", href: "/partners" },
        { name: "Contact Us", href: "/contact" }
      ]
    },
    {
      title: "Resources",
      links: [
        { name: "Help Center", href: "/help" },
        { name: "Developer Community", href: "/community" },
        { name: "Integration Guides", href: "/guides" },
        { name: "Webinars", href: "/webinars" },
        { name: "Case Studies", href: "/case-studies" },
        { name: "System Status", href: "/status" }
      ]
    },
    {
      title: "Legal",
      links: [
        { name: "Privacy Policy", href: "/privacy" },
        { name: "Terms of Service", href: "/terms" },
        { name: "Cookie Policy", href: "/cookies" },
        { name: "GDPR Compliance", href: "/gdpr" },
        { name: "PCI DSS", href: "/pci" },
        { name: "Regulatory Info", href: "/regulatory" }
      ]
    }
  ]

  const socialLinks = [
    { name: "Twitter", icon: Twitter, href: "https://twitter.com/openflow" },
    { name: "LinkedIn", icon: Linkedin, href: "https://linkedin.com/company/openflow" },
    { name: "GitHub", icon: Github, href: "https://github.com/openflow" }
  ]

  return (
    <footer className="bg-secondary border-t border-primary/20">
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-6 gap-12">
          {/* Company Info */}
          <div className="lg:col-span-2 space-y-6">
            <div>
              <Link href="/" className="flex items-center space-x-2 mb-4">
                <div className="size-10 rounded-lg bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                  <Shield className="size-5 text-background" />
                </div>
                <span className="font-bold text-xl text-background">OpenFlow</span>
              </Link>
              <p className="text-background/80 text-sm leading-relaxed mb-6">
                Empowering financial innovation through secure, compliant open banking solutions. 
                Trusted by fintech companies and financial institutions worldwide.
              </p>
            </div>

            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-sm">
                <Mail className="size-4 text-primary flex-shrink-0" />
                <span className="text-background/80">contact@openflow.com</span>
              </div>
              <div className="flex items-center gap-3 text-sm">
                <Phone className="size-4 text-primary flex-shrink-0" />
                <span className="text-background/80">+1 (555) 123-FLOW</span>
              </div>
              <div className="flex items-center gap-3 text-sm">
                <Building2 className="size-4 text-primary flex-shrink-0" />
                <span className="text-background/80">Financial District, NYC</span>
              </div>
            </div>

            {/* Newsletter Signup */}
            <div className="space-y-3">
              <h4 className="font-semibold text-sm text-background">Developer Updates</h4>
              <div className="flex gap-2">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-3 py-2 text-sm border border-primary/30 rounded-md bg-background/10 text-background placeholder:text-background/60 focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary"
                />
                <Button size="sm" className="px-3 bg-primary hover:bg-primary/90 text-background">
                  <ArrowRight className="size-4" />
                </Button>
              </div>
              <p className="text-xs text-background/70">
                Get API updates, security alerts, and fintech insights. Unsubscribe anytime.
              </p>
            </div>

            {/* Security Badges */}
            <div className="flex items-center gap-4 pt-4">
              <div className="flex items-center gap-2 text-xs text-background/80">
                <Lock className="size-3 text-primary" />
                <span>Bank-grade Security</span>
              </div>
              <div className="flex items-center gap-2 text-xs text-background/80">
                <CreditCard className="size-3 text-primary" />
                <span>PCI DSS Compliant</span>
              </div>
            </div>
          </div>

          {/* Footer Links */}
          <div className="lg:col-span-4 grid grid-cols-2 md:grid-cols-4 gap-8">
            {footerSections.map((section, index) => (
              <div key={index} className="space-y-4">
                <h4 className="font-semibold text-sm text-background">{section.title}</h4>
                <ul className="space-y-3">
                  {section.links.map((link, linkIndex) => (
                    <li key={linkIndex}>
                      <Link 
                        href={link.href}
                        className="text-sm text-background/70 hover:text-background transition-colors duration-200"
                      >
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-primary/20 bg-secondary">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            {/* Copyright */}
            <div className="flex items-center gap-2 text-sm text-background/70">
              <span>© 2024 OpenFlow. All rights reserved.</span>
              <span className="hidden sm:inline">•</span>
              <span className="hidden sm:inline flex items-center gap-1">
                Built for <Heart className="size-3 text-accent fill-current" /> financial innovation
              </span>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-4">
              <span className="text-sm text-background/70 mr-2">Connect:</span>
              {socialLinks.map((social, index) => {
                const Icon = social.icon
                return (
                  <Link
                    key={index}
                    href={social.href}
                    aria-label={social.name}
                    className="size-8 rounded-md bg-background/10 hover:bg-primary/20 flex items-center justify-center transition-colors duration-200 group"
                  >
                    <Icon className="size-4 text-background/70 group-hover:text-primary transition-colors" />
                  </Link>
                )
              })}
            </div>
          </div>

          {/* Additional Links */}
          <div className="flex flex-wrap justify-center md:justify-start gap-6 mt-4 pt-4 border-t border-primary/10">
            <Link href="/sitemap" className="text-xs text-background/60 hover:text-background transition-colors">
              Sitemap
            </Link>
            <Link href="/accessibility" className="text-xs text-background/60 hover:text-background transition-colors">
              Accessibility
            </Link>
            <Link href="/cookies" className="text-xs text-background/60 hover:text-background transition-colors">
              Cookie Settings
            </Link>
            <Link href="/support" className="text-xs text-background/60 hover:text-background transition-colors">
              Developer Support
            </Link>
            <Link href="/compliance" className="text-xs text-background/60 hover:text-background transition-colors">
              Compliance Center
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}