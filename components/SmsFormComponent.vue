<template>
  <v-container fluid>
    <v-row v-if="smsStatus === 'success'">
      <v-col>
        <v-alert
          outlined
          type="success"
          text
          prominent
        >
          Ödemeniz Onaylanmıştır
        </v-alert>
      </v-col>
    </v-row>
    <v-row v-if="smsStatus === 'failed'">
      <v-col>
        <v-alert
          outlined
          type="error"
          text
          prominent
        >
          Ödemenizde Hata Oluşmuştur
        </v-alert>
      </v-col>
    </v-row>
    <v-form v-if="smsStatus === 'wait'" v-model="form" :disabled="loading">
      <v-text-field
        autofocus
        outlined
        v-model="sms"
        :rules="smsRules"
        label="SMS Kodunu Giriniz"
        required
      ></v-text-field>
      <v-btn
        :loading="loading"
        block
        color="primary"
        class="pa-5"
        :disabled="!form"
        @click="confirm()"
      >
        ONAYLA
        <v-icon
          right
          dark
        >
          mdi-cellphone-check
        </v-icon>
      </v-btn>
    </v-form>

  </v-container>
</template>

<script>
export default {
  name: "SmsFormComponent",
  data: () => {
    return {
      loading: false,
      form: false,
      smsStatus: 'wait',
      sms: '',
      confirmCheck: false,
      smsRules: [
        v => !!v || 'SMS Kodu alanı gereklidir'
      ],
    }
  },
  methods: {
    confirm() {
      this.loading = true;
      setTimeout(() => {
        this.loading = false;
        this.smsStatus = 'success';
      }, 2000);
    }
  }
}
</script>

<style scoped>

</style>
