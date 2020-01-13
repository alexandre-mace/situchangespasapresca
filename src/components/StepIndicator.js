import MobileStepper from "@material-ui/core/MobileStepper";
import medias from "../domain/medias";
import React from "react";
import {makeStyles} from "@material-ui/core";


const useStyles = makeStyles({
    root: {
        padding: "0",
        flexGrow: 1
    },
    progress: {
        height: "10px",
        width: '100%',
        color: "#38d39f",
        borderRadius: '4px'
    },
    bar: {
        borderRadius: '4px'
    }
});

const StepIndicator = (props) => {
    const classes = useStyles();

    return (
        <div className="row my-3">
            <div className="col">
                <MobileStepper
                    variant="progress"
                    steps={medias.length}
                    position="static"
                    activeStep={props.step}
                    LinearProgressProps={{
                        classes: {
                            bar: classes.bar,
                        }
                    }}
                    classes={{
                        root: classes.root,
                        progress: classes.progress,
                    }}
                />
            </div>
        </div>
    )
}
export default StepIndicator;