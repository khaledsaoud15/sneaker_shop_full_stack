import Marquee from "react-fast-marquee";

const MarqueeItem = ({ text }) => {
  return (
    <Marquee
      gradient={true}
      gradientWidth={800}
      className="!w-full h-12 flex items-center bg-[#BEF4B5]"
    >
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
