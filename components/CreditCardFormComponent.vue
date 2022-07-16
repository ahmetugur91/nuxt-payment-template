<template>
  <v-container fluid>
    <v-row>
      <v-col>
        <card-component
        :card-name="cardName"
        :card-number="cardNumber"
        :card-month="cardMonth"
        :card-year="cardYear"
        :card-cvv="cardCvv"
        ></card-component>
      </v-col>
      <v-col>
        <v-form v-model="form">
          <v-row>
            <v-col>
              <v-text-field
                hide-details
                outlined
                v-model="amount"
                label="Yatırım Miktarı"
                @keypress="onlyNumberInput($event)"
                required
              ></v-text-field>
            </v-col>
          </v-row>

          <v-row>
            <v-col>
              <v-text-field
                hide-details
                outlined
                v-model="cardName"
                label="Kart Sahibi Adı"
                required
              ></v-text-field>
            </v-col>
          </v-row>

          <v-row>
            <v-col>
              <v-text-field
                hide-details
                outlined
                v-model="cardNumber"
                :counter="16"
                :maxlength="16"
                label="Kart Numarası"
                @keypress="onlyNumberInput($event)"
                required
              ></v-text-field>
            </v-col>
          </v-row>

          <v-row>
            <v-col>
              <v-select
                hide-details
                v-model="cardMonth" :items="[1,2,3,4,5,6,7,8,9,10,11,12]"
                outlined
                label="Ay"
                required
              ></v-select>
            </v-col>
            <v-col>
              <v-select
                hide-details
                v-model="cardYear" :items="[2022, 2023, 2024, 2025, 2026, 2027, 2028, 2029, 2030, 2031, 2032, 2033]"
                outlined
                label="Yıl"
                required
              ></v-select>
            </v-col>
            <v-col>
              <v-text-field
                hide-details
                outlined
                v-model="cardCvv"
                :maxlength="3"
                label="CVV"
                @keypress="onlyNumberInput($event)"
                required
              ></v-text-field>
            </v-col>
          </v-row>
        </v-form>
      </v-col>
      <v-btn
        block
        color="primary"
        class="pa-5 mt-5"
        :disabled="!form"
      >
        ÖDEME YAP
        <v-icon
          right
          dark
        >
          mdi-credit-card-fast-outline
        </v-icon>
      </v-btn>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "CreditCardComponent",
  data() {
    return {
      form: false,
      amount: 50,
      cardName: "",
      cardNumber: "",
      cardMonth: "",
      cardYear: "",
      cardCvv: "",
    };
  },
  mounted() {
  },
  methods: {
    onlyNumberInput: function (evt) {
      evt = (evt) ? evt : window.event;
      let expect = evt.target.value.toString() + evt.key.toString();

      if (!/^[0-9]+$/.test(expect)) {
        evt.preventDefault();
      } else {
        return true;
      }
    }
  }
}
</script>
