import Link from "next/link";

const Logo = ({ light = false }) => {
  // determind the logo color based on the light prop 
  const colorClass = light ? "text-white" : "text-primary";
  return (
    <Link href="https://www.linkedin.com/in/mdridoykhan138/" className="font-primary text-2xl tracking-[4px]" target="_blank">
      <span className={colorClass}>Md Ridoy Khan</span>
    </Link>
  );
};

export default Logo;