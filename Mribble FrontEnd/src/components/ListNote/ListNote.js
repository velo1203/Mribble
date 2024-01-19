import React from "react";
import { StyledListNote, StyledListNoteDate, StyledListNoteHeader } from "../../style/common/ListNote";

function ListNote() {
    return (
        <StyledListNote>
            <StyledListNoteHeader>
                <h1>코딩 일기장 다이어리</h1>
                <p>코딩 일기장 설명입니다</p>
            </StyledListNoteHeader>
            <StyledListNoteDate>2008-01-21</StyledListNoteDate>
        </StyledListNote>
    );
}

export default ListNote;