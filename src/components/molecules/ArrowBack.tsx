import Link from "next/link";
import Arrow from "../atoms/Arrow";

const ArrowBack = () => (
  <Link href="/">
    <div className="m-8 cursor-pointer">
      <Arrow left />
    </div>
  </Link>
);

export default ArrowBack;
