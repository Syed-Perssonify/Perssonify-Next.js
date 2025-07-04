"use client";

import React from "react";
import Link from "next/link";
import {
  Target,
  Cog,
  Settings,
  Database,
  Shield,
  ArrowRight,
  CheckCircle,
  DollarSign,
  Users,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { WavyBackground } from "@/components/ui/wavy-background";
import StartGrowingForm from "@/common/StartGrowingForm";
import { motion } from "framer-motion";

const StrategicSolutions: React.FC = () => {
  const coreServices = [
    {
      icon: Cog,
      title: "Process & Workflow Automation",
      description:
        "Streamline operations with intelligent automation that reduces manual work and increases efficiency across your organization.",
      link: "/process-automation",
    },
    {
      icon: Database,
      title: "Digital Systems Enablement",
      description:
        "Integrate and optimize your digital infrastructure to create seamless workflows and better data visibility.",
      link: "/digital-systems-enablement",
    },
    {
      icon: Settings,
      title: "Custom Solution Engineering",
      description:
        "Tailored technology solutions built specifically for your unique business requirements and challenges.",
      link: "/custom-solution-engineering",
    },
    {
      icon: Target,
      title: "Enterprise Evolution & Strategic Transformation",
      description:
        "Guide your organization through strategic changes with comprehensive transformation planning and execution.",
      link: "/enterprise-evolution-strategic-transformation",
    },
    {
      icon: Users,
      title: "Solutions By Function",
      description:
        "Business function focused solutions that meet the needs of specific business units.",
      link: "/solutions-by-function",
    },
    {
      icon: Shield,
      title: "Cross-Functional Solutions",
      description:
        "Bridge gaps between departments with integrated solutions that improve collaboration and efficiency.",
      link: "/cross-functional-leadership",
    },
  ];

  const functionSolutions = [
    {
      icon: DollarSign,
      title: "Finance Operations",
      description:
        "Unlocking efficiency in financial processes through automation, integration, and strategic optimization.",
      link: "/finance-operations",
    },
    {
      icon: Users,
      title: "Human Resources",
      description:
        "Streamlining HR processes to reduce friction, improve compliance, and elevate the employee experience.",
      link: "/human-resources",
    },
    {
      icon: Settings,
      title: "Operations",
      description:
        "Eliminating delays, inefficiencies, and handoff gaps in operational execution.",
      link: "/operations",
    },
    {
      icon: Shield,
      title: "Compliance & Governance",
      description:
        "Reducing regulatory burden and risk exposure with streamlined, traceable processes.",
      link: "/compliance-governance",
    },
  ];

  const benefits = [
    "Operational efficiency improvements",
    "Scalable process frameworks",
    "Technology-driven solutions",
    "Change management expertise",
    "Risk mitigation strategies",
    "Performance measurement systems",
  ];

  return (
    <div className="bg-background">
      {/* Hero Section */}
      <WavyBackground className="py-20 sm:py-28 md:py-36 mt-16 md:mt-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-5xl md:text-6xl lg:text-6xl font-bold font-playfair text-black dark:text-white mb-6 lg:mb-8">
              Strategic Solutions
            </h1>
            <p className="text-xl md:text-2xl text-black/80 dark:text-white mb-8 lg:mb-10 leading-relaxed max-w-3xl mx-auto">
              Technology-enhanced operational scaling that streamlines
              processes, automates intelligently, and ensures your operations
              scale without chaos.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
              <StartGrowingForm
                title="Ready to Scale Operations?"
                description="Tell us about your operational challenges and we'll design solutions that drive efficiency and growth."
                buttonText="Start Growing Today"
              />
              <Button variant="outline" size="lg" asChild>
                <Link href="/growth-solutions">View Growth Solutions</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </WavyBackground>

      <div className="w-full px-4 max-w-6xl mx-auto">
        {/* Core Services */}
        <section className="py-24 bg-background">
          <div className="container mx-auto max-w-6xl">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                Our Core Strategic Services
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Comprehensive solutions designed to optimize your operations and
                scale your business
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {coreServices.map((service, index) => (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                >
                  <Link href={service.link}>
                    <Card className="h-full hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group cursor-pointer">
                      <CardHeader className="pb-4">
                        <div className="w-12 h-12 sm:w-16 sm:h-16 bg-primary/10 rounded-xl flex items-center justify-center mb-3 sm:mb-4 group-hover:scale-110 transition-transform duration-300">
                          <service.icon className="w-6 h-6 sm:w-8 sm:h-8 text-primary" />
                        </div>
                        <CardTitle className="text-lg sm:text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                          {service.title}
                        </CardTitle>
                      </CardHeader>
                      <CardContent className="flex flex-col h-full justify-between">
                        <p className="text-muted-foreground leading-relaxed text-sm sm:text-base mb-4 sm:mb-6">
                          {service.description}
                        </p>
                        <Button asChild className="w-full mt-auto">
                          <Link href={service.link}>Learn More</Link>
                        </Button>
                      </CardContent>
                    </Card>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Function-Specific Solutions */}
        <section className="py-24">
          <div className="container mx-auto max-w-6xl">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                Solutions By Business Function
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Specialized solutions for specific business units where
                bottlenecks most often emerge
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {functionSolutions.map((solution, index) => (
                <motion.div
                  key={solution.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                >
                  <Link href={solution.link}>
                    <Card className="h-full hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group cursor-pointer">
                      <CardHeader className="pb-4">
                        <div className="w-12 h-12 sm:w-16 sm:h-16 bg-primary/10 rounded-xl flex items-center justify-center mb-3 sm:mb-4 group-hover:scale-110 transition-transform duration-300">
                          <solution.icon className="w-6 h-6 sm:w-8 sm:h-8 text-primary" />
                        </div>
                        <CardTitle className="text-lg sm:text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                          {solution.title}
                        </CardTitle>
                      </CardHeader>
                      <CardContent className="flex flex-col h-full justify-between">
                        <p className="text-muted-foreground leading-relaxed text-sm sm:text-base mb-4 sm:mb-6">
                          {solution.description}
                        </p>
                        <Button asChild className="w-full mt-auto">
                          <Link href={solution.link}>Learn More</Link>
                        </Button>
                      </CardContent>
                    </Card>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-24 bg-background">
          <div className="container mx-auto max-w-6xl">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
              >
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                  Why Choose Our Strategic Solutions?
                </h2>
                <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                  We don&apos;t just implement technology—we architect
                  operational excellence. Every solution is designed to scale
                  with your business and adapt to changing needs.
                </p>
                <div className="space-y-4">
                  {benefits.map((benefit, index) => (
                    <div key={index} className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-accent mr-3 flex-shrink-0" />
                      <span className="text-foreground">{benefit}</span>
                    </div>
                  ))}
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <Card>
                  <CardHeader>
                    <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Target className="w-8 h-8 text-primary" />
                    </div>
                    <CardTitle className="text-center text-2xl font-bold text-foreground">
                      Ready to Optimize?
                    </CardTitle>
                    <CardDescription className="text-center text-lg">
                      Let&apos;s streamline your operations together
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="text-center">
                    <p className="text-muted-foreground mb-6">
                      Schedule a consultation to discuss your operational
                      challenges and opportunities. We&apos;ll design solutions
                      that fit your business perfectly.
                    </p>
                    <StartGrowingForm
                      title="Let's Optimize Your Operations"
                      description="Tell us about your operational challenges and goals. We'll design strategic solutions tailored to your business needs."
                      buttonText="Schedule Consultation"
                      trigger={
                        <Link href="/contact" className="w-full">
                          <Button size="lg" className="w-full cursor-pointer">
                            Get Started Today
                            <ArrowRight className="w-4 h-4 ml-2" />
                          </Button>
                        </Link>
                      }
                    />
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 dark:bg-muted/40 bg-muted/70 rounded-2xl mb-20">
          <div className="container mx-auto max-w-4xl text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                Ready to Transform Your Operations?
              </h2>
              <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
                Let&apos;s build operational systems that scale with your
                ambitions and adapt to changing market conditions.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <StartGrowingForm
                  title="Let's Build Your Strategic Solutions"
                  description="Share your operational challenges with us and we'll create comprehensive solutions designed for your business."
                  buttonText="Start Growing Today"
                />
                <Button variant="outline" size="lg" asChild>
                  <Link href="/growth-solutions">Explore Growth Solutions</Link>
                </Button>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default StrategicSolutions;
