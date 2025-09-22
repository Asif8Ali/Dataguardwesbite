import { useState, useEffect } from 'react';

function Error({ statusCode, hasGetInitialPropsRun, err }) {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return null; // Prevent hydration mismatch
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-white via-blue-50 to-cyan-50">
      <div className="max-w-md w-full mx-auto text-center p-8">
        <div className="bg-white rounded-lg shadow-xl p-8 border border-cyan-100">
          <div className="text-6xl text-cyan-600 mb-4">
            {statusCode || '😵'}
          </div>
          <h1 className="text-2xl font-bold text-gray-800 mb-4">
            {statusCode
              ? `A ${statusCode} error occurred on server`
              : 'An error occurred on client'}
          </h1>
          <p className="text-gray-600 mb-6">
            {statusCode === 404
              ? "Sorry, the page you're looking for doesn't exist."
              : "We're experiencing some technical difficulties. Please try again later."}
          </p>
          <button
            onClick={() => window.location.href = '/'}
            className="bg-cyan-600 hover:bg-cyan-700 text-white font-medium py-2 px-6 rounded-full transition-colors"
          >
            Go Home
          </button>
        </div>
      </div>
    </div>
  );
}

Error.getInitialProps = ({ res, err }) => {
  const statusCode = res ? res.statusCode : err ? err.statusCode : 404;
  return { statusCode };
};

export default Error;