import React from "react";

export const Contributor = ({res}) => {
			return (
					<div className="p-2 flex flex-col items-center" key={res.id}>
						<a href={res.html_url} target="blank">
							<img
								className="rounded-full h-24 w-24 m-3 hover:scale-105 transition-all duration-300"
								src={res.avatar_url}
								alt={res.login}
							/>
						</a>
						<div className="detail ">
							<h1 className="w-32 break-words text-sm text-white text-center ">{res.login}</h1>
							{/* button not being used */}
							{/* <button>
								<a href={res.html_url} target="blank">
									Profile
								</a>
							</button> */}
						</div>
					</div>
			);
};
