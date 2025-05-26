import '../index.css'

import React from 'react'
import { required, SelectInput } from 'react-admin'

import {
  GOODS_COLLARS,
  GOODS_COLLECTIONS,
  GOODS_COLORS,
  GOODS_COMPOSITIONS,
  GOODS_DECORS,
  GOODS_FEATURES,
  GOODS_LINING_MATERIALS,
  GOODS_UPPER_MATERIALS,
} from '../../../constants/goodsCharacteristics'

export const OuterwearCharacteristics = () => (
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
        choices={GOODS_COLLARS}
        source='characteristics.Воротник'
        validate={[required()]}
        defaultValue={GOODS_COLLARS[0].name}
        optionValue='name'
      />
      <SelectInput
        className='block__select'
        choices={GOODS_UPPER_MATERIALS}
        source='characteristics.Верхний материал'
        validate={[required()]}
        defaultValue={GOODS_UPPER_MATERIALS[0].name}
        optionValue='name'
      />
      <SelectInput
        className='block__select'
        choices={GOODS_FEATURES}
        source='characteristics.Особенности'
        validate={[required()]}
        defaultValue={GOODS_FEATURES[0].name}
        optionValue='name'
      />
    </div>
    <div className='block'>
      <SelectInput
        className='block__select'
        choices={GOODS_DECORS}
        source='characteristics.Декор'
        validate={[required()]}
        defaultValue={GOODS_DECORS[0].name}
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
        choices={GOODS_COLLECTIONS}
        source='characteristics.Коллекция'
        validate={[required()]}
        defaultValue={GOODS_COLLECTIONS[0].name}
        optionValue='name'
      />
      <SelectInput
        className='block__select'
        choices={GOODS_LINING_MATERIALS}
        source='characteristics.Подкладка материал'
        validate={[required()]}
        defaultValue={GOODS_LINING_MATERIALS[0].name}
        optionValue='name'
      />
    </div>
  </>
)
