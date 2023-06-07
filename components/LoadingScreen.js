import { SpinPrimary } from "./Svg";

const LoadingScreen = ({ fullScreen = true, bg = "bg-dark" }) => {
  if (fullScreen) {
    return (
      <div
        className={`w-full h-full fixed flex justify-center items-center top-0 left-0 z-50 ${bg}`}
      >
        <SpinPrimary />
      </div>
    );
  } else {
    return (
      <div
        className={`w-full h-full min-h-[150px] flex justify-center items-center z-30 ${bg}`}
      >
        <SpinPrimary />
      </div>
    );
  }
};

export default LoadingScreen;
