import Xarrow from "react-xarrows";

export default function Arrows({ arrows }: any) {
  return (
    <>
      {arrows.map((ar: any) => (
        <Xarrow
          start={ar.start}
          end={ar.end}
          key={ar.start + "-." + ar.start}
          color="black"
          headSize={2}
          strokeWidth={2}
          path="straight"
        />
      ))}
    </>
  );
}
