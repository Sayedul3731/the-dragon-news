import { getCategoriesNews } from "@/utils/getCategoriesNews";
import { Card, CardActionArea, CardContent, CardMedia, Grid, Typography } from "@mui/material";
import Image from "next/image";
import Link from "next/link";


const DynamicNewsPage = async ({ searchParams }) => {
    console.log(searchParams.category);
    const { data } = await getCategoriesNews(searchParams.category)
    console.log(data);
    return (
        <div>
            <h1>Total <span className="font-semibold">{searchParams.category}</span> News : {data.length}</h1>

            <Grid className=" my-5" container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                {
                    data.map(news => <Grid key={news.id} item sm={6} md={6}>
                        <Link href={`/${news.category.toLowerCase()}/${news._id}`}>
                            <Card>
                                <CardActionArea>
                                    <CardMedia className="p-4" sx={{
                                        "& img": {
                                            width: '100%',
                                            height: "250px"
                                        }
                                    }}>
                                        <Image src={news.thumbnail_url} height={400} width={800} alt="top news"></Image>
                                    </CardMedia>
                                    <CardContent>
                                        <Typography gutterBottom className="font-semibold py-1 w-[150px] text-center bg-red-500 text-white">
                                            {news.category}
                                        </Typography>
                                        <Typography gutterBottom variant="h6" className="font-semibold">
                                            {news.title.length > 30 ? news.title.slice(0, 30) + "..." : news.title}
                                        </Typography>
                                        <Typography gutterBottom>
                                            By {news.author.name} - {news.author.published_date}
                                        </Typography>
                                        <Typography variant="body2" color="text.secondary">
                                            {
                                                news.details.length > 200 ? news.details.slice(0, 200) + "..." : news.details
                                            }
                                        </Typography>
                                    </CardContent>
                                </CardActionArea>
                            </Card>
                        </Link>
                    </Grid>)
                }
            </Grid>
        </div>
    );
};

export default DynamicNewsPage;