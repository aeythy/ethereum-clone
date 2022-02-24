import { Link } from "react-router-dom";
import { Nav, Container, NavStyle, DflexCenter, Ul, Li, SearchBox, MobileMenu } from './styled';

import logo from './eth-home-icon.webp';

const SearchIcon = (
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16">
    <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
  </svg>
)

export default function Navigation() {
  return (
    <Container style={{ position: "sticky", top: "0" }}>
      <Nav>
        <NavStyle>
          <DflexCenter>
            <Link to="/">
              <img src={logo} className="App-logo" alt="logo" />
            </Link>
            <Ul style={{ margin: "0 auto" }}>
              <Li>
                <Link to="/useEth">Use Ethereum</Link>
              </Li>
              <Li>
                <Link to="/learn">Learn</Link>
              </Li>
              <Li>
                <Link to="/developers">Developers</Link>
              </Li>
              <Li>
                <Link to="/enterprise">Enterprise</Link>
              </Li>
              <Li>
                <Link to="/community">Community</Link>
              </Li>
            </Ul>
          </DflexCenter>
          <SearchBox icon={SearchIcon} placeholder='Search' />
          <MobileMenu>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-list" viewBox="0 0 16 16">
              <path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z" />
            </svg>
          </MobileMenu>
        </NavStyle>
      </Nav>
    </Container>
  )
}