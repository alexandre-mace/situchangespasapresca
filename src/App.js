import React, {useEffect, useState} from 'react';
import './App.css';
import Typography from '@material-ui/core/Typography';
import medias from "./domain/medias";
import IconButton from '@material-ui/core/IconButton';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import BeerCelebrationSvg from "./utils/BeerSvg";
import KeyboardReturnIcon from '@material-ui/icons/KeyboardReturn';
import WaitingForYouSvg from "./utils/WaitingForYouSvg";
import DoneIcon from '@material-ui/icons/Done';

const maxStep = 15;

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
    }

    const handleReset = () => {
        setStep(1)
    };

    useEffect(() => {
        const localStorageStep = localStorage.getItem('situchangespasaprescaStep');
        const hasSeenOnboarding = localStorage.getItem("situchangespasaprescaOnBoarding");

        if (hasSeenOnboarding) {
            setHasSeenOnBoarding(hasSeenOnboarding);
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
            <div className="container">
                <div className="row">
                    <div className="col">
                        <Typography className={"text-center"} variant="h4" gutterBottom>
                            situchangespasapresca
                        </Typography>
                    </div>
                </div>
            </div>
            {!hasSeenOnBoarding &&
            <div className="container m-auto">
                <div className="row">
                    <div className="col-12">
                        <WaitingForYouSvg/>
                    </div>
                    <div className="col-12">
                        <Typography className={"text-center mt-5"} variant="h4" gutterBottom>
                            Salut toi !
                        </Typography>
                    </div>
                    <div className="col-12">
                        <Typography className={"text-center mt-3"} variant="h6" gutterBottom>
                            Installe toi confortablement, j'ai des vidéos à te montrer, on va voir situchangespasapresca
                        </Typography>
                    </div>
                    <div className="col-12 text-center">
                        <IconButton onClick={() => handleHasSeenOnBoarding()} color={"inherit"}>
                            <DoneIcon fontSize={"large"} />
                        </IconButton>
                    </div>
                </div>
            </div>
            }
            {(hasSeenOnBoarding && !finish) &&
            <div className="position-absolute d-flex h-100 w-100">
                <div className="container m-auto">
                    <div className="row">
                        <div className="col">
                            <Typography className={"text-center mb-0"} variant="h3" gutterBottom>
                                {step} / {maxStep}
                            </Typography>
                        </div>
                    </div>
                    <div className="row mt-3">
                        <div className="col-12">
                            <Typography className={"text-center"} variant="h6" gutterBottom>
                                {medias[mediaIndex] &&
                                medias[mediaIndex].subtitle
                                }
                            </Typography>
                        </div>
                        <div className="col-12 col-md-8 offset-md-2 mt-3">
                            {medias[mediaIndex] &&
                            <div dangerouslySetInnerHTML={{
                                __html:medias[mediaIndex].source
                            }}></div>
                            }
                        </div>
                    </div>
                    <div className="row mt-5">
                        <div className="col text-center">
                            {step > 1 &&
                            <IconButton onClick={() => handleStepBackward()} color={"inherit"} className={"mr-6"}>
                                <ArrowBackIcon disabled={step === 0} fontSize={"large"} />
                            </IconButton>
                            }

                            <IconButton onClick={() => handleStepForward()} color={"inherit"}>
                                <ArrowForwardIcon fontSize={"large"} />
                            </IconButton>
                        </div>
                    </div>
                </div>
            </div>
            }

                {finish &&
                <div className="container m-auto">
                    <div className="row">
                        <div className="col-12">
                            <BeerCelebrationSvg/>
                        </div>
                        <div className="col-12">
                            <Typography className={"text-center"} variant="h6" gutterBottom>
                                situchangespasapresca, c'est dommage
                            </Typography>
                        </div>
                        <div className="col-12 text-center">
                            <IconButton onClick={() => handleReset()} color={"inherit"}>
                                <KeyboardReturnIcon fontSize={"large"} />
                            </IconButton>
                        </div>
                    </div>
                </div>
                }
        </div>
);
}

export default App;
