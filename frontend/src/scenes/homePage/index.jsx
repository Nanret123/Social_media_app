import React from 'react';
import { Box, useMediaQuery } from "@mui/material";
import { useSelector } from "react-redux";
import Navbar from "../navbar";
import UserWidget from "../widgets/UserWidget.jsx";
import PostsWidget from "../widgets/PostsWidget.jsx";
import MyPostWidget from "../widgets/MyPostwidget.jsx";
import AdvertWidget from "../widgets/AdvertWidget";
import FriendListWidget from "../widgets/FriendListWidget";


const HomePage = () => {
	const isNonMobilescreens = useMediaQuery("(min-width: 1000px)");
	const { _id, picturePath } = useSelector(state => state.user);
	
	return (
		<Box>
			<Navbar />
			<Box 
			width="100%"
			padding="2rem 6%"
			display={isNonMobilescreens ? "flex" : "block"}
			gap="0.5rem"
			justifyContent="space-between"
			>
			    <Box flexBasis={isNonMobilescreens ? "26%" : undefined }>
			    	<UserWidget userId={_id} picturePath={picturePath} />
			    </Box>
			    <Box flexBasis={isNonMobilescreens ? "42%" : undefined }
			        mt={isNonMobilescreens ? undefined : "2rem"}
			    >
			    	<MyPostWidget picturePath={picturePath} />
                    <PostsWidget userId={_id} />
			    </Box>	
                {isNonMobilescreens && (
                	<Box flexBasis = "26%">
                		<AdvertWidget />
                		<Box m="2rem 0" />
                            <FriendListWidget userId={_id} />
                	</Box>)}  
			</Box>
		</Box>
	)
}

export default HomePage