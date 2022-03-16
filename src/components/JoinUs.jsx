import React, { useRef, useState } from "react";
import CustomButton from "./button/CustomButton";
import '../sass/joinUs.scss';
import Button from "@mui/material/Button";
import JoinUsModal from './JoinUsModal/JoinUsModal';


const inputs = [
  {
    placeholder: "Полное наименование компании/ИП",
    logoDownload: false,
    required: true,
  },
  {
    placeholder: "ФИО руководителя компании/ИП",
    logoDownload: false,
    required: true,
  },
  {
    placeholder: "Должность руководителя компании/ИП",
    logoDownload: false,
    required: false,
  },
  {
    placeholder: "Дата регистрации компании/ИП",
    logoDownload: false,
    required: true,
  },
  {
    placeholder: "Количество сотрудников компании/ИП",
    logoDownload: false,
    required: false,
  },
  {
    placeholder: "Сайт компании/ИП",
    logoDownload: false,
    required: false,
  },
  {
    placeholder: "Сылки на социальные страницы компании/ИП (Instagram, FaceBook, Twitter, Tik-Tok и т.д.)",
    logoDownload: false,
    required: false,
  },
  {
    placeholder: "У вас есть логотип?",
    logoDownload: true,
    required: true,
  },
  {
    placeholder: "К какое креативной отрасли вы себя относите?",
    logoDownload: false,
    required: true,
  },
  {
    placeholder: "Основные направления деятельности",
    logoDownload: false,
    required: true,
  }
]

function JoinUs() {
  const [logoUrl, setLogoUrl] = useState({});
  const logoInput = useRef();
  const [ modalStyle, setModalStyle ] = useState('none');

  function modal (style) {
    return (
      <JoinUsModal display={style} setDisplay ={setModalStyle}/>

    )
  }

  return (
<<<<<<< HEAD
    <div className="event">
      <div className="container">
        <div className="row align-items-center my-5">
          <div className="col-lg-7">
            <img
              className="img-fluid rounded mb-4 mb-lg-0"
              src="http://placehold.it/900x400"
              alt=""
            />
          </div>
          <div className="col-lg-5">
            <h1 className="font-weight-light">JoinUs</h1>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
            </p>
=======
    <main className="joinUs">
      {modal(modalStyle)}
      <div className="container">
        <h1>Заполните заявку, чтобы стать членом АКИ</h1>

        <form className="form-to-join" encType="multipart/form-data" method="post">
          {inputs.map((input, index) => {
            return (
              input.logoDownload
              ?
              <div className="logo">
                <p>{`Логотип: ${logoUrl.name? logoUrl.name : '.../'}`}</p>
                <Button
                variant="text"
                component="label"
                >
                  Загрузить логотип
                  <input ref={logoInput}
                    type="file"
                    hidden
                    onChange={(e) => setLogoUrl(e.target.files[0])}
                  />
                </Button>
              </div>
              :
              <label className={input.required? 'required' : ''} htmlFor={`input${index}`}>
                <input
                key={index}
                type='text'
                name ={`input${index}`}
                size={input.placeholder.length}
                required={input.required}
                placeholder={input.placeholder}
                readOnly={input.logoDownload} />
              </label>
            )
          })}
          <div className="form-contacts">
            <label className="required" htmlFor="email">
              <input type="mail" name="email" required placeholder="Почта"/>
            </label>
            <label className="required" htmlFor="phone">
              <input type="text" name="phone" required placeholder="Телефон" />
            </label>
>>>>>>> 615175a954ba77af382afd8f355e79ec9e36de1f
          </div>
        </form>
        <CustomButton type='contained' onClick={() => setModalStyle('flex')}>отправить</CustomButton>
      </div>
    </main>
  );
}

export default JoinUs;