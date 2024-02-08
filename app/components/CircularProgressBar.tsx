type CircularProgressBarProps = {
  value: number;
};

function CircularProgressBar(props: CircularProgressBarProps) {
  return (
    <div className="circle relative h-[150px] w-[150px] rounded-full cursor-default hover:[&>.box]:-translate-x-1/2 hover:[&>.box]:-translate-y-1/2 hover:[&>.box]:scale-[0.91]">
      <div className="bar"></div>
      <div className="box absolute left-1/2 top-1/2 bg-white w-full h-full rounded-full -translate-y-1/2 -translate-x-1/2	scale-[.8] transition-all duration-200">
        <span className="absolute left-1/2 top-1/2 text-4xl font-semibold transition-all duration-100 translate-x-[-45%] translate-y-[-45%]"></span>
      </div>
    </div>
  );
}

export default CircularProgressBar;
