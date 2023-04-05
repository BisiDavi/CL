/* eslint-disable @next/next/no-img-element */
import { useAppSelector } from "@/redux/store";
import ProductCategory from "@/components/ProductCategory";

export default function ProductCategories({ addArrow, setArrows }: any) {
  const { vehicle } = useAppSelector((state) => state.vehicle);

  return (
    <>
      {vehicle?.image && (
        <img className="vehicle" src={vehicle?.image} alt={vehicle?.name} />
      )}
      {vehicle &&
        vehicle.categories &&
        vehicle?.categories.map((category, index) => (
          <ProductCategory
            key={index}
            category={category}
            {...{
              addArrow,
              handler: "bottom",
              setArrows,
            }}
          />
        ))}
      <style jsx>
        {`
          img.vehicle {
            width: 50%;
            height: 400px;
            margin: auto;
          }
        `}
      </style>
    </>
  );
}
