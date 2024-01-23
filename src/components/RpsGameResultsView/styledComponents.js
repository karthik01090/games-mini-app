import styled from 'styled-components'

export const RpsHeading = styled.h1`
  font-weight: 400;
  font-size: 48px;
  color: #fff;
  font-family: Bree Serif;
  @media screen and (max-width: 767px) {
    font-size: 24px;
  }
`
export const RulesButton = styled.button`
  background-color: transparent;
  padding: 10px;
  border-radius: 12px;
  border: solid 2px #ffffff;
  outline: none;
  color: #fff;
  font-family: Bree Serif;
`
export const ButtonsContainer = styled.div`
  width: 90%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`
export const RpsGameViewContainer = styled.div`
  padding-top: 35px;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  min-height: 100vh;
`

export const BackButton = styled.button`
  display: flex;
  align-items: center;
  align-self: flex-start;
  color: #ffffff;
  font-family: 'Bree Serif';
  font-size: 16px;
  font-weight: 400;
  margin-bottom: 10px;
  margin-left: 10px;
  background: transparent;
  border: none;
  outline: none;
`
export const GameViewContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 400px;
  flex-wrap: wrap;
  margin-top: 60px;
  @media screen and (max-width: 576px) {
    width: 250px;
    height: 250px;
    margin-left: 15px;
  }
`

export const GameButton = styled.button`
  width: 150px;
  height: 150px;
  background-color: transparent;
  border-style: none;
  outline: none;
  @media screen and (max-width: 576px) {
    width: 100px;
    height: 100px;
    margin-top: 0px;
    margin-right: 20px;
  }
`

export const GameImage = styled.img`
  width: 150px;
  height: 150px;
  @media screen and (max-width: 576px) {
    width: 100px;
    height: 100px;
  }
`

export const ResultImageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-right: 40px;
  @media screen and (max-width: 576px) {
    width: 30%;
  }
`

export const ResultName = styled.p`
  color: white;
  font-size: 20px;
  @media screen and (max-width: 576px) {
    font-size: 14px;
  }
`

export const ResultText = styled.p`
  color: white;
  font-size: 25px;
  @media screen and (max-width: 576px) {
    font-size: 16px;
  }
`

export const ResultButton = styled.button`
  width: 100px;
  height: 28px;
  padding: 10px;
  color: #223a5f;
  font-size: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 4px;
  border-style: none;
  outline: none;
`
