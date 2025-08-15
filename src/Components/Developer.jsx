import {useRef, useEffect} from 'react'
import {useFBX, useGLTF, useAnimations} from '@react-three/drei'

const Developer = ({animationName = 'idle', ...props}) => {
    const group = useRef()
    const { nodes, materials } = useGLTF('/models/Developer.glb')
    const { animations: idleAnimation } = useFBX('/models/animations/idle2.fbx')
    const { animations: dyingAnimation } = useFBX('/models/animations/Dying.fbx')
const { animations: clappingAnimation } = useFBX('/models/animations/clapping.fbx')

    // Ensure track names match the GLB skeleton by removing common Mixamo prefixes
    if (idleAnimation && idleAnimation[0]) {
        idleAnimation[0].name = 'idle'
        idleAnimation[0].tracks.forEach((track) => {
            // Examples we normalize: 'mixamorigLeftLeg.quaternion', 'mixamorig1:LeftLeg.quaternion', 'Armature|Hips.position'
            track.name = track.name
                .replace('mixamorig1:', '')
                .replace('mixamorig:', '')
                .replace('mixamorig', '')
                .replace('Armature|', '')
        })
    }

    if(dyingAnimation && dyingAnimation[0]){
        dyingAnimation[0].name = 'dying'
        dyingAnimation[0].tracks.forEach((track) => {

            track.name = track.name
                .replace('mixamorig1:', '')
                .replace('mixamorig:', '')
                .replace('mixamorig', '')
                .replace('Armature|', '')
        })
    }
    if(clappingAnimation && clappingAnimation[0]){
        clappingAnimation[0].name = 'clapping'
        clappingAnimation[0].tracks.forEach((track) => {
            track.name = track.name
                .replace('mixamorig1:', '')
                .replace('mixamorig:', '')
                .replace('mixamorig', '')
                .replace('Armature|', '')
        })
    }

    const { actions } = useAnimations(idleAnimation ? [idleAnimation[0] , dyingAnimation[0], clappingAnimation[0]] : [], group)

    useEffect(() => {
        const action = actions?.[animationName]
        if (action) {
            action.reset().fadeIn(0.5).play()
        }
        return () => {
            if (action) action.fadeOut(0.5)
        }
        // It is important to include actions in deps so it updates when animations are ready
    }, [actions, animationName])

    useEffect(() =>{

            if (materials.Wolf3D_Skin) {
                materials.Wolf3D_Skin.color.set("#D6A888") // Light brown/tan
            }

            if(materials.Wolf3D_Body){
                materials.Wolf3D_Body.color.set("#D6A888");
            }

        })

    return (
        <group {...props} dispose={null} ref={group}>
            <primitive object={nodes.Hips} />
            <skinnedMesh
                name="EyeLeft"
                geometry={nodes.EyeLeft.geometry}
                material={materials.Wolf3D_Eye}
                skeleton={nodes.EyeLeft.skeleton}
                morphTargetDictionary={nodes.EyeLeft.morphTargetDictionary}
                morphTargetInfluences={nodes.EyeLeft.morphTargetInfluences}
            />
            <skinnedMesh
                name="EyeRight"
                geometry={nodes.EyeRight.geometry}
                material={materials.Wolf3D_Eye}
                skeleton={nodes.EyeRight.skeleton}
                morphTargetDictionary={nodes.EyeRight.morphTargetDictionary}
                morphTargetInfluences={nodes.EyeRight.morphTargetInfluences}
            />
            <skinnedMesh
                name="Wolf3D_Head"
                geometry={nodes.Wolf3D_Head.geometry}
                material={materials.Wolf3D_Skin}
                skeleton={nodes.Wolf3D_Head.skeleton}
                morphTargetDictionary={nodes.Wolf3D_Head.morphTargetDictionary}
                morphTargetInfluences={nodes.Wolf3D_Head.morphTargetInfluences}
            />
            <skinnedMesh
                name="Wolf3D_Teeth"
                geometry={nodes.Wolf3D_Teeth.geometry}
                material={materials.Wolf3D_Teeth}
                skeleton={nodes.Wolf3D_Teeth.skeleton}
                morphTargetDictionary={nodes.Wolf3D_Teeth.morphTargetDictionary}
                morphTargetInfluences={nodes.Wolf3D_Teeth.morphTargetInfluences}
            />
            <skinnedMesh
                geometry={nodes.Wolf3D_Hair.geometry}
                material={materials.Wolf3D_Hair}
                skeleton={nodes.Wolf3D_Hair.skeleton}
            />
            <skinnedMesh
                geometry={nodes.Wolf3D_Glasses.geometry}
                material={materials.Wolf3D_Glasses}
                skeleton={nodes.Wolf3D_Glasses.skeleton}
            />
            <skinnedMesh
                geometry={nodes.Wolf3D_Outfit_Top.geometry}
                material={materials.Wolf3D_Outfit_Top}
                skeleton={nodes.Wolf3D_Outfit_Top.skeleton}
            />
            <skinnedMesh
                geometry={nodes.Wolf3D_Outfit_Bottom.geometry}
                material={materials.Wolf3D_Outfit_Bottom}
                skeleton={nodes.Wolf3D_Outfit_Bottom.skeleton}
            />
            <skinnedMesh
                geometry={nodes.Wolf3D_Outfit_Footwear.geometry}
                material={materials.Wolf3D_Outfit_Footwear}
                skeleton={nodes.Wolf3D_Outfit_Footwear.skeleton}
            />
            <skinnedMesh
                geometry={nodes.Wolf3D_Body.geometry}
                material={materials.Wolf3D_Body}
                skeleton={nodes.Wolf3D_Body.skeleton}
            />
        </group>
    )
}

export default Developer

useGLTF.preload('/models/Developer.glb')