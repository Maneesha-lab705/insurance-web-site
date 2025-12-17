// import HomeImage from "./HomeImage";
import { Box } from "@mui/material";
export default function Home(){
    return <div>
         <Box
          component="img"
          src="src/assets/img/home.png" // replace with your image
          alt="Consultant"
          sx={{
        height:'600px',
        position: "relative",
    bottom:100,
    left: 650,
            zIndex: 1,
            borderRadius: "16px",
          }}
        />
{/* <HomeImage /> */}
    </div>;
}