import Icon, { IconTypes } from "./Icon";

const Item: React.FC<{ icon: IconTypes; className?: string }> = ({
  icon,
  children,
  className,
}) => {
  return (
    <div className={`item ${className || ""}`}>
      <span>
        <Icon name={icon} />
      </span>
      <span>{children}</span>
    </div>
  );
};

export default Item;
