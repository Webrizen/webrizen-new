import React from 'react';
import Layout from '../component/layout';

export default function NotFound() {
  return (
    <Layout>
      <div className="flex h-screen w-full items-center justify-center">
        <div className="text-center">
          <h1 className="text-6xl font-semibold mb-4">404</h1>
          <p className="text-lg mb-8">Page not found</p>
          <p className="text-gray-500 mb-8">
            The page you are looking for might be under construction or does not exist.
          </p>
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline-blue"
            onClick={() => window.history.back()}
          >
            Go Back
          </button>
        </div>
      </div>
    </Layout>
  );
}
