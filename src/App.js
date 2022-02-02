import {
  Container,
  Wrapper,
  Button,
  Label,
  FontPrimary,
  FontSecondary,
  W50,
  DiscoverMenu,
  DiscoverMenuW50,
  HeroDetail
} from './styled'

import './App.css';
import Hero from './hero.webp'
import Hackatron from './hackathon_transparent.webp'

function App() {
  return (
    <Container>
      <img src={Hero} alt="hero" style={{ width: "100%", height: "27.75rem", objectFit: "cover" }} />
      <Wrapper>
        <HeroDetail>
          <FontPrimary>Welcome to Ethereum</FontPrimary>
          <FontSecondary>
            Ethereum is the community-run technology powering the cryptocurrency ether (ETH) and thousands of decentralized applications.
          </FontSecondary>
          <Button href="#">
            <Label>Explore Ethereum</Label>
          </Button>
        </HeroDetail>
      </Wrapper>
      <Wrapper style={{ backgroundColor: "rgb(251 251 251)", flexDirection: "row" }}>
        <W50 style={{ padding: "0 6rem" }}>
          <FontPrimary style={{ fontWeight: "500" }}>Get started</FontPrimary>
          <FontSecondary style={{ width: "100%", textAlign: "left" }}>
            ethereum.org is your portal into the world of Ethereum. The tech is new and ever-evolving – it helps to have a guide. Here's what we recommend you do if you want to dive in.
          </FontSecondary>
        </W50>
        <W50>
          <img src={Hackatron} alt="hero" style={{ width: "100%", height: "100%" }} />
        </W50>
      </Wrapper>
      <DiscoverMenu style={{ backgroundColor: "rgb(251 251 251)" }}>
        <DiscoverMenuW50>
          <FontPrimary style={{ fontSize: "1.5rem", fontWeight: "500" }}>Pick a wallet</FontPrimary>
          <FontSecondary style={{ width: "100%", fontSize: "1rem", textAlign: "left" }}>
            A Wallet lets you contect to Ethereum and manage your funds.
          </FontSecondary>
        </DiscoverMenuW50>
        <DiscoverMenuW50>
          <FontPrimary style={{ fontSize: "1.5rem", fontWeight: "500" }}>Get ETH</FontPrimary>
          <FontSecondary style={{ width: "100%", fontSize: "1rem", textAlign: "left" }}>
            ETH is the currency of Ethereum - you can use it in applications.
          </FontSecondary>
        </DiscoverMenuW50>
        <DiscoverMenuW50>
          <FontPrimary style={{ fontSize: "1.5rem", fontWeight: "500" }}>Use a dapp</FontPrimary>
          <FontSecondary style={{ width: "100%", fontSize: "1rem", textAlign: "left" }}>
            Dapps are applications powered by Ethereum. See what you can do.
          </FontSecondary>
        </DiscoverMenuW50>
        <DiscoverMenuW50>
          <FontPrimary style={{ fontSize: "1.5rem", fontWeight: "500" }}>Start building</FontPrimary>
          <FontSecondary style={{ width: "100%", fontSize: "1rem", textAlign: "left" }}>
            If you want to start coding with Ethereum, we have documentation, tutorial, and more in our developer portal.
          </FontSecondary>
        </DiscoverMenuW50>
      </DiscoverMenu>
    </Container>
  );
}

export default App;
