import React, {useEffect, useState} from 'react';
import './App.css';
import medias from "./domain/medias";
import Header from "./components/Header";
import OnBoarding from "./components/OnBoarding";
import Finish from "./components/Finish";
import Steps from "./components/Steps";

function App() {
    const [step, setStep] = useState(1);
    const [hasSeenOnBoarding, setHasSeenOnBoarding] = useState(false);

    const handleStepBackward = () => {
        if (step > 1) {
            setStep(step - 1)
        }
    };

    const handleStepForward = () => {
        if (step < medias.length) {
          setStep(step + 1)
        }
    };

    const handleHasSeenOnBoarding = () => {
        setHasSeenOnBoarding(true)
    };

    const handleReset = () => {
        setStep(1)
    };

    useEffect(() => {
        const localStorageStep = localStorage.getItem('situchangespasaprescaStep');
        const hasSeenOnboarding = localStorage.getItem("situchangespasaprescaOnBoarding");

        if (hasSeenOnboarding) {
            setHasSeenOnBoarding(hasSeenOnboarding === 'true');
        }
        if (localStorageStep) {
            setStep(parseInt(localStorageStep));
        }
    }, []);

    useEffect(() => {
        localStorage.setItem('situchangespasaprescaStep', step);
    }, [step]);

    useEffect(() => {
        localStorage.setItem('situchangespasaprescaOnBoarding', hasSeenOnBoarding);
    }, [hasSeenOnBoarding]);

    const mediaIndex = step - 1;
    const finish = step === medias.length;

    return (
        <div className="App d-flex flex-column">
            <Header/>

            {!hasSeenOnBoarding &&
            <OnBoarding handleHasSeenOnBoarding={handleHasSeenOnBoarding}/>
            }

            {(hasSeenOnBoarding && !finish) &&
            <Steps
                mediaIndex={mediaIndex}
                step={step}
                handleStepBackward={handleStepBackward}
                handleStepForward={handleStepForward}
            />
            }

            {finish &&
            <Finish handleReset={handleReset}/>
            }
        </div>
    );
}

export default App;
