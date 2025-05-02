import React from 'react';

const Loader: React.FC = () => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-white dark:bg-gray-900 z-50">
      <div className="flex flex-col items-center">
        <div className="relative">
          <div className="h-24 w-24 rounded-full border-t-4 border-b-4 border-blue-600 dark:border-blue-400 animate-spin"></div>
          <div className="absolute top-0 left-0 h-24 w-24 rounded-full border-t-4 border-r-4 border-transparent animate-pulse"></div>
        </div>
        <p className="mt-4 text-xl font-medium text-gray-700 dark:text-gray-300">Loading</p>
      </div>
    </div>
  );
};

export default Loader;