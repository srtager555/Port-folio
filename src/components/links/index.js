import { useState } from "react";

export function Links({ project }) {
  const [hover, setHover] = useState(false);

  return (
    <div className="project__links">
      <div className={`project__links--title${hover ? " visible" : ""}`}>
        <span>Idk what animation to put here Xd</span>
      </div>
      <div className="project__links--content">
        {project.map((link, index) => (
          <div
            key={`${link} - ${index}`}
            className="project__links-content--item"
          >
            <a
              onMouseEnter={() => setHover(true)}
              onMouseLeave={() => setHover(false)}
              href={link[1]}
              target="_blank"
              rel="noopener noreferrer"
            >
              {link[0]}
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}
