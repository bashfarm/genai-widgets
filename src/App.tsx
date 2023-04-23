import logo from './assets/logo.svg';
import styles from './App.module.scss';
import GenAICard from './components/gen-ai-card/gen-ai-card';
import LiquidLoader from './components/liquid-loader/liquid-loader';
import LiquidPotionLoader from './components/liquid-potion-loader/liquid-potion-loader';
import UnderglowButton from './components/underglow-button/underglow-button';


function App() {
    return (
        <div className={styles.App}>
            <UnderglowButton/>
            <header className={styles['App-header']}>
                <GenAICard description='A talk epic tree with golden swords puncturing through it.'/>
            </header>
        </div>
    );
}

export default App;
