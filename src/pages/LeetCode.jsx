import * as React from 'react';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import { yellow, red, green } from '@mui/material/colors';
import { Contributor } from "../components/contributor/Contributor";
import Footer from "../components/footer/Footer";
import Table from "../components/table/Table";
import NavBar from "../components/navbar/Navbar";
import { leetCodeData } from '../data/leetCode';
import LinkIcon from '@mui/icons-material/Link';
import "./LeetCode.scss";
import ContributorSection from '../components/homepage/contributorSection/ContributorSection';

export default function Leetcode() {


	// setup variable to conditionally choose MUI colors for 'green', 'yellow', or 'red' based on difficulty
	const diffColor = (diff) => {
		if (diff === 'Easy') {
			//return MUI theme color for green
			return green[900]
		} else if (diff === 'Medium') {
			return yellow[800]
		} else if (diff === 'Hard') {
			return red[900]
		}
	};

	const ColorButton = styled(Button)(({ theme, id }) => ({
		color: diffColor(leetCodeData[id - 1].difficulty),
		backgroundColor: theme.palette.grey[50],
		'&:hover': {
			color: theme.palette.getContrastText(`${diffColor(leetCodeData[id - 1].difficulty)
				}`),
			backgroundColor: diffColor(leetCodeData[id - 1].difficulty),
		},
	}));

	const columns = [
		{ field: 'id', headerName: '#', width: 5 },
		{ field: 'title', headerName: 'Title', width: 200 },
		{ field: 'tags', headerName: 'Tags', width: 300 },
		{
			field: 'difficulty',
			headerName: 'Difficulty',
			type: 'text',
			width: 130,
			renderCell: (cellValues) => {
				return (
					<ColorButton
						variant="contained"
						id={cellValues.id}
					>
						{leetCodeData[cellValues.id - 1].difficulty}
					</ColorButton>
				);
			}
		},
		{
			field: 'originalLink',
			headerName: <LinkIcon />,
			type: 'text',
			width: 130,
			renderCell: (cellValues) => {
				return (
					<Button
						variant="contained"
						color="primary"

						href={`./LeetCode/${cellValues.id}`}
					>
						<LinkIcon />
					</Button>
				);
			}
		},
	];

	const rows = [];

	leetCodeData.map((item) => {
		return (
			rows.push(
				{
					id: `${item.id}`,
					title: `${item.title}`,
					tags: `${item.tags.map((t) => t )}`,
					difficulty: `${item.difficulty}`,
					link: `${item.link}`,
				},
			)
		)
	})

	return (
		<div className='leetCode'>
			<div className='banner'>
				<h1>
					LeetCode Problems
					<hr />
				</h1>
				<h3>Choose the problem you'd like to explore!</h3>
			</div>

			<div className="item_wrapper">
				<Table rows={rows} columns={columns} />
			</div>
			<ContributorSection/>
			<Footer />
		</div>
	);
}
