import React from 'react'
import { required, SelectInput } from 'react-admin'

import {
  GOODS_COLORS,
  GOODS_COMPOSITIONS,
  GOODS_SEASONS,
} from '../../../constants/goodsCharacteristics'

const HeaddressCharacteristics = () => (
  <>
    <div className='block'>
      <SelectInput
        className='block__select'
        choices={GOODS_COLORS}
        source='characteristics.Цвет'
        validate={[required()]}
        defaultValue={GOODS_COLORS[0].name}
        optionValue='name'
      />
      <SelectInput
        className='block__select'
        choices={GOODS_COMPOSITIONS}
        source='characteristics.Состав'
        validate={[required()]}
        defaultValue={GOODS_COMPOSITIONS[0].name}
        optionValue='name'
      />
      <SelectInput
        className='block__select'
        choices={GOODS_SEASONS}
        source='characteristics.Сезон'
        validate={[required()]}
        defaultValue={GOODS_SEASONS[0].name}
        optionValue='name'
      />
    </div>
  </>
)

export default HeaddressCharacteristics
