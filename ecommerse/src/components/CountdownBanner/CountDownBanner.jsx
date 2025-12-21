import CoundownTimer from '@components/CoundownTimer/CoundownTimer';
import styles from './styles.module.scss';
import Button from '@components/Button/Button';

function CountdownBanner() {
    const targetDate = '2026-12-31T00:00:00';
    const { container,containerTimer,title,boxBtn } = styles;
    return <div className={container}>
        <div className={containerTimer}>
            <CoundownTimer targetDate={targetDate}/>
        </div>
        <p className={title}>The classics make a comeback</p>
        <div className={boxBtn}>
            <Button content={'Buy now'} />
        </div>
    </div>;
}

export default CountdownBanner;
