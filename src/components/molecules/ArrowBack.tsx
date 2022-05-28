import Arrow from "../atoms/Arrow";

const ArrowBack: React.FunctionComponent<{ onClick: () => void }> = ({
  onClick,
}) => (
  <div className="m-8 h-8 cursor-pointer" onClick={onClick}>
    <Arrow left />
  </div>
);

export default ArrowBack;
