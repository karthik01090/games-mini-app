import styled from 'styled-components'

export const HomePageBgContainer = styled.div`
  background-image: linear-gradient(to right, #834d9b, #d04ed6);
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`

export const GamesContainer = styled.div`
  margin-top: 48px;
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const GamesHeading = styled.h1`
  font-family: 'Roboto';
  font-weight: 700;
  font-size: 32px;
  text-align: center;
  color: #f8fafc;
`

export const GamesListContainer = styled.ul`
  margin-top: 32px;

  @media screen and (max-width: 768px) {
    padding-left: 0;
  }

  @media screen and (min-width: 768px) {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
  }
`

export const GameItem = styled.li`
  list-style-type: none;
  width: 312px;
  height: 176px;
  background-color: #ffffff;
  margin-bottom: 16px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-radius: 12px;

  @media screen and (min-width: 778px) {
    width: 554px;
    height: 280px;
    margin-right: 24px;
  }
`

export const EmojiImage = styled.img`
  width: 128px;
  height: 140px;

  @media screen and (min-width: 768px) {
    width: 224px;
    height: 232px;
  }
`

export const MemoryMatrixImage = styled.img`
  width: 145px;
  height: 108px;
  @media screen and (min-width: 768px) {
    width: 236px;
    height: 176px;
  }
`

export const RockPaperScissorImage = styled.img`
  width: 121px;
  height: 98px;
  @media screen and (min-width: 768px) {
    width: 197px;
    height: 176px;
  }
`

export const CardFlipGameImage = styled.img`
  width: 264;
  height: 143px;
  @media screen and (min-width: 768px) {
    width: 434px;
    height: 232px;
  }
`

export const LinkItem = styled.link`
  text-decoration: none;
`

export const MemoryMatrixHeading = styled.h1`
  font-family: 'Bree Serif';
  font-weight: 400;
  font-size: 16px;
  color: #334155;
  margin-bottom: 12px;
`
