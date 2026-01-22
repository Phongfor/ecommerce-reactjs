import { useContext, useState } from 'react';
import styles from '../styles.module.scss'
import { sideBarContext } from '@/contexts/SideBarProvider';
import { StoreContext } from '@/contexts/StoreProvider';
import { useNavigate } from 'react-router-dom';

function Menu({content,href}) {
    const {menu,subMenu} =styles
    const [isShowSubMenu,setIsShowSubMenu] = useState(false)
    const {setIsOpen,setType} = useContext(sideBarContext)
    const {userInfor,handleLogOut} =useContext(StoreContext)
    const navigate = useNavigate()

    const handleClickShowLogin =()=>{
        if(content === 'Sign in' && !userInfor){
            setIsOpen(true)
            setType('login')
        }
        if(content === 'Our Shop'){
            navigate('/shop')
        }
        if(content === 'About Us'){
            navigate('/about-us')
        }
    }

    const handleRenderText = (content) =>{
        if(content === 'Sign in' && userInfor){
            return `Hello ${userInfor?.username}`
        }else{
            return content
        }
    }

    const handleHover = () =>{
        if(content === 'Sign in' && userInfor){
            setIsShowSubMenu(true)
        }
    }

    return ( <div className={menu} onMouseEnter={handleHover} onClick={handleClickShowLogin}>{handleRenderText(content)}
    {isShowSubMenu && <div className={subMenu} onClick={handleLogOut} onMouseLeave={()=>{setIsShowSubMenu(false)}}>LOG OUT</div>}
    </div>);
}

export default Menu;