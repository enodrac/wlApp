//@ts-nocheck
import { useEffect, useState } from 'react';
import { IWlAppData } from '../../App';
import './calendar.scss'

const Calendar = ({ wlAppData, setWlAppData }: { wlAppData: IWlAppData, setWlAppData: any }) => {
  let monthsNames = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre']
  const [type, setType] = useState('actual')
  const [tooltipData, setTooltipData] = useState(undefined)

  const downloadFile = () => {
    let content: any = JSON.stringify(wlAppData)
    delete content?.appData
    const blob = new Blob([content], { type: 'text/plain' });
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = `wlApp`;
    link.click();
  };

  const displayCalendar = () => {
    let month: any = { ...wlAppData?.calendarData[new Date()?.toLocaleDateString().replace(/\/\d{1,2}\//, '/')], date: new Date()?.toLocaleDateString().replace(/\/\d{1,2}\//, '/') }
    let history = Object?.keys(wlAppData?.calendarData)?.map((month: any) => Object?.keys(wlAppData?.calendarData[month])?.map((date: any) => ({ ...wlAppData?.calendarData[month][date], month, date })))?.flat()
    let display = <>
      {(type === 'actual' ? [...Array(new Date(new Date().getFullYear(), new Date().getMonth() + 1, 0).getDate())] : history)?.map((_day: any, day: number) =>
        <div
          key={Math.random()?.toString()}
          id={`weight_point_${day + 1}`}
          className={`day_item`}
          style={{ height: `${((parseInt(type === 'actual' ? month[day]?.weight : _day?.weight) - parseInt(parseInt(wlAppData?.userData?.weight) < parseInt(wlAppData?.userData?.objectiveWeight) ? wlAppData?.userData?.weight : wlAppData?.userData?.objectiveWeight)) * 100) / (parseInt(parseInt(wlAppData?.userData?.heaviestWeight) > parseInt(wlAppData?.userData?.weight) ? wlAppData?.userData?.heaviestWeight : wlAppData?.userData?.weight) - parseInt(parseInt(wlAppData?.userData?.weight) < parseInt(wlAppData?.userData?.objectiveWeight) ? wlAppData?.userData?.weight : wlAppData?.userData?.objectiveWeight))}%` }}
        >
          {(type === 'actual' ? month[day]?.weight : _day?.weight) ?
            <div
              className={`weight_point`}
              onMouseEnter={() => !tooltipData && setTooltipData({ element: `weight_point_${day}`, date: type === 'actual' ? day : _day?.date, month: type === 'actual' ? month?.date : _day?.month, weight: type === 'actual' ? month[day]?.weight : _day?.weight?.includes('.0') ? type === 'actual' ? month[day]?.weight : _day?.weight?.slice(0, type === 'actual' ? month[day]?.weight : _day?.weight?.length - 2) : type === 'actual' ? month[day]?.weight : _day?.weight })}
              onMouseLeave={() => tooltipData && setTooltipData(undefined)}
            />
            : null}
        </div>
      )}
    </>
    let display2 = <>


      <div className='day_input_container'>
        <input
          className='day_data'
          min={0}
          max={parseInt(parseInt(wlAppData?.userData?.heaviestWeight) > parseInt(wlAppData?.userData?.weight) ? wlAppData?.userData?.heaviestWeight : wlAppData?.userData?.weight) - parseInt(parseInt(wlAppData?.userData?.weight) < parseInt(wlAppData?.userData?.objectiveWeight) ? wlAppData?.userData?.weight : wlAppData?.userData?.objectiveWeight)}
          value={parseInt('95') - parseInt(parseInt(wlAppData?.userData?.weight) < parseInt(wlAppData?.userData?.objectiveWeight) ? wlAppData?.userData?.weight : wlAppData?.userData?.objectiveWeight)}
          type="range"
        />
      </div>

      {/* {(type === 'actual' ? [...Array(new Date(new Date().getFullYear(), new Date().getMonth() + 1, 0).getDate())] : history)?.map((_day: any, day: number) =>
        <div className='day_input_container'>
          {(type === 'actual' ? month[day]?.weight : _day?.weight) ?
            <input
              className='day_data'
              min={0}
              max={parseInt(parseInt(wlAppData?.userData?.heaviestWeight) > parseInt(wlAppData?.userData?.weight) ? wlAppData?.userData?.heaviestWeight : wlAppData?.userData?.weight) - parseInt(parseInt(wlAppData?.userData?.weight) < parseInt(wlAppData?.userData?.objectiveWeight) ? wlAppData?.userData?.weight : wlAppData?.userData?.objectiveWeight)}
              value={type === 'actual' ? month[day]?.weight : _day?.weight}
              type="range"
            />
            : null}
        </div>
      )} */}
    </>
    return display2
  }

  const displayLines = () => {
    let month: any = { ...wlAppData?.calendarData[new Date()?.toLocaleDateString().replace(/\/\d{1,2}\//, '/')], date: new Date()?.toLocaleDateString().replace(/\/\d{1,2}\//, '/') }
    let history = Object?.keys(wlAppData?.calendarData)?.map((month: any) => Object?.keys(wlAppData?.calendarData[month])?.map((date: any) => ({ ...wlAppData?.calendarData[month][date], month, date })))?.flat()
    let display = <>
      {(type === 'actual' ? [...Array(new Date(new Date().getFullYear(), new Date().getMonth() + 1, 0).getDate())] : history)?.map((_day: any, day: number, self: any) =>
        day < self?.length ?
          <div key={Math.random()?.toString()} className='line' style={getLineStyles({
            dot1: `weight_point_${day}`,
            dot2: `weight_point_${day + 1}`
          })} />
          : null
      )}
    </>
    return display
  }

  const getLineStyles = (params: any) => {
    const dot1: any = document.getElementById(params?.dot1);
    const dot2: any = document.getElementById(params?.dot2);

    // Get the positions of the points
    const dot1Rect = dot1.getBoundingClientRect();
    const dot2Rect = dot2.getBoundingClientRect();

    // Calculate the midpoint between the points
    const midX = ((dot1Rect.left + dot2Rect.left) / 2) + 25;
    const midY = ((dot1Rect.top + dot2Rect.top) / 2) + 25;

    // Calculate the angle of the line
    const angle = Math.atan2(dot2Rect.top - dot1Rect.top, dot2Rect.left - dot1Rect.left);

    // Calculate the width between the points
    const width = Math.sqrt(Math.pow(dot2Rect.left - dot1Rect.left, 2) + Math.pow(dot2Rect.top - dot1Rect.top, 2));

    return { left: `${midX}px`, top: `${midY}px`, width: `${width}px`, transform: `translateX(-50%) translateY(-50%) rotate(${angle}rad)` }
  }

  return (
    <div className='calendar_main_container'>
      <div className={`types_container`}>
        <div
          className={`type_button border button ${type === 'actual' ? 'active' : ''}`}
          onClick={() => setType('actual')}
        >
          mes actual
        </div>
        <div
          className={`type_button border button ${type === 'historic' ? 'active' : ''}`}
          onClick={() => setType('historic')}
        >
          historico
        </div>
      </div>
      <div
        key={Math.random()?.toString()}
        id={`custom_tooltip`}
        className={`custom_tooltip ${tooltipData ? 'visible' : ''}`}
        style={{ top: `${document.getElementById(tooltipData?.element)?.offsetTop - 99}px`, left: `${document.getElementById(tooltipData?.element)?.offsetLeft - 39}px` }}
      >
        <div className={`number`}>
          {tooltipData?.weight}
          <br />
          <div>
            {`${tooltipData?.date}/${tooltipData?.month}`}
          </div>
        </div>
        <div className={`shaft`}></div>
        <div className={'point'}></div>
      </div>
      <div className={`calendar_container border`}>
        <div className={`month_container`}>
          <div className={`month_weight_container`}>
            <div className={`month_name`}>
              {monthsNames[parseInt(new Date()?.toLocaleDateString()?.split('/')[0]) - 1]} - {new Date()?.toLocaleDateString().replace(/\/\d{1,2}\//, '/')?.split('/')[1]}
            </div>
            {!wlAppData?.calendarData[new Date()?.toLocaleDateString().replace(/\/\d{1,2}\//, '/')]?.[new Date().getDate()]?.weight ?
              <div className={`input_add_container`}>
                <input
                  className={`input border2`}
                  type="string"
                  placeholder={`Peso del dia`}
                  onChange={(e) => setWlAppData((prev: any) => ({ ...(prev ? prev : {}), appData: { ...(prev?.appData ? prev?.appData : {}), dayWeight: e?.target?.value } }))}
                />
                <div
                  className={`add button border2 ${!isNaN(parseInt(wlAppData?.appData?.dayWeight)) ? '' : 'disabled'}`}
                  onClick={() => setWlAppData((prev: any) => ({ ...(prev ? prev : {}), calendarData: { ...(prev?.calendarData ? prev?.calendarData : {}), [new Date()?.toLocaleDateString().replace(/\/\d{1,2}\//, '/')]: { ...(prev?.calendarData[new Date()?.toLocaleDateString().replace(/\/\d{1,2}\//, '/')] ? prev?.calendarData[new Date()?.toLocaleDateString().replace(/\/\d{1,2}\//, '/')] : {}), [new Date().getDate()]: { weight: prev?.appData?.dayWeight } } }, userData: { ...(prev?.userData ? prev?.userData : {}), weight: prev?.appData?.dayWeight, heaviestWeight: parseInt(prev?.appData?.dayWeight) > parseInt(prev?.userData?.heaviestWeight || '0') ? prev?.appData?.dayWeight : prev?.userData?.heaviestWeight } }))}
                >
                  actualizar
                </div>
              </div>
              : null}
          </div>
          <div key={Math.random()?.toString()} className={`days_container`}>
            <div className={`day_item_reference`}>
              {[...Array(Math.ceil((parseInt(parseInt(wlAppData?.userData?.heaviestWeight) > parseInt(wlAppData?.userData?.weight) ? wlAppData?.userData?.heaviestWeight : wlAppData?.userData?.weight) - parseInt(parseInt(wlAppData?.userData?.weight) < parseInt(wlAppData?.userData?.objectiveWeight) ? wlAppData?.userData?.weight : wlAppData?.userData?.objectiveWeight)) / 5) + 1).keys()]?.map((item: any) => parseInt(parseInt(wlAppData?.userData?.weight) < parseInt(wlAppData?.userData?.objectiveWeight) ? wlAppData?.userData?.weight : wlAppData?.userData?.objectiveWeight) + (item * 5))?.map((item: any, index: number, self: any) =>
                <>
                  <div key={Math.random()?.toString()} className={`point_reference`} >
                    <div className={`weight`}>
                      {item}
                    </div>
                  </div>
                  {index < (self?.length - 1) &&
                    <div key={Math.random()?.toString()} className={`spacer`} style={{ minHeight: `${100 / (self?.length - 1)}%` }} />
                  }
                </>
              )}
            </div>
            {displayCalendar()}
            { }
          </div>
        </div>
      </div>
      <div
        className={`download_file_container border button`}
        onClick={downloadFile}
      >
        Descargar archivo
      </div>
    </div>
  )
}

export default Calendar