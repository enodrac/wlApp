//@ts-nocheck
import React, { useState } from 'react';
import Welcome from './components/welcome/welcome';
import Calendar from './components/calendar/calendar';
import DayData from './components/dayData/dayData';
import './App.scss'
// import arrowDown from './assets/icons/arrowDown.svg'
// import kuepaWhiteLogo from './assets/icons/kuepaWhiteLogo.svg'
// import burgerIcon from './assets/icons/burgerIcon.svg'
// import graduatesV2 from './assets/icons/graduatesV2.png'
// import bachilleratoAcelerado from './assets/icons/bachilleratoAceleradoV2.png'
// import tecnicosLaborales from './assets/icons/tecnicosLaboralesV2.png'
// import methodologyM1 from './assets/icons/methodologyM1.svg'
// import methodologyM2 from './assets/icons/methodologyM2.svg'
// import methodologyM3 from './assets/icons/methodologyM3.svg'
// import methodologyM4 from './assets/icons/methodologyM4.svg'
// import close from './assets/icons/close.svg'
// import katrinAvatar from './assets/icons/katrinAvatar.svg'
// import samuelAvatar from './assets/icons/samuelAvatar.svg'
// import alisonAvatar from './assets/icons/alisonAvatar.svg'
// import niniAvatar from './assets/icons/niniAvatar.svg'
// import jonathanAvatar from './assets/icons/jonathanAvatar.svg'
// import play from './assets/icons/play.svg'
// import cuotes from './assets/icons/cuotes.svg'
// import espirituJoven from './assets/icons/espirituJovenV2.svg'
// import transparencia from './assets/icons/transparenciaV2.svg'
// import profecionalismo from './assets/icons/profecionalismoV2.svg'
// import espírituEmprendedor from './assets/icons/espírituEmprendedorV2.svg'
// import ejemplo from './assets/icons/ejemploV2.svg'
// import eficiencia from './assets/icons/eficienciaV2.svg'
// import ketKuepaEduTechLogoV2 from './assets/icons/ketKuepaEduTechLogoV2.png'
//   import calle72 from './assets/icons/calle72.svg'
//   import calle85 from './assets/icons/calle85.svg'
// import kuepaLogo from './assets/icons/kuepaLogo.svg'
// import footerLogos from './assets/icons/footerLogos.svg'
// import instagramLogo from './assets/icons/instagramLogo.svg'
// import facebookLogo from './assets/icons/facebookLogo.svg'
// import tiktokLogo from './assets/icons/tiktokLogo.svg'
// import linkedInLogo from './assets/icons/linkedInLogo.svg'

import arrowDown from './assets/icons/facebook.png'
import kuepaWhiteLogo from './assets/icons/facebook.png'
import burgerIcon from './assets/icons/facebook.png'
import graduatesV2 from './assets/icons/facebook.png'
import Animator from './components/animator/animator';
import bachilleratoAcelerado from './assets/icons/facebook.png'
import tecnicosLaborales from './assets/icons/facebook.png'
import methodologyM1 from './assets/icons/facebook.png'
import methodologyM2 from './assets/icons/facebook.png'
import methodologyM3 from './assets/icons/facebook.png'
import methodologyM4 from './assets/icons/facebook.png'
import close from './assets/icons/facebook.png'
import katrinAvatar from './assets/icons/facebook.png'
import samuelAvatar from './assets/icons/facebook.png'
import alisonAvatar from './assets/icons/facebook.png'
import niniAvatar from './assets/icons/facebook.png'
import jonathanAvatar from './assets/icons/facebook.png'
import play from './assets/icons/facebook.png'
import cuotes from './assets/icons/facebook.png'
import espirituJoven from './assets/icons/facebook.png'
import transparencia from './assets/icons/facebook.png'
import profecionalismo from './assets/icons/facebook.png'
import espírituEmprendedor from './assets/icons/facebook.png'
import ejemplo from './assets/icons/facebook.png'
import eficiencia from './assets/icons/facebook.png'
import ketKuepaEduTechLogoV2 from './assets/icons/facebook.png'
import calle72 from './assets/icons/facebook.png'
import calle85 from './assets/icons/facebook.png'
import kuepaLogo from './assets/icons/facebook.png'
import footerLogos from './assets/icons/facebook.png'
import instagramLogo from './assets/icons/facebook.png'
import facebookLogo from './assets/icons/facebook.png'
import tiktokLogo from './assets/icons/facebook.png'
import linkedInLogo from './assets/icons/facebook.png'

export interface IUserData {
  name: string
  gender: string
  height: string
  age: string
  weight: string
  heaviestWeight: string
  objectiveWeight: string
}

export interface IDayData {
  [day: string]: {
    weight: string
    foodList: IFoodData
    exerciseList: any
  }
}

export interface IFoodData {
  [name: string]: {
    calories: string
    grams: string
  }
}

export interface ICalendarData {
  [month: string]: IDayData;
}

export interface IWlAppData {
  userData: IUserData
  calendarData: ICalendarData
  foodData: IFoodData
  appData: any
}

