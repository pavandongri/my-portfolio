import { FaExternalLinkAlt } from 'react-icons/fa';
import RevealOnScroll from '../components/RevealOnScroll';

const portfolioItems = [
    {
        title: 'MGV ARTWORKS',
        description: 'My own personal artwork website.',
        imageUrl: '/images/port1.jpg',
        link: 'https://mgvartworks.netlify.app',
    },
    {
        title: 'Portfolio',
        description: 'A portfolio Website.',
        imageUrl: '/images/port2.jpg',
        link: 'https://mgvportfolio.netlify.app',
    },
    {
        title: 'Artisans Avenue',
        description: 'An E-Commerce website to sell the Artworks.',
        imageUrl: '/images/port3.jpg',
        link: '#',
    },
    {
        title: 'Pending..',
        description: 'Under Development',
        imageUrl: '/images/port4.jpg',
        link: '#',
    },
    {
        title: 'Pending..',
        description: 'Under Development',
        imageUrl: '/images/port5.jpg',
        link: '#',
    },
];

const Portfolio = () => {
    return (
        <section
            id="portfolio"
            className="py-20 px-6 md:px-16 bg-gray-50 dark:bg-gray-950 transition-colors"
        >
            <RevealOnScroll y={30}>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-white text-center mb-12">
                    Latest <span className="text-blue-500">Projects</span>
                </h2>
            </RevealOnScroll>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12">
                {portfolioItems.map((item, index) => (
                    <RevealOnScroll key={index} delay={index * 0.1}>
                        <div className="relative group bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-xl transform hover:scale-105 transition-transform duration-300">
                            <img
                                src={item.imageUrl}
                                alt={item.title}
                                className="w-full h-64 object-cover group-hover:opacity-80 transition-opacity duration-300"
                            />
                            <div className="absolute inset-0 flex flex-col justify-center items-center bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-center p-4">
                                <h4 className="text-2xl font-semibold text-white mb-2">{item.title}</h4>
                                <p className="text-lg text-white mb-4">{item.description}</p>
                                <a
                                    href={item.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-white text-2xl hover:text-blue-500"
                                >
                                    <FaExternalLinkAlt />
                                </a>
                            </div>
                        </div>
                    </RevealOnScroll>
                ))}
            </div>
        </section>
    );
};

export default Portfolio;