<template>
  <gmap-map :center="center" :zoom="17" style="width:100%;  height: 600px;">
    <!-- <gmap-marker
      :key="index"
      v-for="(m, index) in markers"
      :position="m.position"
      @click="center = m.position"
    ></gmap-marker> -->
    <template v-for="(client, i) in clients">
      <gmap-marker
        v-if="client.active"
        :key="i"
        :position="client.currentPos"
        :clickable="true"
        :draggable="true"
        @click="center = client"
      ></gmap-marker>
    </template>
  </gmap-map>
</template>

<script>
export default {
  name: "GoogleMap",
  props: ["clients"],
  data() {
    return {
      center: {
        lat: 14.554768,
        lng: 121.044357
      },
      // markers: [
      //   {
      //     position: {
      //       lat: 14.554768,
      //       lng: 121.044357
      //     }
      //   }
      // ]
    };
  }
};
</script>