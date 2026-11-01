var gdjs;(function(t){const a={Neutral:"NeutralToneMapping",ACESFilmic:"ACESFilmicToneMapping",AgX:"AgXToneMapping",Reinhard:"ReinhardToneMapping",Cineon:"CineonToneMapping"},i=s=>a.hasOwnProperty(s),n={defines:{TONE_MAPPING_FUNCTION:a.Neutral},uniforms:{tDiffuse:{value:null},exposure:{value:1}},vertexShader:`
      varying vec2 vUv;

      void main() {
        vUv = uv;
        gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
      }`,fragmentShader:`
      #include <common>
      #include <tonemapping_pars_fragment>

      uniform sampler2D tDiffuse;
      uniform float exposure;

      varying vec2 vUv;

      void main() {
        vec4 color = texture2D(tDiffuse, vUv);
        gl_FragColor = vec4(TONE_MAPPING_FUNCTION(color.rgb * exposure), color.a);
      }`};t.PixiFiltersTools.registerFilterCreator("Scene3D::ToneMapping",new class{makeFilter(s,o){return typeof THREE=="undefined"?new t.PixiFiltersTools.EmptyFilter:new class{constructor(){this._isEnabled=!1;this._mode="Neutral";this.shaderPass=new THREE_ADDONS.ShaderPass(n)}isEnabled(e){return this._isEnabled}setEnabled(e,r){return this._isEnabled===r?!0:r?this.applyEffect(e):this.removeEffect(e)}applyEffect(e){return e instanceof t.Layer?(e.getRenderer().addPostProcessingPass(this.shaderPass,o.name),this._isEnabled=!0,!0):!1}removeEffect(e){return e instanceof t.Layer?(e.getRenderer().removePostProcessingPass(this.shaderPass),this._isEnabled=!1,!0):!1}updatePreRender(e){}updateDoubleParameter(e,r){e==="exposure"&&(this.shaderPass.uniforms.exposure.value=Math.max(0,r))}getDoubleParameter(e){return e==="exposure"?this.shaderPass.uniforms.exposure.value:0}updateStringParameter(e,r){e==="mode"&&this._setMode(r)}_setMode(e){!i(e)||e===this._mode||(this._mode=e,this.shaderPass.material.defines.TONE_MAPPING_FUNCTION=a[this._mode],this.shaderPass.material.needsUpdate=!0)}updateColorParameter(e,r){}getColorParameter(e){return 0}updateBooleanParameter(e,r){}getNetworkSyncData(){return{m:this._mode,e:this.shaderPass.uniforms.exposure.value}}updateFromNetworkSyncData(e){this._setMode(e.m),this.shaderPass.uniforms.exposure.value=e.e}}}})})(gdjs||(gdjs={}));
//# sourceMappingURL=ToneMappingEffect.js.map
