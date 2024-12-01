import StatsItem from "./StatsItem";

const statsData = [
    {
        endCountNum: 3,
        endCountText: "+",
        text: "Years Of Experience",
    },
    {
        endCountNum: 44,
        endCountText: "+",
        text: "Websites Build",
    },
    {
        endCountNum: 99,
        endCountText: "%",
        text: "Clients Satisfied",
    },
];

const Stats = () => {
  return (
    <section className="flex justify-center xl:justify-normal mx-auto xl:mx-0 xl:w-[480px] gap-4 xl:gap-0">
        {statsData.map((item, index) => {
            return <StatsItem endCountNum={item.endCountNum} endCountText={item.endCountText} text={item.text} key={index} />
        })}
    </section>
  );
};

export default Stats;