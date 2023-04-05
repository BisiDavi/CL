import Xarrow from "react-xarrows/lib/Xarrow/Xarrow";

export default function Arrows({ arrows }: any) {
  return (
    <>
      {arrows.map((ar: any) => (
        <Xarrow
          start={ar.start}
          end={ar.end}
          key={ar.start + "-." + ar.start}
        />
      ))}
    </>
  );
}
