import "./Home.scss";
import { IncDec } from "../../components/IncDec";
import { ControlInput } from "../../components/ControlInput/ControlInput";

export const Home = () => {
  return (
    <div className="Home">
      <ControlInput />
      <IncDec>Counter</IncDec>
    </div>
  );
};
