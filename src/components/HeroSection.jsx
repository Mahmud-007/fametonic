import Link from "next/link";
import PhoneDisplay from "./PhoneDisplay";

export default function HeroSection() {
  return (
    <section className="bg-black text-white">
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-8 md:py-24">
        <div className="flex flex-col md:flex-row items-center">
          {/* Phone display - shows on top for mobile, moves to right for desktop */}
          <div className="w-full md:hidden mb-8 flex justify-center">
            <div className="w-3/4">
              <PhoneDisplay />
            </div>
          </div>

          {/* Left side content */}
          <div className="md:w-1/2 space-y-6 md:space-y-8">
            <div>
              <h2 className="text-2xl md:text-4xl font-bold leading-tight">
                Want to Turn Social Media Into a{" "}
                <br className="hidden md:block" />
                Profitable Career?
              </h2>
              <p
                className="text-xl md:text-3xl font-bold mt-4"
                style={{ color: "#00E7F9" }}
              >
                Discover your way to success
                <br />
                with Fametonic:
              </p>
            </div>

            {/* Exactly matching bullet points */}
            <ul className="space-y-3 md:space-y-4 text-base md:text-lg">
              <li className="flex items-start">
                <span className="text-[#FC004E] mr-2 text-lg">✦</span>
                <span>
                  Start growing your influence right away—no waiting required!
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-[#FC004E] mr-2 text-lg">✦</span>
                <span>
                  Create viral TikToks and Reels step by step with
                  easy-to-follow lessons
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-[#FC004E] mr-2 text-lg">✦</span>
                <span>Use a Personal AI Worker to boost your content</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#FC004E] mr-2 text-lg">✦</span>
                <span>
                  Learn from expert-led courses designed for aspiring
                  influencers
                </span>
              </li>
            </ul>

            {/* Exactly matching Get Started button area */}
            <div className="pt-4 ">
              <Link href="/get-started" className="inline-block w-full">
                <button
                  className="text-white font-bold py-3 w-full text-lg uppercase flex items-center justify-center"
                  style={{
                    backgroundColor: "#FC004E",
                    borderRadius: "4px",
                  }}
                >
                  GET STARTED
                  <svg
                    className="w-5 h-5 ml-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </button>
              </Link>
              <p className="text-sm text-gray-400 mt-2 text-center">
                1-minute quiz for personalized insights
              </p>
            </div>

            <div className="text-xs text-gray-500 text-center md:text-left">
              <p>
                By clicking "Get Started", you agree with Terms and Conditions,
                Privacy policy,
                <br className="hidden md:block" />
                Subscription Terms
              </p>
              <p className="mt-4">Fametonic 2025 ©All Rights Reserved.</p>
            </div>
          </div>

          {/* Right side phone display - only visible on desktop */}
          <div className="hidden md:block md:w-1/2">
            <PhoneDisplay />
          </div>
        </div>
      </div>
    </section>
  );
}
