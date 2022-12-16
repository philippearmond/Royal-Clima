import { useState } from 'react';

import * as S from './styles';

function Form({ title, inputFields }) {
    const [fields, setFields] = useState(inputFields);
    const [btnDisabled, setBtnDisabled] = useState(true);

    const fieldsToRender = [];

    (function renderFields() {
        for (let key in fields) {
            fieldsToRender.push({
                key,
                field: fields[key],
            });
        }
    })();

    function changeContentHandler(value, inputName) {
        const cloneFields = {
            ...fields,
        };

        // for (let key in cloneFields) {
        //     if (cloneFields[key].value) setBtnDisabled(false);
        // }

        cloneFields[inputName].value = value;
        setFields(cloneFields);
    }

    function sendEmail(event, cleanForm) {
        event.preventDefault();

        if (cleanForm) {
            const cloneFields = {
                ...fields,
            };

            for (let key in cloneFields) {
                cloneFields[key].value = '';
            }

            return setFields(cloneFields);
        }
        console.log(fields);
    }

    return (
        <div>
            <form>
                <S.FieldSet>
                    <S.Title>{title}</S.Title>
                    <S.FieldsContainer>
                        {fieldsToRender.map((el) => {
                            const { key, field } = el;

                            return (
                                <S.InputContainer key={key}>
                                    <S.Label htmlFor={key}>
                                        {field.label}
                                    </S.Label>
                                    {field.inputType === 'textarea' ? (
                                        <S.TextArea
                                            id={key}
                                            name={key}
                                            rows="6"
                                            cols="50"
                                            value={field.value}
                                            onChange={(e) =>
                                                changeContentHandler(
                                                    e.target.value,
                                                    key
                                                )
                                            }
                                        ></S.TextArea>
                                    ) : (
                                        <S.Input
                                            id={key}
                                            name={key}
                                            type={field.inputType}
                                            value={field.value}
                                            onChange={(e) =>
                                                changeContentHandler(
                                                    e.target.value,
                                                    key
                                                )
                                            }
                                        />
                                    )}
                                </S.InputContainer>
                            );
                        })}
                    </S.FieldsContainer>
                    {renderButtons()}
                </S.FieldSet>
            </form>
        </div>
    );

    function renderButtons() {
        return (
            <S.ButtonsContainer>
                <S.CancelBtn onClick={(e) => sendEmail(e, true)}>
                    Limpar
                </S.CancelBtn>
                <S.ConfirmBtn
                    disabled={btnDisabled}
                    onClick={(e) => sendEmail(e)}
                >
                    Enviar
                </S.ConfirmBtn>
            </S.ButtonsContainer>
        );
    }
}

export default Form;
