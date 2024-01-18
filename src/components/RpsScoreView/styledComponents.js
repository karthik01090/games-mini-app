import styled from 'styled-components'

export const ScoreContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 80%;
  border: solid 2px #ffffff;
  background-color: transparent;
`

export const ScoreNameContainer = styled.div`
  display: flex;
  flex-direction: column;
`

export const ScoreName = styled.h1`
  color: white;
  font-size: 20px;
`

export const ScoreBoard = styled(ScoreNameContainer)`
  background-color: white;
`

export const ScoreHeading = styled.p`
  color: white;
`

export const ScoreResult = styled.p`
  color: white;
`
