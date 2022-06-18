import { Box, Grid } from "@mui/material";
import SueCard from "../common/SueCard";


function Home() {
    
    return (
        <>
        {/* <Grid container>
            <SueCard />  <SueCard /> <SueCard />
            <SueCard />
            <SueCard />
            <SueCard />
        </Grid>
             */}

             <div className="scrollmenu">
                <SueCard />  <SueCard /> <SueCard />
             </div>
            
        </>

    )
}

export default Home;