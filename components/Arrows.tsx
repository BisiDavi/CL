import Xarrow from "react-xarrows";
import { useAppDispatch, useAppSelector } from "@/redux/store";
import { deleteArrow } from "@/redux/arrow-slice";

export default function Arrows() {
  const { arrows } = useAppSelector((state) => state.arrows);

  console.log("arrows", arrows);
  const dispatch = useAppDispatch();

  function deleteArrowHandler(e: any, start: string) {
    if (e.detail === 2) {
      dispatch(deleteArrow(start));
    }
  }

  return (
    <>
      {arrows.map((ar: any) => (
        <Xarrow
          start={ar.start}
          end={ar.end}
          key={ar.start + "-." + ar.end}
          color="black"
          strokeWidth={2}
          path="straight"
          showTail={true}
          passProps={{ onClick: (e: any) => deleteArrowHandler(e, ar.start) }}
        />
      ))}
    </>
  );
}
