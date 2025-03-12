import styles from './card.module.css';
import Image from 'next/image';

export default function Card() {
    return (
        <div className={styles.card}>
            <div className={styles.cardimg}>
                <Image src="/img/card1.jpg"
                alt="Luminous Arena"
                fill={true}
                style={{objectFit: 'cover'}}
                />
            </div>
            <div className={styles.cardtext}>
                <h1>Luminous Arena</h1>
                <h4>
                A massive concert venue featuring a 360-degree LED screen, delivering an immersive and spectacular experience.
                </h4>
            </div>
        </div>
    )
}