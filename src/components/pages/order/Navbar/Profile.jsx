import { useState } from "react"
import { BsPersonCircle } from "react-icons/bs"
import { Link } from "react-router-dom"
import styled from "styled-components"
import { theme } from "../../../../theme"

export default function Profile({ username }) {
  return (
    <ProfileStyled>
      <div className="info">
        <p>
          Hey, <b>{username}</b>
        </p>
        <Link to="/">
          <div className="description">
            <small>Se déconnecter</small>
          </div>
        </Link>
      </div>
      <div className="picture">
        <BsPersonCircle />
      </div>
    </ProfileStyled>
  )
}

const ProfileStyled = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-family: "Open Sans", sans-serif;
  padding-left: 50px;
  /* min-width: 100px; */

  .info {
    text-align: right;
    margin-right: 10px;
    p {
      margin: 0;
      color: ${theme.colors.greyBlue};
      b {
        color: ${theme.colors.primary};
      }
    }
    a {
      text-decoration: none;
      .description {
        &:hover {
          text-decoration: underline;
          color: ${theme.colors.greyDark};
        }
        small {
          font-size: 10px;
          color: ${theme.colors.greyBlue};
          font-weight: 500;
          text-decoration: none;
          position: relative;
          bottom: 2px;
        }
      }
    }
  }

  .picture {
    /* border: 1px solid red; */
    height: auto;
    display: flex;
    height: 100%;
    font-size: 30px;
    color: ${theme.colors.greyBlue};
  }
`
