import PropTypes from 'prop-types';


const ReactRouterPropTypes = {
  match: PropTypes.shape({
    url: PropTypes.string.isRequired,
    path: PropTypes.string.isRequired,
    params: PropTypes.objectOf(PropTypes.string),
  }),
  history: PropTypes.object.isRequired,
};

export default ReactRouterPropTypes;
