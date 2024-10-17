import React from 'react';
import { Link } from 'react-router-dom';
import styles from './NavBarPages.module.css';
import useImages from '../../../hooks/useImages';

const NavbarP: React.FC = () => {
    const { images, loading, error } = useImages();

    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error loading images: {error.message}</div>;
    if (!images || !images.logoImages || images.logoImages.length === 0) return null;

    return (
        <header className={styles.navbar}>
            <div className={styles.logoContainer}>
                <Link to="/"><img src={images.logoImages[0]} alt="DecorDen Logo" className={styles.logo} /></Link>
            </div>
            <nav className={styles.nav}>
                <a href="#seating">Seating<i className="fas fa-chevron-down"></i></a>
                <a href="#living room">Living Room<i className="fas fa-chevron-down"></i></a>
                <a href="#outdoor">Outdoor<i className="fas fa-chevron-down"></i></a>
                <a href="#bedroom">Bedroom<i className="fas fa-chevron-down"></i></a>
                <a href="#storage">Storage<i className="fas fa-chevron-down"></i></a>
            </nav>
        </header>
    );
};

export default NavbarP;