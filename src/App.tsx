import logo from './assets/logo.svg';
import styles from './App.module.scss';
import GenAICard from './components/gen-ai-card/gen-ai-card';
import InfoBar from './components/info-bar/info-bar';


function App() {
    return (

            <header className={"bg-purple-500"}>
                <GenAICard description='A talk epic tree with golden swords puncturing through it.'/>
                <InfoBar message={'yolo'}/>
            </header>
    );
}

export default App;
