import React from "react";
import "./Contributer.scss";
import { data } from "../db";

export const Contributer = () => {
	return (
		<>
			{data.map((res) => {
				return (
					<div className="contributer" key={res.id}>
						<img
							className="contributerImg"
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
