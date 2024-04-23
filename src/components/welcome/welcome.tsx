import { IWlAppData } from '../../App';
import './welcome.scss'

const Welcome = ({ wlAppData, setWlAppData }: { wlAppData: IWlAppData | undefined, setWlAppData: any }) => {
  const handleUpdateUserData = (params: any) => {
    setWlAppData((prev: any) => ({ ...(prev ? prev : {}), userData: { ...(prev?.userData ? prev?.userData : {}), ...params } }))
  }

  const handleFileChange = (event: any) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e: any) => {
        setWlAppData(JSON.parse(e.target.result))
      };
      reader.readAsText(file);
    }
  };

  return (
    <div className='welcome_main_container'>
      {!wlAppData?.appData?.continue ?
        <div className={`welcome_instructions border`}>
          <input className={`input_container`} type="file" onChange={handleFileChange} />
          <div className={`title`}>
            Bienvenido
          </div>
          <div className={`description`}>
            La aplicacion espera que arrastres en este recuadro un archivo de texto con los datos previos para funcionar
          </div>
          <div className={`sub_description`}>
            Si no tenes un archivo podes continuar para crearlo
          </div>
          <div
            className={`continue border button`}
            onClick={() => setWlAppData((prev: any) => ({ ...(prev ? prev : {}), appData: { ...(prev?.appData ? prev?.appData : {}), continue: true } }))}
          >
            Continuar
          </div>
        </div>
        :
        <div className={`settings_creation border`}>
          <div className={`setting_item`}>
            <div className={`label`}>Edad</div>
            <input
              className={`input border`}
              type='text'
              onChange={(e: any) => handleUpdateUserData({ age: e?.target?.value })}
            />
          </div>
          <div className={`setting_item`}>
            <div className={`label`}>Genero</div>
            <div
              className={`select_item button border ${wlAppData?.userData?.gender === 'male' ? 'active' : ''}`}
              onClick={() => handleUpdateUserData({ gender: 'male' })}
            >
              Hombre
            </div>
            <div
              className={`select_item button border ${wlAppData?.userData?.gender === 'female' ? 'active' : ''}`}
              onClick={() => handleUpdateUserData({ gender: 'female' })}
            >
              Mujer
            </div>
          </div>
          <div className={`setting_item`}>
            <div className={`label`}>Altura</div>
            <input
              className={`input border`}
              type='text'
              onChange={(e: any) => handleUpdateUserData({ height: e?.target?.value })}
            />
          </div>
          <div className={`setting_item`}>
            <div className={`label`}>Peso</div>
            <input
              className={`input border`}
              type='text'
              onChange={(e: any) => handleUpdateUserData({ weight: e?.target?.value, heaviestWeight: e?.target?.value })}
            />
          </div>
          <div className={`setting_item`}>
            <div className={`label`}>Peso deseado</div>
            <input
              className={`input border`}
              type='text'
              onChange={(e: any) => handleUpdateUserData({ objectiveWeight: e?.target?.value })}
            />
          </div>
          <div className={`setting_item`}>
            <div className={`label`}>Nombre</div>
            <input
              className={`input border`}
              type='text'
              onChange={(e: any) => handleUpdateUserData({ name: e?.target?.value })}
            />
          </div>
          <div className={`setting_item`}>
            <div
              className={`select_item continue button border`}
              onClick={() => setWlAppData((prev: any) => ({ ...(prev ? prev : {}), appData: { ...(prev?.appData ? prev?.appData : {}), continue: false }, calendarData: { [new Date()?.toLocaleDateString().replace(/\/\d{1,2}\//, '/')]: { [new Date().getDate()]: { weight: prev?.userData?.weight } } } }))}
            >
              Continuar
            </div>
          </div>
        </div>
      }
    </div>
  )
}

export default Welcome