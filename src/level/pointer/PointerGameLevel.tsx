import { Character } from '../../components/Character'
import { Model } from '../Model'
import { Vector3 } from 'three'

export const PointerGameLevel = () => {
  return (
    <>
      <Character />
      <Model
        url='./island.glb'
        rigidBody
        nodeName='ground2'
        materialName='Material.001'
        position={new Vector3(0, 0, 0)}
        rotation={new Vector3(0, -Math.PI / 2, 0)}
      />
    </>
  )
}
