import React from "react";

export default function Coaching({ OnNavigate }) {
  return (
    <div>
      <div className="section-header">
        <h1>Ice Skating Coaching Services at Sloough Ice Arena</h1>
      </div>
      <p>
        Age is not a factor; I teach pupils of all ages. All that matters is a
        desire to improve and the joy of being on ice. It doesn't matter if
        you're an experienced skater looking to reach your next certified level
        or improve a particular aspect of your skating, or a new starter looking
        to find confidence to grow.
      </p>
      <p>
        We focus on your preferences, at your own pace, with one-to-one lessons.
      </p>
      <button
        onClick={() => OnNavigate("bookingsPage")}
        className="link-button"
      >
        How do I book a lesson?
      </button>
    </div>
  );
}
