<template>
  <select name="city" :value="selectedSelect" @change="setSelectedSelect">
    <option v-for="(city, index) in cities" :key="index" :value="city.value">{{ city.label }}</option>
  </select>
</template>
<script>
export default {
  props: ['selectedSelect', 'setSelectedSelect'],
  data() {
    return {
      cities: [
        { label: 'Калининград', value: 'Kaliningrad' },
        { label: 'Москва', value: 'Moscow' },
        { label: 'Самара', value: 'Samara' },
        { label: 'Омск', value: 'Omsk' },
        { label: 'Красноярск', value: 'Krasnoyarsk' },
        { label: 'Иркутск', value: 'Irkutsk' },
        { label: 'Якутск', value: 'Yakutsk' },
        { label: 'Владивосток', value: 'Vladivostok' },
        { label: 'Магадан', value: 'Magadan' },
        { label: 'Камчатка', value: 'Kamchatka' }
      ],
    }
  },
}
</script>