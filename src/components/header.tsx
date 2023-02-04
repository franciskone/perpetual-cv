"use client"

import { GitHub, EmailOutlined, LinkedIn } from "@mui/icons-material"
import {
  Toolbar,
  Avatar,
  Typography,
  Box,
  Stack,
  IconButton,
  AppBar,
} from "@mui/material"
import { FunctionComponent } from "react"
import NextLink from "next/link"
import avatar from "@/assets/avatar.webp"
import { useData } from "@/hooks/use-data"
import Image from "next/image"

export const Header: FunctionComponent = () => {
  const { name, email, github, linkedin } = useData()

  return (
    <AppBar position="sticky">
      <Toolbar>
        <Avatar sx={{ mr: 3, my: 2, height: 60, width: 60 }}>
          <Image alt={name} src={avatar.src} fill sizes="60px" />
        </Avatar>
        <Typography
          variant="h5"
          noWrap
          color="inherit"
          fontWeight="bold"
          sx={{ textDecoration: "none" }}
        >
          {name}
        </Typography>
        <Box ml="auto">
          <Stack direction="row" spacing={2} alignItems="center">
            {linkedin && <NextLink
                href={linkedin}
                passHref
                legacyBehavior
              >
                <IconButton href="" target="_blank" aria-label="Linkedin">
                  <LinkedIn fontSize="large" />
                </IconButton>
              </NextLink>
            }
            {github && <NextLink
                href={`https://github.com/${github}`}
                passHref
                legacyBehavior
              >
                <IconButton href="" target="_blank" aria-label="GitHub">
                  <GitHub fontSize="large" />
                </IconButton>
              </NextLink>
            }
            {
              email && <NextLink href={`mailto:${email}`} passHref legacyBehavior>
                <IconButton href="" target="_blank" aria-label="Email">
                  <EmailOutlined fontSize="large" />
                </IconButton>
              </NextLink>
            }
          
          </Stack>
        </Box>
      </Toolbar>
    </AppBar>
  )
}
