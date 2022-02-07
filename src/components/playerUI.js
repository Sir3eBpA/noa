import vec3 from 'gl-vec3'

export default function (noa) {
    return {

        name: 'playerUI',

        order: 100,

        state: {
            playerUI: null,
            offsetY: 0,
            ownerMeshID: null
        },


        onAdd: function (eid, state) {
            // implicitly assume there's already a position component
            if (state.playerUI) {
                noa.rendering.addMeshToScene(state.playerUI, false);
            } else {
                throw new Error('Mesh component added without a mesh - probably a bug!')
            }
            
            var playerMeshData = noa.ents.getMeshData(state.ownerMeshID);
            state.playerUI.parent = playerMeshData.mesh;
            state.playerUI.position.y = state.offsetY;
        },


        onRemove: function (eid, state) {
            state.playerUI.dispose()
        },
    }
}
