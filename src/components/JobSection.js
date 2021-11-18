import React from "react";

const JobSection = ({ job, setSelected, selected }) => {
  const {
    company,
    logo,
    featured,
    position,
    role,
    level,
    postedAt,
    contract,
    location,
    languages,
    tools,
  } = job;
  const isItNew = job.new;
  return (
    <section className="card">
      <div className="flex">
        <div className="logo">
          <img
            src={process.env.PUBLIC_URL + logo}
            alt={`${company} company logo`}
          />
        </div>
        <div className="card-section-text">
          <div className="section1">
            <p className="company-name">{company}</p>
            <ul className="new-featured-section">
              {isItNew ? <li className="new"> NEW!</li> : ""}
              {featured ? <li className="featured">FEATURED</li> : ""}
            </ul>
          </div>
          <div className="section2">
            <a className="title" href="/">
              {position}
            </a>
          </div>
          <ul className="section3">
            <li className="">{postedAt}</li>
            <li>.</li>
            <li className="">{contract}</li>
            <li>.</li>
            <li className="">{location}</li>
          </ul>
        </div>{" "}
      </div>

      <ul className="list-btn">
        <li>
          <button
            onClick={() => {
              setSelected({ ...selected, roles: [role] });
            }}
            className=""
          >
            {role}
          </button>
        </li>
        <li>
          <button
            onClick={() => {
              setSelected({ ...selected, levels: [level] });
            }}
            className=""
          >
            {level}
          </button>
        </li>
        {languages.map((language) => {
          return (
            <li key={language}>
              <button
                onClick={() => {
                  if (!selected.languages.includes(language)) {
                    setSelected({
                      ...selected,
                      languages: [...selected.languages, language],
                    });
                  }
                }}
                className=""
              >
                {language}
              </button>
            </li>
          );
        })}
        {tools.map((tool) => {
          return (
            <li key={tool}>
              <button
                onClick={() => {
                  if (!selected.tools.includes(tool)) {
                    setSelected({
                      ...selected,
                      tools: [...selected.tools, tool],
                    });
                  }
                }}
                className=""
              >
                {tool}
              </button>
            </li>
          );
        })}
      </ul>
    </section>
  );
};
export default JobSection;
