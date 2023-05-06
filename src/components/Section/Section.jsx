import React from 'react';
import PropTypes from 'prop-types';
import { Box } from './Section.styled';

const Section = ({ title, children }) => {
  return (
    <Box>
      <h2>{title}</h2>
      {children}
    </Box>
  );
};

Section.propType = {
  title: PropTypes.string.isRequired,
  children: PropTypes.element.isRequired,
};

export default Section;
