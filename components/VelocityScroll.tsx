import { VelocityScroll } from "./ui/scroll-based-velocity";

function VelocityScrollComp({ text }: { text: string }) {
  return (
    <div className="relative w-[98vw] justify-center overflow-hidden">
      <VelocityScroll
        className="font-display text-center text-4xl font-bold tracking-[-0.02em] text-gray-500 drop-shadow-sm dark:text-white md:text-7xl md:leading-[5rem]"
        default_velocity={3}
        text={text}
      />
      {/* Left fade effect */}
      <div className="absolute top-0 left-[-16px] h-full w-16 bg-gradient-to-r from-black to-transparent pointer-events-none" />

      {/* Right fade effect */}
      <div className="absolute top-0 right-[-16px] h-full w-16 bg-gradient-to-l from-black to-transparent pointer-events-none" />
    </div>
  );
}
export default VelocityScrollComp;
