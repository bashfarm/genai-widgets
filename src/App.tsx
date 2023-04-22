import logo from './assets/logo.svg';
import styles from './App.module.scss';
import GenAICard from './components/gen-ai-card/gen-ai-card';
import LiquidLoader from './components/liquid-loader/liquid-loader';


function App() {
    return (
        <div className={styles.App}>
            <header className={styles['App-header']}>
                <LiquidLoader/>
                <GenAICard description='A talk epic tree with golden swords puncturing through it.'/>
            </header>
        </div>
    );
}

export default App;
