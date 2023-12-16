import { Box, CardActionArea, Typography } from "@mui/material";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import topNews from "@/assets/top-news.png"
import topNews2 from "@/assets/top-news2.png"
import Image from "next/image";
import { Grid } from "@mui/material";

const LatestNews = () => {
    return (
        <Box className="my-5" >
            <Card>
                <CardActionArea>
                    <CardMedia className="p-4">
                        <Image src={topNews} width={800} alt="top news"></Image>
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
                        <Typography variant="body2" color="text.secondary">
                            Lizards are a widespread group of squamate reptiles, with over 6,000
                            species, ranging across all continents except Antarctica
                        </Typography>
                    </CardContent>
                </CardActionArea>
            </Card>
            <Grid  className=" my-5" container rowSpacing={1} columnSpacing={{xs:1, sm:2, md:3}}>
                <Grid  item sm={6} md={6}>
                    <Card>
                        <CardActionArea>
                            <CardMedia className="p-4">
                                <Image src={topNews2} width={800} alt="top news"></Image>
                            </CardMedia>
                            <CardContent>
                                <Typography gutterBottom className="font-semibold">
                                    Bitcoin Climbs as Elon Musk Says Tesla Likely to Accept it Again
                                </Typography>
                                <Typography gutterBottom>
                                    By Sayedul Haque - Mar 18 2023
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    Lizards are a widespread group of squamate reptiles, with over 6,000
                                    species, ranging across all continents except Antarctica
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                    </Card>
                </Grid>
                <Grid  item sm={6} md={6}>
                    <Card>
                        <CardActionArea>
                            <CardMedia className="p-4">
                                <Image src={topNews2} width={800} alt="top news"></Image>
                            </CardMedia>
                            <CardContent>
                                <Typography gutterBottom className="font-semibold">
                                    Bitcoin Climbs as Elon Musk Says Tesla Likely to Accept it Again
                                </Typography>
                                <Typography gutterBottom>
                                    By Sayedul Haque - Mar 18 2023
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    Lizards are a widespread group of squamate reptiles, with over 6,000
                                    species, ranging across all continents except Antarctica
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                    </Card>
                </Grid>
                <Grid  item sm={6} md={6}>
                    <Card>
                        <CardActionArea>
                            <CardMedia className="p-4">
                                <Image src={topNews2} width={800} alt="top news"></Image>
                            </CardMedia>
                            <CardContent>
                                <Typography gutterBottom className="font-semibold">
                                    Bitcoin Climbs as Elon Musk Says Tesla Likely to Accept it Again
                                </Typography>
                                <Typography gutterBottom>
                                    By Sayedul Haque - Mar 18 2023
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    Lizards are a widespread group of squamate reptiles, with over 6,000
                                    species, ranging across all continents except Antarctica
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                    </Card>
                </Grid>
                <Grid  item sm={6} md={6}>
                    <Card>
                        <CardActionArea>
                            <CardMedia className="p-4">
                                <Image src={topNews2} width={800} alt="top news"></Image>
                            </CardMedia>
                            <CardContent>
                                <Typography gutterBottom className="font-semibold">
                                    Bitcoin Climbs as Elon Musk Says Tesla Likely to Accept it Again
                                </Typography>
                                <Typography gutterBottom>
                                    By Sayedul Haque - Mar 18 2023
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    Lizards are a widespread group of squamate reptiles, with over 6,000
                                    species, ranging across all continents except Antarctica
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                    </Card>
                </Grid>
            </Grid>
        </Box>
    );
};

export default LatestNews;