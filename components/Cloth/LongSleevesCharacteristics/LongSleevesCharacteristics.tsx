import '../index.css'

import { required, SelectInput } from 'react-admin'

import {
  GOODS_COLLARS,
  GOODS_COLLECTIONS,
  GOODS_COLORS,
  GOODS_COMPOSITIONS,
  GOODS_DECORS,
  GOODS_FABRIC_TYPES,
  GOODS_FEATURES,
  GOODS_PRINT,
  GOODS_SEASONS,
  GOODS_SILHOUETTE,
  GOODS_SLEEVES,
} from '../../../constants/goodsCharacteristics'

export const LongSleevesCharacteristics = () => (
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
        choices={GOODS_SILHOUETTE}
        source='characteristics.Силуэт'
        validate={[required()]}
        defaultValue={GOODS_SILHOUETTE[0].name}
        optionValue='name'
      />
      <SelectInput
        className='block__select'
        choices={GOODS_PRINT}
        source='characteristics.Принт'
        validate={[required()]}
        defaultValue={GOODS_PRINT[0].name}
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
        choices={GOODS_SEASONS}
        source='characteristics.Сезон'
        validate={[required()]}
        defaultValue={GOODS_SEASONS[0].name}
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
    </div>
    <div className='block'>
      <SelectInput
        className='block__select'
        choices={GOODS_FEATURES}
        source='characteristics.Особенности'
        validate={[required()]}
        defaultValue={GOODS_FEATURES[0].name}
        optionValue='name'
      />
      <SelectInput
        className='block__select'
        choices={GOODS_FABRIC_TYPES}
        source='characteristics.Тип ткани'
        validate={[required()]}
        defaultValue={GOODS_FABRIC_TYPES[0].name}
        optionValue='name'
      />
      <SelectInput
        className='block__select'
        choices={GOODS_SLEEVES}
        source='characteristics.Рукав'
        validate={[required()]}
        defaultValue={GOODS_SLEEVES[0].name}
        optionValue='name'
      />
    </div>
  </>
)
