import React from "react";
import StepIndicator from "./StepIndicator";
import Media from "./Media";
import Navigators from "./Navigators";

const Steps = (props) => (
    <div className="position-absolute d-flex h-100 w-100">
        <div className="container mb-3 mt-auto mb-md-5">
            <StepIndicator
                step={props.step}
            />
            <Media
                mediaIndex={props.mediaIndex}
            />
            <Navigators
                step={props.step}
                handleStepBackward={props.handleStepBackward}
                handleStepForward={props.handleStepForward}
            />
        </div>
    </div>
)

export default Steps;