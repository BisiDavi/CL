import Button from "@mui/material/Button";

interface Props {
  text: string;
  style?: any;
}
export default function ControlButton({ text, style }: Props) {
  const btnStyle = style ? style : "";
  return (
    <Button
      sx={{
        minWidth: "unset",
        px: 1,
        py: 0,
        m: 0,
        border: "1px solid black",
        ...btnStyle,
      }}
    >
      {text}
    </Button>
  );
}
