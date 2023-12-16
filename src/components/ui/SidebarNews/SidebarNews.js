import { Box, CardActionArea, List, ListItem, ListItemText, Typography } from "@mui/material";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Image from "next/image";
import topNews3 from "@/assets/side-top-news.png"
import { Grid } from "@mui/material";
import Divider from '@mui/material/Divider';
import sideBottomImg from "@/assets/side-bottom-img.png"
const style = {
    width: '100%',
    maxWidth: 360,
    bgcolor: 'background.paper',
};

const SidebarNews = () => {
    return (
        <Box className="my-5">
            <Card>
                <CardActionArea>
                    <CardMedia className="p-4">
                        <Image src={topNews3} width={800} alt="top news"></Image>
                    </CardMedia>
                    <p className="bg-red-500 w-[100px] pl-1 py-1 my-5 ml-4 text-white font-semibold">
                        Technology
                    </p>
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            Bitcoin Climbs as Elon Musk Says Tesla Likely to Accept it Again
                        </Typography>
                        <Typography gutterBottom>
                            By Sayedul Haque - Mar 18 2023
                        </Typography>
                    </CardContent>
                </CardActionArea>
            </Card>
            <Grid className="my-5 p-4" container spacing={2}>
                <List sx={style} component="nav" aria-label="mailbox folders">
                    <Divider />
                </List>
                <Grid className="bg-gray-400 mt-5" item xs={4} md={4}>

                </Grid>
                <Grid className="" item xs={8} md={8}>
                    <Typography gutterBottom className="font-semibold">
                        Bitcoin Climbs as Elon Musk Says Tesla Likely to Accept it
                    </Typography>
                    <Typography gutterBottom>
                        Mar 18 2023
                    </Typography>
                </Grid>
                <List sx={style} component="nav" aria-label="mailbox folders">
                    <Divider />
                </List>
                <Grid className="bg-gray-400 mt-5" item xs={4} md={4}>

                </Grid>
                <Grid item xs={8} md={8}>
                    <Typography gutterBottom className="font-semibold">
                        Bitcoin Climbs as Elon Musk Says Tesla Likely to Accept it
                    </Typography>
                    <Typography gutterBottom>
                        Mar 18 2023
                    </Typography>
                </Grid>
                <List sx={style} component="nav" aria-label="mailbox folders">
                    <Divider />
                </List>
                <Grid className="bg-gray-400 mt-5" item xs={4} md={4}>

                </Grid>
                <Grid item xs={8} md={8}>
                    <Typography gutterBottom className="font-semibold">
                        Bitcoin Climbs as Elon Musk Says Tesla Likely to Accept it
                    </Typography>
                    <Typography gutterBottom>
                        Mar 18 2023
                    </Typography>
                </Grid>
                <List sx={style} component="nav" aria-label="mailbox folders">
                    <Divider />
                </List>
                <Grid className="bg-gray-400 mt-5" item xs={4} md={4}>

                </Grid>
                <Grid item xs={8} md={8}>
                    <Typography gutterBottom className="font-semibold">
                        Bitcoin Climbs as Elon Musk Says Tesla Likely to Accept it
                    </Typography>
                    <Typography gutterBottom>
                        Mar 18 2023
                    </Typography>
                </Grid>
                <List sx={style} component="nav" aria-label="mailbox folders">
                    <Divider />
                </List>
                <Grid className="bg-gray-400 mt-5" item xs={4} md={4}>

                </Grid>
                <Grid item xs={8} md={8}>
                    <Typography gutterBottom className="font-semibold">
                        Bitcoin Climbs as Elon Musk Says Tesla Likely to Accept it
                    </Typography>
                    <Typography gutterBottom>
                        Mar 18 2023
                    </Typography>
                </Grid>
            </Grid>

            <Card>
                <CardActionArea>
                    <CardMedia className="p-4">
                        <Image src={sideBottomImg}  alt="top news"></Image>
                    </CardMedia>
                </CardActionArea>
            </Card>
        </Box>
    );
};

export default SidebarNews;