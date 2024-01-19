import React from "react";
import {StyledDefaultPage} from "../../style/Layout/StyledDefaultPage";
import ListNote from "../../components/ListNote/ListNote";
import {StyledMainHeader, StyledNotelist} from "../../style/Layout/StyledMain";

function Main() {
    return (
        <StyledDefaultPage>
            <StyledMainHeader>Note Section</StyledMainHeader>
            <StyledNotelist>
                <ListNote/>
                <ListNote/>
            </StyledNotelist>
        </StyledDefaultPage>
    );
}

export default Main;
