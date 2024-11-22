"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight, Book, Calculator, ChefHat, Users, Star } from "lucide-react";
import { subscriptionPlans, recipes } from "@/lib/data";
import { Card } from "@/components/ui/card";
import { NewsletterForm } from "@/components/newsletter-form";
import { CalorieCalculatorWidget } from "@/components/calorie-calculator-widget";
import { FeaturedRecipes } from "@/components/featured-recipes";
import { PlanCard } from "@/components/plan-card";
import { fadeIn, staggerContainer } from "@/lib/animations";

export default function HomePage() {
  const featuredRecipes = recipes.slice(0, 3);

  return (
    <main>
      {/* Hero Section */}
      <motion.section 
        variants={staggerContainer}
        initial="hidden"
        animate="show"
        className="relative h-[90vh] flex items-center justify-center"
      >
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1490818387583-1baba5e638af?q=80&w=3432&auto=format&fit=crop"
            alt="Healthy Food Banner"
            width={3432}
            height={2288}
            className="object-cover brightness-50 w-full h-full"
            priority
          />
        </div>
        <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
          <motion.div variants={fadeIn("up", 0.3)}>
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              Transform Your Health Journey
            </h1>
            <p className="text-xl md:text-2xl mb-4">
              Join our exclusive membership program
            </p>
          </motion.div>
          <motion.p 
            variants={fadeIn("up", 0.4)}
            className="text-lg mb-8 max-w-2xl mx-auto"
          >
            Get access to personalized meal plans, expert guidance, and a supportive community to help you achieve your health goals.
          </motion.p>
          <motion.div 
            variants={fadeIn("up", 0.5)}
            className="flex gap-4 justify-center"
          >
            <Link href="/pricing">
              <Button size="lg" className="bg-white text-gray-900 hover:bg-gray-100">
                View Plans <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </motion.section>

      {/* Book Promo Section */}
      <motion.section 
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="py-20 bg-gray-50"
      >
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <motion.div variants={fadeIn("right", 0.3)}>
                <p className="text-primary font-medium mb-4">By Sarah Williams</p>
                <h2 className="text-3xl font-bold mb-4">The Influencer&apos;s Plate</h2>
                <p className="text-xl mb-6">Mastering the Art of Strategic Eating for Life-Changing Health</p>
                <div className="space-y-4 mb-8">
                  <div className="flex items-start gap-2">
                    <Star className="h-5 w-5 text-yellow-400 flex-shrink-0 mt-1" />
                    <p>Learn the science behind food synergy and strategic meal timing</p>
                  </div>
                  <div className="flex items-start gap-2">
                    <Star className="h-5 w-5 text-yellow-400 flex-shrink-0 mt-1" />
                    <p>Master the art of mindful eating and sustainable health habits</p>
                  </div>
                  <div className="flex items-start gap-2">
                    <Star className="h-5 w-5 text-yellow-400 flex-shrink-0 mt-1" />
                    <p>Access exclusive recipes and meal planning strategies</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <Link href="/pricing">
                    <Button size="lg">
                      <Book className="mr-2 h-4 w-4" />
                      Get the Book
                    </Button>
                  </Link>
                  <Link href="/affiliate">
                    <Button size="lg" variant="outline">
                      Become an Affiliate
                    </Button>
                  </Link>
                </div>
              </motion.div>
              <motion.div variants={fadeIn("left", 0.3)} className="relative aspect-[3/4] max-w-md mx-auto">
                <Image
                  src="/images/book-cover.jpg"
                  alt="The Influencer's Plate Book"
                  width={600}
                  height={800}
                  className="object-contain rounded-lg shadow-xl"
                  priority
                />
              </motion.div>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Features Section */}
      <motion.section 
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="py-20"
      >
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <motion.div variants={fadeIn("up", 0.3)} className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 bg-primary/10 rounded-full flex items-center justify-center">
                <Book className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Strategic Eating</h3>
              <p className="text-gray-600">Master the art of nutrition timing and food pairing</p>
            </motion.div>
            <motion.div variants={fadeIn("up", 0.4)} className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 bg-primary/10 rounded-full flex items-center justify-center">
                <ChefHat className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Expert Recipes</h3>
              <p className="text-gray-600">Access a curated collection of nutritionist-approved meals</p>
            </motion.div>
            <motion.div variants={fadeIn("up", 0.5)} className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 bg-primary/10 rounded-full flex items-center justify-center">
                <Calculator className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Smart Tools</h3>
              <p className="text-gray-600">Calculate your needs with precision and track progress</p>
            </motion.div>
            <motion.div variants={fadeIn("up", 0.6)} className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 bg-primary/10 rounded-full flex items-center justify-center">
                <Users className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Community</h3>
              <p className="text-gray-600">Join a supportive community of health enthusiasts</p>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Calculator Widget Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Calculate Your Daily Calories</h2>
            <p className="text-lg text-gray-600">
              Get a personalized estimate of your daily caloric needs
            </p>
          </div>
          <div className="max-w-3xl mx-auto">
            <CalorieCalculatorWidget />
          </div>
        </div>
      </section>

      {/* Featured Recipes Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Featured Recipes</h2>
            <p className="text-lg text-gray-600">
              Discover our most popular healthy recipes
            </p>
          </div>
          <FeaturedRecipes recipes={featuredRecipes} />
          <div className="text-center mt-12">
            <Link href="/recipes">
              <Button size="lg">
                Browse All Recipes <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Subscription Plans Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Choose Your Plan</h2>
            <p className="text-lg text-gray-600">
              Start your health journey today with our flexible plans
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
            {subscriptionPlans.map((plan) => (
              <PlanCard key={plan.id} plan={plan} />
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">Stay Updated</h2>
            <p className="text-lg text-gray-600 mb-8">
              Join our community and receive exclusive tips, recipes, and updates!
            </p>
            <NewsletterForm />
          </div>
        </div>
      </section>
    </main>
  );
}