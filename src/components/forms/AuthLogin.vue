s<template>
  <v-card max-width="400" elevation="5" class="mx-2" :loading="loading">
    <v-form>
      <v-card-title>
        <span class="title">Inicio de sesión</span>
      </v-card-title>

      <v-card-text class="pb-0">
        <v-row :no-gutters="vertical">
          <v-col cols="12" :sm="vertical ? 12 : 6">
            <v-text-field
              v-model="form.email"
              color="black"
              :error-messages="emailErrors"
              label="Email*"
              dense
              outlined
              name="login_email_input"
              @change="$v.form.email.$touch()"
            />
          </v-col>

          <v-col cols="12" :sm="vertical ? 12 : 6">
            <v-text-field
              color="black"
              v-model="form.password"
              :error-messages="passwordErrors"
              :type="passwordType"
              label="Contraseña*"
              dense
              outlined
              name="login_password_input"
              @change="$v.form.password.$touch()"
            />

            <!-- Toggle show password -->
            <v-checkbox
              on-icon="mdi-check-circle"
              off-icon="mdi-circle-outline"
              v-model="showPassword"
              dense
              class="no-hint"
            >
              <template v-slot:label>
                <span class="black--text text-body-2">Mostrar contraseña </span>
              </template>
            </v-checkbox>

            <!-- / Toggle show password -->
          </v-col>
        </v-row>

        <!-- Actions -->
        <v-card-actions class="px-0">
          <v-btn color="primary" type="submit" block @click.prevent="login">
            Entrar
          </v-btn>
        </v-card-actions>
        <!-- / Actions -->
      </v-card-text>
    </v-form>
  </v-card>
</template>

<script lang='ts'>
import { Component, Mixins } from "vue-property-decorator";
// types
import { ILoginParams } from "@/types";
// store
import { UserStore, AppStore } from "@/store";
// vuelidate
import { required, email, minLength } from "vuelidate/lib/validators";
import { AppMixin } from "@/mixins";

@Component({
  validations: {
    form: {
      email: {
        required,
        email,
      },
      password: {
        required,
        minLength: minLength(6),
        noWhiteSpaces: (_value) => _value.indexOf(" ") == -1,
      },
    },
  },
})
export default class AuthLoginForm extends Mixins(AppMixin) {
  showPassword = false;
  loading = false;
  vertical = true;

  form: ILoginParams = {
    email: "",
    password: "",
  };

  // error messages in inputs validations
  get emailErrors() {
    const errors: string[] = [];
    if (!this.$v.form.email?.$dirty) return errors;
    if (!this.$v.form.email?.required) errors.push("Email es requerido.");
    if (!this.$v.form.email?.email) errors.push("Email inválido.");
    return errors;
  }

  get passwordErrors() {
    const errors: string[] = [];
    if (!this.$v.form.password?.$dirty) return errors;
    if (!this.$v.form.password.required)
      errors.push("Contraseña es requerido.");
    if (!this.$v.form.password.minLength)
      errors.push(
        `Contraseña debe tener al menos ${this.$v.form.password.$params.minLength.min} caracteres.`
      );
    if (!this.$v.form.password.noWhiteSpaces)
      errors.push("Contraseña no debe contener espacios en blanco.");
    return errors;
  }

  /**
   *
   */
  get passwordType() {
    return this.showPassword ? "text" : "password";
  }

  /**
   *
   */
  login() {
    this.$v.form.$touch();
    if (!this.$v.form.$invalid) {
      this.loading = true;
      UserStore.login(this.form)
        .then(() => {
          UserStore.storeOnLocalStorage();
          console.log("Auth Login Done");
          this.goto({ name: "main.home" });
        })
        .catch((error) => AppStore.handleError(error))
        .finally(() => (this.loading = false));
    }
  }
}
</script>