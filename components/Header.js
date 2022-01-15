import styles from "../styles/Header.module.css";

const Header = () => {
    return (
        <div className={styles.header_container}>
            <div className={styles.header__banner_background_image_container}>
                <div className={styles.header__banner_background_image} />
                <div className={styles.header_banner_background_color} />
            </div>

            <div className={styles.header_banner_content}>
                <div className={styles.header_banner_name}>Mark & Sally</div>
                <div className={styles.header_banner_subtitle}>
                    Save the date
                </div>
                <div className={styles.header_banner_date}>
                    August 28th 2023
                </div>
            </div>
        </div>
    );
};

export default Header;
