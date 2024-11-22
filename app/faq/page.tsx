export default function FAQPage() {
  return (
    <main className="min-h-screen pt-20 pb-16">
      <div className="container mx-auto px-4 max-w-4xl">
        <h1 className="text-4xl font-bold mb-8 text-center">Frequently Asked Questions</h1>
        
        <div className="space-y-6">
          <FAQItem 
            question="How accurate is the calorie calculator?" 
            answer="Our calorie calculator uses the Mifflin-St Jeor equation, which is considered one of the most accurate methods for estimating daily calorie needs. However, individual results may vary based on factors such as metabolism and activity level."
          />
          
          <FAQItem 
            question="Can I customize meal plans?" 
            answer="Yes! Our meal plans can be customized based on your dietary preferences, restrictions, and caloric needs. You can also swap recipes and adjust portion sizes."
          />
          
          <FAQItem 
            question="How often are new recipes added?" 
            answer="We add new, nutritionist-approved recipes weekly. Our team ensures each recipe meets our quality standards and includes detailed nutritional information."
          />
          
          <FAQItem 
            question="What payment methods do you accept?" 
            answer="We accept all major credit cards, PayPal, and Apple Pay for purchases in our shop. All transactions are secure and encrypted."
          />
          
          <FAQItem 
            question="Can I cancel my subscription?" 
            answer="Yes, you can cancel your subscription at any time through your account settings. No long-term commitments required."
          />
          
          <FAQItem 
            question="How do I track my progress?" 
            answer="Our goals section provides comprehensive tracking tools for weight, measurements, calories, and other health metrics. You can also set custom goals and receive progress reports."
          />
        </div>
      </div>
    </main>
  );
}

function FAQItem({ question, answer }: { question: string; answer: string }) {
  return (
    <div className="border-b border-gray-200 pb-6">
      <h3 className="text-xl font-semibold mb-2">{question}</h3>
      <p className="text-gray-600">{answer}</p>
    </div>
  );
}