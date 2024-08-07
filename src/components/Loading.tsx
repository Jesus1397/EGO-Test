import React from "react";

const Loading: React.FC = () => {
  return (
    <>
      <div className="container loading">
        <div className="row align-items-center justify-content-center">
          <div className="spinner-border text-secondary" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Loading;
