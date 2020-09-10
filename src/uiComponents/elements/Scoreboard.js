import Styled from 'styled-components';

export const CoinIcon = Styled.img`
    width: 20px;
    height: 20px;
    object-fit: contain;
`;

export const ScoreBoardContainer = styled.div`
    display: flex;
    justify-content: space-between;
    margin-top: 2rem;
`;

export const ItemContainer = Styled.div`
    display: flex;
    flex-direction: vertical;
    justify-content: space-between;
    align-items: bottom;
`;

export const ScoreItem = Styled.div`
    text-transform: uppercase;
`;
