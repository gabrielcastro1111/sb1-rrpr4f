// Subscription Plans
export const subscriptionPlans = [
  {
    id: "free",
    name: "Free",
    price: {
      monthly: 0,
      yearly: 0
    },
    features: [
      "Monthly newsletter",
      "Basic calorie calculator",
      "Access to basic recipes",
      "Limited article access"
    ]
  },
  {
    id: "basic",
    name: "Basic",
    price: {
      monthly: 29.99,
      yearly: 299.99
    },
    features: [
      "Everything in Free",
      "AI-powered meal plans",
      "Full recipe collection",
      "Advanced calorie calculator",
      "Monthly newsletter",
      "Digital recipe book included"
    ]
  },
  {
    id: "pro",
    name: "Professional",
    price: {
      monthly: 49.99,
      yearly: 499.99
    },
    features: [
      "Everything in Basic",
      "AI-driven nutrition insights",
      "Custom meal plans",
      "Weekly meal prep guides",
      "Priority support",
      "Advanced progress tracking",
      "Premium recipe collection"
    ]
  },
  {
    id: "elite",
    name: "Elite",
    price: {
      monthly: 79.99,
      yearly: 799.99
    },
    features: [
      "Everything in Professional",
      "24/7 AI nutrition assistant",
      "Personalized macro tracking",
      "Advanced health analytics",
      "Exclusive recipes library",
      "Custom shopping lists",
      "Restaurant menu analyzer",
      "Early access to new features"
    ]
  }
];

// Recipes
export type DietaryPreference = "vegetarian" | "vegan" | "gluten-free" | "keto" | "paleo";

export interface Recipe {
  id: number;
  title: string;
  description: string;
  image: string;
  videoUrl: string;
  time: string;
  calories: number;
  category: string;
  difficulty: "easy" | "medium" | "hard";
  servings: number;
  diet: DietaryPreference[];
  ingredients: string[];
  instructions: string[];
  nutrition: {
    calories: number;
    protein: number;
    carbs: number;
    fat: number;
    fiber: number;
  };
  tips: string[];
  author: {
    name: string;
    avatar: string;
  };
  publishedAt: string;
}

export const recipes: Recipe[] = [
  {
    id: 1,
    title: "Quinoa Buddha Bowl",
    description: "A nutrient-rich bowl with quinoa, roasted vegetables, and tahini dressing. Perfect for meal prep and packed with protein and fiber.",
    image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c",
    videoUrl: "https://www.youtube.com/watch?v=1a2b3c4d5e6",
    time: "25 mins",
    calories: 450,
    category: "lunch",
    difficulty: "easy",
    servings: 4,
    diet: ["vegetarian", "vegan", "gluten-free"],
    ingredients: [
      "1 cup quinoa",
      "2 cups mixed vegetables (sweet potato, broccoli, carrots)",
      "1 ripe avocado",
      "2 tbsp tahini",
      "1 lemon, juiced",
      "2 tbsp olive oil",
      "Salt and pepper to taste",
      "Optional toppings: sesame seeds, microgreens"
    ],
    instructions: [
      "Rinse quinoa thoroughly and cook according to package instructions",
      "Preheat oven to 400°F (200°C)",
      "Cut vegetables into even-sized pieces and toss with olive oil, salt, and pepper",
      "Roast vegetables for 20-25 minutes until tender and lightly browned",
      "Make the dressing by whisking together tahini, lemon juice, and water until smooth",
      "Assemble bowls with quinoa base, roasted vegetables, and sliced avocado",
      "Drizzle with tahini dressing and add optional toppings"
    ],
    nutrition: {
      calories: 450,
      protein: 15,
      carbs: 55,
      fat: 22,
      fiber: 12
    },
    tips: [
      "Prep vegetables in advance for quicker assembly",
      "Store dressing separately if meal prepping",
      "Customize with your favorite seasonal vegetables",
      "Add chickpeas for extra protein"
    ],
    author: {
      name: "Sarah Johnson",
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330"
    },
    publishedAt: "2024-01-15"
  },
  {
    id: 2,
    title: "Berry Protein Smoothie",
    description: "A delicious and nutritious smoothie packed with antioxidants, protein, and healthy fats. Perfect for breakfast or post-workout recovery.",
    image: "https://images.unsplash.com/photo-1553530979-7ee52a2670c4",
    videoUrl: "https://www.youtube.com/watch?v=2a3b4c5d6e7",
    time: "5 mins",
    calories: 280,
    category: "breakfast",
    difficulty: "easy",
    servings: 1,
    diet: ["vegetarian", "gluten-free"],
    ingredients: [
      "1 cup mixed berries (strawberries, blueberries, raspberries)",
      "1 scoop vanilla protein powder",
      "1 cup unsweetened almond milk",
      "1 medium banana",
      "1 tbsp chia seeds",
      "1 tbsp almond butter",
      "1/2 cup Greek yogurt",
      "Ice cubes (optional)"
    ],
    instructions: [
      "Add almond milk to blender first",
      "Add remaining ingredients except ice",
      "Blend until smooth",
      "Add ice if desired and blend again",
      "Pour into glass and serve immediately"
    ],
    nutrition: {
      calories: 280,
      protein: 20,
      carbs: 35,
      fat: 5,
      fiber: 8
    },
    tips: [
      "Use frozen fruit for a thicker consistency",
      "Add spinach for extra nutrients without affecting taste",
      "Choose unsweetened protein powder to control sugar content",
      "Prep smoothie packs in advance for quick morning blends"
    ],
    author: {
      name: "Michael Chen",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e"
    },
    publishedAt: "2024-01-10"
  }
];

