<template>
  <v-container fluid>
    <v-form v-model="tcFormValid" :disabled="loading">
      <v-text-field
        autofocus
        outlined
        v-model="tc"
        :rules="tcRules"
        :counter="11"
        :maxlength="11"
        label="TC Kimlik Numaranız"
        @keypress="onlyNumberInput($event)"
        required
      ></v-text-field>
      <v-checkbox
        v-model="confirmCheck"
        color="success"
        hide-details
      >
        <span slot="label" :class="{'red--text': !confirmCheck, 'success--text': confirmCheck}">TC Kimlik numarası banka sahibine aittir</span>
      </v-checkbox>
    </v-form>
    <v-btn
      :loading="loading"
      block
      color="primary"
      class="pa-5 mt-5"
      :disabled="!tcFormValid || !confirmCheck || tc.length !== 11"
      @click="checkTc()"
    >
      İleri
      <v-icon
        right
        dark
      >
        mdi-arrow-right
      </v-icon>
    </v-btn>
  </v-container>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  name: "TcFormComponent",
  data: () => {
    return {
      loading: false,
      tc: '',
      tcFormValid: false,
      confirmCheck: false,
      tcRules: [
        v => !!v || 'Bu alan gereklidir',
        v => v.length <= 11 || 'Name must be less than 10 characters',
      ],
    }
  },
  methods: {
    ...mapActions(['updateTc']),
    onlyNumberInput: function (evt) {
      evt = (evt) ? evt : window.event;
      let expect = evt.target.value.toString() + evt.key.toString();

      if (!/^[0-9]+$/.test(expect)) {
        evt.preventDefault();
      } else {
        return true;
      }
    },
    checkTc() {
      this.loading = true;
      setTimeout(() => {
        this.loading = false;
        this.updateTc(this.tc); // mutation
        this.$emit('goStep', 2);
      }, 2000);
    }
  }
}
</script>

<style scoped>

</style>
