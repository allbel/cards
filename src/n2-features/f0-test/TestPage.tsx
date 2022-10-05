import React, {ChangeEvent, useState} from 'react';
import SuperButton from "../../n1-main/m1-ui/common/c2-SuperButton/SuperButton";
import SuperCheckbox from "../../n1-main/m1-ui/common/c3-SuperCheckbox/SuperCheckbox";
import SuperInputText from "../../n1-main/m1-ui/common/c1-SuperInputText/SuperInputText";
import s from "./TestPage.module.css";

const TestPage = () => {
    const [text, setText] = useState<string>('')
    const error = text ? '' : 'error'

    const showAlert = () => {
        if (error) {
            alert('введите текст...')
        } else {
            alert(text) // если нет ошибки показать текст
        }
    }

    const [checked, setChecked] = useState<boolean>(false)
    const testOnChange = (e: ChangeEvent<HTMLInputElement>) => setChecked(e.currentTarget.checked)

    return (
        <div>

            <div
                className={s.column}
            >
                <SuperInputText
                    value={text}
                    onChangeText={setText}
                    onEnter={showAlert}
                    error={error}
                    // spanClassName={s.testSpanError}
                />

                <SuperInputText
                    className={s.blue} // смешивание классов
                />

                <SuperButton>
                    default
                </SuperButton>

                <SuperButton
                    red // пропсу с булевым значением не обязательно указывать true
                    onClick={showAlert}
                >
                    delete
                </SuperButton>

                <SuperButton disabled>
                    disabled
                </SuperButton>

                <SuperCheckbox
                    checked={checked}
                    onChangeChecked={setChecked}
                >
                    some text
                </SuperCheckbox>


                <SuperCheckbox checked={checked} onChange={testOnChange}/>
            </div>
        </div>
    );
};

export default TestPage;