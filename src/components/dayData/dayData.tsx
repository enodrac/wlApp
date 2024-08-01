import { useEffect, useState } from 'react'
import { IDayData, IWlAppData } from '../../App'
import './dayData.scss'

const DayData = ({ wlAppData, setWlAppData }: { wlAppData: IWlAppData, setWlAppData: any }) => {
  const [todayData, setTodayData] = useState<IDayData['day']>()

  useEffect(() => {
    if (wlAppData?.calendarData) {
      setTodayData(wlAppData.calendarData[new Date()?.toLocaleDateString().replace(/\/\d{1,2}\//, '/')][new Date().getDate()] || {})
    }
  }, [wlAppData])

  const handleSelectedFood = (add?: boolean) => {
    let auxWlAppData = JSON.parse(JSON.stringify(wlAppData || {}))
    let auxTodayData = JSON.parse(JSON.stringify(todayData || {}))
    let foodItem: any = { [auxWlAppData?.appData?.selectedFood?.name || auxWlAppData?.appData?.foodSearch]: { ...(auxWlAppData?.appData?.selectedFood?.name ? auxWlAppData?.appData?.selectedFood : { name: auxWlAppData?.appData?.selectedFood, ...auxWlAppData?.appData?.selectedFood }) } }
    if (add && auxTodayData) {
      auxTodayData = {
        ...(auxTodayData ? auxTodayData : {}),
        foodList: {
          ...(auxTodayData?.foodList ? auxTodayData?.foodList : {}),
          ...foodItem,
        }
      }
    } else {
      delete todayData?.foodList[auxWlAppData?.appData?.selectedFood?.name]
    }
    if (!auxWlAppData?.foodData || !auxWlAppData?.foodData[auxWlAppData?.appData?.selectedFood?.name] || (auxWlAppData?.appData?.foodSearch && auxWlAppData?.foodData[auxWlAppData?.appData?.selectedFood?.name]) || foodItem[auxWlAppData?.appData?.selectedFood?.name]?.grams === '100') {
      auxWlAppData = {
        ...(auxWlAppData ? auxWlAppData : {}),
        foodData: {
          ...(auxWlAppData?.foodData ? auxWlAppData?.foodData : {}),
          ...foodItem,
        }
      }
    }
    delete auxWlAppData?.appData?.foodSearch
    delete auxWlAppData?.appData?.selectedFood
    auxWlAppData.calendarData[new Date()?.toLocaleDateString().replace(/\/\d{1,2}\//, '/')][new Date().getDate()] = auxTodayData
    setWlAppData(auxWlAppData)
  }

  const handleSelectedExercise = (add?: boolean) => {
    let auxWlAppData = JSON.parse(JSON.stringify(wlAppData || {}))
    let auxTodayData = JSON.parse(JSON.stringify(todayData || {}))
    if (add && auxTodayData) {
      auxTodayData = {
        ...(auxTodayData ? auxTodayData : {}),
        exerciseList: {
          ...(auxTodayData?.exerciseList ? auxTodayData?.exerciseList : {}),
          [auxWlAppData?.appData?.selectedExercise?.name || auxWlAppData?.appData?.exerciseSearch]: { ...auxWlAppData?.appData?.selectedExercise, name: auxWlAppData?.appData?.selectedExercise?.name || auxWlAppData?.appData?.exerciseSearch },
        }
      }
    } else {
      delete todayData?.exerciseList[auxWlAppData?.appData?.selectedExercise?.name]
    }
    delete auxWlAppData?.appData?.exerciseSearch
    delete auxWlAppData?.appData?.selectedExercise
    auxWlAppData.calendarData[new Date()?.toLocaleDateString().replace(/\/\d{1,2}\//, '/')][new Date().getDate()] = auxTodayData
    setWlAppData(auxWlAppData)
  }

  const handleUpdateAppData = (params: any) => {
    setWlAppData((prev: any) => ({ ...(prev ? prev : {}), appData: { ...(prev?.appData ? prev?.appData : {}), ...params } }))
  }

  const displaySelectedItem = (params: any) => {
    return (params?.isFood ? wlAppData?.appData?.foodSearch || params?.item : wlAppData?.appData?.exerciseSearch || params?.item) ? (
      <div className={`add_item_container`}>
        {params?.item?.name &&
          <div className={`item`}>
            <div>
              {params?.item?.name}
            </div>
            <div
              className={`delete button border`}
              onClick={() => params?.handleItem()}
            >
              X
            </div>
          </div>
        }
        <div className={`input_add_container`}>
          {(params?.isFood && params?.item?.name) || (params?.isFood && !params?.item?.name && !todayData?.foodList?.[wlAppData?.appData?.foodSearch]) || !params?.isFood ?
            <input
              className={`input border`}
              type="number"
              placeholder={params?.isFood ? 'Gramos' : 'Calorias'}
              min={0}
              onChange={(e) => params?.changeInput(e?.target?.value)}
              value={params?.isFood ? params?.item?.grams : params?.item?.calories}
            />
            : null}
          {(params?.isFood && params?.item?.name) || (!params?.isFood) ?
            <div
              className={`add button border`}
              onClick={() => params?.handleItem(true)}
            >
              {(params?.isFood ? todayData?.foodList?.[wlAppData?.appData?.foodSearch || params?.item?.name] : todayData?.exerciseList?.[wlAppData?.appData?.exerciseSearch]) ? 'Actualizar' : 'Agregar'}
            </div>
            : null}
        </div>
      </div>
    ) : null
  }

  const displayCalories = () => {
    let dailyCalories: any = ((10 * parseInt(wlAppData?.userData?.weight ? wlAppData?.userData?.weight : '0')) + (6.25 * parseInt(wlAppData?.userData?.height ? wlAppData?.userData?.height : '0')) - (5 * parseInt(wlAppData?.userData?.age ? wlAppData?.userData?.age : '0')) + (wlAppData?.userData?.gender === 'male' ? 5 : -161))?.toFixed(0) || 0
    let foodCalories: any = todayData?.foodList ? Object.values(todayData?.foodList)?.reduce((acc: any, food: any) => acc += (parseInt(food?.grams) / 100) * parseInt(food?.calories), 0) : 0
    let exerciseCalories: any = todayData?.exerciseList ? Object.values(todayData?.exerciseList)?.reduce((acc: any, exercise: any) => acc += parseInt(exercise?.calories), 0) : 0
    return (
      <div className={'data_container border'}>
        <div>
          Calorias diarias: <b>{Math.ceil(dailyCalories)}</b>
        </div>
        <div>
          calorias ingeridas: <b>{Math.ceil(foodCalories)}</b>
        </div>
        <div>
          Calorias ejercitadas: <b>{Math.ceil(exerciseCalories)}</b>
        </div>
        <div>
          deficit calorico: <b>{Math.ceil(parseInt(dailyCalories) - parseInt(foodCalories) - parseInt(exerciseCalories))}</b>
        </div>
      </div>
    )
  }

  return (
    <div className={`day_data_main_container`}>
      <div className='food_exercise_container'>
        <div className={`food_container border`}>
          <input
            className={`input border`}
            value={wlAppData?.appData?.foodSearch || ''}
            onChange={(e: any) => handleUpdateAppData({ foodSearch: e?.target?.value, selectedFood: undefined })}
            type="text"
          />
          {displaySelectedItem({
            isFood: true,
            item: wlAppData?.appData?.selectedFood,
            handleItem: handleSelectedFood,
            changeInput: (value: any) => handleUpdateAppData({ selectedFood: { ...wlAppData?.appData?.selectedFood, grams: value } }),
          })}
          {wlAppData?.appData?.foodSearch && !wlAppData?.foodData?.[wlAppData?.appData?.foodSearch] ?
            <>
              <div className='label'>
                Agregar comida a la lista global
              </div>
              <div className={`global input_add_container`}>
                <input
                  className={`input border`}
                  type="number"
                  placeholder={'Calorias'}
                  min={0}
                  onChange={(e) => handleUpdateAppData({ selectedFood: { ...wlAppData?.appData?.selectedFood, calories: e?.target?.value } })}
                />
                <div
                  className={`add button border`}
                  onClick={() => handleSelectedFood(true)}
                >
                  Agregar
                </div>
              </div>
            </>
            : null}
          <div className={`items_container custom-scroll`}>
            {[...Object.keys({ ...(todayData?.foodList ? todayData?.foodList : {}), ...(wlAppData.foodData && wlAppData?.appData?.foodSearch ? wlAppData.foodData : {}) })]?.filter((food: any) => wlAppData?.appData?.foodSearch ? food?.includes(wlAppData?.appData?.foodSearch) : true)?.map((food: any) =>
              <div
                className={`item`}
                onClick={() => handleUpdateAppData(({ selectedFood: { ...(todayData?.foodList?.[food] || wlAppData?.foodData?.[food]), name: food }, displayFood: false, foodSearch: undefined }))}
              >
                <div>
                  {food}
                </div>
                {(todayData?.foodList?.[food] || wlAppData?.foodData?.[food])?.grams ?
                  <div>
                    {`${((parseInt((todayData?.foodList?.[food] || wlAppData?.foodData?.[food])?.grams) / 100) * parseInt((todayData?.foodList?.[food] || wlAppData?.foodData?.[food])?.calories))?.toFixed(0)}kl`}
                  </div>
                  : null}
              </div>
            )}
          </div>
        </div>
        <div className={`exercise_container border`}>
          <input
            className={`input border`}
            value={wlAppData?.appData?.exerciseSearch || ''}
            onChange={(e: any) => handleUpdateAppData({ exerciseSearch: e?.target?.value, selectedExercise: undefined })}
            type="text"
          />
          {wlAppData?.appData?.selectedExercise || wlAppData?.appData?.exerciseSearch ?
            displaySelectedItem({
              item: wlAppData?.appData?.selectedExercise,
              handleItem: handleSelectedExercise,
              changeInput: (value: any) => handleUpdateAppData({ selectedExercise: { ...wlAppData?.appData?.selectedExercise, calories: value } }),
            })
            : null}
          <div className={`items_container custom-scroll`}>
            {Object.keys(todayData?.exerciseList || {})?.map((exercise: any) =>
              <div
                className={`item`}
                onClick={() => handleUpdateAppData(({ selectedExercise: todayData?.exerciseList[exercise], displayExercise: false, exerciseSearch: undefined }))}
              >
                <div>
                  {exercise}
                </div>
                <div>
                  {`${todayData?.exerciseList[exercise]?.calories}kl`}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
      {displayCalories()}
    </div>
  )
}

export default DayData