export default function App() {
  const [wlAppData, setWlAppData] = useState<IWlAppData>()

  const [video, setVideo] = useState('')
  const [data, setData] = useState<any>({})
  const [blogsByAlliances, setBlogsByAlliances] = useState<any[]>([])
  let methodologyList = [methodologyM4, methodologyM1, methodologyM2, methodologyM3, methodologyM4, methodologyM1]
  let list = [
    {
      icon: espirituJoven,
      title: `Espíritu joven`,
      description: ` "One day you'll leave this world behind
              So live a life you will remember."`,
      name: `-The nights, Avicii`,
    },
    {
      icon: transparencia,
      title: `Transparencia`,
      description: `"Tell me your secrets and ask me your questions ."`,
      name: `-The scientist, Coldplay`,
    },
    {
      icon: profecionalismo,
      title: `Profesionalismo`,
      description: ` “So many times,
              it happens too fast
              You trade your passion for glory
              Don't lose your grip on the dreams of the past
              You must fight just to keep them alive”`,
      name: ` -Eye of the tiger, Survivor`,
    },
    {
      icon: espírituEmprendedor,
      title: `Espíritu Emprendedor`,
      description: `"Tonight is the night, we'll fight
              'til it's over
              So we put our hands up
              Like the ceiling can't hold us"`,
      name: `-Can't Hold Us,
              Macklemore & Ryan Lewis`,
    },
    {
      icon: ejemplo,
      title: `Ejemplo`,
      description: ` “Work it harder
              Make it better
              Do it faster
              Makes us stronger
              More than ever
              Hour after
              Our work is
              Never over”`,
      name: `-Harder, Better, Faster, Stronger,  Daft Punk`,
    },
    {
      icon: eficiencia,
      title: ` Eficiencia en el delivery`,
      description: `“La suerte es amiga de la acción”`,
      name: `-Casi q' me pierdo, Los Cafres`,
    },
  ]

  const handleClickOutside = (action: any) => {
    updateData(action)
    window.addEventListener('click', handleClick)
  }

  const handleClick = (event: MouseEvent) => {
    if (!(event?.target as Element)?.classList[0]?.includes('clickable')) {
      updateData({ ourPrograms: false })
      window.removeEventListener('click', handleClick)
    }
  }

  const updateData = (params: any) => {
    setData((prev: any) => ({ ...prev, ...params }))
  }

  const handleScroll = (params: { id: string, offset: number }) => {
    let element = document.getElementById(params?.id);
    if (element) {
      let elementPosition = element.getBoundingClientRect().top;
      let offsetPosition = elementPosition + window.pageYOffset - params?.offset;
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  }

  let [welcomeData, setWelcomeData] = useState<any>({})
  const [loading, setLoading] = useState<boolean>(false)

  const handleUpdateData = (params: any) => {
    setWelcomeData((prev: any) => ({ ...prev, ...params }))
  }

  const handleSubmit = async () => {
    setLoading(true)

    let isVirtual: boolean
    let insertPanel = false
    let insertCRM = false

    const formData = {
      ...welcomeData,
      isVirtual,
      insertPanel,
      insertCRM,
      adNetwork: adNetwork === null ? "organico" : adNetwork
    }
  }

  const handleOnChange = (e: any) => {

  };

  const updateLinePosition = () => {
    const point1: any = document.getElementById('p1');
    const point2: any = document.getElementById('p2');
    const line: any = document.getElementById('l1');
    // Get the positions of the points
    const point1Rect = point1.getBoundingClientRect();
    const point2Rect = point2.getBoundingClientRect();

    // Calculate the midpoint between the points
    const midX = ((point1Rect.left + point2Rect.left) / 2) + 25;
    const midY = ((point1Rect.top + point2Rect.top) / 2) + 25;

    // Calculate the angle of the line
    const angle = Math.atan2(point2Rect.top - point1Rect.top, point2Rect.left - point1Rect.left);

    // Calculate the distance between the points
    const distance = Math.sqrt(Math.pow(point2Rect.left - point1Rect.left, 2) + Math.pow(point2Rect.top - point1Rect.top, 2));

    // Update the position and rotation of the line
    line.style.left = midX + 'px';
    line.style.top = midY + 'px';
    line.style.width = distance + 'px';
    line.style.transform = 'translateX(-50%) translateY(-50%) rotate(' + angle + 'rad)';
  }

  const isUserMobile = () => {
    let isMobile = false
    if (!isMobile) {
      let screenWidth = window.screen.width;
      isMobile = (screenWidth < 768);
    }
    if (!isMobile) {
      let bodyElement = document.getElementsByTagName('body')[0];
      isMobile = window.getComputedStyle(bodyElement).getPropertyValue('content').indexOf('mobile') !== -1;
    }
    return isMobile
  }

  return (
    <div className={`home_page_v2_mobile_layout`} >
      <div className={`home_page_v2_mobile_layout`} >
        <div className={`mobile_nav_bar_container`}>
          <div className={`logo`}>
            <img loading="lazy" src={kuepaWhiteLogo} alt='test' width={'116px'} height={'32px'} />
          </div>
          <div className={`burger_icon`}
            onClick={() => updateData({ burger: data?.burger ? false : true })}
          >
            <img loading="lazy" src={burgerIcon} alt='test' width={'24px'} height={'24px'} />
          </div>
          {data?.burger ?
            <div className={`burger_container`}>
              <div className={`items_container`}>
                <div className={`clickable animated_text_with_bar bottom`}
                  onClick={() => handleClickOutside({ ourPrograms: data?.ourPrograms ? false : true })}
                >
                  Nuevos programas
                  <img loading="lazy" src={arrowDown} alt="test" width={"25px"} height={"24px"} />
                </div>
                {data?.ourPrograms ?
                  <div className={`clickable our_programs`}>
                    <div className={`animated_text_with_bar right`}
                      onClick={() => handleScroll({ id: 'our_programs', offset: -160 })}
                    >
                      Técnicos laborales
                    </div>
                    <div className={`animated_text_with_bar right`}
                      onClick={() => handleScroll({ id: 'our_programs', offset: -160 })}
                    >
                      Bachillerato acelerado
                    </div>
                  </div>
                  : null}
                <div className={`animated_text_with_bar right`}
                  onClick={() => handleScroll({ id: 'already_student', offset: 70 })}
                >
                  Soy estudiante
                </div>
                <div className={`animated_text_with_bar right`}
                  onClick={() => handleScroll({ id: 'blogs', offset: -50 })}
                >
                  Blog
                </div>
                <div className={`animated_text_with_bar right`}
                  onClick={() => handleScroll({ id: 'platform', offset: 90 })}
                >
                  Plataforma educativa
                </div>
              </div>
              <div className={`custom_button`}>
                <div className={`inner_text`}>
                  Estudia en Kuepa
                </div>
              </div>
            </div>
            : null}
        </div>
        <div className={`content`}>
          <div className={`mobile_welcome_container`}>
            <div className={`animator_container`}>
              <Animator animation={{
                "frames": {
                  "frame_0": {
                    "0_296478_frame_element": {
                      "left": "54px",
                      "top": "-61px",
                      "height": "269px",
                      "width": "269px",
                      "borderRadius": "100%",
                      "transition": "all 3.3s ease-out",
                      'WebkitTransitionDuration': 'all 3.3s ease-out',
                      'MozTransitionDuration': 'all 3.3s ease-out',
                      'msTransitionDuration': 'all 3.3s ease-out',
                      "backgroundColor": "var(--primary)",
                      "filter": "blur(100px)"
                    },
                    "1_027877_frame_element": {
                      "left": "158px",
                      "top": "147px",
                      "height": "222px",
                      "width": "222px",
                      "borderRadius": "100%",
                      "transition": "all 3.3s ease-out",
                      'WebkitTransitionDuration': 'all 3.3s ease-out',
                      'MozTransitionDuration': 'all 3.3s ease-out',
                      'msTransitionDuration': 'all 3.3s ease-out',
                      "backgroundColor": "#FF8A00",
                      "filter": "blur(100px)"
                    }
                  },
                  "frame_1": {
                    "0_296478_frame_element": {
                      "left": "-56px",
                      "top": "147px",
                      "height": "269px",
                      "width": "269px",
                      "borderRadius": "100%",
                      "transition": "all 3.3s ease-out",
                      'WebkitTransitionDuration': 'all 3.3s ease-out',
                      'MozTransitionDuration': 'all 3.3s ease-out',
                      'msTransitionDuration': 'all 3.3s ease-out',
                      "backgroundColor": "var(--primary)",
                      "filter": "blur(100px)"
                    },
                    "1_027877_frame_element": {
                      "left": "146px",
                      "top": "12px",
                      "height": "222px",
                      "width": "222px",
                      "borderRadius": "100%",
                      "transition": "all 3.3s ease-out",
                      'WebkitTransitionDuration': 'all 3.3s ease-out',
                      'MozTransitionDuration': 'all 3.3s ease-out',
                      'msTransitionDuration': 'all 3.3s ease-out',
                      "backgroundColor": "#FF8A00",
                      "filter": "blur(100px)"
                    },
                  },
                  "frame_2": {
                    "0_296478_frame_element": {
                      "left": "167px",
                      "top": "116px",
                      "height": "216px",
                      "width": "216px",
                      "borderRadius": "100%",
                      "transition": "all 3.3s ease-out",
                      'WebkitTransitionDuration': 'all 3.3s ease-out',
                      'MozTransitionDuration': 'all 3.3s ease-out',
                      'msTransitionDuration': 'all 3.3s ease-out',
                      "backgroundColor": "var(--primary)",
                      "filter": "blur(100px)"
                    },
                    "1_027877_frame_element": {
                      "left": "12px",
                      "top": "-40px",
                      "height": "222px",
                      "width": "222px",
                      "borderRadius": "100%",
                      "transition": "all 3.3s ease-out",
                      'WebkitTransitionDuration': 'all 3.3s ease-out',
                      'MozTransitionDuration': 'all 3.3s ease-out',
                      'msTransitionDuration': 'all 3.3s ease-out',
                      "backgroundColor": "#FF8A00",
                      "filter": "blur(100px)"
                    }
                  },
                  "frame_3": {
                    "0_296478_frame_element": {
                      "left": "95px",
                      "top": "-17px",
                      "height": "170px",
                      "width": "170px",
                      "borderRadius": "100%",
                      "transition": "all 3.3s ease-out",
                      'WebkitTransitionDuration': 'all 3.3s ease-out',
                      'MozTransitionDuration': 'all 3.3s ease-out',
                      'msTransitionDuration': 'all 3.3s ease-out',
                      "backgroundColor": "var(--primary)",
                      "filter": "blur(100px)"
                    },
                    "1_027877_frame_element": {
                      "left": "42px",
                      "top": "269px",
                      "height": "197px",
                      "width": "197px",
                      "borderRadius": "100%",
                      "transition": "all 3.3s ease-out",
                      'WebkitTransitionDuration': 'all 3.3s ease-out',
                      'MozTransitionDuration': 'all 3.3s ease-out',
                      'msTransitionDuration': 'all 3.3s ease-out',
                      "backgroundColor": "#FF8A00",
                      "filter": "blur(100px)"
                    },
                  }
                },
                "time": "3300",
                "canvasHeight": "740px",
                "canvasWidth": "360px",
                "currentFrame": "frame_0"
              }} />
            </div>
            <div className={`initial_container`}>
              <div className={`text_container`}>
                <div className={`top_text`}>
                  En <span className={`special_text`}>Kuepa</span> inicias tu camino profesional.
                </div>
                <div className={`bottom_text`}>
                  Nuestros programas te preparan para encontrar el empleo de tus sueños.
                </div>
              </div>
              <div className={`container_ fade_from_bottom`}>
                <div className={`image_container`}>
                  <img loading="lazy" src={graduatesV2} alt="test" />
                </div>
                <div className={`register_container`}>
                  <div className={`form_title`}>
                    ¡Regístrate ahora o llámanos al 601 917 7888!
                  </div>
                  <div className={`top_container`}>
                    <div className={`custom_input_container`}>
                      <div className={`custom_label`}>
                        Nombre
                      </div>
                      <div className={`custom_input`}>
                        <input
                          type={`text`}
                          name={`name`}
                          value={welcomeData?.name || ``}
                          onChange={(event) => handleUpdateData({ [event?.target?.name]: event?.target?.value })}
                          placeholder='Ej: Nombres y apellidos'
                        />
                      </div>
                    </div>
                    <div className={`custom_input_container`}>
                      <div className={`custom_label`}>
                        Correo
                      </div>
                      <div className={`custom_input`}>
                        <input
                          type={`text`}
                          name={`mail`}
                          value={welcomeData?.mail || ``}
                          onChange={(event) => handleUpdateData({ [event?.target?.name]: event?.target?.value })}
                          placeholder='tunombre@correoelectrónico.com'
                        />
                      </div>
                    </div>
                    <div className={`custom_input_container`}>
                      <div className={`custom_label`}>
                        Telefono
                      </div>
                      <div className={`custom_input`}>
                        <input
                          type={`text`}
                          name={`phone`}
                          value={welcomeData?.phone || ``}
                          onChange={(event) => handleUpdateData({ [event?.target?.name]: event?.target?.value })}
                          placeholder='Ej: 316 789 9876'
                        />
                      </div>
                    </div>
                  </div>
                  <div className={`bottom_container`}>
                    <div className={`custom_input_container`}>
                      <div className={`custom_label`}>
                        Programa
                      </div>
                      <div className={`custom_input`}>
                        <select
                          aria-label='select-program'
                          name={`program`}
                          onChange={handleOnChange}
                          style={{ color: welcomeData?.program ? '' : '#333639' }}
                        >
                          <option label='Seleccionar programa' selected disabled value="" style={{ color: '#333639' }}>Seleccionar programa</option>
                          <option label='Bachillerato Virtual' value='{"id_panel": "43", "id_crm":"bachillerato-plus-online"}'>Bachillerato Virtual</option>
                          <option label='Bachillerato Presencial' value='{"id_panel": "43", "id_crm":"bachillerato-plus-onsite"}'>Bachillerato Presencial</option>
                          <option label='Inglés' value='{"id_panel": "19", "id_crm":"ingles-intensivo" }'>Inglés</option>
                          <option label='PreIcfes' value='{"id_panel": "3", "id_crm": "preicfes" }'>PreIcfes</option>
                          <option label='Técnicos Laborales' value='{"id_panel": "44", "id_crm":"6279265fdb9de50f6405ad9d" }'>Técnicos Laborales</option>
                        </select>
                      </div>
                    </div>
                    <div className={`register_button  ${loading ? 'disabled' : ''}`}
                      onClick={() => !loading ? handleSubmit() : {}}
                    >
                      Regístrate ahora
                    </div>
                  </div>
                  <div className={`terms_text`}>
                    *Al hacer click, acepto los <span><a href='/legal-page'>términos y condiciones</a></span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div id={`our_programs_container`} className={`mobile_our_programs_container fade_in_from_bottom`}>
            <div className={`main_text`}>
              Kuepa es una institución educativa certificada que implementa programas educativos diseñados para mejorar rápidamente la empleabilidad de los jóvenes de América Latina.
            </div>
            <div className={`text_container`}>
              Nuestros programas
            </div>
            <div className={`programs_container`}>
              <div className={`program`}>
                <div className={`background_container`}>
                  <img loading="lazy" src={bachilleratoAcelerado} alt="test" style={{ marginTop: '-35px' }} />
                </div>
                <div className={`name_description_container`}>
                  <div className={`name_container`}>
                    Bachillerato acelerado
                  </div>
                  <div className={`description_container`}>
                    <div className={`text`}>
                      El mejor programa de bachillerato por ciclos del país por 3 motivos:
                    </div>
                    <div className={`text`}>
                      1. Somos expertos en modalidad virtual
                    </div>
                    <div className={`text`}>
                      2. Excelentes resultados Saber 11 en los últimos 5 años
                    </div>
                    <div className={`text`}>
                      3. Formación en habilidades para el trabajo y la vida.
                    </div>
                  </div>
                  <div className={`custom_button`}>
                    <div className={`inner_text`}>
                      Conoce más
                    </div>
                  </div>
                </div>
              </div>
              <div className={`program`}>
                <div className={`background_container`}>
                  <img loading="lazy" src={tecnicosLaborales} alt="test" style={{ marginTop: '-15px' }} />
                </div>
                <div className={`name_description_container`}>
                  <div className={`name_container`}>
                    Técnicos laborales
                  </div>
                  <div className={`description_container`}>
                    <div className={`text`}>
                      Programas flexibles en las áreas de tecnología, administración, mercadeo y turismo con práctica remunerada en más de 400 empresas en todo el país. Con certificaciones adicionales de industria y academia.
                    </div>
                  </div>
                  <div className={`custom_button`}>
                    <div className={`inner_text`}>
                      Conoce más
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div id={`already_student`} className={`mobile_programs_stats_container`}>
            <div className={`top_text_container`}>
              <div className={`top_text`}>
                Nuestros programas te enseñan todo lo que necesitas para ingresar al mundo laboral,
              </div>
              <div className={`bottom_text`}>
                a la vez que te permiten empezar tu tránsito a tu carrera profesional en convenio con la universidad más avanzada en la virtualidad en Colombia.
              </div>
            </div>
            <div className={`stats_container`}>
              <div className={`stat_item`}>
                <div className={`numbers`}>
                  <div className={`scroll_up_1`} >
                    <div>0</div>
                    <div>1</div>
                    <div>2</div>
                    <div>3</div>
                    <div>4</div>
                    <div>5</div>
                    <div>6</div>
                  </div>
                  <div className={`text`}>de</div>
                  <div className={`scroll_up_2`}>
                    <div>0</div>
                    <div>1</div>
                    <div>2</div>
                    <div>3</div>
                    <div>4</div>
                    <div>5</div>
                    <div>6</div>
                    <div>7</div>
                    <div>8</div>
                    <div>9</div>
                    <div>10</div>
                  </div>
                </div>
                <div className={`description`}>
                  de nuestros practicantes son contratados por su empresa patrocinadora una vez terminan su fase productiva.
                </div>
              </div>
              <div className={`stat_item`}>
                <div className={`numbers`}>
                  <div>+</div>
                  <div className={`scroll_up_1`}>
                    <div>0</div>
                    <div>200</div>
                    <div>500</div>
                    <div>1.000</div>
                    <div>1.200</div>
                    <div>1.500</div>
                    <div>2.000</div>
                  </div>
                </div>
                <div className={`description`}>
                  personas han tenido una práctica laboral patrocinada y certificada en los últimos 18 meses.
                </div>
              </div>
              <div className={`stat_item`}>
                <div className={`numbers`}>
                  <div className={`scroll_up_3`}>
                    <div>0</div>
                    <div>5</div>
                    <div>15</div>
                    <div>25</div>
                    <div>35</div>
                    <div>45</div>
                    <div>55</div>
                    <div>65</div>
                    <div>75</div>
                  </div>
                  <div>%</div>
                </div>
                <div className={`description`}>
                  de nuestros egresados están trabajando o estudiando en solo 3 meses después de haber terminado sus estudios con nosotros.
                </div>
              </div>
            </div>
          </div>
          <div id={`methodology`} className={`mobile_methodology_container`}>
            <div className={`title`}>
              Metodología
            </div>
            <div className={`subtitle`}>
              <div className={`top`}>
                La metodología Kuepa combina tecnología de punta, modelos pedagógicos contemporáneos y análisis de datos para lograr la combinación de calidad y asequibilidad que necesitas en tu formación.
              </div>
              <div className={`bottom`}>
                Aquí te contamos las 4 claves de nuestro modelo académico:
              </div>
            </div>
            <div id={`methodoly_custom_carrousel`} className={`methodoly_custom_carrousel`}>
              {list?.map((item, index, self) =>
                <div className={`${index === 0 || index === self?.length - 1 ? 'ignored' : 'image_container'} ${data === index - 1 ? 'active' : ''}`}
                  onClick={() => handleScroll(index === 0 ? self?.length - 1 : index === self?.length - 1 ? 0 : index - 1)}
                >
                  <img loading="lazy" className={`background_img`} src={item} alt='test' />
                </div>
              )}
            </div>
            <div className={`carrousel_navigation`}>
              <div className={`item ${data === 0 ? 'active' : ''}`}
                onClick={() => {
                  handleScroll(0)
                }}
              />
              <div className={`item ${data === 1 ? 'active' : ''}`}
                onClick={() => {
                  handleScroll(1)
                }}
              />
              <div className={`item ${data === 2 ? 'active' : ''}`}
                onClick={() => {
                  handleScroll(2)
                }}
              />
              <div className={`item ${data === 3 ? 'active' : ''}`}
                onClick={() => {
                  handleScroll(3)
                }}
              />
            </div>
          </div>
          <div className={`mobile_our_stories_container`}>
            <div className={'title_container'}>
              <div className={'title'}>
                Nuestras historias
              </div>
              <div className={'subtitle'}>
                ¿Qué opinan nuestros estudiantes?
              </div>
            </div>
            <div className='scrolls_container'>
              <div className={`scroll animate`}>
                <div className={`item`}>
                  <div className={`cuotes`}>
                    <img loading="lazy" src={cuotes} alt='test' width='64px' height='51px' />
                  </div>
                  <div className={`text`}>
                    "Gracias Kuepa por la oportunidad, y el crecimiento que me llevo. Ha aportado muchas cosas positivas, actualmente ya me gradué y me encuentro trabajando y lo mas importante es que estoy ejerciendo lo que estudie. "
                  </div>
                  <div className={`user_container`}>
                    <div className={`avatar`}>
                      <img loading="lazy" src={katrinAvatar} alt='test' width='32px' height='32px' />
                    </div>
                    <div className={`name_program`}>
                      <div className={`name`}>
                        Katrin Moreno
                      </div>
                      <div className={`program`}>
                        Técnico Auxiliar administrativo
                      </div>
                    </div>
                  </div>
                </div>
                <div className={`item clickeable`}
                  onClick={() => setVideo('samuelVideo')}
                >
                  <div className={`cuotes`}>
                  </div>
                  <div className={`text`}>
                    <img loading="lazy" src={play} alt='test' width='100px' height='100px' />
                  </div>
                  <div className={`user_container`}>
                    <div className={`avatar`}>
                      <img loading="lazy" src={samuelAvatar} alt='test' width='32px' height='32px' />
                    </div>
                    <div className={`name_program`}>
                      <div className={`name`}>
                        Samuel Poveda
                      </div>
                      <div className={`program`}>
                        Bachillerato
                      </div>
                    </div>
                  </div>
                </div>
                <div className={`item`}>
                  <div className={`cuotes`}>
                    <img loading="lazy" src={cuotes} alt='test' width='64px' height='51px' />
                  </div>
                  <div className={`text`}>
                    "Hay muchas oportunidades , tienen que salir y buscar otras opciones que les quiten menos tiempo, soy deportista de patinaje de alta velocidad y Kuepa me permitió estudiar y no descuidar mi deporte y llevar ambas en un mismo nivel ¡Gracias Kuepa!"
                  </div>
                  <div className={`user_container`}>
                    <div className={`avatar`}>
                      <img loading="lazy" src={alisonAvatar} alt='test' width='32px' height='32px' />
                    </div>
                    <div className={`name_program`}>
                      <div className={`name`}>
                        Alison Cardozo
                      </div>
                      <div className={`program`}>
                        Virtual y deportista
                      </div>
                    </div>
                  </div>
                </div>
                <div className={`item clickeable`}
                  onClick={() => setVideo('niniVideo')}
                >
                  <div className={`cuotes`}>
                  </div>
                  <div className={`text`}>
                    <img loading="lazy" src={play} alt='test' width='100px' height='100px' />
                  </div>
                  <div className={`user_container`}>
                    <div className={`avatar`}>
                      <img loading="lazy" src={niniAvatar} alt='test' width='32px' height='32px' />
                    </div>
                    <div className={`name_program`}>
                      <div className={`name`}>
                        Nini Castro
                      </div>
                      <div className={`program`}>
                        Técnico auxiliar administrativo
                      </div>
                    </div>
                  </div>
                </div>
                <div className={`item`}>
                  <div className={`cuotes`}>
                    <img loading="lazy" src={cuotes} alt='test' width='64px' height='51px' />
                  </div>
                  <div className={`text`}>
                    "Me impulso demasiado a seguir estudiando, es una excelente oportunidad de crecimiento laboral, personal y profesional. No era partidario de la virtualidad pero acá tienen alternancia de venir un día y compartir con mis compañeros”
                  </div>
                  <div className={`user_container`}>
                    <div className={`avatar`}>
                      <img loading="lazy" src={jonathanAvatar} alt='test' width='32px' height='32px' />
                    </div>
                    <div className={`name_program`}>
                      <div className={`name`}>
                        Jonathan Niño
                      </div>
                      <div className={`program`}>
                        Mercadeo y Ventas
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className={`scroll animate last`}>
                <div className={`item`}>
                  <div className={`cuotes`}>
                    <img loading="lazy" src={cuotes} alt='test' width='64px' height='51px' />
                  </div>
                  <div className={`text`}>
                    "Gracias Kuepa por la oportunidad, y el crecimiento que me llevo. Ha aportado muchas cosas positivas, actualmente ya me gradué y me encuentro trabajando y lo mas importante es que estoy ejerciendo lo que estudie. "
                  </div>
                  <div className={`user_container`}>
                    <div className={`avatar`}>
                      <img loading="lazy" src={katrinAvatar} alt='test' width='32px' height='32px' />
                    </div>
                    <div className={`name_program`}>
                      <div className={`name`}>
                        Katrin Moreno
                      </div>
                      <div className={`program`}>
                        Técnico Auxiliar administrativo
                      </div>
                    </div>
                  </div>
                </div>
                <div className={`item clickeable`}
                  onClick={() => setVideo('samuelVideo')}
                >
                  <div className={`cuotes`}>
                  </div>
                  <div className={`text`}>
                    <img loading="lazy" src={play} alt='test' width='100px' height='100px' />
                  </div>
                  <div className={`user_container`}>
                    <div className={`avatar`}>
                      <img loading="lazy" src={samuelAvatar} alt='test' width='32px' height='32px' />
                    </div>
                    <div className={`name_program`}>
                      <div className={`name`}>
                        Samuel Poveda
                      </div>
                      <div className={`program`}>
                        Bachillerato
                      </div>
                    </div>
                  </div>
                </div>
                <div className={`item`}>
                  <div className={`cuotes`}>
                    <img loading="lazy" src={cuotes} alt='test' width='64px' height='51px' />
                  </div>
                  <div className={`text`}>
                    "Hay muchas oportunidades , tienen que salir y buscar otras opciones que les quiten menos tiempo, soy deportista de patinaje de alta velocidad y Kuepa me permitió estudiar y no descuidar mi deporte y llevar ambas en un mismo nivel ¡Gracias Kuepa!"
                  </div>
                  <div className={`user_container`}>
                    <div className={`avatar`}>
                      <img loading="lazy" src={alisonAvatar} alt='test' width='32px' height='32px' />
                    </div>
                    <div className={`name_program`}>
                      <div className={`name`}>
                        Alison Cardozo
                      </div>
                      <div className={`program`}>
                        Virtual y deportista
                      </div>
                    </div>
                  </div>
                </div>
                <div className={`item clickeable`}
                  onClick={() => setVideo('niniVideo')}
                >
                  <div className={`cuotes`}>
                  </div>
                  <div className={`text`}>
                    <img loading="lazy" src={play} alt='test' width='100px' height='100px' />
                  </div>
                  <div className={`user_container`}>
                    <div className={`avatar`}>
                      <img loading="lazy" src={niniAvatar} alt='test' width='32px' height='32px' />
                    </div>
                    <div className={`name_program`}>
                      <div className={`name`}>
                        Nini Castro
                      </div>
                      <div className={`program`}>
                        Técnico auxiliar administrativo
                      </div>
                    </div>
                  </div>
                </div>
                <div className={`item`}>
                  <div className={`cuotes`}>
                    <img loading="lazy" src={cuotes} alt='test' width='64px' height='51px' />
                  </div>
                  <div className={`text`}>
                    "Me impulso demasiado a seguir estudiando, es una excelente oportunidad de crecimiento laboral, personal y profesional. No era partidario de la virtualidad pero acá tienen alternancia de venir un día y compartir con mis compañeros”
                  </div>
                  <div className={`user_container`}>
                    <div className={`avatar`}>
                      <img loading="lazy" src={jonathanAvatar} alt='test' width='32px' height='32px' />
                    </div>
                    <div className={`name_program`}>
                      <div className={`name`}>
                        Jonathan Niño
                      </div>
                      <div className={`program`}>
                        Mercadeo y Ventas
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {video?.length ?
              <div className={`custom_video_player`}>
                <div className={`content`}>
                  <div className={`close_button`}
                    onClick={() => setVideo('')}
                  >
                    <img loading="lazy" src={close} alt='test' width='16px' height='16px' />
                  </div>
                  <video src={video === 'niniVideo' ? 'https://d1lkn153fcyomr.cloudfront.net/mkNiBjkW9A0XpcDOxbeQ.mp4' : 'https://d1lkn153fcyomr.cloudfront.net/AtZJPsLvZTrSBAflSB1N.mp4'} controls playsInline />
                </div>
              </div>
              : null}
          </div>
          <div id={`platform`} className={`mobile_who_we_are_container`}>
            <div className={`container fade_in_from_bottom`}>
              <div className={`logo`}>
                <img loading="lazy" src={ketKuepaEduTechLogoV2} alt='test' width='312px' height='53px' />
              </div>
              <div className={`top_text`}>
                ¿Quiénes somos?
              </div>
              <div className={`bottom_text`}>
                <span className={'heavy'}>Kuepa</span> es una institución educativa, parte de <span className={'heavy'}>Kuepa Edutech</span>, una <span className={'heavy'}>EdTech</span> colombiana entre las más influyentes de la región, prueba de ello es la selección hecha por la revista <span className={'special'}>Time</span> como una de las <span className={'heavy'}>250 EdTech más importantes en el mundo en 2.023 en la posición 68</span>. Además, la única colombiana en el listado.
                <div>
                  Si quieres saber más
                </div>
              </div>
              <div className={`custom_button`}>
                <div className={`inner_text`}>
                  Visita Kuepa Edutech
                </div>
              </div>
            </div>
          </div>
          <div className={`mobile_kuepa_attitude_container`}>
            <div className={`title`}>
              Actitudes Kuepa
            </div>
            <div className={`description`}>
              Las actitudes que destacan a nuestros estudiantes de Kuepa
            </div>
            <div className={`main_card_container`}>
              <div id={`custom_carrousel`} className={`custom_carrousel`}>
                {list?.map((item, index) =>
                  <div id={`custom_card_${index}`} className={`custom_card`}
                    onClick={() => handleScroll(index)}
                  >
                    <div className={`top`}>
                      <div className={`icon`}>
                        <img loading="lazy" src={item?.icon} alt='test' width='28px' height='28px' />
                      </div>
                      <div className={`text`}>
                        {item?.title}
                      </div>
                    </div>
                    <div className={`middle`}>
                      {item?.description}
                    </div>
                    <div className={`bottom`}>
                      {item?.name}
                    </div>
                  </div>
                )}
              </div>
            </div>
            <div className={`carrousel_navigation`}>
              <div className={`item ${data === 0 ? 'active' : ''}`}
                onClick={() => handleScroll(0)}
              />
              <div className={`item ${data === 1 ? 'active' : ''}`}
                onClick={() => handleScroll(1)}
              />
              <div className={`item ${data === 2 ? 'active' : ''}`}
                onClick={() => handleScroll(2)}
              />
              <div className={`item ${data === 3 ? 'active' : ''}`}
                onClick={() => handleScroll(3)}
              />
              <div className={`item ${data === 4 ? 'active' : ''}`}
                onClick={() => handleScroll(4)}
              />
              <div className={`item ${data === 5 ? 'active' : ''}`}
                onClick={() => handleScroll(5)}
              />
            </div>
          </div>
          <div className={`mobile_headquarters_container`}>
            <div className={`title`}>
              Nuestras sedes
            </div>
            <div className={`cards_container`}>
              <div id={`left_card`} className={`custom_card normal`}>
                <img loading="lazy" className={`background`} src={calle72} alt='test' width='535px' height='320px' />
                <div className={`name`}>
                  Sede calle 72
                </div>
                <div className={`direction`}>
                  Calle 72 #13-34, Bogotá - Colombia
                </div>
              </div>
              <div id={`right_card`} className={`custom_card normal`}>
                <img loading="lazy" className={`background`} src={calle85} alt='test' width='535px' height='320px' />
                <div className={`name`}>
                  Sede Calle 85
                </div>
                <div className={`direction`}>
                  Ac. 85 #19b-02, Bogotá - Colombia
                </div>
              </div>
            </div>
          </div>
          <div className={`mobile_blogs_container`}>
            <div className={`title`}>
              Blog Kueparlantes
            </div>
            <div className={`subtitle`}>
              Mantente informado con nuestras noticias, comunicados, datos curiosos, cultura general e información
              <div>de tu interés.</div>
            </div>
            <div id={`scroll_cards_container`} className={`cards_container`}>
              {blogsByAlliances?.map((blog: any, index) =>
                <div className={`custom_card`}
                  onClick={() => handleScroll(index)}
                >
                  <div className={`background_image`}>
                    <img loading="lazy" src={blog?.image_post} alt='test' width='311px' height='160px' />
                  </div>
                  <div className={`top_text`}>
                    {blog?.title}
                  </div>
                  <div className={`middle_text`}>
                    {blog?.description}
                  </div>
                  <div className={`bottom_text`}>
                    <a href={blog?.redirect_url} target="_blank" rel="noreferrer">
                      Seguir leyendo
                    </a>
                  </div>
                </div>
              )}
            </div>
            <div className={`carrousel_navigation`}>
              <div className={`item ${data === 0 ? 'active' : ''}`}
                onClick={() => handleScroll(0)}
              />
              <div className={`item ${data === 1 ? 'active' : ''}`}
                onClick={() => handleScroll(1)}
              />
              <div className={`item ${data === 2 ? 'active' : ''}`}
                onClick={() => handleScroll(2)}
              />
            </div>
          </div>
          <div className={`mobile_footer_container`}>
            <div className={`main_component`}>
              <div className={`top_icon`}>
                <img loading="lazy" src={kuepaLogo} alt='test' width={'200px'} height={'57px'} />
              </div>
              <div className={`text_container`}>
                <div className={`custom_text_bold`}
                  onClick={() => handleScroll({ id: 'our_programs', offset: -160 })}
                >
                  Nuestros programas
                </div>
                <div className={`custom_text`}>
                  Técnico Laboral en Auxiliar Administrativo
                </div>
                <div className={`custom_text`}>
                  Técnico Laboral en Mercadeo y Ventas
                </div>
                <div className={`custom_text`}>
                  Bachillerato semipresencial
                </div>
                <div className={`custom_text`}>
                  Bachillerato presencial
                </div>
              </div>
              <div className={`text_container`}>
                <div className={`custom_text_bold`}
                  onClick={() => handleScroll({ id: 'methodology', offset: 70 })}
                >
                  Metodología
                </div>
                <div className={`custom_text_bold`}
                  onClick={() => handleScroll({ id: 'blogs', offset: -50 })}
                >
                  Blog Kueparlantes
                </div>
                <div className={`custom_text_bold`}>
                  <a href="/legal" target="_blank" rel="noreferrer" aria-label='legal'>
                    Políticas de privacidad
                  </a>
                </div>
                <div className={`custom_text_bold`}>
                  <a href='https://docs.google.com/forms/d/1HWLQ7HezUhg8-UjBi4JSG-iPxfhRKUfBHcPFapuXgbQ/prefill' aria-label='docs'>
                    PQRS
                  </a>
                </div>
              </div>
              <div className={`custom_text_bold`} style={{ fontWeight: '500' }}>
                Síguenos en:
              </div>
              <div className={`network_container`}>
                <a href={`https://www.instagram.com/kuepaedutech/`} target="_blank" rel="noreferrer" className={`network_item custom_text`} aria-label='isntagram'>
                  <div className={`icon_container`}>
                    <img loading="lazy" src={instagramLogo} alt='test' width={'24px'} height={'24px'} />
                  </div>
                </a>
                <a href={`https://www.facebook.com/kuepaedutech`} target="_blank" rel="noreferrer" className={`network_item custom_text`} aria-label='facebook'>
                  <div className={`icon_container`}>
                    <img loading="lazy" src={facebookLogo} alt='test' width={'24px'} height={'24px'} />
                  </div>
                </a>
                <a href={`https://www.tiktok.com/@kuepaedutech?`} target="_blank" rel="noreferrer" className={`network_item custom_text`} aria-label='tiktok'>
                  <div className={`icon_container`}>
                    <img loading="lazy" src={tiktokLogo} alt='test' width={'24px'} height={'24px'} />
                  </div>
                </a>
                <a href={`https://www.linkedin.com/company/kuepa-edutech/mycompany/`} target="_blank" rel="noreferrer" className={`network_item custom_text`} aria-label='linkedin'>
                  <div className={`icon_container`}>
                    <img loading="lazy" src={linkedInLogo} alt='test' width={'24px'} height={'24px'} />
                  </div>
                </a>
              </div>
              <div className={`bottom_icon`}>
                <img loading="lazy" src={footerLogos} alt='test' width={'121px'} height={'74px'} />
              </div>
            </div>
            <div className={`bottom_container`}>
              Copyright 2024. Todos los derechos reservados.
            </div>
          </div>
        </div>
      </div>
    </div>
  )

  return (
    // <div className='contenedor_de_puntos'>
    //   <div id='l1' className='linea'>
    //     linea
    //   </div>
    //   <div
    //     id='p1' className='punto _1'
    //     onClick={() => updateLinePosition()}
    //   >
    //     1
    //   </div>
    //   <div id='p2' className='punto _2'>
    //     2
    //   </div>
    // </div>
    <div className='main_container'>
      {!wlAppData || wlAppData?.appData?.continue ?
        <Welcome wlAppData={wlAppData} setWlAppData={setWlAppData} />
        :
        <>
          <Calendar wlAppData={wlAppData} setWlAppData={setWlAppData} />
          <DayData wlAppData={wlAppData} setWlAppData={setWlAppData} />
        </>
      }
    </div>
  );
}
