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
				<div className="">
					<img src={'../spinner.gif'} width = {50} height = {50}/>
				</div>
	);
};

export default LoadingAwait;
