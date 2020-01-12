import BeerCelebrationSvg from "../utils/BeerSvg";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import KeyboardReturnIcon from "@material-ui/icons/KeyboardReturn";
import React from "react";

const Finish = (props) => (
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
                <IconButton onClick={() => props.handleReset()} color={"inherit"}>
                    <KeyboardReturnIcon fontSize={"large"} />
                </IconButton>
            </div>
        </div>
    </div>
);
export default Finish;