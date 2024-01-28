import './App.css';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';

function App() {
    return (
        <div className="App">
            <div className="header__logo"></div>
            <div className="header_search"></div>
            <div className="header__nav">
                <div className="nav__item">
                    <div className="nav__itemLineOne"></div>
                    <div className="nav__itemLineTwo"></div>
                </div>
                <div className="nav__item">
                    <div className="nav__itemLineOne"></div>
                    <div className="nav__itemLineTwo"></div>
                </div>
                <div className="nav__item">
                    <ShoppingBasketIcon fontSize='large'></ShoppingBasketIcon>
                    <div className="nav__itemLineTwo"></div>
                </div>
            </div>
        </div>
    );
}

export default App;
