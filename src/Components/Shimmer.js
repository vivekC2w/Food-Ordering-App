const Shimmer = () => {
  return (
    <div className="flex flex-wrap justify-center">
      {Array.from({ length: 15 }).map((_, index) => (
        <div
          key={index}
          className="w-72 h-80 bg-gray-300 m-4 relative overflow-hidden"
        >
          <style>
            {`
              .animate-shimmer {
                animation: shimmer 1.5s infinite;
              }

              @keyframes shimmer {
                0% {
                  transform: translateX(-100%);
                }
                100% {
                  transform: translateX(100%);
                }
              }
            `}
          </style>
          <div className="absolute top-0 left-0 w-40 h-full bg-gradient-to-r from-transparent via-white to-transparent animate-shimmer"></div>
        </div>
      ))}
    </div>
  );
};

export default Shimmer;
