import { useAppSelector } from "@/redux/store";
import Xarrow from "react-xarrows";

export default function Arrows() {
  const { arrows } = useAppSelector((state) => state.arrows);
  return (
    <>
      {arrows.map((ar: any) => (
        <Xarrow
          start={ar.start}
          end={ar.end}
          key={ar.start + "-." + ar.start}
          color="black"
          strokeWidth={2}
          path="straight"
          showTail={true}
        />
      ))}
    </>
  );
}
