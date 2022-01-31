import styled from 'styled-components';
import './App.css';

const Paragraph = styled.div`
  padding: 1vh 0;
`
const Container = styled.div`
  max-width: 1140px;
  margin: auto;
`
function App() {
  return (
    <Container>
      <Paragraph>
        Edit <code>src/App.js</code> and save to reload.
      </Paragraph>
    </Container>
  );
}

export default App;
