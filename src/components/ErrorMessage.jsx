import React from 'react';

export default function ErrorMessage({ message, onRetry }) {
  return (
    <div className="d-flex flex-column align-items-center justify-content-center py-5 my-5 text-center">
      <i className="bi bi-exclamation-triangle-fill text-danger" style={{ fontSize: '3rem' }}></i>
      <h5 className="mt-3">Something went wrong</h5>
      <p className="text-muted">{message}</p>
      {onRetry && (
        <button className="btn btn-primary mt-2" onClick={onRetry}>
          <i className="bi bi-arrow-clockwise me-1"></i>Try Again
        </button>
      )}
    </div>
  );
}
