import React from "react";
import { Navbar } from "./nav";
import { Jumbo } from "./jumbo";
import { Card } from "./card";
import { Footer } from "./footer";

//create your first component
export function Home() {
	const jumbo = [
		{
			title: "A Warm Welcome!",
			body:
				"It uses utility classes for typography and spacing to space content out within the larger container",
			buttonText: "Call to Action",
			url: "www.google.com"
		}
	];
	const cards = [
		{
			image: "https://via.placeholder.com/300",
			title: "My Card",
			body:
				"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla rutrum in metus quis pellentesque. ",
			buttonText: "View",
			url: "Find Out More!"
		},
		{
			image: "https://via.placeholder.com/300",
			title: "My Card",
			body:
				"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla rutrum in metus quis pellentesque. ",
			buttonText: "View",
			url: "Find Out More!"
		},
		{
			image: "https://via.placeholder.com/300",
			title: "My Card",
			body:
				"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla rutrum in metus quis pellentesque. ",
			buttonText: "View",
			url: "Find Out More!"
		},
		{
			image: "https://via.placeholder.com/300",
			title: "My Card",
			body:
				"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla rutrum in metus quis pellentesque. ",
			buttonText: "View",
			url: "Find Out More!"
		}
	];

	return (
		<div className="text-left">
			<Navbar />)
			{jumbo.map((jumbo, index) => {
				return (
					<Jumbo
						key={index}
						title={jumbo.title}
						body={jumbo.body}
						buttonText={jumbo.buttonText}
						url={jumbo.url}
					/>
				);
			})}
			<div className="container">
				<div className="card-deck">
					{cards.map((card, index) => {
						return (
							<Card
								key={index}
								image={card.image}
								title={card.title}
								body={card.body}
								buttonText={card.buttonText}
								url={card.url}
							/>
						);
					})}
				</div>
			</div>
			<Footer />
		</div>
	);
}
