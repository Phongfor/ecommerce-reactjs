import Button from "@components/Button/Button";
import styles from "../styles.module.scss"
import CoundownTimer from "@components/CoundownTimer/CoundownTimer";

function Banner() {
    const targetDate = '2026-12-31T00:00:00';
    const {containerBanner,contentBox,title,boxBtn,countDownBox} = styles


    return (
        <>
            <div className={containerBanner}>
                <div className={contentBox}>
                    <div className={countDownBox}>
                        <CoundownTimer targetDate={targetDate}/>
                    </div>
                    <div className={title}>The Classic Make a Comback</div>
                    <div className={boxBtn}><Button content={'Buy now'}/></div>
                </div>
            </div>
        </>
    );
}

export default Banner;
