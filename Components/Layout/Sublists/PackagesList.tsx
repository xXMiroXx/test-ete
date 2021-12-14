import SubList from "./SubList";
import Styles from "./Sublists.module.scss";

const PackagesList: React.FC = () => {
  const icon = "FaCoins" as never;
  return (
    <SubList name="خطط ﻵسعار" icon={icon}>
      <ul className={Styles.list}>
        <li>pack1</li>
        <li>pack2</li>
        <li>pack3</li>
      </ul>
    </SubList>
  );
};
export default PackagesList;
