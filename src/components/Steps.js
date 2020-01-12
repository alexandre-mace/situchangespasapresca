import Typography from "@material-ui/core/Typography";
import medias from "../domain/medias";
import IconButton from "@material-ui/core/IconButton";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import ArrowForwardIcon from "@material-ui/icons/ArrowForward";
import React from "react";
import MobileStepper from '@material-ui/core/MobileStepper';
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

const Steps = (props) => {
    const classes = useStyles();

    return (
        <div className="position-absolute d-flex h-100 w-100">
            <div className="container mb-3 mt-auto mb-md-5">
                {/*<div className="row">*/}
                {/*    <div className="col">*/}
                {/*        <Typography className={"text-center mb-0"} variant="h6" gutterBottom>*/}
                {/*            {props.step} / {medias.length}*/}
                {/*        </Typography>*/}
                {/*    </div>*/}
                {/*</div>*/}
                <div className="row my-3">
                    <div className="col">
                        <MobileStepper
                            variant="progress"
                            steps={medias.length}
                            position="static"
                            col
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
                <div className="row mt-3">
                    <div className="col-12">
                        <Typography className={"text-center"} variant="h6" gutterBottom>
                            {medias[props.mediaIndex] &&
                            medias[props.mediaIndex].subtitle
                            }
                        </Typography>
                    </div>
                    <div className="col-12 mt-3">
                        {medias[props.mediaIndex] &&
                        <div dangerouslySetInnerHTML={{
                            __html:medias[props.mediaIndex].source
                        }}></div>
                        }
                    </div>
                </div>
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
            </div>
        </div>
    )
}

export default Steps;