import React from "react";
import JobSection from "./JobSection";

const filterJobs = (item, selected) => {
  const rolesNotEmpty = selected.roles.length !== 0;
  const itemRolesIsInSelected = selected.roles.includes(item.role);

  const levelsNotEmpty = selected.levels.length !== 0;
  const offerLevelsIsInSelected = selected.levels.includes(item.level);

  const languagesNotEmpty = selected.languages.length !== 0;
  const offerLanguagesIsInSelected = selected.languages.every((currentValue) =>
    item.languages.includes(currentValue)
  );

  const toolsNotEmpty = selected.tools.length !== 0;
  const offerToolsIsInSelected = selected.tools.every((currentValue) =>
    item.tools.includes(currentValue)
  );

  if (rolesNotEmpty === true && itemRolesIsInSelected === false) {
    return false;
  }
  if (levelsNotEmpty === true && offerLevelsIsInSelected === false) {
    return false;
  }
  if (languagesNotEmpty === true && offerLanguagesIsInSelected === false) {
    return false;
  }
  if (toolsNotEmpty === true && offerToolsIsInSelected === false) {
    return false;
  }
  return true;
};

const JobsList = ({ data, setSelected, selected }) => {
  const renderJobsList = data
    .filter((item) => {
      return filterJobs(item, selected);
    })
    .map((job) => {
      return (
        <JobSection
          job={job}
          setSelected={setSelected}
          selected={selected}
          key={job.id}
        />
      );
    });
  return <div className="main">{renderJobsList}</div>;
};

export default JobsList;
