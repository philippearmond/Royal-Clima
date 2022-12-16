import styled from 'styled-components';

export const FieldSet = styled.fieldset`
    border: none;
    margin: 0 16px;
    padding: 20px;
    transition: 0.7s;
    &:hover {
        box-shadow: #00000038 1px 0px 6px;
    }
`;

export const Title = styled.h2`
    margin: 0 0 25px 0;
`;

export const FieldsContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
`;

export const InputContainer = styled.div`
    display: flex;
    flex-direction: column;
    padding: 0 46px 24px 0px;
    width: 34%;
    &:last-child {
        width: 73%;
    }
`;

export const Label = styled.label`
    font-weight: 600;
    margin-bottom: 8px;
`;

export const Input = styled.input`
    border: 1px solid #83a1b9e0;
    border-radius: 6px;
    box-shadow: 1px 1px 0px #00000017;
    color: #2e5573;
    font-size: 18px;
    font-weight: 300;
    height: 30px;
    padding: 2px 5px;
    transition: 0.3s;
    &:hover {
        border: 1px solid #5c7e99;
        box-shadow: 1px 1px 0px #0000005c;
    }
    &:focus {
        border: 1px solid #5c7e99;
        box-shadow: 1px 1px 0px #0000005c;
        outline: none;
    }
`;

export const TextArea = styled.textarea`
    background: border-box;
    border: 1px solid #83a1b9e0;
    border-radius: 6px;
    box-shadow: 1px 1px 0px #00000017;
    color: #2e5573;
    font-size: 18px;
    font-weight: 300;
    padding: 4px 4px 4px 11px;
    line-height: 24px;
    transition: 0.3s;
    &:hover {
        border: 1px solid #5c7e99;
        box-shadow: 1px 1px 0px #0000005c;
    }
    &:focus {
        border: 1px solid #5c7e99;
        box-shadow: 1px 1px 0px #0000005c;
        outline: none;
    }
`;

export const ButtonsContainer = styled.div`
    display: flex;
    justify-content: flex-end;
    margin-top: 18px;
`;

export const ConfirmBtn = styled.button`
    background: ${(props) => (props.disabled ? '#c0edee' : '#00cbd2')};
    border: 2px solid #5c7e99;
    border-radius: 6px;
    color: #fff;
    cursor: ${(props) => (props.disabled ? 'not-allowed' : 'pointer')};
    font-size: 16px;
    font-weight: 600;
    margin-right: 22px;
    padding: 12px 24px;
    transition: 0.5s;
    &:hover {
        background-color: ${(props) =>
            props.disabled ? '#c0edee' : '#00bcc3'};
        border-color: #537189;
        box-shadow: rgba(67, 71, 85, 0.27) 0px 0px 0.25em,
            rgba(90, 125, 188, 0.05) 0px 0.25em 1em;
    }
`;

export const CancelBtn = styled.button`
    background-color: #ededed;
    border-radius: 6px;
    border: 2px solid #5c7e99;
    color: #5c7e99;
    cursor: pointer;
    font-size: 16px;
    font-weight: 600;
    margin-right: 24px;
    padding: 12px 24px;
    transition: 0.5s;
    &:hover {
        background-color: #e1e1e1;
        border-color: #537189;
        box-shadow: rgba(67, 71, 85, 0.27) 0px 0px 0.25em,
            rgba(90, 125, 188, 0.05) 0px 0.25em 1em;
    }
`;
