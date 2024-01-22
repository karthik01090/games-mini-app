import styled from 'styled-components'

export const EmojisListContainer = styled.ul`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  width: 80%;
  margin: auto;
  padding: 0px;
  max-width: 1000px;
`
export const RulesPage = styled.div`
  background-image: linear-gradient(to bottom, #a09aed, #e0badb);
  min-height: 100vh;
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const BackButton = styled.button`
  align-self: flex-start;
  font-family: 'Roboto';
  font-weight: 500;
  font-size: 16px;
  color: #334155;
  border: none;
  outline: none;
  background: transparent;
`

export const RulesBgContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #ffffff33;
  border-radius: 12px;
  width: 90%;
  padding: 10px;
  @media screen and (min-width: 768px) {
    display: flex;
    flex-direction: row;
  }
`

export const ImageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  @media screen and (min-width: 768px) {
    width: 40%;
    margin-right: 40px;
  }
`

export const EmojiGameImage = styled.img`
  width: 255px;
  height: 213px;
  @media screen and (min-width: 768px) {
    width: 422px;
    height: 386px;
  }
`

export const EmojiGameHeading = styled.h1`
  font-family: 'Roboto';
  font-weight: 700;
  font-size: 32px;
  color: #334155;
  margin-top: 24px;
`

export const RulesContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 24px;
  @media screen and (min-width: 768px) {
    width: 60%;
  }
`

export const RulesHeading = styled.h1`
  font-family: 'Roboto';
  font-weight: 700;
  font-size: 24px;
  color: #334155;
`

export const RulesList = styled.ul`
  margin-top: 16px;
`

export const RuleItem = styled.li`
  margin-bottom: 12px;
  font-family: 'Roboto';
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
  color: #475569;
  @media screen and (min-width: 768px) {
    line-height: 32px;
    margin-bottom: 24px;
    font-size: 20px;
  }
`

export const StartPlayingBtn = styled.button`
  background-color: #334155;
  color: #fff;
  border-radius: 8px;
  padding: 8px;
  border: none;
  outline: none;
  margin-top: 12px;
`

export const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-image: linear-gradient(
    to bottom right,
    #9796f0 0.5%,
    #fbc7d4 150%
  );
  min-height: 100vh;
`

export const EmojiGameBody = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  flex: 1;
`
