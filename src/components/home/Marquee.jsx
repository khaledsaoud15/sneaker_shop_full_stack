import Marquee from "react-fast-marquee";

const MarqueeItem = ({ text }) => {
  return (
    <Marquee className="!w-full h-12 flex items-center bg-[#4ff233]">
      <div className="flex w-full justify-between gap-8 pointer-events-none">
        <p className="font-medium">{text}</p>
        <p className="font-medium">{text}</p>
        <p className="font-medium">{text}</p>
        <p className="font-medium">{text}</p>
        <p className="font-medium">{text}</p>
      </div>
    </Marquee>
  );
};

export default MarqueeItem;
