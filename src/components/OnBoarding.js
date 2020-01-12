import WaitingForYouSvg from "../utils/WaitingForYouSvg";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import DoneIcon from "@material-ui/icons/Done";
import React from "react";

const OnBoarding = (props) => (
    <div className="container mb-3 mt-auto mb-md-auto m-md-auto">
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
                <IconButton onClick={() => props.handleHasSeenOnBoarding()} color={"inherit"}>
                    <DoneIcon fontSize={"large"} />
                </IconButton>
            </div>
        </div>
    </div>
);
export default OnBoarding;