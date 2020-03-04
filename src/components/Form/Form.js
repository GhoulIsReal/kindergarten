import React, { useRef, useState } from "react";
import * as styled from "../Banner/BannerStyles";
import { FormattedMessage } from "react-intl";

const Form = () => {
  const inputNumber = useRef(null);
  const statusDiv = useRef();
  const inputName = useRef();
  const textArea = useRef();
  const alert = useRef();
  const [response, setResponse] = useState("");

  const handleFormSubmitButton = () => {
    setResponse("");
    alert.current.style.display = "none";
    statusDiv.current.classList.add("loader");
    statusDiv.current.style.visibility = "visible";
    statusDiv.current.style.position = "relative";
    window
      .fetch("https://morning-sea-25065.herokuapp.com/request", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          name: inputName.current.value,
          phoneNum: inputNumber.current.value,
          comment: textArea.current.value
        })
      })
      .then(res => res.json())
      .catch(
        (_err) => {
          statusDiv.current.classList.remove("loader");
          statusDiv.current.classList.add("error");
          setResponse("Ooops! Попробуйте позже!");
        }
      )
      .then(status => {
        if (status === "Success") {
          inputName.current.value = "";
          inputNumber.current.value = "";
          statusDiv.current.classList.remove("loader");
          statusDiv.current.classList.add("success");
          setResponse("Спасибо за вашу заявку!");
        } else {
          statusDiv.current.classList.remove("loader");
          statusDiv.current.classList.add("error");
          setResponse("Ooops! Попробуйте позже!");
        }
        setTimeout(() => {
          setResponse("")
          alert.current.style.display = "flex";
        }, 5000)
      });
  };

  const formValidate = () => {
    if (inputNumber.current.value.length > 10) {
      handleFormSubmitButton();
      inputNumber.current.style.borderColor = "#FFF";
    } else {
      inputNumber.current.focus();
      inputNumber.current.value = "";
      inputNumber.current.style.borderColor = "red";
      inputNumber.current.placeholder =
        "Заполните данное поле(мин. 11 символов)";
    }
  };

  return (
    <styled.MainScreenFormHolder>
      <styled.MainScreenInput
        ref={inputName}
        type="text"
        placeholder="Имя и Фамилия"
        id="NameAndSurname"
      ></styled.MainScreenInput>
      <styled.MainScreenInput
        ref={inputNumber}
        type="number"
        placeholder="Телефон(+7 (777) 792-848-24)"
        id="PhoneNum"
        required
      ></styled.MainScreenInput>
      <styled.MainScreenTextArea
        ref={textArea}
        placeholder="Можете оставить комментарий...(макс 150 символов)"
        maxLength="150"
        id="Comments"
      ></styled.MainScreenTextArea>
      <styled.MainScreenAlertAndSendButtonHolder>
        <styled.MainScreenFormTextAlert>
          <styled.FormAlertTextHolder ref={alert}>
            <FormattedMessage id="mainScreen.formAlert" />
          </styled.FormAlertTextHolder>
          <styled.EmptyDiv ref={statusDiv} className="loaderDiv">
            {response}
          </styled.EmptyDiv>
          <styled.TextBlurredBG></styled.TextBlurredBG>
        </styled.MainScreenFormTextAlert>
        <styled.MainScreenAbbreviation title="Нажимая кнопку 'Отправить' Вы даете согласие на обработку своих персональных данных">
          <styled.MainScreenSendButton
            onClick={formValidate}
            primary
            type="submit"
            value="Отправить"
          ></styled.MainScreenSendButton>
        </styled.MainScreenAbbreviation>
      </styled.MainScreenAlertAndSendButtonHolder>
      <styled.MainScreenPolicy>
        Нажимая кнопку 'Отправить' Вы даете согласие на обработку своих
        персональных данных
      </styled.MainScreenPolicy>
    </styled.MainScreenFormHolder>
  );
};

export default Form;
