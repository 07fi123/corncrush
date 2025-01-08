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
              <Heart className="text-amber-600 w-8 h-8" />
              <span className="ml-2 text-2xl font-bold text-amber-900">CornCrush</span>
            </div>
            <div className="space-x-4">
              <button className="px-4 py-2 text-amber-900 hover:text-amber-700">Log In</button>
              <button className="px-4 py-2 bg-amber-600 text-white rounded-lg hover:bg-amber-700">
                Sign Up
              </button>
            </div>
          </nav>

          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-5xl font-bold text-amber-900 mb-6">
              Find Your Perfect Match in the Heartland
            </h1>
            <p className="text-xl text-amber-800 mb-8">
              Nebraska's premier dating site for local singles who appreciate the simple things in life
            </p>
            <button className="px-8 py-4 bg-amber-600 text-white text-lg rounded-lg hover:bg-amber-700 flex items-center mx-auto">
              Start Your Journey
              <ChevronRight className="ml-2" />
            </button>
          </div>
        </div>
      </header>

      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-amber-900 mb-12">
            Why Choose CornCrush?
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <MapPin className="w-12 h-12 text-amber-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-amber-900 mb-3">
                Local Connections
              </h3>
              <p className="text-amber-700">
                Meet singles in your area who share your Midwestern values and lifestyle
              </p>
            </div>
            <div className="text-center p-6">
              <Users className="w-12 h-12 text-amber-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-amber-900 mb-3">
                Quality Matches
              </h3>
              <p className="text-amber-700">
                Our algorithm helps you find compatible partners based on shared interests and values
              </p>
            </div>
            <div className="text-center p-6">
              <Heart className="w-12 h-12 text-amber-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-amber-900 mb-3">
                Real Relationships
              </h3>
              <p className="text-amber-700">
                Connect with genuine people looking for meaningful connections
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-16 bg-amber-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-amber-900 mb-12">
            Success Stories
          </h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <p className="text-amber-700 mb-4">
                "Thanks to CornCrush, I found someone who shares my love for county fairs and Sunday drives. We've been married for 6 months now!"
              </p>
              <p className="font-semibold text-amber-900">- Sarah from Lincoln</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <p className="text-amber-700 mb-4">
                "I never thought I'd meet someone who understands farm life like I do. CornCrush made it happen!"
              </p>
              <p className="font-semibold text-amber-900">- Mike from Omaha</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-amber-600">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-8">
            Ready to Meet Your Match?
          </h2>
          <div className="max-w-2xl mx-auto mb-8">
            <div className="grid md:grid-cols-2 gap-4">
              <div className="flex items-center text-white">
                <Check className="mr-2" />
                <span>Free to Join</span>
              </div>
              <div className="flex items-center text-white">
                <Check className="mr-2" />
                <span>Local Events</span>
              </div>
              <div className="flex items-center text-white">
                <Check className="mr-2" />
                <span>Verified Profiles</span>
              </div>
              <div className="flex items-center text-white">
                <Check className="mr-2" />
                <span>Safe & Secure</span>
              </div>
            </div>
          </div>
          <button className="px-8 py-4 bg-white text-amber-600 text-lg rounded-lg hover:bg-amber-100">
            Create Your Profile
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-amber-900 text-amber-100 py-8">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h3 className="font-semibold mb-4">About</h3>
              <ul className="space-y-2">
                <li>Our Story</li>
                <li>How It Works</li>
                <li>Success Stories</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Safety</h3>
              <ul className="space-y-2">
                <li>Dating Tips</li>
                <li>Privacy Policy</li>
                <li>Terms of Service</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Support</h3>
              <ul className="space-y-2">
                <li>Help Center</li>
                <li>Contact Us</li>
                <li>FAQ</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Connect</h3>
              <ul className="space-y-2">
                <li>Facebook</li>
                <li>Instagram</li>
                <li>Twitter</li>
              </ul>
            </div>
          </div>
          <div className="text-center mt-8 pt-8 border-t border-amber-800">
            <p>&copy; 2025 CornCrush. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;