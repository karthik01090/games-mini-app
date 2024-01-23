import styled from 'styled-components'
import {BiArrowBack} from 'react-icons/bi'

export const RulesPageBgContainer = styled.div`
  background-color: #14332e;
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
  background: transparent;
  border: none;
  outline: none;
`

export const ArrowBack = styled(BiArrowBack)`
  margin-right: 10px;
`

export const ImageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const CardFlipMemoryImage = styled.img`
  width: 227px;
  height: 202px;

  @media screen and (min-width: 768px) {
    width: 807px;
    height: 462px;
  }
`

export const RulesContainer = styled.div`
  margin-top: 16px;

  @media screen and (min-width: 768px) {
    align-self: flex-start;
    width: 100%;
  }
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
    width: 90%;
    margin-right: 20px;
    margin-bottom: 24px;
    font-size: 20px;
    line-height: 32px;
  }
`

export const StartPlayingButton = styled.button`
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

export const RulesListContainer = styled.ul`
  margin-top: 16px;
  @media screen and (min-width: 768px) {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
  }
`
