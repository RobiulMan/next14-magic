"use client"; // Error components must be Client Components

import { useEffect } from "react";

const GlobalError = ({ error, reset }) => {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

  return (
    <html lang="en">
      <body>
        <div>
          <h2>Something went wrong in Global boundary!</h2>
          <button
            onClick={
              // Attempt to recover by trying to re-render the segment
              () => reset()
            }
          >
            Try again
          </button>
        </div>
      </body>
    </html>
  );
};
export default GlobalError;
