import React from "react";
import {CustomButtonContainer} from "./customButtonStyles";

export const CustomButton = ({children, isGoogleSignIn, inverted, ...restProps}) => (
    <CustomButtonContainer {...restProps}>
        {children}
    </CustomButtonContainer>
)
