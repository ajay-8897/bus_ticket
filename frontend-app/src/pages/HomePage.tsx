import React, { useState, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import ContactPage from './ContactPage';

const HomePage: React.FC = () => {
    const [searchParams, setSearchParams] = useState({ from: '', to: '', date: '' });
    const [loggedIn, setLoggedIn] = useState(false);
    const [animate, setAnimate] = useState(false);
    const [formAnimate, setFormAnimate] = useState(false);
    const [cardsAnimate, setCardsAnimate] = useState(false);
    const history = useHistory();

    const headingText = "India's No. 1 online bus ticket booking site";
    const smileIcon = (
        <span role="img" aria-label="smile" style={{ fontSize: '2rem', verticalAlign: 'middle', marginLeft: '12px' }}>
            😊
        </span>
    );
    const headingWords = headingText.split(' ');
    const [visibleWordCount, setVisibleWordCount] = useState(0);

    useEffect(() => {
        setTimeout(() => setAnimate(true), 100); // Start heading animation
        setTimeout(() => setFormAnimate(true), 700); // Start form animation after heading
        setTimeout(() => setCardsAnimate(true), 1400); // Start cards animation after form
    }, []);

    useEffect(() => {
        if (visibleWordCount < headingWords.length) {
            const timer = setTimeout(() => setVisibleWordCount(visibleWordCount + 1), 400);
            return () => clearTimeout(timer);
        }
    }, [visibleWordCount, headingWords.length]);

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setSearchParams(prev => ({ ...prev, [name]: value }));
    };

    const handleSearch = async (e: React.FormEvent) => {
        e.preventDefault();
        // Optionally call your API here, e.g. await searchBuses(searchParams);
        localStorage.setItem('searchParams', JSON.stringify(searchParams));
        history.push(`/signin`);
    };

    // Redirect to home page on refresh if not already on home
    useEffect(() => {
        if (window.location.pathname !== '/') {
            window.location.replace('/');
        }
    }, []);

    return (
        <div
            style={{
                backgroundColor: '#efe5daff',
                padding: '2rem'
            }}
        >
            <h1
                style={{
                    textAlign: 'center',
                    marginBottom: '2rem',
                    color: '#070707ff',
                    letterSpacing: '1px',
                    fontFamily: 'inherit'
                }}
            >
                {headingWords.map((word, idx) => (
                    <span
                        key={idx}
                        style={{
                            opacity: idx < visibleWordCount ? 1 : 0,
                            transition: 'opacity 0.4s',
                            display: 'inline-block',
                            marginRight: '8px'
                        }}
                    >
                        {word}
                    </span>
                ))}
                {visibleWordCount === headingWords.length && smileIcon}
            </h1>
            <form
                onSubmit={handleSearch}
                style={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    justifyContent: 'center',
                    alignItems: 'center',
                    gap: '1rem',
                    background: 'rgba(255, 255, 255, 0.8)',
                    borderRadius: '16px',
                    boxShadow: '0 2px 8px rgba(0,0,0,0.12)',
                    padding: '2rem',
                    maxWidth: '900px',
                    margin: '0 auto',
                    opacity: formAnimate ? 1 : 0,
                    transform: formAnimate ? 'translateY(0)' : 'translateY(60px)',
                    transition: 'opacity 0.8s ease, transform 0.8s cubic-bezier(0.23, 1, 0.32, 1)'
                }}
            >
                <div>
                    <label>
                        From
                        <input
                            type="text"
                            name="from"
                            value={searchParams.from}
                            onChange={handleInputChange}
                            placeholder="From"
                            style={{ marginLeft: '0.5rem' }}
                            required
                        />
                    </label>
                </div>
                <div>
                    <label>
                        To
                        <input
                            type="text"
                            name="to"
                            value={searchParams.to}
                            onChange={handleInputChange}
                            placeholder="To"
                            style={{ marginLeft: '0.5rem' }}
                            required
                        />
                    </label>
                </div>
                <div>
                    <label>
                        Date of Journey
                        <input
                            type="date"
                            name="date"
                            value={searchParams.date}
                            onChange={handleInputChange}
                            style={{ marginLeft: '0.5rem' }}
                            required
                        />
                    </label>
                </div>
                <button type="submit" style={{ background: '#d32f2f', color: '#fff', border: 'none', borderRadius: '24px', padding: '0.75rem 2rem', fontSize: '1rem', cursor: 'pointer' }}>
                    Search buses
                </button>
            </form>
            <div
                style={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    justifyContent: 'center',
                    gap: '2rem',
                    marginTop: '2.5rem'
                }}
            >
                {[
                    "Luxury AC buses for a smooth journey. Enjoy panoramic views and comfortable seating throughout your trip.",
                    "Affordable travel with reliable schedules. Our buses connect all major cities and towns in Himachal Pradesh.",
                    "Book your seat online and travel hassle-free. Our staff ensures a safe and pleasant experience for all passengers.",
                    "Eco-friendly buses with modern amenities. Experience the best in class service and punctual departures.",
                    "Travel with family or friends in spacious buses. We offer group discounts and special packages for tourists.",
                    "Trusted by thousands, our buses run daily. Choose HimBusses for convenience, safety, and great customer support."
                ].map((desc, idx) => (
                    <div
                        key={idx}
                        style={{
                            width: '340px',
                            height: '220px',
                            borderRadius: '18px',
                            boxShadow: '0 2px 14px rgba(0,0,0,0.15)',
                            background: '#fff',
                            overflow: 'hidden',
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            justifyContent: 'flex-start',
                            padding: '0',
                            opacity: cardsAnimate ? 1 : 0,
                            transform: cardsAnimate ? 'translateY(0)' : 'translateY(60px)',
                            transition: `opacity 0.8s ${0.2 * idx}s, transform 0.8s ${0.2 * idx}s cubic-bezier(0.23, 1, 0.32, 1)`
                        }}
                    >
                        <img
                            src={`/images/bus${idx + 1}.jpg`}
                            alt={`Bus ${idx + 1}`}
                            style={{
                                width: '100%',
                                height: '130px',
                                objectFit: 'cover'
                            }}
                        />
                        <div style={{ padding: '1rem', fontSize: '1rem', color: '#222', textAlign: 'center' }}>
                            {desc}
                        </div>
                    </div>
                ))}
            </div>
            {/* About section starts here */}
            <div
                id="about-section"
                style={{ width: '100%', padding: '2rem', background: '#fff', borderRadius: '16px', boxShadow: '0 2px 8px rgba(0,0,0,0.08)', maxWidth: '900px', margin: '3rem auto 0 auto' }}
            >
                <h2>About HimBusses</h2>
                <p>
                  HimBusses is dedicated to providing safe, reliable, and comfortable bus transportation services across Himachal Pradesh and beyond. Our mission is to connect people and places with efficiency and care, making travel accessible and enjoyable for everyone. With a modern fleet of well-maintained buses, we ensure that every journey is smooth and hassle-free. Our buses are equipped with comfortable seating, air conditioning, and onboard amenities to enhance your travel experience.
                  <br /><br />
                  We pride ourselves on our punctuality and customer-centric approach. Our staff is trained to assist passengers at every step, from booking tickets online to reaching their destination safely. HimBusses offers a variety of routes covering major cities, towns, and tourist destinations, making it easy for travelers to explore the beauty of the region. We also provide special facilities for senior citizens and differently-abled passengers to ensure inclusivity.
                  <br /><br />
                  Our support team is available 24/7 to address any queries or concerns, and we continuously strive to improve our services based on passenger feedback. With a commitment to safety, cleanliness, and customer satisfaction, HimBusses is your trusted partner for all your travel needs. Experience the difference with HimBusses – where every journey matters.
                </p>
                <h3 style={{ marginTop: '2rem' }}>Customer Reviews</h3>
                <div style={{ marginTop: '1rem', display: 'flex', gap: '2rem', flexWrap: 'wrap', justifyContent: 'center' }}>
                  {[
                    {
                      stars: '★★★★★',
                      text: 'Excellent service! The bus was clean and comfortable, and the staff was very helpful. Highly recommended!',
                      name: 'Priya Sharma'
                    },
                    {
                      stars: '★★★★☆',
                      text: 'Very punctual and safe journey. Booking tickets online was easy and convenient.',
                      name: 'Rahul Verma'
                    },
                    {
                      stars: '★★★★★',
                      text: 'Great support team! They resolved my query quickly. Will travel again with HimBusses.',
                      name: 'Anjali Gupta'
                    }
                  ].map((review, idx) => (
                    <div
                      key={idx}
                      style={{
                        background: '#f9f6f2',
                        borderRadius: '12px',
                        boxShadow: '0 2px 8px rgba(0,0,0,0.08)',
                        padding: '1.5rem',
                        maxWidth: '300px',
                        minWidth: '220px',
                        flex: '1 1 220px',
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center'
                      }}
                    >
                      <span style={{ color: '#FFD700', fontSize: '1.2rem', marginBottom: '0.5rem' }}>{review.stars}</span>
                      <p style={{ margin: '0.5rem 0 0 0', textAlign: 'center', color: '#222' }}>
                        "{review.text}"
                        <br />
                        <span style={{ fontStyle: 'italic', color: '#555' }}>- {review.name}</span>
                      </p>
                    </div>
                  ))}
                </div>
            </div>
            {/* Support section starts here */}
            <div
                id="support-section"
                style={{ width: '100%', padding: '2rem', background: '#fff', borderRadius: '16px', boxShadow: '0 2px 8px rgba(0,0,0,0.08)', maxWidth: '900px', margin: '3rem auto 0 auto' }}
            >
                <h2 style={{ textAlign: 'center', color: '#111' }}>Support</h2>
                <ContactPage />
            </div>
        </div>
    );
};

export default HomePage;
