import GroomPhoto from "../assets/groom.jpeg";
import BridePhoto from "../assets/bride.jpeg";
import Image from "next/image";
import styles from "../styles/Story.module.css";

const Story = () => {
    return (
        <div className={styles.story_container}>
            <div className={styles.story_heading}>Our Story</div>

            <div className={styles.groom_container}>
                <div className={styles.groom_photo}>
                    <Image src={GroomPhoto} alt="Groom" priority unoptimized />
                </div>

                <div className={styles.groom_details_container}>
                    <div className={styles.groom_name}>Mark Walker</div>

                    <div className={styles.groom_details}>
                        Mauris blandit aliquet elit, eget tincidunt nibh
                        pulvinar a. Donec sollicitudin molestie malesuada.
                        Curabitur arcu erat, accumsan id imperdiet et, porttitor
                        at sem. Donec sollicitudin molestie malesuada. Cras
                        ultricies ligula sed magna dictum porta. Quisque velit
                        nisi, pretium ut lacinia in, elementum id enim. Donec
                        rutrum congue leo eget malesuada. Cras ultricies ligula
                        sed magna dictum porta. Cras ultricies ligula sed magna
                        dictum porta.
                    </div>
                </div>
            </div>

            <div className={styles.bride_container}>
                <div className={styles.bride_photo}>
                    <Image src={BridePhoto} alt="Bride" priority unoptimized />
                </div>

                <div className={styles.bride_details_container}>
                    <div className={styles.bride_name}>Sally Pearson</div>

                    <div className={styles.bride_details}>
                        Mauris blandit aliquet elit, eget tincidunt nibh
                        pulvinar a. Donec sollicitudin molestie malesuada.
                        Curabitur arcu erat, accumsan id imperdiet et, porttitor
                        at sem. Donec sollicitudin molestie malesuada. Cras
                        ultricies ligula sed magna dictum porta. Quisque velit
                        nisi, pretium ut lacinia in, elementum id enim. Donec
                        rutrum congue leo eget malesuada. Cras ultricies ligula
                        sed magna dictum porta. Cras ultricies ligula sed magna
                        dictum porta.
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Story;
