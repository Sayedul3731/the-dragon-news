import { Box, Container, Typography } from "@mui/material";
import headingImg from "@/assets/The Dragon News.png"
import Image from "next/image";
import {getCurrentDate} from "@/utils/getCurrentDate"

const Header = () => {
    const currentDate = getCurrentDate();

    return (
        <Box sx={{ textAlign:"center", my:5  }} >
            <Container className="flex justify-center " >
                <Image src={headingImg} alt="headingImg" ></Image>
            </Container>
            <Typography variant="body2" className="my-2">
                Journalism Without Fear or Favour
            </Typography>
            <Typography className="font-bold">
                {currentDate}
            </Typography>
        </Box>
    );
};

export default Header;