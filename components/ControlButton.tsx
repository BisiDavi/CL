import Button from "@mui/material/Button";

interface Props {
  text: string;
}
export default function ControlButton({ text }: Props) {
  return (
    <Button
      sx={{
        minWidth: "unset",
        px: 1,
        py: 0,
        m: 0,
        border: "1px solid black",
      }}
    >
      {text}
    </Button>
  );
}
