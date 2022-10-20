import styledComponents, { keyframes } from 'styled-components';
import spinnerImg from './spinner.svg';

const rotate = keyframes`
  100% {
    transform: rotate(360deg);
  }
`;

function BaseSpinner({ className }) {
  return <img className={className} src={spinnerImg} alt="spinner" />;
}

const Spinner = styledComponents(BaseSpinner)`
  animation: ${rotate} 0.5s linear infinite;
  width: 16px;
`;

export default Spinner;