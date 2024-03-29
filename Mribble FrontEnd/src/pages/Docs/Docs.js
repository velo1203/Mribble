import React from "react";
import {StyledDefaultPage} from "../../style/Layout/StyledDefaultPage";
import {MarkdownView} from "../../style/Layout/StyledMarkdownView";

function Docs() {
    return (
        <StyledDefaultPage>
            <MarkdownView>

                <h1>Mribble Beta Docs</h1>
                <p>이 페이지는<strong>Mribble</strong>의 문서 페이지입니다.</p>

                <hr/>

                <h2>Mribble은 개인용 노트 웹 애플리케이션으로</h2>
                <p>호스팅이 필요하며, RestAPI기반 노트시스템입니다</p>

                <ul>
                    <li>
                        <strong>REST API Based: </strong>
                        Mribble은 노트를 위한 CRUD 페이지가 없습니다</li>
                    <li>
                        <strong>버전 관리시스템: </strong>
                        Github 스타일의 버전 관리를 통해 문서의 이력을 관리합니다. 각 업데이트는 파일 시스템에 저장되어 추적 가능합니다.</li>
                    <li>
                        <strong>보안: </strong>
                        백엔드에 지정된 키와 일치해야 CRUD 요청이 실행됩니다</li>
                    <li>
                        <strong>호스팅 시스템: </strong>
                        Mribble은 개인 노트 웹사이트입니다. 타인에게 공유하거나 개인 소장용으로 이용 할 수 있습니다. 오픈소스로, 호스팅이 필요합니다.</li>
                </ul>
                <p>Mribble을 개인 블로그, 단어사전같이 사용하새요</p>

            </MarkdownView>
        </StyledDefaultPage>
    );
}

export default Docs;