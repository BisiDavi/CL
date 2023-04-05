import Point from "@/components/Point";
import { useAppSelector } from "@/redux/store";

export default function Points() {
  const { point } = useAppSelector((state) => state.point);

  return (
    <>
      {point.map((item) => (
        <Point key={item.id} point={item} handler="top" />
      ))}
    </>
  );
}
