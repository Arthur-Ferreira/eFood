import { PacmanLoader } from 'react-spinners'
// import StlLoader from "./styles";
import { colors } from '../../Global/vars';

const Loader: React.FC = () => {
  return <PacmanLoader color={colors.indianRed} />
}

export default Loader;