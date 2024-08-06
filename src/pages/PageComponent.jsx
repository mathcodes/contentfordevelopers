import React from 'react';
import NavBar from '../components/navbar/Navbar.jsx';
import Footer from "../components/footer/Footer";


export default function PageComponent({ title, description1,  description2,  description3, icon, point1, point2, point3, link, cards }) {
    return (
        <>
            <NavBar />
            <div className="flex flex-col items-center justify-center bg-gray-100 rounded-lg shadow-lg p-6 m-4">
            <div className="flex flex-col items-start justify-center lg:px-40 px-6 py-4  gap-6 leading-10 dark:text-platinum text-blue z-10 relative ">
            <div className="flex flex-col items-center mx-auto gap-6 max-w-3xl">
                
                <div className="flex items-center mb-4">
                {icon && React.createElement(icon, { size: 40, fill: "mediumpurple" })}
            <span className="gradientText font-bold text-3xl ml-4">{title}</span>
                </div>
                <p className="mb-4 text-md leading-tight">{description1}<br/><br/>{description2}<br/><br/>{description3}</p>
                {/* <p className="mb-4 text-md leading-snug">{description2}</p> */}
                {/* <p className="mb-4 text-md leading-snug">{description3}</p> */}
                </div>
                {/* <ul className="list-disc list-inside mb-4">
                    <li>{point1}</li>
                    <li>{point2}</li>
                    <li>{point3}</li>
                </ul> */}
                {/* <a href={link} className="text-blue-500 mt-4 mb-4">Learn more</a> */}

                    </div>
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
                <div className="mb-0 sticky">

                {/* <Footer /> */}
                </div>

            </div>
        </>
    );
}
