import IconButton from "@material-ui/core/IconButton";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import ArrowForwardIcon from "@material-ui/icons/ArrowForward";
import React from "react";

const Navigators = (props) => (
    <div className="row mt-3 mt-md-5">
        <div className="col text-center">
            {props.step > 1 &&
            <IconButton onClick={() => props.handleStepBackward()} color={"inherit"} className={"mr-6"}>
                <ArrowBackIcon disabled={props.step === 0} fontSize={"large"} />
            </IconButton>
            }

            <IconButton onClick={() => props.handleStepForward()} color={"inherit"}>
                <ArrowForwardIcon fontSize={"large"} />
            </IconButton>
        </div>
    </div>
);
export default Navigators