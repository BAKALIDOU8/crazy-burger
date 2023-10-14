import React from 'react'
import styled from 'styled-components';
import Profile from './Profile';
import { useState } from 'react'
import { theme } from '../../../../theme';
import ToggleButton from '../../../reusable-ui/ToggleButton';
import {ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import {FaUserSecret} from 'react-icons/fa'


export default function NavBarRightSide({ username }) {
    const [isModeAdmin, setisModeAdmin] = useState(false)

    const displayToastNotification = () => {
        if (!isModeAdmin){
            toast.info("Mode admin activé", {
            icon: <FaUserSecret size={30} />,
            theme: "dark",
            position: "bottom-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
        })
        }
        setisModeAdmin(!isModeAdmin)
    }

    
    return (
        <NavBarRightSideStyled>
            <ToggleButton 
                labelIfUnchecked='ACTIVER LE MODE ADMIN' 
                labelIfChecked='DESACTIVER LE MODE ADMIN'
                onToggle={displayToastNotification} 
            />
            <Profile username={username} />
            <ToastContainer className="toaster" bodyClassName="body-toast" />
        </NavBarRightSideStyled>
    )
}

const NavBarRightSideStyled = styled.div`
    display: flex;
    align-items: center;
    padding-right: 50px;

    .toaster {
    max-width: 300px;
  }

    .Toastify__toast.Toastify__toast-theme--dark.Toastify__toast--info {
    background: ${theme.colors.background_dark};
  }

    .body-toast {
    .Toastify__toast-icon.Toastify--animate-icon.Toastify__zoom-enter {
      margin-right: 20px;
      margin-left: 5px;
    }
    div {
      line-height: 1.3em;
    }
  }
     
`;