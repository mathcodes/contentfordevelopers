import React from "react";
import "./Contributor.scss";
import { data } from '../../data/db'

export const Contributor = () => {
	return (
		<>
			{data.map((res) => {
				return (
					<div className="contributor" key={res.id}>
						<img
							className="contributorImg"
							src={res.avatar_url}
							alt={res.login}
						/>
						<div className="detail">
							<h1>{res.login}</h1>
							<button>
								<a href={res.html_url} target="blank">
									Profile
								</a>
							</button>
						</div>
					</div>
				);
			})}
		</>
	);
};
