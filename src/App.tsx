import logo from './assets/logo.svg';
import styles from './App.module.scss';
import GenAICard from './components/gen-ai-card/gen-ai-card';
import GlowLoaderButton from './components/glow-loader-button/glow-loader-button';


function App() {
    return (

            <header className={"bg-purple-500"}>
                <GenAICard description='A talk epic tree with golden swords puncturing through it.'/>
            </header>
    );
}

export default App;
