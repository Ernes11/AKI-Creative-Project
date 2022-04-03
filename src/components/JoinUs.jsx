import React, { useRef, useState, useEffect } from "react";
import CustomButton from "./button/CustomButton";
import '../sass/joinUs.scss';
import Button from "@mui/material/Button";
import JoinUsModal from './JoinUsModal/JoinUsModal';
import http from './../http';

const inputs = [
  {
    placeholder: "Полное наименование компании/ИП",
    logoDownload: false,
    required: true,
    details: 'company_name',
    dateDownload: false,
  },
  {
    placeholder: "ФИО руководителя компании/ИП",
    logoDownload: false,
    required: true,
    details: 'full_name',
    dateDownload: false,
  },
  {
    placeholder: "Должность руководителя компании/ИП",
    logoDownload: false,
    required: false,
    details: 'position',
    dateDownload: false,
  },
  {
    placeholder: "Дата регистрации компании/ИП",
    logoDownload: false,
    required: true,
    details:'company_reg_date',
    dateDownload: true,
  },
  {
    placeholder: "Количество сотрудников компании/ИП",
    logoDownload: false,
    required: false,
    details:'company_members',
    dateDownload: false,
  },
  {
    placeholder: "Сайт компании/ИП",
    logoDownload: false,
    required: false,
    details:'company_webpage',
    dateDownload: false,
  },
  {
    placeholder: "Номер WhatsApp компании/ИП",
    logoDownload: false,
    required: false,
    details:'whatsapp',
    dateDownload: false,
  },
  {
    placeholder: "Ссылка на Facebook Компании/ИП",
    logoDownload: false,
    required: false,
    details:'facebook',
    dateDownload: false,
  },
  {
    placeholder: "Ссылка на Telegram Компании/ИП",
    logoDownload: false,
    required: false,
    details:'telegram',
    dateDownload: false,
  },
  {
    placeholder: "Ссылка на Twitter Компании/ИП",
    logoDownload: false,
    required: false,
    details:'twitter',
    dateDownload: false,
  },
  {
    placeholder: "Ссылка на Instagram компании/ИП",
    logoDownload: false,
    required: false,
    details:'instagram',
    dateDownload: false,
  },
  {
    placeholder: "Ссылка на TikTok Компании/ИП",
    logoDownload: false,
    required: false,
    details:'tiktok',
    dateDownload: false,
  },
  {
    placeholder: "У вас есть логотип?",
    logoDownload: true,
    required: true,
    dateDownload: false,
  },
  {
    placeholder: "К какое креативной отрасли вы себя относите?",
    logoDownload: false,
    required: true,
    details:'company_field',
    dateDownload: false,
  },
  {
    placeholder: "Основные направления деятельности",
    logoDownload: false,
    required: true,
    details:'company_activity',
    dateDownload: false,
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
  let InputValue = React.createRef()

  useEffect(() =>{
    window.scrollTo(0, 0);
  },[])
  let Joindata = {
    company_name: "",
    full_name : "",
    position : "",
    company_reg_date : "",
    company_members : null,
    company_webpage : "",
    facebook : "",
    telegram : "",
    whatsapp : "",
    instagram: "",
    twitter: "",
    tiktok: "",
    company_logo: null,
    company_field: "",
    company_activity: "",
    company_email: "",
    company_phone: ""}

    const joinToCompany = (data) => {
      http.post('submit/', data)
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
      console.log(Joindata);
      setModalStyle('flex')
      
    }
    const ChangedLogo = (e) => {
      let reader = new FileReader();
      reader.readAsDataURL(e.target.files[0]);
      Joindata['company_logo'] = reader.result
      console.log(reader)
    }
    const ref = useRef()
  return (
    <main className="joinUs">
      {modal(modalStyle)}
      <div className="container">
        <h1>Заполните заявку, чтобы стать членом АКИ</h1>

        <form 
           className="form-to-join" encType="multipart/form-data" method="post">
          {inputs.map((input, index) => {
              let InputValue = React.createRef()
            
             
            return (
              input.logoDownload
              ?
              <div key={index}  className="logo">
                {/* <p>{`Логотип: ${logoUrl.name? logoUrl.name : '.../'}`}</p> */}
                <Button
                variant="text"
                component="label"
                >
                  Загрузить логотип
                  <input ref={logoInput}
                    type="file"
                    hidden
                    onChange={ChangedLogo}
                    
                  />
                </Button>
              </div>
              :(input.dateDownload?
                <input
                 style={{minWidth:'300px', border:'none',borderBottom:'1px solid white'}}
                 type='text'
                 key={index}
                 ref={ref}
                 onFocus={()=> ref.current.type  = 'date'} 
                 onBlur={()=> ref.current.type = 'text'}
                 placeholder="Дата регистрации компании/ИП"
                 onChange={(e)=> {Joindata['company_reg_date']= e.target.value}}/>
               :
              <label key={index} className={input.required? 'required' : ''} htmlFor={`input${index}`}>
                <input 
                
                type='text'
                name ={`input${index}`}
                size={input.placeholder.length}
                required={input.required}
                ref={InputValue}
                onChange={(e) =>{Joindata[input.details]= e.target.value}}
                
                placeholder={input.placeholder}
                readOnly={input.logoDownload} />
                
              </label>
              )
            )
            
          })}
          <div className="form-contacts">
            <label className="required" htmlFor="email">
              <input onChange={(e)=> Joindata.company_email = e.target.value}  type="mail" name="email" required placeholder="Почта"/>
            </label>
            <label className="required" htmlFor="phone">
              <input onChange={(e)=> Joindata.company_phone = e.target.value} ref={InputValue} type="text" name="phone" required placeholder="Телефон" />
            </label>
          </div>
          </form>
          <CustomButton type='contained' onClick={() => joinToCompany(Joindata)}>отправить</CustomButton>
          
      </div>
    </main>
  );
}

export default JoinUs;