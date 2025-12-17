import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

export default function BasicCard() {
  return (
    <Card
      sx={{
        backgroundColor: "transparent",
        boxShadow: "none",
        maxWidth: "500px",
      }}
    >
      <CardContent sx={{ p: 0 }}>
        <Typography
          sx={{
            fontSize: "56px",
            fontWeight: 800,
            lineHeight: "64px",
            color: "#000",
          }}
        >
          Life Insurance
          <br />
          Made Simple
        </Typography>

        <Typography
          sx={{
            mt: 2,mr:15,
            fontSize: "16px",
            color: "#475467",
          }}
        >
          Find your goals and plan your future
        </Typography>
      </CardContent>

      <CardActions sx={{ mt: 3, p: 0 }}>
        <Button
          sx={{
            backgroundColor: "#FE5000",
            color: "#fff",
            px: 4,
            py: 1.5,
            borderRadius: "30px",
            textTransform: "none",
            fontWeight: 600,
            "&:hover": {
              backgroundColor: "#e64800",
            },
          }}
        >
          Get Started →
        </Button>
      </CardActions>
    </Card>
  );
}
