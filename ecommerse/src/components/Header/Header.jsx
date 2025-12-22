import BoxIcon from './BoxIcon/BoxIcon';
import { dataBoxIcon, dataMenu } from './constants';
import Menu from './Menu/Menu';
import styles from './styles.module.scss';
import logo from '@icons/images/Logo-retina.png';
import reload from '@icons/svgs/reload-icon.svg';
import heart from '@icons/svgs/heart-icon.svg';
import cart from '@icons/svgs/cart-icon.svg';
import useScrollHandling from '@/hook/useScrollHandling';
import { useContext, useEffect, useState } from 'react';
import classNames from 'classnames';
import { sideBarContext } from '@/contexts/SideBarProvider';

function MyHeader() {
    const {
        containerBoxItem,
        containerMenu,
        containerHeader,
        containerBox,
        container,
        fixedHeader,
        topHeader
    } = styles;

    const { scrollPosition } = useScrollHandling();
    const [fixedPosition, setFixedPosition] = useState(false);

    const {isOpen, setIsOpen} = useContext(sideBarContext)

    useEffect(() => {
        setFixedPosition(scrollPosition > 80);
    }, [scrollPosition]);

    return (
        <div
            className={classNames(container, topHeader, {
                [fixedHeader]: fixedPosition
            })}
        >
            <div className={containerHeader}>
                <div className={containerBox}>
                    <div className={containerBoxItem}>
                        {dataBoxIcon.map((item) => {
                            return (
                                <BoxIcon type={item.type} href={item.href} />
                            );
                        })}
                    </div>
                    <div className={containerMenu}>
                        {dataMenu.slice(0, 3).map((item) => {
                            return (
                                <Menu content={item.content} href={item.href} />
                            );
                        })}
                    </div>
                </div>
                <div>
                    <img
                        src={logo}
                        alt='logo'
                        style={{
                            width: '153px',
                            height: '53px'
                        }}
                    />
                </div>
                <div className={containerBox}>
                    <div className={containerMenu}>
                        {dataMenu.slice(3, dataMenu.length).map((item) => {
                            return (
                                <Menu content={item.content} href={item.href} setIsOpen={setIsOpen}/>
                            );
                        })}
                    </div>

                    <div className={containerBoxItem}>
                        <img
                            width={26}
                            height={26}
                            src={reload}
                            alt='reload-icon'
                        />
                        <img
                            width={26}
                            height={26}
                            src={heart}
                            alt='heart-con'
                        />
                        <img
                            width={26}
                            height={26}
                            src={cart}
                            alt='cart-icon'
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default MyHeader;
