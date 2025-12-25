import styles from './styles.module.scss';
import classNames from 'classnames';

function Button({ content, isPrimary = true, ...props }) {
    const { btn, primaryBtn, secondaryBtn } = styles;

    return (
        <button
            {...props}
            className={classNames(
                btn,
                {
                    [primaryBtn]: isPrimary,
                    [secondaryBtn]: !isPrimary
                },
                props.className 
            )}
        >
            {content}
        </button>
    );
}

export default Button;