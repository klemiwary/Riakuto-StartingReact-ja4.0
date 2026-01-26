import Greet from './components/Greet';
import Summary from './components/Summary';
import Form from './components/Form';
import TextInput from './components/TextInput';
import './App.css';

const App: React.FC = () => (
  <div className="App">
    <Greet name="Patty" times={4} />
    <Summary title="Maple Town">
      <p>
        Patty Hope-rabbit, along with her family, arrives in Maple Town, a
        smalltown inhabited by friendly animals.
      </p>
      <p>
        Soon, the Rabbit Family settles in Maple Town as mail carriers and the
        bitter, yet sweet friendship of Patty and Bobby begins to blossom.
      </p>
    </Summary>
    <Form selected="fox" />
    <TextInput />
  </div>
);

export default App;
