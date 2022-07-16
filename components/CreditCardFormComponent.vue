<template>
  <v-container fluid>
    <v-row>
      <v-col style="display: flex; justify-content: center; align-items: center">
        <div>
          <card-component
            :card-name="cardName"
            :card-number="cardNumber"
            :card-month="cardMonth"
            :card-year="cardYear"
            :card-cvv="cardCvv"
          ></card-component>
        </div>

      </v-col>
      <v-col>
        <v-form v-model="form" :disabled="loading">
          <v-row>
            <v-col>
              <v-text-field
                hide-details
                outlined
                v-model="amount"
                :rules="amountRules"
                label="Yatırım Miktarı (TL)"
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
                :rules="cardNameRules"
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
                :rules="cardNumberRules"
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
                :rules="cardCvvRules"
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
        :loading="loading"
        block
        color="primary"
        class="pa-5 mt-5"
        :disabled="!form"
        @click="pay()"
      >
        {{amount > 0 ? amount + ' TL': ''}} ÖDEME YAP
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
  name: "CreditCardFormComponent",
  data() {
    return {
      loading: false,
      form: false,
      amount: 50,
      cardName: "",
      cardNumber: "",
      cardMonth: 1,
      cardYear: new Date().getFullYear(),
      cardCvv: "",
      amountRules: [
        v => !!v || 'Yatırım Miktarı alanı gereklidir',
        v => v >= 50 || 'Yatırım Miktarı en az 50 olmalıdır',
      ],
      cardNameRules: [
        v => !!v || 'Kart Sahibi Adı alanı gereklidir'
      ],
      cardNumberRules: [
        v => !!v || 'Kart Numarası Adı alanı gereklidir',
        v => v.length === 16 || 'CVV 3 haneli olmalıdır',
      ],
      cardCvvRules: [
        v => !!v || 'CVV alanı gereklidir',
        v => v.length === 3 || 'CVV 3 haneli olmalıdır',
      ],
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
    },
    pay() {
      this.loading = true;
      setTimeout(() => {
        this.loading = false;
        this.$emit('goStep', 3);
      }, 2000);
    }

  }
}
</script>
