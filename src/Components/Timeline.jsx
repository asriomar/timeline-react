import React from 'react';
import './Timeline.css'; // Import your CSS file

function Timeline() {
  return (
    <div className="bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% h-auto flex flex-col justify-center items-center ">
      <div className="mb-4">
        <h2 className="text-white font-bold text-4xl p-4 mt-8 underline decoration-wavy underline-offset-4 decoration-red-500">
          Event Timeframe
        </h2>
      </div>
      <div className="max-w-3xl flex justify-center items-center">
        <div className="timeline-container">
          <div className="timeline-line"></div>
          <div className="timeline">
            <div className="timeline-item">
              <div className="timeline-content">
                <h3 className="text-xl font-semibold mb-2">Event 1</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                <span className="text-gray-500 text-sm mt-2">January 2020</span>
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-content">
                <h3 className="text-xl font-semibold mb-2">Event 2</h3>
                <p>
                  Sed do eiusmod tempor incididunt ut labore et dolore magna
                  aliqua.
                </p>
                <span className="text-gray-500 text-sm mt-2">March 2020</span>
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-content">
                <h3 className="text-xl font-semibold mb-2">Event 3</h3>
                <p>
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat.
                </p>
                <span className="text-gray-500 text-sm mt-2">June 2020</span>
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-content">
                <h3 className="text-xl font-semibold mb-2">Event 4</h3>
                <p>
                  Duis aute irure dolor in reprehenderit in voluptate velit esse
                  cillum dolore eu fugiat nulla pariatur.
                </p>
                <span className="text-gray-500 text-sm mt-2">
                  September 2020
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Timeline;
