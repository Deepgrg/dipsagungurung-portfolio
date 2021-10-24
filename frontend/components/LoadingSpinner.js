import { RefreshIcon } from "@heroicons/react/outline";

const LoadingSpinner = () => {
  return (
    <div className="fixed top-1/2 left-1/2  -translate-y-1/2 -translate-x-1/2 z-40">
      <RefreshIcon className="text-white h-7 w-7 animate-spin" />
    </div>
  );
};

export default LoadingSpinner;
