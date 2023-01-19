import React from "react";
import "./Contributor.scss";
import { data } from '../../data/db'

export const Contributor = () => {
	return (
		<>
			{data.map((res) => {
				return (
					<div className="contributor" key={res.id}>
						<a href={res.html_url} target="blank">
							<img
								className="contributorImg"
								src={res.avatar_url}
								alt={res.login}
							/>
						</a>
						<div className="detail">
							<h1>{res.login}</h1>
							{/* button not being used */}
							{/* <button>
								<a href={res.html_url} target="blank">
									Profile
								</a>
							</button> */}
						</div>
					</div>
				);
			})}
		</>
	);
};
