"use client"
import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import Image from 'next/image';
import logoImage from "@/assets/logo.png"

// icons 
import FacebookIcon from '@mui/icons-material/Facebook';
import { IconButton, Stack } from '@mui/material';
import Link from 'next/link';
import Header from './Header';


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
        path: "/categories/news?categnews"
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

function Navbar() {

    return (
        <>
        <Header></Header>
            <AppBar position="static" className='bg-black'>
                <Container maxWidth="lg">
                    <Toolbar disableGutters>
                        <Image src={logoImage} width={100} height={100} alt='logo' />
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
                        <Box >
                            <Stack direction="row" sx={{
                                "& svg": {
                                    color: "white"
                                }
                            }}>
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
                            </Stack>
                        </Box>
                    </Toolbar>
                </Container>
            </AppBar>
        </>
    );
}
export default Navbar;