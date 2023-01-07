import React from "react";
// import { Link } from "react-router-dom";

const ProjCard = (props) => {
  const { projectNumber, title, description, github, hostedLink } = props;
  return (
    <div className="card-container">
      <div className="card-main-info">
        <span className="card-proj-number">Project #{projectNumber}</span>
        {/* <Link to={`/projects/${param}`}> */}
          <h3 className="card-header">{title}</h3>
          <p className="card-para">{description}</p>
        {/* </Link> */}
      </div>
      <div className="card-footer">
        <a className="card-github" href={github}>
          <i class="fa-brands fa-github"></i>
          <span className="card-footer-span">Repo</span>
        </a>
        {hostedLink !== null && (
          <a className="card-hosted-link" href={hostedLink}>
            <i className="fa-solid fa-link"></i>
            <span className="card-footer-span">Link</span>
          </a>
        )}
      </div>
    </div>
  );
};

export default ProjCard;
