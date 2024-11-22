import React from 'react';

const Loading = () => {
  return (
    <div className="skeleton-wrapper">
      <div className="skeleton-title" />
      <div className="skeleton-info">
        <div className="skeleton-category" />
        <div className="skeleton-date" />
      </div>
      <div className="skeleton-content" />
      <div className="skeleton-button" />
    </div>
  );
};

export default Loading;
