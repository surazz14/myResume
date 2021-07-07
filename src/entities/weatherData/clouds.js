import { types} from 'mobx-state-tree'
const CloudsEntity = types
  .model('Clouds', {
    all: types.optional(types.number, 0),
  })

export default CloudsEntity
