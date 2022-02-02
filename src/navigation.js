import { Nav, Container, NavStyle, DflexCenter, Ul, Li, SearchBox } from './styled'
import logo from './eth-home-icon.webp';

export default function Navigation() {
  return (
    <Container style={{ position: "sticky", top: "0" }}>
      <Nav>
        <NavStyle>
          <DflexCenter>
            <img src={logo} className="App-logo" alt="logo" />
            <Ul style={{ margin: "0 auto" }}>
              <Li>Use Ethereum</Li>
              <Li>Learn</Li>
              <Li>Developers</Li>
              <Li>Enterprise</Li>
              <Li>Community</Li>
            </Ul>
          </DflexCenter>
          <SearchBox placeholder='Search' />
        </NavStyle>
      </Nav>
    </Container>
  )
}