import Button from "@mui/material/Button";

interface Props {
  text: string;
  style?: any;
  onClick?: () => void;
}
export default function ControlButton({ text, style, onClick }: Props) {
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
      onClick={onClick}
    >
      {text}
    </Button>
  );
}
