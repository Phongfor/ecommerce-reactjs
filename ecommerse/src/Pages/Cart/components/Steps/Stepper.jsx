import classNames from 'classnames';
import styles from '../../styles.module.scss';

function Stepper({ number, content, isDisable }) {
    const { stepper, numberStep, textStep, isDisableNumber, isDisableText } =
        styles;
    return (
        <div className={stepper}>
            <div
                className={classNames(numberStep, {
                    [isDisableNumber]: isDisable
                })}
            >
                {number}
            </div>
            <div
                className={classNames(textStep, {
                    [isDisableNumber]: isDisable
                })}
            >
                {content}
            </div>
        </div>
    );
}

export default Stepper;
