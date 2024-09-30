import "./Button.css";
import PropTypes from "prop-types";

function Button({ width, text }) {
  return (
    <div className="mainButton" style={{width: width, margin: '0 auto'}}>{text}</div>
  )
}
Button.propTypes = {
  width: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired
};
export default Button