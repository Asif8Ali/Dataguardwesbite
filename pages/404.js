import Link from 'next/link';
import { useState, useEffect } from 'react';

export default function Custom404() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return null; // Prevent hydration mismatch
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-white via-blue-50 to-cyan-50">
      <div className="max-w-lg w-full mx-auto text-center p-8">
        <div className="bg-white rounded-lg shadow-xl p-8 border border-cyan-100">
          <div className="text-8xl text-cyan-600 mb-6">
            404
          </div>
          <h1 className="text-3xl font-bold text-gray-800 mb-4">
            Page Not Found
          </h1>
          <p className="text-gray-600 mb-8">
            The page you&apos;re looking for doesn&apos;t exist or has been moved.
          </p>
          <div className="space-y-4">
            <Link href="/" legacyBehavior>
              <a className="inline-block bg-cyan-600 hover:bg-cyan-700 text-white font-medium py-3 px-8 rounded-full transition-colors">
                Go to Homepage
              </a>
            </Link>
            <div>
              <button
                onClick={() => window.history.back()}
                className="text-cyan-600 hover:text-cyan-700 font-medium underline"
              >
                Go Back
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}