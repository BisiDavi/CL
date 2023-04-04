interface Props {
  centerRipple?: boolean;
  color?: string;
}

export default function SpinnerRipple({ centerRipple, color }: Props) {
  const ripplePosition = centerRipple
    ? "w-full mx-auto justify-content-center my-5 vh_50  align-items-center d-flex ripple-center"
    : "ripple";

  const rippleColor = color ? color : "green";
  return (
    <>
      <div className={ripplePosition}>
        <div className="lds-ripple">
          <div></div>
          <div></div>
        </div>
      </div>
      <style jsx>
        {`
          .vh_50 {
            height: 50vh;
          }
          .lds-ripple {
            display: inline-block;
            position: relative;
            width: 80px;
            height: 80px;
          }
          .lds-ripple div {
            position: absolute;
            border: 4px solid ${rippleColor};
            opacity: 1;
            border-radius: 50%;
            animation: lds-ripple 1s cubic-bezier(0, 0.2, 0.8, 1) infinite;
          }
          .lds-ripple div:nth-child(2) {
            animation-delay: -0.5s;
          }
          @keyframes lds-ripple {
            0% {
              top: 36px;
              left: 36px;
              width: 0;
              height: 0;
              opacity: 1;
            }
            100% {
              top: 0px;
              left: 0px;
              width: 72px;
              height: 72px;
              opacity: 0;
            }
          }
          @media (max-width: 768px) {
            .vh_100 {
              height: 60vh;
            }
          }
        `}
      </style>
    </>
  );
}

interface SpinnerLoaderProps {
  loadingText: string;
  className?: string;
}

export function SpinnerLoader({ loadingText, className }: SpinnerLoaderProps) {
  const loaderClassName = className ? className : "";
  return (
    <div className={`flex flex-col ${loaderClassName} `}>
      <div className={`ripple h-20 flex justify-center items-center`}>
        <SpinnerRipple centerRipple />
      </div>
      <p className="text-center font-bold">{loadingText}</p>
    </div>
  );
}
