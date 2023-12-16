import { getAllCategories } from "@/utils/getAllCategories";
import { Box, Typography, Divider, Stack, Button } from "@mui/material";
import Link from "next/link";


const CategoryList = async () => {
    const { data: allCategories } = await getAllCategories()
    console.log(allCategories);
    return (
        <Box>
            <Typography variant="h5">Categories</Typography>
            <Divider />
            <Stack rowGap={1} className="mt-5">
                {
                    allCategories.map((category) => (<Button variant="outlined" key={category.id}>
                        <Link href={`http://localhost:3000/categories/news?category=${category.title.toLowerCase()}`}>
                            {category.title}
                        </Link>
                    </Button>))
                }
            </Stack>
        </Box>
    );
};

export default CategoryList;