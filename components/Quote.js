import styles from "../styles/Quote.module.css";

const Quote = () => {
    return (
        <div className={styles.quote_container}>
            <div className={styles.quote__banner_background_image_container}>
                <div className={styles.quote__banner_background_image} />
                <div className={styles.quote_banner_background_color} />
            </div>

            <div className={styles.quote_banner_content}>
                <div className={styles.quote_banner_quote}>
                    &quot;Better to have loved and lost, than to have never
                    loved&quot;
                </div>
                <div className={styles.quote_banner_author}>
                    Robert Patterson
                </div>
            </div>
        </div>
    );
};

export default Quote;