// Blog Posts
export interface BlogPost {
  id: number;
  title: string;
  slug: string;
  content: string;
  excerpt: string;
  coverImage: string;
  author: {
    id: number;
    name: string;
    avatar: string;
    role: "admin" | "writer";
  };
  category: string;
  tags: string[];
  publishedAt: string;
  readTime: string;
  references: {
    title: string;
    url: string;
  }[];
}

export const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: "10 Essential Tips for Sustainable Weight Loss",
    slug: "10-essential-tips-sustainable-weight-loss",
    content: `
      Sustainable weight loss is about making lifestyle changes that you can maintain long-term. This comprehensive guide explores evidence-based strategies that will help you achieve your goals while maintaining a healthy relationship with food.

      1. Focus on Whole Foods
      The foundation of any healthy diet should be whole, unprocessed foods. These provide essential nutrients and keep you feeling satisfied longer. Research shows that people who eat more whole foods naturally consume fewer calories and maintain better long-term weight loss results.

      2. Practice Mindful Eating
      Mindful eating involves paying full attention to your food and eating experience. Studies indicate that mindful eating can help:
      - Reduce overeating and binge eating
      - Improve your relationship with food
      - Better recognize hunger and fullness cues
      - Make healthier food choices

      3. Prioritize Protein
      Protein is crucial for weight loss because it:
      - Increases satiety
      - Preserves muscle mass during weight loss
      - Has a higher thermic effect (burns more calories during digestion)
      - Helps maintain stable blood sugar levels

      4. Get Adequate Sleep
      Sleep plays a vital role in weight management. Poor sleep can:
      - Increase hunger hormones
      - Reduce willpower and decision-making ability
      - Lower metabolism
      - Increase stress eating

      5. Stay Hydrated
      Proper hydration is essential for:
      - Optimal metabolism
      - Reducing false hunger cues
      - Supporting exercise performance
      - Facilitating proper digestion

      Remember, sustainable weight loss is a journey, not a race. Focus on building healthy habits that you can maintain for life rather than seeking quick fixes.
    `,
    excerpt: "Learn the fundamental principles of sustainable weight loss that you can maintain long-term.",
    coverImage: "https://images.unsplash.com/photo-1498837167922-ddd27525d352",
    author: {
      id: 1,
      name: "Sarah Johnson",
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330",
      role: "admin"
    },
    category: "Weight Loss",
    tags: ["weight loss", "nutrition", "health tips", "lifestyle"],
    publishedAt: "2024-01-15",
    readTime: "8 min",
    references: [
      {
        title: "Effects of mindful eating on weight loss",
        url: "https://pubmed.ncbi.nlm.nih.gov/example1"
      },
      {
        title: "Protein and weight management",
        url: "https://pubmed.ncbi.nlm.nih.gov/example2"
      }
    ]
  }
];

