import React, {useState} from 'react';
import Context from '../../constants/Context'
import {searchCategories} from '../../apiServices/categoryServices'
import {searchAllProducts} from '../../apiServices/productServices'
import {searchAllComments} from '../../apiServices/commentServices'
import {searchAllUsers} from '../../apiServices/userServices'
import {Actions} from '../../constants/Actions'
const LoadingAwait = ({isLoading}) => {
    if(!isLoading) return <></>
	else return (
			<div className="z-40 fixed top-0 left-0 w-full h-full flex bg-colorBgTransparent justify-center items-center ">
				<div className="">
					<img src={'../spinner.gif'} width = {50} height = {50}/>
				</div>
		</div>
	);
};

export default LoadingAwait;
