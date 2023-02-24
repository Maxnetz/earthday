import styled from "styled-components";

const TopSectionContainer = styled.div`
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    background-color: rgba(23, 86, 221, 0.09);
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 13%;
    z-index: 2;
`;

const Logo = styled.h1`
    margin: 0;
    color: #fff;
    font-weight: 700;
    font-size: 60px;
`;

const Slogan = styled.h4`
    margin: 0;
    color: #fff;
    font-weight: 700;
    font-size: 30px;
    margin-top: 10px;
`;

const Paragraph = styled.p`
    margin: 0;
    margin-top: 2em;
    color: #fff;
    font-size: 14px;
    line-height: 1.5;
    font-weight: 500;
    max-width: 40%;
    text-align: center;
`;

const NavigateButton = styled.button`
    outline: none;
    border: none;
    background-color: #183aa8;
    color: #fff;
    font-size: 16px;
    font-weight: 700;
    border-radius: 30px;
    padding: 14px 18px;
    margin-top: 3em;
    cursor: pointer;
    transition: transform 0.4s;

    
    -webkit-transform: translateZ(0) scale(1, 1);

    &:hover {
        transform: scale(1.08);
    }
`;

const TopSection = () => {
    return (
        <TopSectionContainer>
            <Logo>World Earth Day</Logo>

            <Slogan>The Earth Is What We All Have in Common</Slogan>
            <Paragraph>
                Earth Day is an annual celebration that honors the achievements
                of the environmental movement and raises awareness of the need
                to protect Earth’s natural resources for future generations.
            </Paragraph>
            <NavigateButton>Learn More</NavigateButton>
        </TopSectionContainer>
    );
};

export default TopSection;
