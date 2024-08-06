import React from 'react';
import NavBar from '../components/navbar/Navbar.jsx';

export default function PageComponent({ title, description, icon, point1, point2, point3, link, cards }) {
    return (
        <>
            <NavBar />
            <div className="flex flex-col items-center justify-center bg-gray-100 rounded-lg shadow-lg p-6 m-4">
                <h1 className="text-3xl font-bold mb-4">{title}</h1>
                <p className="mb-4">{description}</p>
                <div className="flex items-center mb-4">
                    {icon && React.createElement(icon, { size: 40, color: icon.iconColor })}
                    <h2 className="text-2xl font-semibold ml-4">{title}</h2>
                </div>
                <ul className="list-disc list-inside mb-4">
                    <li>{point1}</li>
                    <li>{point2}</li>
                    <li>{point3}</li>
                </ul>
                <a href={link} className="text-blue-500 mt-4 mb-4">Learn more</a>
                <h1 className="text-2xl font-semibold mb-4">Topics</h1>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {cards.map((card, index) => (
                        <div key={index} className="flex flex-col items-center justify-center bg-white rounded-lg shadow-lg p-6">
                            <div className="flex items-center mb-4">
                                {card.icon && React.createElement(card.icon, { size: 40, color: card.iconColor })}
                                <h3 className="text-xl font-semibold ml-4">{card.title}</h3>
                            </div>
                            <p className="mb-4">{card.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
}
