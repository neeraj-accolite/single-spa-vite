<script>
import './style.css'
import Parcel from 'single-spa-vue/parcel'
import { mountRootParcel } from 'single-spa'
export default {
  components: {
    Parcel
  },
  data() {
    return {
      parcelConfig: System.import("@acc/helpdesk"),
      mountParcel: mountRootParcel,
      wrapWith: 'div',
      wrapStyle: {
        position:'absolute',
        bottom:0,
        right:0
      }
    }
  },
  methods: {
    // These are the props passed into the parcel
    getParcelProps() {
      return {
        initiator: `Address Vue Application`
      }
    },
    // Parcels mount asynchronously, so this will be called once the parcel finishes mounting
    parcelMounted() {
      console.log("parcel mounted");
    },
    parcelUpdated() {
      console.log("parcel updated");
    }
  }
}
</script>
<template>
   <div>
    <h2>Address Application In the VueJS Framework</h2>
    <a href="/orders" >
        Load Orders Page
      </a>
    <div>
      <Parcel
        v-on:parcelMounted="parcelMounted()"
        v-on:parcelUpdated="parcelUpdated()"
        :config="parcelConfig"
        :mountParcel="mountParcel"
        :wrapWith="wrapWith"
        :wrapClass="wrapClass"
        :wrapStyle="wrapStyle"
        :parcelProps="getParcelProps()"
      />
    </div>
  </div>

</template>