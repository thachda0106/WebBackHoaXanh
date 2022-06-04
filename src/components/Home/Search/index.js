import React from 'react';

function Search({text}) {
	return (
		<div className="w-auto h-full flex">
			<div className="w-auto h-9 flex flex-row items-center bg-white self-center rounded-lg mx-4">
				<input className="px-2 focus:outline-none w-96 text-sm font-normal" placeholder = {text} />
				<svg 
					xmlns="http://www.w3.org/2000/svg"
					class="h-6 w-6 text-stone-500 mr-2"
					fill="none"
					viewBox="0 0 24 24"
					stroke="currentColor"
					stroke-width="2"
				>
					<path
						stroke-linecap="round"
						stroke-linejoin="round"
						d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
					/>
				</svg>
			</div>
		</div>
	);
}

export default Search;