import Link from 'next/link';
import PhoneDisplay from './PhoneDisplay';

export default function HeroSection() {
  return (
    <section className="bg-black text-white">
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-16 md:py-24">
        <div className="flex flex-col md:flex-row items-center">
          {/* Left side content */}
          <div className="md:w-1/2 space-y-8">
            <div>
              <h2 className="text-3xl md:text-5xl font-bold leading-tight">
                Want to Turn Social Media<br />
                Into Your Dream Career?
              </h2>
              <p className="text-2xl md:text-3xl font-bold mt-4" style={{ color: '#00E7F9' }}>
                Discover Your Potential.
              </p>
            </div>
            
            <ul className="space-y-4">
              <li className="flex items-start">
                <span className="text-yellow-400 mr-3">✨</span>
                <span>Find profitable products and partnerships</span>
              </li>
              <li className="flex items-start">
                <span className="text-yellow-400 mr-3">✨</span>
                <span>Discover top-performing content ideas</span>
              </li>
              <li className="flex items-start">
                <span className="text-yellow-400 mr-3">✨</span>
                <span>Use AI tools for easy content creation</span>
              </li>
              <li className="flex items-start">
                <span className="text-yellow-400 mr-3">✨</span>
                <span>Save time with expert guidance</span>
              </li>
            </ul>
            
            <div className="pt-4">
              <Link href="/get-started" className="inline-block">
                <button 
                  className="text-white font-bold py-3 px-8 rounded-full transition-colors flex items-center" 
                  style={{ backgroundColor: '#FC004E', ':hover': { backgroundColor: '#d1003f' } }}
                >
                  GET STARTED 
                  <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </Link>
              <p className="text-sm text-gray-400 mt-2">
                1-minute quiz for personalized insights
              </p>
            </div>
            
            <div className="text-xs text-gray-500">
              <p>
                By clicking "Get Started", you agree with Terms and Conditions, Privacy policy,<br />
                Subscription Terms
              </p>
              <p className="mt-4">
                Fametonic 2025 ©All Rights Reserved.
              </p>
            </div>
          </div>
          
          {/* Right side phone display */}
          <div className="md:w-1/2 mt-12 md:mt-0">
            <PhoneDisplay />
          </div>
        </div>
      </div>
    </section>
  );
}