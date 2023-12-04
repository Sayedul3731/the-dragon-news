import Box from '@mui/material/Box';
import { IconButton, Stack } from '@mui/material';
import FacebookIcon from '@mui/icons-material/Facebook';
import Link from 'next/link';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const Footer = () => {
    const navItems = [
        {
            route: "Home",
            path: "/"
        },
        {
            route: "Pages",
            path: "/pages"
        },
        {
            route: "Category",
            path: "/category"
        },
        {
            route: "News",
            path: "/news"
        },
        {
            route: "Post",
            path: "/post"
        },
        {
            route: "Contact",
            path: "/contact"
        },
    ];
    return (
        <Box className="bg-black text-white h-[250px] flex justify-center items-center flex-col" >
            <Box className="text-center" sx={{
                "& svg": {
                    color: "white"
                }
            }} >
                <IconButton>
                    <FacebookIcon></FacebookIcon>
                </IconButton>
                <IconButton>
                    <FacebookIcon></FacebookIcon>
                </IconButton>
                <IconButton>
                    <FacebookIcon></FacebookIcon>
                </IconButton>
                <IconButton>
                    <FacebookIcon></FacebookIcon>
                </IconButton>
            </Box>
            <Box className="w-full text-center" >
                {navItems.map((item) => (
                    <Link key={item} href={item.path}>
                        <Button
                            key={item}
                            className='text-white'
                        >
                            {item.route}
                        </Button>
                    </Link>
                ))}
            </Box>
            <Typography variant='body2' className='text-center text-gray-500'>
                    @2023 Dragon News Design by Programming Hero
            </Typography>
        </Box>
    );
};

export default Footer;