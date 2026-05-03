import { Spinner } from "@heroui/react";
import React from "react";

const LoadingPage = () => {
  return (
    <div className="flex flex-col justify-center items-center gap-2 min-h-screen">
      <Spinner size="xl" />
      <span className="text-xs text-muted">Loading...</span>
    </div>
  );
};

export default LoadingPage;
