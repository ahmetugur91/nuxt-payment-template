<template>
  <v-row justify="center" align="center">
    <v-col cols="12" :md="step === 1 ? 4 : (step === 2 ? 6 : 4)" sm="12">
      <v-stepper v-model="step">
        <v-stepper-header>
          <v-stepper-step :complete="step > 1" step="1">
            TC Kimlik
          </v-stepper-step>
          <v-divider></v-divider>
          <v-stepper-step :complete="step > 2" step="2">
            Ödeme
          </v-stepper-step>
          <v-divider></v-divider>
          <v-stepper-step step="3">
            Doğrulama
          </v-stepper-step>
        </v-stepper-header>
        <v-stepper-items>
          <v-stepper-content step="1">
            <!-- TC FORM -->
            <tc-form-component @goStep="goStep($event)"></tc-form-component>
          </v-stepper-content>

          <v-stepper-content step="2">
            <!-- ÖDEME FORM -->
            <credit-card-form-component @goStep="goStep($event)"></credit-card-form-component>
          </v-stepper-content>

          <v-stepper-content step="3">
            <sms-form-component @goStep="goStep($event)"></sms-form-component>
          </v-stepper-content>
        </v-stepper-items>
      </v-stepper>
    </v-col>



  </v-row>
</template>

<script>
export default {
  name: 'IndexPage',
  data: () => {
    return {
      step: 1,
    }
  },
  methods: {
    goStep(step) {
      this.step = step
    }
  }
}
</script>