// Products for the shop
export interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  image: string;
  category: string;
  stock: number;
  sku: string;
  features: string[];
  specifications: Record<string, string>;
}

export const products: Product[] = [
  {
    id: 1,
    name: "Premium Protein Blend",
    description: "High-quality whey protein blend with essential amino acids",
    price: 49.99,
    image: "https://images.unsplash.com/photo-1593095948071-474c5cc2989d",
    category: "supplements",
    stock: 100,
    sku: "PROT-001",
    features: [
      "24g protein per serving",
      "Low in sugar",
      "Easy to mix",
      "Great taste"
    ],
    specifications: {
      "Serving Size": "30g",
      "Servings Per Container": "30",
      "Protein Source": "Whey Protein Isolate, Whey Protein Concentrate",
      "Flavors Available": "Vanilla, Chocolate, Strawberry"
    }
  }
];

// Articles for education section
export interface Article {
  id: number;
  title: string;
  slug: string;
  content: string;
  excerpt: string;
  image: string;
  category: string;
  readTime: string;
  author: {
    name: string;
    avatar: string;
    credentials: string;
  };
  publishedAt: string;
  references: {
    title: string;
    url: string;
  }[];
}

export const articles: Article[] = [
  {
    id: 1,
    title: "The Science Behind Weight Loss",
    slug: "science-behind-weight-loss",
    content: `Understanding the science of weight loss is crucial for achieving sustainable results. This comprehensive guide explores the fundamental principles that govern weight management and how you can apply them to your journey.

    The Basic Principle: Caloric Balance
    At its core, weight loss occurs when you consume fewer calories than your body expends. This creates a caloric deficit, forcing your body to use stored energy (primarily fat) to meet its needs.

    Metabolic Processes
    Your metabolism plays a crucial role in weight loss. It encompasses all the chemical processes that maintain life, including:
    - Basal metabolic rate (BMR)
    - Thermic effect of food
    - Physical activity
    - Non-exercise activity thermogenesis (NEAT)`,
    excerpt: "Discover the scientific principles behind effective weight loss and metabolism.",
    image: "https://images.unsplash.com/photo-1506126613408-eca07ce68773",
    category: "Science",
    readTime: "10 min",
    author: {
      name: "Dr. Michael Chen",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e",
      credentials: "Ph.D. in Nutritional Science"
    },
    publishedAt: "2024-01-15",
    references: [
      {
        title: "Energy balance and weight loss",
        url: "https://pubmed.ncbi.nlm.nih.gov/example3"
      }
    ]
  }
];

// Affiliate products
export interface AffiliateProduct {
  id: number;
  name: string;
  description: string;
  price: number;
  affiliateLink: string;
  commission: number;
  category: string;
  rating: number;
  reviews: number;
}

export const affiliateProducts: AffiliateProduct[] = [
  {
    id: 1,
    name: "Premium Yoga Mat",
    description: "High-quality, eco-friendly yoga mat with excellent grip",
    price: 39.99,
    affiliateLink: "https://example.com/yoga-mat",
    commission: 30,
    category: "Fitness Equipment",
    rating: 4.5,
    reviews: 128
  },
  {
    id: 2,
    name: "Digital Food Scale",
    description: "Precise digital scale for portion control and recipe measurements",
    price: 24.99,
    affiliateLink: "https://example.com/food-scale",
    commission: 30,
    category: "Kitchen Tools",
    rating: 4.8,
    reviews: 256
  },
  {
    id: 3,
    name: "Meal Prep Containers",
    description: "BPA-free containers perfect for portion control and meal planning",
    price: 29.99,
    affiliateLink: "https://example.com/meal-prep",
    commission: 30,
    category: "Kitchen Tools",
    rating: 4.6,
    reviews: 189
  }
];