import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { Contributor } from "../components/contributor/Contributor";
import Footer from "../components/footer/Footer";
import ItemCard from "../components/card/ItemCard";
import NavBar from "../components/navbar/Navbar";
import "./LeetCode.scss";




export default function Leetcode() {
	const [open, setOpen] = React.useState(false);
	const handleOpen = () => setOpen(true);
	const handleClose = () => setOpen(false);

	 const style = {
		position: 'absolute',
		top: '50%',
		left: '50%',
		transform: 'translate(-50%, -50%)',
		width: 400,
		bgcolor: 'background.paper',
		border: '2px solid #000',
		boxShadow: 24,
		p: 4,
	};
	return (
		<div className='leetCode'>
			<NavBar />

			<div className='banner'>
				<h1>
					LeetCode Problems
					<hr />
				</h1>
				<h3>Choose the problem you'd like to explore!</h3>
			</div>
			<div>
			 
				<Modal
					open={open}
					onClose={handleClose}
					aria-labelledby="modal-modal-title"
					aria-describedby="modal-modal-description"
				>
					<Box sx={style}>
						<Typography id="modal-modal-title" variant="h6" component="h2">
							Text in a modal
						</Typography>
						<Typography id="modal-modal-description" sx={{ mt: 2 }}>
							Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
						</Typography>
					</Box>
				</Modal>
			</div>
			<div className="item_wrapper">
				<ItemCard onclick={handleOpen} />

			</div>

			<section className="contributor_section">
				<div className="desc">
					<h1>Our Contributors</h1>
					<h3>Who constantly try to make the website better</h3>
				</div>

				<div className="contributors_wrapper">
					<Contributor />
				</div>
			</section>

			<footer className="footer">
				<Footer />
			</footer>
		</div>
	);
}
