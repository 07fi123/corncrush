import React from 'react';
import { Heart, MapPin, Users, Check, ChevronRight } from 'lucide-react';

const LandingPage = () => {
  return (
    <div className="min-h-screen bg-amber-50">
      {/* Hero Section */}
      <header className="bg-gradient-to-b from-amber-200 to-amber-50 py-16">
        <div className="container mx-auto px-4">
          <nav className="flex justify-between items-center mb-16">
            <div className="flex items-center">
              <span className="ml-2 text-2xl font-bold text-amber-900">🌽 Corn Crush</span>
            </div>
            <div className="space-x-4">
              <button className="px-4 py-2 text-amber-900 hover:text-amber-700">Shuck In</button>
              <button className="px-4 py-2 bg-amber-600 text-white rounded-lg hover:bg-amber-700">
                Join the Field
              </button>
            </div>
          </nav>

          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-5xl font-bold text-amber-900 mb-6">
              Where Nebraska Singles Come to Stalk Each Other
            </h1>
            <p className="text-xl text-amber-800 mb-8">
              Because finding love in Nebraska is like finding a needle in a 🌽 stack
            </p>
            <button className="px-8 py-4 bg-amber-600 text-white text-lg rounded-lg hover:bg-amber-700 flex items-center mx-auto">
              Plant Your Profile Today
              <ChevronRight className="ml-2" />
            </button>
          </div>
        </div>
      </header>

      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-amber-900 mb-12">
            Why We're Better Than a County Fair Meet-Cute
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <MapPin className="w-12 h-12 text-amber-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-amber-900 mb-3">
                Local Connections
              </h3>
              <p className="text-amber-700">
                Meet singles who know that "going into town" means a 45-minute drive
              </p>
            </div>
            <div className="text-center p-6">
              <Users className="w-12 h-12 text-amber-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-amber-900 mb-3">
                Quality Matches
              </h3>
              <p className="text-amber-700">
                Our algorithm is smarter than your cousin's matchmaking attempts at the family BBQ
              </p>
            </div>
            <div className="text-center p-6">
              <Heart className="w-12 h-12 text-amber-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-amber-900 mb-3">
                Real Relationships
              </h3>
              <p className="text-amber-700">
                Find someone who knows the difference between sweet corn and feed corn
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-16 bg-amber-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-amber-900 mb-12">
            Kernel of Truth: Real 🌽 Success Stories
          </h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <p className="text-amber-700 mb-4">
                "I thought I was destined to be single like an unpicked ear of corn, but CornCrush helped me find my perfect row mate. Now we're comparing crop yields together!"
              </p>
              <p className="font-semibold text-amber-900">- Farmer John from Lincoln</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <p className="text-amber-700 mb-4">
                "Finally, someone who doesn't think 'Nebraska Nice' is just being passive-aggressive. Plus, their tractor is newer than mine!"
              </p>
              <p className="font-semibold text-amber-900">- Beth from Omaha</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-amber-600">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-8">
            Ready to Get Out of Your Field? 
          </h2>
          <div className="max-w-2xl mx-auto mb-8">
            <div className="grid md:grid-cols-2 gap-4">
              <div className="flex items-center text-white">
                <Check className="mr-2" />
                <span>Cheaper than a new combine</span>
              </div>
              <div className="flex items-center text-white">
                <Check className="mr-2" />
                <span>No livestock trading required</span>
              </div>
              <div className="flex items-center text-white">
                <Check className="mr-2" />
                <span>Weather-proof profiles</span>
              </div>
              <div className="flex items-center text-white">
                <Check className="mr-2" />
                <span>Tractor optional</span>
              </div>
            </div>
          </div>
          <button className="px-8 py-4 bg-white text-amber-600 text-lg rounded-lg hover:bg-amber-100">
            Start Harvesting Love
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-amber-900 text-amber-100 py-8">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h3 className="font-semibold mb-4">About Our Field</h3>
              <ul className="space-y-2">
                <li>Our Growth Story</li>
                <li>How We Cultivate Love</li>
                <li>Crop of Success Stories</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Safety Scarecrow</h3>
              <ul className="space-y-2">
                <li>Dating Tips for City Slickers</li>
                <li>Privacy Fence Policy</li>
                <li>Terms of Harvest</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Support Silo</h3>
              <ul className="space-y-2">
                <li>Troubleshooting</li>
                <li>Send a Corn Signal</li>
                <li>FAQs (Frequently Asked Quantities)</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Connect in the Field</h3>
              <ul className="space-y-2">
                <li>Farmbook</li>
                <li>Cornstagram</li>
                <li>Corn Hub</li>
              </ul>
            </div>
          </div>
          <div className="text-center mt-8 pt-8 border-t border-amber-800">
            <p>&copy; 2025 CornCrush. All ears reserved. 🌽</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;