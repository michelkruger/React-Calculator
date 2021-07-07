import { useState } from 'react';
import './styles/index.css';
import { Button, ClearButton, BackSpace, Calculator } from './components/Buttons/index';

function App() {

    const [screenNumber, setScreenNumber ] = useState("0")

  return (

    <div className="container">
        <div className="calculatorContainer">
            <header className="screen">
                <span>{screenNumber}</span>
            </header>

            <div className="keyBoard">
                
                <ClearButton 
                    setValueScreen={setScreenNumber} 
                    className="gridColumn1_3 greenButtons"
                >
                     Clear 
                </ClearButton>
                <BackSpace 
                    valueScreen={screenNumber} 
                    setValueScreen={setScreenNumber} 
                    className="greenButtons"
                > 
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2M3 12l6.414 6.414a2 2 0 001.414.586H19a2 2 0 002-2V7a2 2 0 00-2-2h-8.172a2 2 0 00-1.414.586L3 12z" />
                    </svg>
                </BackSpace>
                <Button 
                    name="/" 
                    valueScreen={screenNumber} 
                    setValueScreen={setScreenNumber} 
                    className="operation"
                > 
                    ÷ 
                </Button>
                <Button 
                    name="7" 
                    valueScreen={screenNumber} 
                    setValueScreen={setScreenNumber}
                > 
                    7 
                </Button>
                <Button 
                    name="8" 
                    valueScreen={screenNumber} 
                    setValueScreen={setScreenNumber}
                > 
                    8 
                </Button>
                <Button 
                    name="9" 
                    valueScreen={screenNumber} 
                    setValueScreen={setScreenNumber}
                > 
                    9 
                </Button>
                <Button 
                    name="*" 
                    valueScreen={screenNumber} 
                    setValueScreen={setScreenNumber}
                    className="operation"
                > 
                    x 
                </Button>
                <Button 
                    name="4" 
                    valueScreen={screenNumber} 
                    setValueScreen={setScreenNumber}
                > 
                    4 
                </Button>
                <Button 
                    name="5" 
                    valueScreen={screenNumber} 
                    setValueScreen={setScreenNumber}
                > 
                    5 
                </Button>
                <Button 
                    name="6" 
                    valueScreen={screenNumber} 
                    setValueScreen={setScreenNumber}
                > 
                    6 
                </Button>
                <Button 
                    name="-" 
                    valueScreen={screenNumber} 
                    setValueScreen={setScreenNumber}
                    className="operation"
                > 
                    - 
                </Button>
                <Button 
                    name="1" 
                    valueScreen={screenNumber} 
                    setValueScreen={setScreenNumber}
                > 
                    1 
                </Button>
                <Button 
                    name="2" 
                    valueScreen={screenNumber} 
                    setValueScreen={setScreenNumber}
                > 
                    2 
                </Button>
                <Button 
                    name="3" 
                    valueScreen={screenNumber} 
                    setValueScreen={setScreenNumber}
                > 
                    3 
                </Button>
                <Button 
                    name="+" 
                    valueScreen={screenNumber} 
                    setValueScreen={setScreenNumber}
                    className="operation"
                > 
                    + 
                </Button>
                <Button 
                    name="0" 
                    valueScreen={screenNumber} 
                    setValueScreen={setScreenNumber}
                    className="gridColumn1_3"
                > 
                    0 
                </Button>
                <Button 
                    name="." 
                    valueScreen={screenNumber} 
                    setValueScreen={setScreenNumber}
                > 
                    . 
                </Button>
                <Calculator 
                    valueScreen={screenNumber} 
                    setValueScreen={setScreenNumber}  
                    className="greenButtons"
                > 
                    = 
                </Calculator>

            </div>
        </div>
    </div>
  );
}

export default App;
