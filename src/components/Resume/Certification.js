import React from 'react';
import PropTypes from 'prop-types';

import Degree from './Education/Degree';

const Certifications = ({ data }) => (
  <div className="education">
    <div className="link-to" id="education" />
    <div className="title">
      <h3>Certifications</h3>
    </div>
    {data.map((degree) => (
      <Degree
        data={degree}
        key={degree.school}
      />
    ))}
  </div>
);

Certifications.propTypes = {
  data: PropTypes.arrayOf(PropTypes.shape({
    school: PropTypes.string,
    degree: PropTypes.string,
    year: PropTypes.number,
  })),
};

Certifications.defaultProps = {
  data: [],
};

export default Certifications;
