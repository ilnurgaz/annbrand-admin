import '../index.css'

import React from 'react'
import { required, SelectInput } from 'react-admin'

import {
    BELT_SIZES,
  GLASSES_FRAME_MATERIALS,
  GLASSES_FRAME_SHAPES,
  GOODS_COLORS,
  GOODS_COMPOSITIONS,
  GOODS_DECORS,
  GOODS_PRINT,
} from '../../../constants/goodsCharacteristics'

export const GlassesCharacteristics = () => (
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
        choices={GLASSES_FRAME_MATERIALS}
        source='characteristics.Материал'
        validate={[required()]}
        defaultValue={GLASSES_FRAME_MATERIALS[0].name}
        optionValue='name'
      />
    </div>
    <div className='block'>
      <SelectInput
        className='block__select'
        choices={GLASSES_FRAME_SHAPES }
        source='characteristics.Форма оправы'
        validate={[required()]}
        defaultValue={GLASSES_FRAME_SHAPES [0].name}
        optionValue='name'
      />
    </div>
  </>
)
