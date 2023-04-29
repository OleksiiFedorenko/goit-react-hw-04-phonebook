import PropTypes from 'prop-types';
import { MainTitle, SecondaryTitle } from './Title.styled';

const Title = ({ mainTitle, title }) => {
  return mainTitle ? (
    <MainTitle>{mainTitle}</MainTitle>
  ) : (
    <SecondaryTitle>{title}</SecondaryTitle>
  );
};

Title.propTypes = {
  mainTitle: PropTypes.string,
  title: PropTypes.string,
};

export default Title;
