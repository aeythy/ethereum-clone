import styled from 'styled-components';
import logo from './eth-home-icon.webp';

const Nav = styled.div`
  text-align: center;
  border-bottom: 1px solid #ebebeb 
`
const NavStyle = styled.div`
  background-color: #ffffff;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: calc(10px + 2vmin);
  color: black;
  padding: 1.5vh 3vh;
`
const Wrapper = styled.section`
  padding-top: 100px;
  padding-bottom: 100px;
  display: flex;
  justify-content: center;
`
const DflexCenter = styled.div`
  display: flex;
  align-items: center;
`

const Ul = styled.ul`
  display: flex;
  flex-direction:row;
`

const Li = styled.li`
  width: 7rem;
  font-size: 2.35vh;
  padding-right: 10px;
  list-style: none;
`

const SearchBox = styled.input`
  font-size: 16px;
  padding: .8rem;
  border: solid 1px #6f6f6f;
  border-radius: 6px;
`
const Container = styled.div`
  max-width: 1140px;
  margin: auto;
`

export default function Navigation() {
  return (
    <>
      <Nav>
        <Container>
          <NavStyle>
            <DflexCenter>
              <img src={logo} className="App-logo" alt="logo" />
              <Ul>
                <Li>Use Ethereum</Li>
                <Li>Learn</Li>
                <Li>Developers</Li>
                <Li>Enterprise</Li>
                <Li>Community</Li>
              </Ul>
            </DflexCenter>
            <SearchBox placeholder='Search'>

            </SearchBox>
          </NavStyle>
        </Container>
      </Nav>
      <Wrapper>
        hello world
      </Wrapper>
    </>
  )
}