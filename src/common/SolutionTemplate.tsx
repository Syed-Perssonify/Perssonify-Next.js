import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight, LucideIcon } from 'lucide-react';
import { Button } from '@/components/ui/button';
import ThemeBreadcrumb from '@/components/ui/theme-breadcrumb';
import { Card, CardHeader, CardContent, CardTitle } from '@/components/ui/card';

interface Service {
  icon: LucideIcon;
  title: string;
  link: string;
  description: string;
}

interface SolutionTemplateProps {
  title: string;
  description: string;
  services: Service[];
  ctaTitle: string;
  ctaDescription: string;
  backLink: string;
  backLinkText: string;
  parentLabel?: string;
  parentHref?: string;
}

const SolutionTemplate: React.FC<SolutionTemplateProps> = ({
  title,
  description,
  services,
  ctaTitle,
  ctaDescription,
  backLink,
  backLinkText,
  parentLabel,
  parentHref
}) => {
  return (
    <div className="min-h-screen bg-background pt-20 w-full px-4 max-w-6xl mx-auto">
      <div>
        <ThemeBreadcrumb parentLabel={parentLabel} parentHref={parentHref} />
        
        {/* Hero Section */}
        <motion.section 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="pt-8 pb-12 sm:pb-16"
        >
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-center"
            >
              {/* <div className="inline-flex items-center px-4 sm:px-6 py-2 sm:py-3 rounded-full bg-primary/10 text-primary text-xs sm:text-sm font-medium mb-6 sm:mb-8">
                <CategoryIcon className="w-3 h-3 sm:w-4 sm:h-4 mr-2" />
                {category}
              </div> */}
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-foreground my-4 sm:my-6 px-2">
                {title}
              </h1>
              <p className="text-base sm:text-lg md:text-xl text-muted-foreground mb-6 sm:mb-8 leading-relaxed px-2">
                {description}
              </p>
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center px-4">
                <Button asChild size="lg" className="w-full sm:w-auto">
                  <Link href="/contact">
                    Get Started
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Link>
                </Button>
                <Button variant="outline" size="lg" className="w-full sm:w-auto">
                  <Link href={backLink}>
                    {backLinkText}
                  </Link>
                </Button>
              </div>
            </motion.div>
          </div>
        </motion.section>

        {/* Services Section */}
        <section className="py-16 sm:py-20 md:py-24">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12 sm:mb-16"
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4 sm:mb-6">
              Our Services
            </h2>
            <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto">
              Comprehensive solutions designed to deliver measurable results.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 max-w-6xl mx-auto">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                // className="px-2"
              >
                <Card className="h-full border-0 bg-card custom-shadow transition-all duration-300 ">
                  <CardHeader className="pb-4">
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                      <service.icon className="w-6 h-6 text-primary" />
                    </div>
                    <CardTitle className="text-lg sm:text-xl font-bold">{service.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground text-sm sm:text-base leading-relaxed">{service.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <motion.section 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="py-16 sm:py-20 md:py-24 text-center"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4 sm:mb-6 px-2">
            {ctaTitle}
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground mb-6 sm:mb-8 max-w-3xl mx-auto px-4">
            {ctaDescription}
          </p>
          <Button asChild size="lg" className="w-full sm:w-auto mx-4">
              <Link href="/contact">
              Get Started Today
              <ArrowRight className="ml-2 w-4 h-4" />
            </Link>
          </Button>
        </motion.section>
      </div>
    </div>
  );
};

export default SolutionTemplate;
