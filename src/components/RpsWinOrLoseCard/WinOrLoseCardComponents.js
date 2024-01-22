import styled from 'styled-components'

export const RpsWinOrLoseCardBgContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding-bottom: 20px;
`
export const RpsWinOrLoseCardContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 90%;
  justify-content: center;
  @media screen and (min-width: 768px) {
    width: 70%;
  }
`

export const RpsScoreCardContainer = styled.div`
  border: solid 1px;
  padding: 20px;
  border-radius: 12px;
  width: 100%;
`

export const RpsWinOrLoseListContainer = styled.ul`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  padding-left: 0px;
`
export const ListItem = styled.li`
  list-style-type: none;
`
export const ScoreCardContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin-top: 40px;
`
export const RpsScoreCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  border: solid 2px;
  width: 104px;
  height: 94px;
  background-color: #ffffff;
  border-radius: 12px;
`
export const ScoreText = styled.p`
  text-align: center;
  color: #223a5f;
  font-size: 16px;
  padding-left: 13px;
  margin-bottom: 3px;
`

export const Score = styled.p`
  margin-top: 0px;
  color: #223a5f;
  font-size: 32px;
  text-align: center;
`
export const RpsResultsContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100%;
`
export const ResultContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`
export const ResultImage = styled.img`
  height: 80px;
  width: 80px;
`

export const ResultTextContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 100px;
`
export const RpsPlayAgainBtn = styled.button`
  border: none;
  background-color: #ffffff;
  color: #223a5f;
  outline: none;
  padding: 10px;
  border-radius: 12px;
  margin-top: 20px;
`
