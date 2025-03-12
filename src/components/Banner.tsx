import Image from 'next/image';
import styles from './banner.module.css';

export default function Banner() {
    return (
        <div className={styles.banner}>
            <Image 
            src="/img/banner.jpg" 
            alt="Banner"
            fill={true}
            style={{objectFit:"cover"}}/>
            <div className={styles.bannerText}>
                <h1>where every event finds its venue</h1>
                <h3 style={{marginTop:"8px"}}>Experience the best catering experience with a luxurious atmosphere and premium service.</h3>
            </div>
        </div>
    )
}