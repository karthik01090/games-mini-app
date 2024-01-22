import styled from 'styled-components'

export const MainContainer = styled.div`
  min-height: 100vh;
  background-color: #223a5f;
`

export const Container = styled.div`
  height: 100vh;
`

export const RulesPageBgContainer = styled.div`
  background-color: #223a5f;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 20px;
  padding-bottom: 20px;
`
export const RulesPageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 90%;
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
export const ImageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const GameHeading = styled.h1`
  font-family: 'Bree Serif';
  font-weight: 400;
  font-size: 24px;
  color: #ffffff;
  margin-bottom: 20px;
`

export const RockPaperScissorImage = styled.img`
  width: 227px;
  height: 202px;
  @media screen and (min-width: 768px) {
    width: 266px;
    height: 237px;
  }
`

export const RulesListContainer = styled.ul`
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-wrap: wrap;
`

export const RuleItem = styled.li`
  margin-bottom: 16px;
  line-height: 24px;
  font-family: 'Bree Serif';
  color: #ffffff;
  font-size: 16px;
  font-weight: 400;
  @media screen and (min-width: 768px) {
    align-self: flex-start;
    width: 40%;
    margin-right: 20px;
    margin-bottom: 24px;
    font-size: 20px;
    line-height: 32px;
  }
`

export const StartPlayingBtn = styled.button`
  background-color: #ffffff;
  color: #223a5f;
  font-family: 'Bree Serif';
  padding: 8px;
  border: none;
  outline: none;
  border-radius: 12px;
  @media screen and (min-width: 768px) {
    align-self: flex-start;
  }
`
export const RulesHeading = styled.h1`
  font-family: 'Bree Serif';
  font-size: 24px;
  font-weight: 400;
  color: #ffffff;
  @media screen and (min-width: 768px) {
    align-self: flex-start;
  }
`

// export const RulesContainer = styled.div`

// `
