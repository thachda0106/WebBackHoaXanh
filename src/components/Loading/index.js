import React, {useContext,useEffect} from 'react';
import Context from '../../constants/Context'
import {searchCategories} from '../../apiServices/categoryServices'
import {searchAllProducts} from '../../apiServices/productServices'
import {searchAllComments} from '../../apiServices/commentServices'
import {searchAllUsers} from '../../apiServices/userServices'
import {Actions} from '../../constants/Actions'
const Loading = () => {
	const [ state, dispatch ] = useContext(Context);
	useEffect(() => {
		const setData = async () => {
            let [categories,products, comments, users ] = await Promise.all([searchCategories(),searchAllProducts(), searchAllComments(),searchAllUsers()])
            dispatch(Actions.initStateData({categories,products,comments,users,isLoading:true}))
		};
        setData()
	}, []);
	return (
		<div className="fixed top-52 left-1/3 z-40 w-1/6 h-auto flex flex-col justify-center ">
			<img src={'loading_img.gif'} />
			<div className="w-full flex justify-center align-middle">
				<img className="w-3/12" src={'loading_img_2.gif'} />
			</div>
		</div>
	);
};

export default Loading;
