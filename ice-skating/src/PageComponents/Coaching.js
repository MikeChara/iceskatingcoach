import React from "react";

export default function Coaching({ h1className }) {
  return (
    <>
      <div className={h1className}>
        Age is not a factor when it comes to taking on pupils. Just a desire to
        improve with the joy of being on the ice! <br />
        <br />
        Every pupil is different, and so each pupil has a bespoke learning
        program which will allow them to achieve goals of personal interest. I
        have pupils:{" "}
        <ul className={h1className} textsize="11">
          <li>
            Following certifications and moving up defined industry levels.
          </li>
          <li>
            Interested in only the adrenaline of perfectly executed jumps.
          </li>
          <li>
            Enjoying guidance on elegant movement and the joy of fine balance.
          </li>
          <li>
            Simply interested in off-ice training in public spaces, for
            stretching and health.
          </li>
        </ul>
        <br />
        <br />
        If you're interested in an area of skating, we will focus there, and,
        critically, at your own pace! These lessons are on a one-to-one basis,
        there there is no jostling for time.
      </div>
    </>
  );
}
