/* eslint-disable @next/next/no-img-element */
import Box from "@mui/material/Box";
import Xarrow, { useXarrow, Xwrapper } from "react-xarrows";

import { useAppSelector } from "@/redux/store";
import Layout from "@/components/Layout";
import ProductCategory from "@/components/ProductCategory";
import LayoutDrawer from "@/components/LayoutDrawer";
import Point from "@/components/Point";
import { useState } from "react";

export default function SchematicsEditor() {
  const { vehicle } = useAppSelector((state) => state.vehicle);
  const { point } = useAppSelector((state) => state.point);
  const [arrows, setArrows] = useState<any>([]);

  console.log("arrows", arrows);

  const addArrow = ({ start, end }: any) => {
    setArrows([...arrows, { start, end }]);
  };

  return (
    <Layout title="Schematics Editor" drawer={<LayoutDrawer />}>
      <Box
        sx={{
          width: "100%",
          margin: "60px auto",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          height: "100vh",
          position: "relative",
        }}
      >
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
        {point.map((item) => (
          <Point
            key={item.id}
            point={item}
            {...{ addArrow, setArrows, handler: "top" }}
          />
        ))}
        {arrows.map((ar: any) => (
          <Xarrow
            start={ar.start}
            end={ar.end}
            key={ar.start + "-." + ar.start}
          />
        ))}
      </Box>
      <style jsx>
        {`
          img.vehicle {
            width: 50%;
            height: 400px;
            margin: auto;
          }
        `}
      </style>
    </Layout>
  );
}
