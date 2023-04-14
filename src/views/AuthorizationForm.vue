<script setup>
import { useUserStore } from '@/stores/user'

const store = useUserStore()
</script>
<template>
  <div class="autorization">
    <div class="autorization-form-wrapper">
      <div class="autorization-form">
        <div class="autorization-form-inner">
          <div class="autorization-form__header af-header">
            <h2 class="af-header__title">Авторизация</h2>
          </div>
          <div class="autorization-form__login af-login">
            <label for="af-login__input" class="af-login__title af-title">Логин</label>
            <input type="text" class="af-login__input autorization-form__input" id="af-login__input"
              placeholder="Введите Логин" v-model="authorizationData.login">
          </div>
          <div class="autorization-form__password af-password">
            <label for="af-password__input">Пароль</label>
            <input type="password" class="af-password__input autorization-form__input" id="af-password__input"
              placeholder="Введите пароль" v-model="authorizationData.password">
          </div>
          <div class="autorization-form__agree af-agree">
            <input type="checkbox" class="af-agree__checkbox" id="af-agree__checkbox" checked>
            <label for="af-agree__checkbox"></label>
            <p class="af-agree__text">Я согласен c договором оферты</p>
          </div>
          <div class="autorization-form__footer af-footer">
            <button class="af-footer__btn" @click.prevent="store.authorization(this.authorizationData)">Войти</button>
            <p class="af-footer__text">Нет аккаунта? <span class="af-footer__sign-in">Зарегистрироваться</span></p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>

export default {
  data() {
    return {
      authorizationData: {
        login: "",
        password: ""
      }
    }
  },
  methods: {
    hi() {
      console.log(this.authorizationData)
    }
  },
  mounted() {
  },
}
</script>
<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;600;700&display=swap");

.autorization {
  background-image: url("@/assets/autorization-bg.jpg");
  height: 100vh;
  width: 100vw;
}

.autorization-form-wrapper {
  height: 100%;
  width: 100%;
  background: rgba(0, 0, 0, 0.8);
  display: flex;
  justify-content: center;
  align-items: center;
}

.autorization-form {
  background-color: #fff;
  padding: 30px;
  width: 440px;
  font-family: Montserrat, sans-serif;

  &__header {
    margin: 0 0 30px;
  }

  &__login,
  &__password {
    padding: 13px 9px;
  }

  &__password {
    margin-bottom: 3rem;
  }

  &__agree {
    margin-bottom: 2rem;
  }

  &__input {
    appearance: none;
    background: #fff;
    border: 0.1rem solid #e1e1e3;
    border-radius: 0.3rem;
    box-shadow: none;
    color: #222;
    font-size: 1.4rem;
    font-weight: 500;
    line-height: 1.1;
    outline: none;
    padding: 1rem 1.3rem;
    transition: all .3s;
    width: 100%;
    font-family: Montserrat, sans-serif;

  }
}

.af {

  &-header {
    &__title {
      color: #000;
      font-size: 1.6rem;
      font-weight: 700;
      line-height: 1.4;
      margin-bottom: 3rem;
      text-transform: uppercase;
    }
  }

  &-login {
    width: 100%;

    &__title {
      color: #000;
      font-size: 1.4rem;
      font-weight: 500;
      padding: 0;
      margin-bottom: 5px;
      display: block;
    }
  }

  &-agree {
    display: flex;

    &__checkbox {
      position: absolute;
      z-index: -1;
      opacity: 0;
    }

    &__checkbox+label {
      position: relative;
      border: 1px solid #2dc574;
      border-radius: 0.2rem;
      height: 1.8rem;
      width: 1.8rem;
      cursor: pointer;
      margin-right: 10px;
    }

    &__checkbox:checked+label {
      background: #2dc574 url("@/assets/icons/checked.svg") 50% 30% no-repeat;
    }

    &__text {
      font-size: 1.4rem;
      font-weight: 500;
    }
  }

  &-footer {
    text-align: center;

    &__btn {
      width: 100%;
      background: #2dc574;
      border: 0.1rem solid transparent;
      border-radius: 0.4rem;
      color: #fff;
      cursor: pointer;
      display: inline-block;
      font-family: inherit;
      font-size: 1.3rem;
      font-weight: 600;
      line-height: 1.1;
      outline: none;
      padding: 1.3rem 2rem;
      text-align: center;
      transition: all .3s;
      user-select: none;
      white-space: nowrap;
      margin-bottom: 15px;

      &:hover {
        background: #26a763;
      }

      &:active {
        background: #229457;
      }
    }

    &__text {
      font-size: 1.4rem;
      font-weight: 500;
    }
  }
}
</style>