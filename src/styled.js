import styled from 'styled-components';

export const HeroDetail = styled.div`
  text-align: center;
  text-align: -webkit-center;
  width: 50%;
`

export const DiscoverMenu = styled.div`
  display: grid;
  grid-gap: 25px 35px;
  grid-template-columns: auto auto;
  padding: 50px;
`

export const DiscoverMenuW50 = styled.div`
  padding: 2rem 1rem;
  border: 1px solid;
  box-shadow: rgb(210 210 249) 4px 4px 0px 0px;
`

export const W50 = styled.div`
  width: 50%;
`

export const FontPrimary = styled.h1`
  font-size: 2.5rem;
  margin-top: 0;
`

export const FontSecondary = styled.p`
  font-size: 1.25rem;
  color: rgb(102, 102, 102);
  text-align: center;
  margin-top: 0;
  width: 70%;
`

export const Button = styled.a`
  width: 25%;
  display: flex;
  align-items: center;
  place-content: center;
  padding: .75rem;
  color: black;
  text-decoration: none;
  border: solid 1px;
  border-radius: 5px;

  :hover {
    color: violed;
    border: 1px solid rgb(28, 28, 225);
    box-shadow: rgb(210 210 249) 4px 4px 0px 0px;
  }
`;

export const Icon = styled.svg`
  flex: none;
  transition: fill 0.25s;
  width: 48px;
  height: 48px;

  ${Button}:hover & {
    fill: rebeccapurple;
  }
`;

export const Label = styled.span`
  display: flex;
  align-items: center;
  line-height: 1.2;
`;

export const img = styled.img`
  width: 100%;
  height: 100%;
`
export const Container = styled.div`
  max-width: 1504px;
  margin: auto;
`
export const Paragraph = styled.div`
  padding: 1vh 0;
`
export const Nav = styled.div`
  text-align: center;
  border-bottom: 1px solid #ebebeb 
`
export const NavStyle = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: calc(10px + 2vmin);
  color: black;
  background-color: #ffffff;
  padding: .8rem 2rem;
`
export const Wrapper = styled.section`
  padding-top: 50px;
  padding-bottom: 50px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`
export const DflexCenter = styled.div`
  display: flex;
  align-items: center;
`

export const Ul = styled.ul`
  display: flex;
  flex-direction:row;
`

export const Li = styled.li`
  width: 7rem;
  font-size: 15px;
  padding-right: 10px;
  list-style: none;
`

export const SearchBox = styled.input`
  font-size: 16px;
  padding: .8rem;
  border: solid 1px #6f6f6f;
  border-radius: 6px;
`