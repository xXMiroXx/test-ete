import FontAwsome from "react-icons/fa/index";
import BootStrap from "react-icons/bs/index";
import { IconType } from "react-icons";

type FontAwsomeType = keyof typeof FontAwsome;
type BootStrapType = keyof typeof BootStrap;
export type IconTypes = FontAwsomeType | BootStrapType;
const Icon: React.FC<{
  name: IconTypes;
}> = ({ name }) => {
  let MyIcon: IconType;
  if (name.startsWith("Fa")) MyIcon = FontAwsome[name as FontAwsomeType];
  else if (name.startsWith("Bs")) MyIcon = BootStrap[name as BootStrapType];
  else return <span></span>;
  return <MyIcon />;
};

export default Icon;
