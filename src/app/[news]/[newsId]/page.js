import { getSingleNews } from "@/utils/getSingleNews";
import { Box, Container, Grid } from "@mui/material";
import Image from "next/image";


const NewsDetailsPage = async ({ params }) => {
    const { data: news } = await getSingleNews(params.newsId)
    return (
        <Box>
            <Container>
                <Grid container spacing={2}>
                    <Grid item xs={8}>
                   <Image src={news.thumbnail_url} alt="thumbnail-img" width={600} height={400}></Image>
                    </Grid>
                    <Grid item xs={4}>
                        <h1>details</h1>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
};

export default NewsDetailsPage;