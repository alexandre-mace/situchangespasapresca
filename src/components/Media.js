import Typography from "@material-ui/core/Typography";
import medias from "../domain/medias";
import React from "react";

const Media = (props) => (
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
);
export default Media