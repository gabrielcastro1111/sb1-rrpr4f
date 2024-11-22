import Link from "next/link";

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">The Influencer&apos;s Plate</h3>
            <p className="text-gray-400">
              Transform your life through mindful eating and expert guidance.
            </p>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link href="/recipes" className="text-gray-400 hover:text-white transition-colors">Recipes</Link></li>
              <li><Link href="/calculator" className="text-gray-400 hover:text-white transition-colors">Calorie Calculator</Link></li>
              <li><Link href="/shop" className="text-gray-400 hover:text-white transition-colors">Shop</Link></li>
              <li><Link href="/goals" className="text-gray-400 hover:text-white transition-colors">Goals</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Support</h4>
            <ul className="space-y-2">
              <li><Link href="/faq" className="text-gray-400 hover:text-white transition-colors">FAQ</Link></li>
              <li><Link href="/contact" className="text-gray-400 hover:text-white transition-colors">Contact Us</Link></li>
              <li><Link href="/privacy" className="text-gray-400 hover:text-white transition-colors">Privacy Policy</Link></li>
              <li><Link href="/terms" className="text-gray-400 hover:text-white transition-colors">Terms of Service</Link></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} The Influencer&apos;s Plate. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}