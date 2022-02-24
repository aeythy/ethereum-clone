import styled from 'styled-components';

const size = {
  mobileS: '0',
  mobileM: '375px',
  mobileL: '425px',
  tablet: '768px',
  laptop: '1024px',
  desktop: '1380px'
}

export const device = {
  mobileS: `(min-width: ${size.mobileS})`,
  mobileM: `(min-width: ${size.mobileM})`,
  mobileL: `(min-width: ${size.mobileL})`,
  tablet: `(min-width: ${size.tablet})`,
  laptop: `(min-width: ${size.laptop})`,
  desktop: `(min-width: ${size.desktop})`,
};

export const Container = styled.div`
  max-width: 1500px;
  margin: auto;
  transition: all.2s;

  @media ${device.mobileS} {
    max-width: 320px;
  }

  @media ${device.mobileM} {
    max-width: 375px;
  }

  @media ${device.mobileL} {
    max-width: 768px;
  }

  @media ${device.tablet} {
    max-width: 1024px;
  }

  @media ${device.laptop} { 
    max-width: 1380px;
  }

  @media ${device.desktop} {
    max-width: 1500px;
  }
`

export const FontHeroColor = styled.p`
  font-size: 1.25rem;
  font-weight: 400;
  color: #b185ff;
  margin: 0;
`

export const Link = styled.a`
  color: #282c34;
  text-decoration: none;
  :hover {
    color: rgb(28, 28, 225);
  }
`

export const HeroDetail = styled.div`
  text-align: center;
  text-align: -webkit-center;

  @media ${device.mobileS},
  @media ${device.mobileM}, 
  @media ${device.mobileL} {
    width: 100%;

  @media ${device.laptop},
  @media ${device.desktop} {
    width: 50%;
  }
`

export const DiscoverMenu = styled.div`
  display: grid;
  grid-gap: 25px 35px;
  padding: 50px;

  @media ${device.mobileS},
  @media ${device.mobileM}, 
  @media ${device.mobileL} {
    grid-template-columns: 1fr;

  @media ${device.laptop},
  @media ${device.desktop} {
    grid-template-columns: 1fr 1fr;
  }
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
  transition: all.2s;

  :hover {
    color: rgb(28, 28, 225);
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
  padding-left: 25px;

  @media ${device.mobileS},
  @media ${device.mobileM},
  @media ${device.mobileL},
  @media ${device.tablet} {
    display: none;
  }


  @media ${device.laptop},
  @media ${device.desktop} {
    display: flex;
  }
`

export const Li = styled.li`
  width: 6rem;
  font-size: 15px;
  padding-right: 10px;
  list-style: none;
`

export const SearchBox = styled.input`
  font-size: 15px;
  padding: .888rem 1.5rem;
  border: solid 1px #6f6f6f;
  border-radius: 6px;

  @media ${device.mobileS},
  @media ${device.mobileM},
  @media ${device.mobileL},
  @media ${device.tablet} {
    display: none;
  }

  @media ${device.laptop} ,
  @media ${device.desktop} {
    display: block;
  }
`

export const MobileMenu = styled.button`
  border: none;
  background: none;
  transform: scale(1.7);

  @media ${device.mobileS},
  @media ${device.mobileM}, 
  @media ${device.mobileL},
  @media ${device.tablet} {
    display: flex;
  }

  @media ${device.laptop},
  @media ${device.desktop} {
    display: none;
  }
`