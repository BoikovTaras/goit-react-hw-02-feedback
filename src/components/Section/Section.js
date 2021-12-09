import s from './Section.module.css';
import PropTypes from 'prop-types';

const Section = ({ title }) => {
  return <h2 className={s.title}>{title}</h2>;
};

Section.propTypes = {
  title: PropTypes.string,
};

export default Section;
