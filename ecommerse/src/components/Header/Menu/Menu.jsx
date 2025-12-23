import { useContext } from 'react';
import styles from '../styles.module.scss'
import { sideBarContext } from '@/contexts/SideBarProvider';

function Menu({content,href}) {
    const {menu} =styles
    const {setIsOpen,setType} = useContext(sideBarContext)

    const handleClickShowLogin =()=>{
        if(content === 'sign in'){
            setIsOpen(true)
            setType('login')
        }
    }
    return ( <div className={menu} onClick={handleClickShowLogin}>{content}</div>);
}

export default Menu;