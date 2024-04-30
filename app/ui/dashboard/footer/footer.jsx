import styles from './footer.module.css';

const Footer = () => {
    return (
        <div className={styles.container}>
            <div className={styles.logo}>Firas dev</div>
            <div className={styles.text}>© all rights reserved</div>
        </div>
    );
};

export default Footer;