import React from "react";
import StepIndicator from "./StepIndicator";
import Media from "./Media";
import Navigators from "./Navigators";

const Steps = (props) => (
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
    )

export default Steps;