import styles from '../styles.module.scss';
import fbIcon from '@icons/svgs/fb-icon.svg';
import instaIcon from '@icons/svgs/insta-icon.svg';
import ytbIcon from '@icons/svgs/ytb-icon.svg';


function BoxIcon({ type, href }) {
    const { boxIcon } = styles

    const handleIconRender = (type) => {
        switch (type) {
            case 'fb':               
                return fbIcon
            case 'ins':               
                return instaIcon
            case 'ytb':               
                return ytbIcon
        
        }
    }

    return <div className={boxIcon}>
        <img src={handleIconRender(type)} alt={type} />
    </div>;
}

export default BoxIcon;
