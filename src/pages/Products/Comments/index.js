import React, { useState, useEffect, useContext } from 'react';
import { searchCommentsByProductsID } from '../../../apiServices/commentServices';
import { Functions } from '../../../utils/Function';
import Context from '../../../constants/Context';
const Comments = ({ refresh , productID }) => {
	const [ state, dispatch ] = useContext(Context);
	const [ comments, setComments ] = useState();
	const handleGetComments = async (productID) => {
		let comments = await searchCommentsByProductsID(productID);
		if (comments.length > 0) {
            comments.reverse();
			setComments(comments);
		}
	};
	useEffect(() => {
		handleGetComments(productID);
	}, [refresh]);
	return (
		<>
			{!comments ? (
				<div>Không có bình luận nào!</div>
			) : (
				<div>
					{comments.map((comment, index) => {
						return (
							<div key={index} className="flex flex-row my-2">
								<img
									className="rounded-full border border-solid border-blue-500 "
									src={Functions.getAvatarUser(comment.userId, state.data.users)}
									alt="avatar"
									width={40}
									height={40}
								/>
								<p className="self-center mx-3 ">
									{comment.content}{' '}
									<span className="text-xs text-colorGrayText ">
										{Functions.timestampToDateTime(comment.date)}
									</span>{' '}
								</p>
							</div>
						);
					})}
				</div>
			)}
		</>
	);
};

export default Comments;
