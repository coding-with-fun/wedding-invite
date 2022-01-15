import Accommodation from "../assets/events/accommodation.png";
import Image from "next/image";
import styles from "../styles/Events.module.css";

const Events = () => {
    return (
        <div className={styles.events_container}>
            <div className={styles.events_heading}>Event Attractions</div>

            <div className={styles.events_subtitle}>
                Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a.
                Praesent sapien massa, convallis a pellentesque nec, egestas non
                nisi.
            </div>

            <div className={styles.events_details}>
                <div className={styles.event_details}>
                    <div className={styles.event_detail_icon}>
                        <Image src={Accommodation} alt="Accommodation" />
                    </div>
                    <div className={styles.event_detail_title}>
                        Accommodation
                    </div>
                    <div className={styles.event_detail_description}>
                        Mauris blandit, eget tincidunt nibh pulvinar elit nulla
                        porttitor.
                    </div>
                </div>

                <div className={styles.event_details}>
                    <div className={styles.event_detail_icon}>
                        <Image src={Accommodation} alt="Accommodation" />
                    </div>
                    <div className={styles.event_detail_title}>
                        Accommodation
                    </div>
                    <div className={styles.event_detail_description}>
                        Mauris blandit, eget tincidunt nibh pulvinar elit nulla
                        porttitor.
                    </div>
                </div>

                <div className={styles.event_details}>
                    <div className={styles.event_detail_icon}>
                        <Image src={Accommodation} alt="Accommodation" />
                    </div>
                    <div className={styles.event_detail_title}>
                        Accommodation
                    </div>
                    <div className={styles.event_detail_description}>
                        Mauris blandit, eget tincidunt nibh pulvinar elit nulla
                        porttitor.
                    </div>
                </div>

                <div className={styles.event_details}>
                    <div className={styles.event_detail_icon}>
                        <Image src={Accommodation} alt="Accommodation" />
                    </div>
                    <div className={styles.event_detail_title}>
                        Accommodation
                    </div>
                    <div className={styles.event_detail_description}>
                        Mauris blandit, eget tincidunt nibh pulvinar elit nulla
                        porttitor.
                    </div>
                </div>

                <div className={styles.event_details}>
                    <div className={styles.event_detail_icon}>
                        <Image src={Accommodation} alt="Accommodation" />
                    </div>
                    <div className={styles.event_detail_title}>
                        Accommodation
                    </div>
                    <div className={styles.event_detail_description}>
                        Mauris blandit, eget tincidunt nibh pulvinar elit nulla
                        porttitor.
                    </div>
                </div>

                <div className={styles.event_details}>
                    <div className={styles.event_detail_icon}>
                        <Image src={Accommodation} alt="Accommodation" />
                    </div>
                    <div className={styles.event_detail_title}>
                        Accommodation
                    </div>
                    <div className={styles.event_detail_description}>
                        Mauris blandit, eget tincidunt nibh pulvinar elit nulla
                        porttitor.
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Events;
