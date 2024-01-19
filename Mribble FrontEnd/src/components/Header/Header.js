import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {StyledHeader, StyledHeaderContainer, StyledHeaderLogo, StyledHeaderName, StyledHeaderOption} from '../../style/Header/StyledHeader';
import { faCodeBranch } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';

function Header() {
    const navigate = useNavigate();

    const handleClick = (Route) => {
        navigate(Route);
    }

    return (
        <StyledHeader>
            <StyledHeaderContainer>
              <StyledHeaderName onClick={()=>{handleClick("/")}}>
                <StyledHeaderLogo>
                  <FontAwesomeIcon icon={faCodeBranch}/>
                </StyledHeaderLogo>
                  <h1>Mribble</h1>
              </StyledHeaderName>

            <StyledHeaderOption onClick={()=>{handleClick('/docs')}}>Docs</StyledHeaderOption>

            </StyledHeaderContainer>
        </StyledHeader>
    );
}

export default Header;
